import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SocketContext from '../../context/SocketContext'
import { setUsers } from '../../store/users'
import { usersSelector } from '../../store/users/selectors'
import User from './components/User'

function UserList() {
  const dispatch = useDispatch()
  const socket = useContext(SocketContext)

  useEffect(() => {
    socket.on('set users', users => {
      dispatch(setUsers(users))
    })

    return () => {
      socket.removeAllListeners('change users')
    }

  }, [dispatch, socket])

  const users = useSelector(usersSelector)

  const Users = users.map(user => <User key={user.id} {...user} />)

  return (
    <div className="users-list">
      {Users}
    </div>
  )
}

export default UserList
