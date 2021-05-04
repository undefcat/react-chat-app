import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { unwrapResult } from '@reduxjs/toolkit'
import { startChat } from '../../../store/chat/thunk'

import StatusDot from './StatusDot'

function User({ id, firstName, lastName, isLogin, profileSrc, lastMessage }) {
  const dispatch = useDispatch()
  const history = useHistory()
  const [pending, setPending] = useState(false)
  const name = `${firstName} ${lastName}`

  const handleStartChat = useCallback(() => {
    if (!isLogin) {
      alert('로그인한 사용자가 아닙니다.')
      return
    }

    setPending(true)

    dispatch(startChat({ id }))
      .then(unwrapResult)
      .then(() => {
        setPending(false)

        history.push('/chat')
      })
      .catch(err => {
        setPending(false)
      })
  }, [isLogin])

  return (
    <a href="#" onClick={handleStartChat}>
      <div className="content">
        <img src={profileSrc} alt={name} />
        <div className="details">
          <span>{name}</span>
          <p>{lastMessage}</p>
        </div>
      </div>
      <StatusDot isLogin={isLogin} />
    </a>
  )
}

export default User
