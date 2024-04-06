import React, { useEffect, useState } from 'react'
import Button from '../ui/Button/Button'
import { NavLink } from 'react-router-dom';
import "./navigation.scss"

function Navigation({activeLink, setActiveLink}) {

  const [underlineStyle, setUnderlineStyle] = useState({}); // State to manage underline style dynamically

  useEffect(() => {
    if (activeLink) {
      const activeElement = document.querySelector('.active');
      if (activeElement) {
        const { offsetLeft, offsetWidth } = activeElement;
        setUnderlineStyle({
          width: `${offsetWidth}px`,
          transform: `translateX(${offsetLeft}px)`
        });
      }
    }
  }, [activeLink]);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header>
      <nav>
        <h4 className='logo'>Examy</h4>
        <ul className="nav-wrapper">
          <li><NavLink className="nav-link" to={'/'} onClick={()=> handleClick('home')} activeClassName="active">Home</NavLink></li>
          <li><NavLink className="nav-link" to={'/about'} onClick={()=> handleClick('about')} activeClassName="active">About</NavLink></li>
          <li><NavLink className="nav-link" to={'/blog'} onClick={()=> handleClick('blog')} activeClassName="active">Blog</NavLink></li>
          <li><NavLink className="nav-link" to={'/price'} onClick={()=> handleClick('price')} activeClassName="active">Pricing</NavLink></li>
          {activeLink && <div className="underline" 
            style={underlineStyle}></div>}
        </ul>
        <Button label={'Contact Us'} onClick={() => { }} type={'outlined-dark'}/>
      </nav>
    </header>
  )
}

export default Navigation