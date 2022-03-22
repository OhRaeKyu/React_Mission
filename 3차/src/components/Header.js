import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';

function Header() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  });

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };
  return (
    <header className={`header ${show && 'nav_black'}`}>
      <h1>
        <a href="/">
          <span className="a11y-hidden">Netflix</span>
          <img
            alt="Netflix Logo"
            src="//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
          />
        </a>
      </h1>
      <button>
        <span className="a11y-hidden">profile</span>
      </button>
    </header>
  );
}

export default Header;
