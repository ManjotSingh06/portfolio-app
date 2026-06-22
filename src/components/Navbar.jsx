import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => (
  <StyledWrapper>
      <div className="nav">
        <div className="container">
          <Link to="/" className={`btn ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/Contact" className={`btn ${location.pathname === './Contact' ? 'active' : ''}`}>Contact</Link>
          <Link to="/Skills" className={`btn ${location.pathname === './Skills' ? 'active' : ''}`}>Skills</Link>
          <Link to="/Projects" className={`btn ${location.pathname === './Projects' ? 'active' : ''}`}>Projects</Link>
          <Link to="/Resume" className={`btn ${location.pathname === './Resume' ? 'active' : ''}`}>Resume</Link>

          <svg className="outline" overflow="visible" width={500} height={60} viewBox="0 0 500 60" xmlns="http://www.w3.org/2000/svg">
            <rect className="rect" pathLength={100} x={0} y={0} width={500} height={60} fill="transparent" strokeWidth={5} />
          </svg>
        </div>
      </div>
    </StyledWrapper>
  );



const StyledWrapper = styled.div`
 .outline {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .rect {
    stroke-dashoffset: 5;
    stroke-dasharray: 0 0 10 40 10 40;
    transition: 0.5s;
    stroke: #fff;
  }

  .nav {
    position: relative;
    width: fit-content;
    min-width: 500px;
    height: 60px;
    margin: 0 auto;
    margin-top: 2rem;
  }

  .container:hover .outline .rect {
    transition: 999999s;
    /* Must specify these values here as something *different* just so that the transition works properly */
    stroke-dashoffset: 1;
    stroke-dasharray: 0;
  }

  .container {
    position: absolute;
    inset: 0;
    background: #bef6;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0.5em;
    ;
  }

  .btn {
    padding: 0.5em 1.5em;
    color: #fff;
    cursor: pointer;
    transition: 0.1s;
    text-decoration: none;
  }

  .btn:hover {
    background: #fff3;
  }

  .btn:nth-child(1):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 0.8 8 77.2 8 10.7;
  }

  .btn:nth-child(2):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 8.6 9.5 58.3 9.5 31.6;
  }

  .btn:nth-child(3):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 17.5 8.5 42.5 8.5 55.5;
  }

  .btn:nth-child(4):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 25.7 8.9 25.2 8.9 76;
  }

  .btn:nth-child(5):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 35.5 8.5 6.5 8.5 78.8;
  }

  .btn:hover ~ .outline .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 0 10 40 10 40;
    transition: 0.5s !important;
  }
    
  .btn.active{
  fold-weight:bold;
  font-color:#64ffda
  };`

export default Navbar;