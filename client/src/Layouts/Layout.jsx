import { Link } from 'react-router-dom'
import HamMenu from '../Components/HamMenu.jsx'

export default function Layout(props) {
  const { children, currentUser, handleLogout } = props

  return (
    <div>
      <header>
        <Link to="/">
        <h1>Opti-Market</h1>
        </Link>
        {currentUser ? (
          <div>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
            <Link to='/login'>Login/Register</Link>
        )}
        <hr />
        {currentUser && (
          <div>
            <HamMenu />
          </div>
        )}
      </header>
      {children}
    </div>
  )
}
