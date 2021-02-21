import { useState, useReducer } from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { Content } from './index'
import { server } from '../config'

export async function getAccountsData() {
  const res = await fetch(`${ server }/accounts`)
  const accounts = await res.json()
  return { accounts }
}

export async function getStaticProps() {
  const allAccountsData = await getAccountsData()
  return {
    props: {
      allAccountsData
    }
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
// <iframe id='mini-map' title={props.location.company} src=`https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&q=City+Hall,New+York,NY` />
const Map = (props) => {
  return (
    <div>

    </div>
  )
}

const Buy = ({allAccountsData}) => {

  const [ filter, dispatchFilter ] = useReducer(filterReducer, 'ALL')
  const [ province, setProvince ] = useState('')
  const [ selectedAccount, setSelectedAccount ] = useState(null)

  const chooseProvince = e => {
    setProvince(e)
    console.log(e)
    dispatchFilter({ type: 'SHOW_STATE', payload: e })
  }
  const filteredAccounts = allAccountsData.accounts.filter(account => {
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

  const handleShowLocation = a => {
    setSelectedAccount(a)
  }

  const accountList = filteredAccounts.map((a, i) => (
    <AccountCard key={i} onClick={() => handleShowLocation(a)}>
      <div><h3>{a.company}</h3></div>
      <div>{a.address1}</div>
      <div>{a.city}, {a.state} {a.zip}</div>
      <div>{a.phone}</div>
      <Website><span>{a.website}</span></Website>
    </AccountCard>
  ))

  const stateList = Array.from(new Set(allAccountsData.accounts.map(a => a.state)))
    return (
        <Layout>
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
            <Map location={selectedAccount}/>
            :
            null
          }
          <AccountsPage>
            { accountList }
          </AccountsPage>
        </Layout>
    )
}

export default Buy

const StateList = styled.div `
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

const AccountsPage = styled.div`
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
  /* border: 1px solid #d3d3d3; */
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
