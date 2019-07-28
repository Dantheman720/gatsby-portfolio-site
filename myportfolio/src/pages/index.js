import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  const { allWordpressPost } = useStaticQuery(graphql`
    query {
      allWordpressPost {
        edges {
          node {
            content
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  `)
  return (
    <Layout>
      {allWordpressPost.edges.map(post => (
        <div>
          <h1>{post.node.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.node.content }} />
          <div dangerouslySetInnerHTML={{ __html: post.node.date }} />
        </div>
      ))}
    </Layout>
  )
}

export default IndexPage
