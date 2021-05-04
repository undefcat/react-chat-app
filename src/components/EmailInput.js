import { useState, useEffect } from 'react'

function EmailInput({ onChange }) {
  const [email, setEmail] = useState('')
  useEffect(() => {
    onChange(email)
  }, [email])

  return (
    <div className="field input">
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        onInput={e => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        type="text"
        value={email}
      />
    </div>
  )
}

EmailInput.defaultProps = {
  onChange: () => '',
}

export default EmailInput
