import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Task</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/todolist">TodoList</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/form1" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown link
                        </a>

                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/form1">Form1</Link>
                            <Link className="dropdown-item" to="/signup2">SignUp2</Link>
                            <Link className="dropdown-item" to="/signup3">SignUp3</Link>
                            <Link className="dropdown-item" to="/radiobtn">RadioBtn</Link>
                            <Link className="dropdown-item" to="/selectoption">SelectOption</Link>
                            <Link className="dropdown-item" to="/checkbox1">checkBox</Link>
                            <Link className="dropdown-item" to="/file">File</Link>
                            <Link className="dropdown-item" to="/form2">Form2</Link>
                            <Link className="dropdown-item" to="/Date1">Date</Link>
                        </div>
                    </li>
                   
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar