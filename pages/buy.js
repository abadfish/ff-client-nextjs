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
      <div>{a.company}</div>
      <div>{a.state}</div>
    </AccountCard>
  ))

    return (
        <Layout>
          <StateList>
            { stateAbbreviations.map((s, i) => (
              <span key={i} onClick={() => chooseProvince(s)}>{s}</span>
            ))}
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
  height: 200px;
  display: flex;
  padding: 3rem;
  flex-wrap: wrap;
  span {
    padding: 1rem;
  }
`

const AccountsPage = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
`
const AccountCard = styled.div `
  width: 200px;
  height: 200px;
`
