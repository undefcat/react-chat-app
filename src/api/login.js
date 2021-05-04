import axios from 'axios'

export async function login(email, password) {
  try {
    const res = await axios.post('/api/login', {
      email,
      password
    })

    return res.data

  } catch (err) {
    throw err
  }
}
