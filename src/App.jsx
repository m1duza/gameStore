import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Games from "./Games";
import Home from "./Home";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function App() {
  const [activeLine, setActiveLine] = useState(null)
  const [toggleHovered, setToggleHovered] = useState(null)
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    setActiveLine("games");
  }, []); 

  
  const handleClick = (section) => {
    setActiveLine(section); 
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);
  return (
    
    <BrowserRouter>
    <div className="header_logo"></div>
    <header className="header"
    
    style={{
      
      
      position: "fixed",
    }}
    
    >
    <div className="line_bottom"
    style={{
      opacity: scrolled ? 1 : 0,
      transition: "opacity 0.3s ease-in-out",
    }}></div>
      <nav className="header_nav">
        <ul className="header_ul">
          <li onMouseEnter={() => setToggleHovered('games')} onMouseLeave={() => setToggleHovered(null)} onClick={() => handleClick("games")}  id="link-games" className="header_li">
              <Link style={{
              color: activeLine === 'games' || toggleHovered === 'games' ? '#343434' : '#545454',
            }} to="/">
              Games
              </Link>
            <div className="header_line" 
              style={{
                opacity: activeLine === 'games' || toggleHovered === 'games' ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out',
                
                
              }}>
            </div>
          </li>

          <li onMouseEnter={() => setToggleHovered('assets')} onMouseLeave={() => setToggleHovered(null)} onClick={() => handleClick("assets")}  id="link-assets" className="header_li"
            >
              <Link 
              style={{
                color: activeLine === 'assets' || toggleHovered === 'assets' ? '#343434' : '#545454',
              }}
               to="/about">Assets</Link><div className="header_line"
          style={{
            opacity: activeLine === "assets" || toggleHovered === 'assets' ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
            
          }}>

          </div>
          </li>
          <li className="header_li">Tools</li>
          <li className="header_li">Achievments</li>
        </ul>
        
      </nav>
    </header>
      <Routes>
        <Route path="/" element={<Games />} />
        <Route path="/about" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
