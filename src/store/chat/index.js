import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    profileSrc: '',
  }
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    chatUser(state, action) {
      const { id, firstName, lastName, email, profileSrc } = action.payload

      state.user = {
        id,
        firstName,
        lastName,
        email,
        profileSrc,
      }
    },
    leave() {
      return initialState
    }
  }
})

export const { chatUser, leave } = chatSlice.actions

export default chatSlice.reducer
