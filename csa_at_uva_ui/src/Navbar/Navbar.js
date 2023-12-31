import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <header className="navbar-header">
        <nav>
            <a href = "/"><img src = "Official-CSA-Square-Logo.png" alt = "Official CSA Logo" className = "logo" href = "/"/></a>
            <ul className = "navbar-list">
                <li>
                    <a href = "/">Home</a>
                    </li>
                    <li> <a href = "/events">Events</a></li>
                    <li> <a href = "/officers">Officers</a></li>
                   
                    <li> <a href = "/">Families</a></li>
                   
                    <li> <a href = "/">Alumni</a></li>
                   
                    <li><a href = "/">Gallery</a></li>
                    
            </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
