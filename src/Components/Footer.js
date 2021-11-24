import React from 'react';
import { AiFillTwitterSquare, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../sectionStyles/nav.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="copyright-names">
        <div className="creators">
          <p>
            Author:
            <br />
            Tufoin
          </p>
          <div className="icons">
            <Link to={{ pathname: 'https://github.com/tufoinnkuo10' }} target="_blank" rel="noopener noreferrer"><AiFillTwitterSquare className="git fab fa-github-square" /></Link>
            <Link to={{ pathname: 'https://twitter.com/itztenten' }} target="_blank" rel="noopener noreferrer"><AiFillGithub className="twitter fab fa-twitter-square" /></Link>
            <Link to={{ pathname: 'https://www.linkedin.com/in/tufoin-nkuo/' }} target="_blank" rel="noopener noreferrer"><AiFillLinkedin className="linkedin fab fa-linkedin" /></Link>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <strong>&#169; Tufoin-Nkuo </strong>
  </footer>
);

export default Footer;
