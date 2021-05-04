import { createAsyncThunk } from '@reduxjs/toolkit'
import { login } from './index'

import * as loginApi from '../../api/login'

export const doLogin = createAsyncThunk(
  'user/doLogin',
  async ({ email, password }, { dispatch, rejectedWithValue }) => {
    try {
      const data = await loginApi.login(email, password)

      const { user } = data.data

      dispatch(login(user))

    } catch (err) {

      return rejectedWithValue(err)
    }
  }
)
