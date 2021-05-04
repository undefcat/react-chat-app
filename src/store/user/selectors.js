export const isLoginSelector = state => state.user.id !== 0
export const userSelector = state => {
  const { firstName, lastName, profileSrc } = state.user

  return {
    firstName,
    lastName,
    profileSrc,
  }
}
