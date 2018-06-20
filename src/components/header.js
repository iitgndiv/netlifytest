import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled from "styled-components";
import logo from "../images/logo.png";

const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 1.45rem;
  height: 60vh;
  overflow: hidden;
  position: relative;
  height: 70vh;
  h1 {
    img {
      height: 80px;
    }
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
  display:flex;
  justify-content:space-between;
`;
  
// const Billboard = styled(Img)`
//   position:absolute;
//   left=0;
//   top=0;
//   width=100%;
//   height=100%
// `;

const Header = ({ siteTitle,desc,data}) => (
  <HeaderWrapper>
    <HeaderContainer>
     
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
           <img src={logo}  />
            {siteTitle}
            <i><h6>.................................................................................................{desc}</h6></i>
          </Link>
        </h1>
      </div>
     
      <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page-2">About</Link>
        </li>
      </ul>
      </nav>
      </HeaderContainer>
    <Img 
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        opacity:0.3,
      }}
    sizes={data.background3.sizes} />
  </HeaderWrapper>
  
)

export default Header


