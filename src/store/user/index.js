import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: 0,
  firstName: 'Guest',
  lastName: '',
  email: '',
  profileSrc: 'https://via.placeholder.com/150',
  token: '',
}

const userSlice = createSlice({
  name: 'user',

  initialState,

  reducers: {
    login(state, action) {
      const { id, firstName, lastName, email, profileSrc, token } = action.payload

      return {
        id,
        firstName,
        lastName,
        email,
        profileSrc,
        token,
      }
    },

    logout() {
      return initialState
    }
  },
})

export const { login, logout } = userSlice.actions


export default userSlice.reducer
