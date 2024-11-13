exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
    type MdxFrontmatter {
      title: String!
      visible: Boolean
      position: Int
      buttonVisible: Boolean
      buttonText: String
      buttonUrl: String
    }

    type MdxExportsProjects {
      title: String!
      description: String!
      technologies: [String!]!
      achievements: [String!]!
      link: String!
    }
  `

  createTypes(typeDefs)
}
