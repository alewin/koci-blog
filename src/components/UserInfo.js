import React, { Component } from 'react'
import koci from '../../content/images/avatar/koci-avatar.jpeg'
import kofi from '../../content/thumbnails/kofi.png'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={koci} alt="Alessio Koci" />
            </div>
            <div>
              <p>
                I’m Alssio Koci. I started writing this blog,
                to document and share some interesting ideas about web development.
              </p>
              <span>The blog is completely free, but if you liked the article and would like to support me, you can offer me a coffee</span>
              <div className="flex">
                <a
                  href="https://ko-fi.com/alessiokoci"
                  className="donate-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={kofi} className="coffee-icon" alt="Coffee icon" />
                  Buy me a coffee
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
