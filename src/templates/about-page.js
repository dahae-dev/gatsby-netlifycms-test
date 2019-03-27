import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Features from "../components/reusable/Features"

export const AboutPageTemplate = ({
  title,
  image,
  heading,
  description,
  main,
}) => {
  const centerStyle = { display: "flex", justifyContent: "center" }
  return (
    <div className="container">
      <div
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        }}
      >
        <h2
          style={{
            color: "white",
            padding: "1rem",
          }}
        >
          {title}
        </h2>
      </div>
      <h3 style={centerStyle}>{heading}</h3>
      <p style={centerStyle}>{description}</p>
      <Features gridItems={main.blurbs} />
    </div>
  )
}

const AboutPage = () => (
  <StaticQuery
    query={pageQuery}
    render={data => (
      <Layout>
        <AboutPageTemplate
          title={data.markdownRemark.frontmatter.title}
          image={data.markdownRemark.frontmatter.image}
          heading={data.markdownRemark.frontmatter.heading}
          description={data.markdownRemark.frontmatter.description}
          main={data.markdownRemark.frontmatter.main}
        />
      </Layout>
    )}
  />
)

export default AboutPage

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 240, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        main {
          heading
          blurbs {
            image
            subheading
            text
          }
        }
      }
    }
  }
`
