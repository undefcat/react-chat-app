import axios from 'axios'

export async function join(user) {
  const formData = new FormData()

  for (let key in user) {
    if (!user.hasOwnProperty(key)) {
      continue
    }

    formData.append(key, user[key])
  }

  try {
    const res = await axios.post(
      '/api/join',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )

    return true

  } catch (err) {

    throw err
  }
}
