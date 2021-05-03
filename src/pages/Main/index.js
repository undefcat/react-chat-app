function Main() {
  return (
    <section className="users">
      <header>
        <div className="content">
          <img src="https://via.placeholder.com/150" alt="" />
            <div className="details">
              <span>User Name</span>
              <p>Status</p>
            </div>
        </div>
        <a href="#" className="logout">Logout</a>
      </header>
      <div className="search">
        <span className="text">Select an user to start chat</span>
        <input type="text" placeholder="Enter name to search..." />
          <button><i className="fas fa-search" /></button>
      </div>
      <div className="users-list">
        <a href="#">
          <div className="content">
            <img src="https://via.placeholder.com/150" alt="" />
              <div className="details">
                <span>Tae Hoon Kim</span>
                <p>Hi</p>
              </div>
          </div>
          <span className="status-dot offline"><i className="fas fa-circle" /></span>
        </a>
      </div>
    </section>
  )
}

export default Main
