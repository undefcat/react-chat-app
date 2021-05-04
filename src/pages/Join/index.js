import { useState, useReducer, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import * as joinApi from '../../api/join'
import EmailInput from '../../components/EmailInput'
import PasswordInput from '../../components/PasswordInput'
const defaultInput = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

const inputReducer = (state, action) => ({
  ...state,
  [action.type]: action.payload,
})

function Join() {
  const [input, inputDispatch] = useReducer(inputReducer, defaultInput)

  function handleInput(e) {
    const type = e.target.id
    inputDispatch({
      type,
      payload: e.target.value,
    })
  }

  function handleOnChange(name, val) {
    const type = name
    inputDispatch({
      type,
      payload: val,
    })
  }

  const [isPending, setPending] = useState(false)
  const fileInputEl = useRef(null)
  const history = useHistory()
  function handleSubmit(e) {
    e.preventDefault()

    setPending(true)

    joinApi
      .join({
        ...input,
        profile: fileInputEl.current.files[0],
      })
      .then(() => {
        history.push('/')
      })
      .catch(err => {
        setPending(false)
      })
  }

  return (
    <section className="form signup">
      <header>Realtime Chat App</header>
      <form action="#" method="POST" onSubmit={handleSubmit}>
        {/* display 조절로 에러메세지 출력 */}
        <div className="error-text" style={{ display: 'none' }} />
        <div className="name-details">
          <div className="field input">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              onInput={handleInput}
              placeholder="First name"
              required
              type="text"
              value={input.firstName}
            />
          </div>
          <div className="field input">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              onInput={handleInput}
              type="text"
              placeholder="Last name"
              required
            />
          </div>
        </div>

        <EmailInput onChange={handleOnChange.bind(null, 'email')}/>
        <PasswordInput onChange={handleOnChange.bind(null, 'password')}/>

        <div className="field image">
          <label>Select Image</label>
          <input
            accept="image/x-png,image/gif,image/jpeg,image/jpg"
            name="image"
            ref={fileInputEl}
            required
            type="file"
          />
        </div>
        <div className="field button">
          <input
            type="submit"
            name="submit"
            value={isPending ? 'Wait...' : 'Join'}
          />
        </div>
      </form>
      <div className="link">Already signed up? <Link to="/login">Login now</Link></div>
    </section>
  )
}

export default Join
