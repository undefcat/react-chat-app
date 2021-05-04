import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logout } from '../../store/user'
import { isLoginSelector } from '../../store/user/selectors'

import MyProfile from './MyProfile'
import UserList from './UserList'
import SearchUser from './SearchUser'

function Main() {
  const dispatch = useDispatch()
  const isLogin = useSelector(isLoginSelector)
  const history = useHistory()

  useEffect(() => {
    if (!isLogin) {
      history.push('/login')
    }
  }, [isLogin])


  return (
    <section className="users">
      <header>
        <MyProfile />
        <a
          className="logout"
          href="#"
          onClick={() => dispatch(logout()) }
        >Logout</a>
      </header>
      <SearchUser />
      <UserList />
    </section>
  )
}

export default Main
