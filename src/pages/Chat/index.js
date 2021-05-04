import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { leave } from '../../store/chat';
import InComing from './components/InComing'
import OutGoing from './components/OutGoing'
import TypingArea from './components/TypingArea'

function Chat() {
  const dispatch = useDispatch()
  const history = useHistory()
  const leaveRoom = useCallback(() => {
    dispatch(leave())
    history.replace('/')
  }, [dispatch, history])

  return (
    <section className="chat-area">
      <header>
        <a
          className="back-icon"
          href="javascript:;"
          onClick={leaveRoom}
        >
          <i className="fas fa-arrow-left" />
        </a>
        <img src="https://via.placeholder.com/150" alt="" />
          <div className="details">
            <span>Name</span>
            <p>Active Now</p>
          </div>
      </header>
      <div className="chat-box">
        <InComing />
        <OutGoing />
      </div>
      <TypingArea />
    </section>
  )
}

export default Chat
