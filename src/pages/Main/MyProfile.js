import { useSelector } from 'react-redux'
import { userSelector } from '../../store/user/selectors'

function MyProfile() {
  const { firstName, lastName, profileSrc } = useSelector(userSelector)
  const name = `${firstName} ${lastName}`

  return (
    <div className="content">
      <img src={profileSrc} alt={name} />
      <div className="details">
        <span>{name}</span>
        <p>Active</p>
      </div>
    </div>
  )
}

export default MyProfile
