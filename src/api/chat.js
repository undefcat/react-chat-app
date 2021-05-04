export function chat(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = {
        id,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@doe.com',
        profileSrc: 'https://via.placeholder.com/150',
      }

      resolve(user)

    }, 300)
  })
}
