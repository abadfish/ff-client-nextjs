import { useState, useReducer } from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { Content } from './index'
import { stateAbbreviations } from './api/accounts'

export async function getAccountsData() {
  const res = await fetch('http://localhost:3001/api/accounts')
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


const Buy = ({allAccountsData}) => {

  const [ filter, dispatchFilter ] = useReducer(filterReducer, 'ALL')
  const [ province, setProvince ] = useState('')

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

  const accountList = filteredAccounts.map((a, i) => (
    <AccountCard key={i}>
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
              <span key={i} onClick={() => chooseProvince(s)}>{s}</span>
            ))} <span onClick={()=> chooseProvince('ALL')}>ALL</span>
          </StateList>
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
  span {
    padding: 1rem;
    cursor: pointer;
    font-family: 'Sorts Mill Goudy', serif;
    font-weight: bold;
    font-size: 0.9em;
    color: #242e62;
    transition: transform 200ms;
    &:hover {
      /* font-size: 0.9em; */
      color: #739ac5;
    }
  }
`

const AccountsPage = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
`
const AccountCard = styled.div `
  background-color: #f7f7f7;
  width: 260px;
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

`
const Website = styled.div `
  padding-top: 0.5rem;
  span {
    font-size: 0.8em;
  }
`
