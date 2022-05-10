import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from './services/PrivateRoute'
import { AuthProvider } from './context/AuthContext'

import HomePage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import Header from './components/Header'

function App() {
  return (
    <div className='App'>
      <Router>
        <AuthProvider>
          <Header />
          <PrivateRoute components={HomePage} path='/' exact />
          <Route component={LoginPage} path='/login' />
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App