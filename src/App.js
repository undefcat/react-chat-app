import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Chat from './pages/Chat'
import Join from './pages/Join'
import Login from './pages/Login'
import Main from './pages/Main'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/join" exact>
          <Join />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/chat" exact>
          <Chat />
        </Route>
        <Route path="/" exact>
          <Main />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
