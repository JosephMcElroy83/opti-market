import { Link } from "react-router-dom"

export default function HamMenu() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/new">New Product</Link>
      <Link to="/product-overview">overview</Link>
    </div>
  )
}
