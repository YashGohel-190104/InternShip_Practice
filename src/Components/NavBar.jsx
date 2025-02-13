import 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link class="nav-link" to="/home">Home </Link>
      </li>
      <li className="nav-item">
        <Link class="nav-link" to="/movie">Movie</Link>
      </li>
      <li className="nav-item">
        <Link class="nav-link" to="/formdemo1">Form Demo 1</Link>
      </li>
      <li className="nav-item">
        <Link class="nav-link" to="/formdemo2">Form Demo 2</Link>
      </li>
      <li className="nav-item">
        <Link class="nav-link" to="/formdemo3">Form Demo 3</Link>
      </li>
      <li className="nav-item">
        <Link class="nav-link" to="/formdemo4">Form Demo 4</Link>
      </li>
      <li className="nav-item">
        <Link class="nav-link" to="/formdemo5">Form Demo 5</Link>
      </li>
      <li className="nav-item">
        <Link class="nav-link" to="/task">Task</Link>
      </li>
      <li className="nav-item">
        <Link class="nav-link" to="/loginform">Login form</Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}
