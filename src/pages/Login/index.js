function Login() {
  return (
    <section className="form login">
      <header>Realtime Chat App</header>
      <form action="#" method="POST" encType="multipart/form-data" autoComplete="off">
        {/* display 조절로 에러메세지 출력 */}
        <div className="error-text" />
        <div className="field input">
          <label>Email Address</label>
          <input type="text" name="email" placeholder="Enter your email" required />
        </div>
        <div className="field input">
          <label>Password</label>
          <input type="password" name="password" placeholder="Enter your password" required />
            <i className="fas fa-eye" />
        </div>
        <div className="field button">
          <input type="submit" name="submit" value="Continue to Chat" />
        </div>
      </form>
      <div className="link">Not yet signed up? <a href="#">Signup now</a></div>
    </section>
  )
}

export default Login
