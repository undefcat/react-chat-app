function Join() {
  return (
    <section className="form signup">
      <header>Realtime Chat App</header>
      <form action="#" method="POST" encType="multipart/form-data" autoComplete="off">
        {/* display 조절로 에러메세지 출력 */}
        <div className="error-text" style={{ display: 'none' }} />
        <div className="name-details">
          <div className="field input">
            <label>First Name</label>
            <input type="text" name="fname" placeholder="First name" required />
          </div>
          <div className="field input">
            <label>Last Name</label>
            <input type="text" name="lname" placeholder="Last name" required />
          </div>
        </div>
        <div className="field input">
          <label>Email Address</label>
          <input type="text" name="email" placeholder="Enter your email" required />
        </div>
        <div className="field input">
          <label>Password</label>
          <input type="password" name="password" placeholder="Enter new password" required />
            {/* toggle .active 로 비밀번호 보이기/안보이기 조절 */}
            <i className="fas fa-eye" />
        </div>
        <div className="field image">
          <label>Select Image</label>
          <input type="file" name="image" accept="image/x-png,image/gif,image/jpeg,image/jpg" required />
        </div>
        <div className="field button">
          <input type="submit" name="submit" value="Continue to Chat" />
        </div>
      </form>
      <div className="link">Already signed up? <a href="login.php">Login now</a></div>
    </section>
  )
}

export default Join
