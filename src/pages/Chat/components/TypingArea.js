function TypingArea() {
  return (
    <form action="#" className="typing-area">
      <input type="text" className="incoming_id" name="incoming_id" value="" hidden />
        <input type="text" name="message" className="input-field" placeholder="Type a message here..."
               autoComplete="off" />
          <button className="active">
            <i className="fab fa-telegram-plane" />
          </button>
    </form>
  )
}

export default TypingArea
