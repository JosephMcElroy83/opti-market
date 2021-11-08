import { Link } from "react-router-dom"

export default function HamMenu() {
  return (
    <div className="ham-menu">
      <Link className="ham-menu-link" to="/new">New Product</Link>
      {/* <Link to="/product-overview">overview</Link> */}
    </div>
  )
}
