export const usersSelector = state => {
  const query = state.users.filter.query

  if (query === '') {
    return state.users.list
  }

  return state.users.list.filter(user => {
    const { firstName, lastName } = user
    const name = `${firstName} ${lastName}`

    return name.indexOf(query) >= 0
  })
}
