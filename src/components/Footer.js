import React, { Component } from 'react'
import { Link } from 'gatsby'
import netlify from '../../content/images/logo/netlify.png'
import gatsby from '../../content/thumbnails/gatsby.png'
import github from '../../content/images/logo/github.png'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <div>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            RSS
          </a>
          <Link to="/contact">Contact</Link>
          <Link to="/credits">Credits</Link>
          <a href="https://github.com/alewin" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          {/* 
          <a href="https://ko-fi.com/alessiokoci" target="_blank" rel="noopener noreferrer">
            Buy me a coffe
          </a>
          */}
        </div>
        <div>
          <a href="https://github.com/alewin" title="Open-source on GitHub">
            <img
              src={github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="GitHub"
            />
          </a>
          <a href="https://www.netlify.com/" title="Hosted by Netlify">
            <img
              src={netlify}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="Netlify"
            />
          </a>
          <a href="https://www.gatsbyjs.org/" title="Built with Gatsby">
            <img
              src={gatsby}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="Gatsby"
            />
          </a>
        </div>
      </footer>
    )
  }
}
