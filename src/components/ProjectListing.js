import React, { Component } from 'react'
import GitHubButton from 'react-github-btn'

import reactLogo from '../images/languages/reactjs.png'
import angularLogo from '../images/languages/angularjs.png'
import androidLogo from '../images/languages/android.png'
import nodeLogo from '../images/languages/nodejs.png'
import cLogo from '../images/languages/c.png'

export default class ProjectListing extends Component {
  render() {
    const { projects } = this.props

    const logoMap = {
      React: reactLogo,
      Angular: angularLogo,
      Android: androidLogo,
      Node: nodeLogo,
      C: cLogo,
    }

    return (
      <section className="projects">
        {projects.map(project => (
          <div className="each" key={project.title}>
            <h2>
              <a
                className="project-link"
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-icon">{project.icon}</div>
                <div className="project-title">{project.title}</div>
              </a>
              <p className="project-date">{project.date}</p>
            </h2>
            <p>{project.description}</p>
            <div className="buttons">
              <img src={logoMap[project.logo]} alt={project.logo} className="language" />
              <GitHubButton href={project.source} data-size="large" data-show-count="true">
                Source
              </GitHubButton>
              {project.path && (
                <a className="button" href={project.path} target="_blank" rel="noopener noreferrer">
                  View
                </a>
              )}
            </div>
          </div>
        ))}
      </section>
    )
  }
}
