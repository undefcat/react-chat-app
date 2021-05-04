function StatusDot({ isLogin }) {
  const className = isLogin
    ? 'status-dot'
    : 'status-dot offline'

  return (
    <span className={className}><i className="fas fa-circle" /></span>
  )
}

export default StatusDot
