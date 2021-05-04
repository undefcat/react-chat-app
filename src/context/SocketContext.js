import io from 'socket.io-client'
import { createContext } from 'react'

export const socket = io.connect()
export default createContext(socket)
