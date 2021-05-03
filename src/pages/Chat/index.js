import InComing from './components/InComing'
import OutGoing from './components/OutGoing'
import TypingArea from './components/TypingArea'

function Chat() {
  return (
    <section className="chat-area">
      <header>
        <a href="javascript:;" className="back-icon"><i className="fas fa-arrow-left" /></a>
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
