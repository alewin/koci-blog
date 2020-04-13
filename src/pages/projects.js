/* eslint-disable class-methods-use-this */
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import ProjectListing from '../components/ProjectListing'
import Layout from '../layout'
import config from '../../data/SiteConfig'
import projects from '../../data/projects'


export default class PublicationsPage extends Component {
  get activeProjects() {
    return projects.filter(item => item.active)
  }

  get inactiveProjects() {
    return projects.filter(item => !item.active)
  }

  render() {
    return (
      <Layout>
        <Helmet title={`Published Articles – ${config.siteTitle}`} />
        <div className="container">
          <header className="page-header">
            <h1>Active Projects</h1>
          </header>
          <div className="page">
            <ProjectListing projects={this.activeProjects} />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="container">
          <header className="page-header">
            <h1>Inactive Projects</h1>
          </header>
          <div className="page">
            <ProjectListing
              projects={this.inactiveProjects}
            />
          </div>
        </div>
      </Layout>
    )
  }
}
