import CMS from "netlify-cms"

import IndexPagePreview from "./preview-templates/IndexPagePreview"
import AboutPagePreview from "./preview-templates/AboutPagePreview"

CMS.registerPreviewTemplate("index", IndexPagePreview)
CMS.registerPreviewTemplate("about", AboutPagePreview)
