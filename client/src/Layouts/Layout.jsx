import { Link } from 'react-router-dom'
import HamMenu from '../Components/HamMenu.jsx'
import '../styling/Layout.css'

export default function Layout(props) {
  const { children, currentUser, handleLogout } = props

  return (
    <div>
      <header>
        <Link className="app-title-link" to="/">
        <h1 className="app-title">Opti-Market</h1>
        </Link>
        {currentUser ? (
          <div className="username">
            <div className="logged-in">
            <p className="tags"><span id="span-logged-in">Logged in as:</span> {currentUser.username}</p>
            </div>
            <button className="btn" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
            <div className="login-register">
              <Link className="login-register-link" to='/login'>Login/Register</Link>
            </div>
        )}
        {currentUser && (
          <div className="ham-menu">
            <HamMenu />
          </div>
        )}
      </header>
      {children}
    </div>
  )
}
