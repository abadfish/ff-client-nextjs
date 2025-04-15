'use client'
import { useState, useReducer, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { 
  GoogleMap, 
  useJsApiLoader,
  Marker, 
  InfoWindow,
  Autocomplete
} from '@react-google-maps/api';
import Button from 'muicss/lib/react/button'
import Input from 'muicss/lib/react/input'

import Layout from '../components/Layout'
import Modal from '../components/Modal'
import { server, mapsKey } from '../config'


const getAccountsData = async () => {
	try {
		const res = await fetch(`${ server }/accounts`, { next: { revalidate: 3600 } })
		const accounts = await res.json()
		return accounts
	} catch (err) {
		console.log(err)
		return []
	}
}

export const filterReducer = (state, action) => {
  switch(action.type) {
    case 'SHOW_ALL':
      return 'ALL';
    case 'SHOW_STATE':
      return action.payload;
    default:
      throw new Error()
  }
}

const Map = ({ account }) => {
  const streetAdd = `${account.address1.split(" ").join("+")},${account.city},${account.state}`
  return (
    <MapDiv>
      <div>
        <h2>{ account.company }</h2>
        <span>{ account.address1 }</span><br />
        <span>{ account.city }, { account.state } { account.zip }</span><br />
        <span>{ account.phone }</span>
      </div>
      <iframe title={ account.company } src={`https://www.google.com/maps/embed/v1/place?key=${ mapsKey }&q=${ streetAdd }`} />
    </MapDiv>
  )
}

const Buy = () => {

  const [allAccountsData, setAllAccountsData] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
  

	useEffect(() => {
    setLoading(true)
		getAccountsData().then(
			response => setAllAccountsData(response),
		)
    setLoading(false)
	},[])
	
  const [ filter, dispatchFilter ] = useReducer(filterReducer, 'ALL')
  const [ province, setProvince ] = useState('')
  const [ selectedAccount, setSelectedAccount ] = useState(null)

  const accountsRef = useRef()

  const chooseProvince = e => {
    setProvince(e)
    dispatchFilter({ type: 'SHOW_STATE', payload: e })
    scrollToSection('accounts')
  }

  const filteredAccounts = allAccountsData?.filter(account => {
    if (filter === 'ALL') {
      return true
    }
    if (filter === province && account.state === province) {
      return true
    }
    return false
  })

  const activeProvince = (s) => {
    if ( filter === s ) {
      return 'underline'
    } else {
      return 'none'
    }
  }

  const handleShowLocation = (a, i)=> { setSelectedAccount(a) }

  const accountList = filteredAccounts?.map((a, i) => (
    <AccountCard key={i} id={i} onClick={() => handleShowLocation(a, i)}>
      <div><h3>{a.company}</h3></div>
      <div><span>{a.address1}</span></div>
      <div><span>{a.city}, {a.state} {a.zip}</span></div>
      <div><span>{a.phone}</span></div>
      <Website><span>{a.website}</span></Website>
    </AccountCard>
  ))

  const scrollToSection = section => {
    let el = document.getElementById(section);
    let elOffset = 125;
    let bodyRect = document.body.getBoundingClientRect().top
    let elRect = el.getBoundingClientRect().top
    let elPosition = elRect - bodyRect
    let offsetPosition = bodyRect === 0 ? elPosition - elOffset - 80.51 : elPosition - elOffset
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }

  const stateList = Array.from(new Set(allAccountsData.map(a => a.state)))
  
  const [showGoogleMap, setShowGoogleMap] = useState(true)

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: mapsKey,
    libraries: ['places'],
  })

  const [mapView, setMapView] = useState({
    mapCenter: { lat: 41.4925, lng: -99.9018 },
    zoomLevel: 4,
  })

  const mapRef = useRef();
	const autocompleteRef = useRef();

  const onLoadMap = (map) => {
		mapRef.current = map
	}

	const onLoadAutocomplete = (autocomplete) => {
		autocompleteRef.current = autocomplete
	}

	const handlePlaceChanged = () => {
		const { geometry } = autocompleteRef.current.getPlace();
		const bounds = new window.google.maps.LatLngBounds();
		if (geometry.viewport) {
			bounds.union(geometry.viewport);
		} else {
			bounds.extend(geometry.location);
		}
		mapRef.current.fitBounds(bounds);
    setMapView({
      mapCenter: { lat: geometry.location.lat(), lng: geometry.location.lng() },
      zoomLevel: 9,
    })
	};
  
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const sortedStores = mapView.mapCenter.lat
    ? [...allAccountsData].sort((a, b) => {
        const distanceA = calculateDistance(mapView.mapCenter.lat, mapView.mapCenter.lng, a.latitude, a.longitude);
        const distanceB = calculateDistance(mapView.mapCenter.lat, mapView.mapCenter.lng, b.latitude, b.longitude);
        return distanceA - distanceB;
      })
    : allAccountsData;
  
    const sortedAccountList = sortedStores?.map((a, i) => (
      <AccountCard key={i} id={i} onClick={() => handleShowLocation(a, i)}>
        <div><h3>{a.company}</h3></div>
        <div>{a.address1}</div>
        <div>{a.city}, {a.state} {a.zip}</div>
        <div>{a.phone}</div>
        <Website><span>{a.website}</span></Website>
      </AccountCard>
    ));

  const [selectedStore, setSelectedStore] = useState(null);

  if (!isLoaded || loading) return <div>Loading...</div>;
  if (loadError) return <div>Error loading maps</div>;
  if (error) return <div>Error loading accounts</div>;

  return (
    <Layout>
      <MapToggle>
        <MapsButton 
          showGoogleMap={showGoogleMap} 
          onClick={ () => setShowGoogleMap(true) }
        >Search map</MapsButton> |
        <StateButton 
          showGoogleMap={showGoogleMap} 
          onClick={ () => setShowGoogleMap(false) }
        >Search by state</StateButton>
      </MapToggle>
      {
        showGoogleMap && allAccountsData.length > 0 ?
        <div>
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '400px' }}
            center={mapView.mapCenter}
            zoom={mapView.zoomLevel}
            onLoad={onLoadMap}
          >
            <Autocomplete
              onLoad={onLoadAutocomplete}
              onPlaceChanged={handlePlaceChanged}
            >
              <MapSearchInput
                placeholder="🔍  Find Farriers' Fix near you"
                type="text"
              />
            </Autocomplete>
            {allAccountsData?.map((store) => (
              <Marker
                key={store.id}
                position={{ lat: parseFloat(store.latitude), lng: parseFloat(store.longitude) }}
                title={store.company}
                onClick={() => setSelectedStore(store)}
              />
            ))}
            {selectedStore && (
              <InfoWindow
                position={{ lat: parseFloat(selectedStore.latitude), lng: parseFloat(selectedStore.longitude) }}
                onCloseClick={() => setSelectedStore(null)}
              >
                <div>
                  <h3>{selectedStore.company}</h3>
                  <p>{selectedStore.address1}</p>
                  <p>{selectedStore.city}, {selectedStore.state} {selectedStore.zip}</p>
                </div>
              </InfoWindow>
            )}
            { selectedAccount ?
              <Modal onClose={ () => setSelectedAccount(null) }>
                <Map account={ selectedAccount }/>
                <Button onClick={ () => setSelectedAccount(null) }>Close</Button>
              </Modal>
              :
              null
            }
          </GoogleMap>
          <AccountsPage ref={ accountsRef } id='accounts'>
            { sortedAccountList }
          </AccountsPage>
        </div>
        :
        <div>
          <StateList>
            { stateList.map((s, i) => (
              <StateDiv onClick={() => chooseProvince(s)} key={i} activep={activeProvince(s)}>
                <span>{s}</span>
              </StateDiv>
            ))}
            <StateDiv onClick={()=> chooseProvince('ALL')} key={100} activep={activeProvince('ALL')}>
              <span >ALL</span>
            </StateDiv>
          </StateList>
          { selectedAccount ?
            <Modal onClose={ () => setSelectedAccount(null) }>
              <Map account={ selectedAccount }/>
              <Button onClick={ () => setSelectedAccount(null) }>Close</Button>
            </Modal>
            :
            null
          }
          <AccountsPage ref={ accountsRef } id='accounts'>
            { accountList }
          </AccountsPage>
        </div>
      }
    </Layout>
  )
}

