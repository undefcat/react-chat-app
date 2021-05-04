import { useState } from 'react'

function TypingArea() {
  const [input, setInput] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <form action="#" className="typing-area" onSubmit={handleSubmit}>
      <input
        autoComplete="off"
        autoFocus
        className="input-field"
        type="text"
        name="message"
        onInput={e => setInput(e.target.value)}
        placeholder="Type a message here..."
        value={input}
      />
      <button className={input ? 'active' : ''}>
        <i className="fab fa-telegram-plane" />
      </button>
    </form>
  )
}

export default TypingArea
