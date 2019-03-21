import React from "react"
import { IndexPageTemplate } from "../../templates/index-page"

const IndexPagePreview = ({ entry }) => {
  return (
    <IndexPageTemplate
      image={entry.getIn(["data", "image"])}
      title={entry.getIn(["data", "title"])}
      heading={entry.getIn(["data", "heading"])}
      subheading={entry.getIn(["data", "subheading"])}
      main={{
        mainpitch: {
          title: entry.getIn(["data", "mainpitch", "title"]),
          description: entry.getIn(["data", "mainpitch", "description"]),
        },
      }}
    />
  )
}

export default IndexPagePreview