export default Buy

const StateList = styled.section `
  background: #f7f7f7;
  width: 100%;
  min-height: 170px;
  display: flex;
  padding: 2rem 3rem;
  flex-wrap: wrap;
  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`
const StateDiv = styled.div `
  padding: 1rem;
  cursor: pointer;
  text-decoration: ${props => props.activep === "underline" ? "underline" : "none"};
  span {
    font-family: 'Sorts Mill Goudy', serif;
    font-weight: bold;
    font-size: 0.9em;
    color: #242e62;
    transition: transform 200ms;
    &:hover {
      font-size: 0.9em;
      color: #739ac5;
    }
  }
  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
  }
`

const AccountsPage = styled.section`
  width: 100%;
  display: inline-grid;
  grid-template-columns: repeat(4, 25%);
  padding: 2rem;
  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 33%);
  }
  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`
const AccountCard = styled.div `
  background-color: #f7f7f7;
  height: 200px;
  padding: 1rem;
  margin: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    color: #242e62;
    margin: 0;
  }
  transition: transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  &:hover {
    cursor: pointer;
    webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
    box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
  }
  @media (max-width: 480px) {
    margin: 1rem 0;
    height: 120px;
    margin: 10px;
    h3 {
      font-size: 1.2em;
    }
    div {
      font-size: 0.9em;
    }
  }
`
const Website = styled.div `
  padding-top: 0.5rem;
  word-wrap: break-word;
  span {
    font-size: 0.8em;
  }
`
const MapDiv = styled.div `
  text-align: center;
  iframe {
    border: none;
  }
  div {
    margin-bottom: 1rem;
  }
`

const MapsButton = styled.button `
  text-decoration: ${props => 
    props.showGoogleMap === true ? "underline" : "none"
  };
`
const MapToggle = styled.div `
  display: flex;
  justify-content: flex-end;
  margin: 0.5rem 0;
  button {
    background: #fff;
    color: #242e62;
    border: none;
    border-radius: 5px;
    padding: 0.2rem 1rem;
    margin: 0 0.2rem;
    font-size: 1em;
    cursor: pointer;
    &:hover {
      background: #739ac5;
    }
  }
`
const StateButton = styled.button `
  text-decoration: ${props => 
    props.showGoogleMap === false ? "underline" : "none"
  };
  
`
const MapSearchInput = styled.input `
  width: 40%;
  height: 40px;
  padding: 0.5rem;
  margin-top: 0.6rem;
  margin-left: 15rem;
  border-radius: 3px;
  border: 1px solid #ccc;
  font-size: 1em;
  position: absolute;
  @media (max-width: 480px) {
    margin-top: 3.5rem;
    margin-left: 0.6rem;
    width: 90%;
  }
`