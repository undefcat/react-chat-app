import { useState, useEffect } from 'react'

function PasswordInput({ onChange }) {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const inputPasswordType = showPassword ? 'text' : 'password'
  const eyeClassName = showPassword ? 'fas fa-eye active' : 'fas fa-eye'

  useEffect(() => {
    onChange(password)
  }, [password])

  return (
    <div className="field input">
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        onInput={e => setPassword(e.target.value)}
        placeholder="Enter your password"
        required
        type={inputPasswordType}
        value={password}
      />
      <i
        className={eyeClassName}
        onClick={() => setShowPassword(!showPassword)}
      />
    </div>
  )
}

PasswordInput.defaultProps = {
  onChange: () => '',
}

export default PasswordInput
