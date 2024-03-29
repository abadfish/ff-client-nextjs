// 'use client'
import { useState, useReducer, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Button from 'muicss/lib/react/button'
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
		getAccountsData().then(
			response => setAllAccountsData(response),
		)
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

  const handleShowLocation = (a, i)=> {
    console.log(window.innerHeight)
    setSelectedAccount(a)
  }

  const accountList = filteredAccounts?.map((a, i) => (
    <AccountCard key={i} id={i} onClick={() => handleShowLocation(a, i)}>
      <div><h3>{a.company}</h3></div>
      <div>{a.address1}</div>
      <div>{a.city}, {a.state} {a.zip}</div>
      <div>{a.phone}</div>
      <Website><span>{a.website}</span></Website>
    </AccountCard>
  ))

  const scrollToAccount = id => {
    let el = document.getElementById(id)
    let elRect = el.getBoundingClientRect().top
    console.log(elRect)
    // document.querySelector(id).scrollIntoView({behavior: 'smooth', block:'end'})
  }

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

  return (
      <Layout>
        { selectedAccount ?
          <Modal onClose={ () => setSelectedAccount(null) }>
            <Map account={ selectedAccount }/>
            <Button onClick={ () => setSelectedAccount(null) }>Close</Button>
          </Modal>
          :
          null
        }
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

        <AccountsPage ref={ accountsRef } id='accounts'>
          { accountList }
        </AccountsPage>
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
