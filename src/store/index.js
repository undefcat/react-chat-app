import { configureStore } from '@reduxjs/toolkit'
import users from './users'
import user from './user'
import chat from './chat'

export default configureStore({
  reducer: {
    users,
    user,
    chat,
  },
})
