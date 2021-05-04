import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { Link, useHistory } from 'react-router-dom'
import { doLogin } from '../../store/user/thunk'
import { isLoginSelector } from '../../store/user/selectors'
import EmailInput from '../../components/EmailInput'
import PasswordInput from '../../components/PasswordInput'

function Login() {
  const dispatch = useDispatch()
  const history = useHistory()
  const isLogin = useSelector(isLoginSelector)

  useEffect(() => {
    if (isLogin) {
      history.push('/')
    }

  }, [isLogin])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isPending, setPending] = useState(false)

  function requestLogin() {
    if (email.trim() === '') {
      setErrorMessage('이메일을 입력해주세요.')
      return
    }

    if (password.trim() === '') {
      setErrorMessage('비밀번호를 입력해주세요.')
      return
    }

    setPending(true)

    dispatch(doLogin({ email, password }))
      .then(unwrapResult)
      .catch(() => {
        setPending(false)

        setErrorMessage('로그인 실패')
      })

  }

  return (
    <section className="form login">
      <header>Realtime Chat App</header>
      <form action="#" method="POST" autoComplete="off" onSubmit={e => e.preventDefault()}>
        {/* display 조절로 에러메세지 출력 */}
        <div
          className="error-text
          " style={{ display: errorMessage !== '' ? 'block' : 'none' }}
        >
          {errorMessage}
        </div>

        <EmailInput onChange={val => setEmail(val)} />

        <PasswordInput onChange={val => setPassword(val)}/>

        <div className="field button">
          <input
            disabled={isPending}
            name="submit"
            type="submit"
            value={isPending ? 'Login...' : 'Continue to Chat'}
            onClick={requestLogin}
          />
        </div>
      </form>
      <div className="link">Not yet signed up? <Link to="/join">Signup now</Link></div>
    </section>
  )
}

export default Login
