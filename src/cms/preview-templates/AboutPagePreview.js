import React from "react"
import { AboutPageTemplate } from "../../templates/about-page"

const AboutPagePreview = ({ entry }) => {
  const entryBlurbs = entry.getIn(["data", "intro", "blurbs"])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <AboutPageTemplate
      title={entry.getIn(["data", "title"])}
      image={entry.getIn(["data", "image"])}
      heading={entry.getIn(["data", "heading"])}
      subheading={entry.getIn(["data", "subheading"])}
      main={{ blurbs }}
    />
  )
}

export default AboutPagePreview
