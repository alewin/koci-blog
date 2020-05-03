import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from '../layout'
import PostTags from '../components/PostTags'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import { formatDate, editOnGithub } from '../utils/global'
import Comments from '../components/Comments'

export default class PostTemplate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: false,
    }
  }

  render() {
    const { comments, error } = this.state
    const { slug } = this.props.pageContext
    const postNode = this.props.data.mdx
    const post = postNode.frontmatter
    const popular = postNode.frontmatter.categories.find(category => category === 'Popular')
    let thumbnail

    if (!post.id) {
      post.id = slug
    }

    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID
    }

    if (post.thumbnail) {
      thumbnail = post.thumbnail.childImageSharp.fixed
    }

    const date = formatDate(post.date)
    const githubLink = editOnGithub(post)
    const twitterShare = `http://twitter.com/share?text=${encodeURIComponent(post.title)}&url=${
      config.siteUrl
      }/${post.slug}/&via=alessiokoci`

    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} – ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <article className="single container">
          <header className={`single-header ${!thumbnail ? 'no-thumbnail' : ''}`}>
            {thumbnail && <Img fixed={post.thumbnail.childImageSharp.fixed} />}
            <div className="flex">
              <h1>{post.title}</h1>
              <div className="post-meta">
                <time className="date">{date}</time>/
                <a
                  className="twitter-link"
                  href={twitterShare}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Share
                </a>
                /
                <a
                  className="github-link"
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Edit ✏️
                </a>
              </div>
              <PostTags tags={post.tags} />
            </div>
          </header>
          <div className="post">
            <MDXRenderer>
              {postNode.body}
            </MDXRenderer>
          </div>
        </article>
        <div className="container no-comments">
          <Comments />
        </div>
        {/*
          <UserInfo config={config} />
        */}
      </Layout>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      timeToRead
      excerpt
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        slug
        date
        categories
        tags
        template
      }
      fields {
        slug
        date
      }
    }
  }
`
