import { createAsyncThunk } from '@reduxjs/toolkit'
import { chatUser } from './index'

import * as chatApi from '../../api/chat'

export const startChat = createAsyncThunk(
  'user/doLogin',
  async ({ id }, { dispatch, rejectedWithValue }) => {
    try {
      const user = await chatApi.chat(id)

      dispatch(chatUser(user))

    } catch (err) {

      return rejectedWithValue(err)
    }
  }
)
