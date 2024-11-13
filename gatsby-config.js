const {
  author,
  siteTitle,
  siteShortTitle,
  siteDescription,
  siteIcon,
  siteUrl,
  colors,
} = require(`./config`)

module.exports = {
  siteMetadata: {
    author: "Shovon Saha",
    title: "Shovon Saha | Toronto Software Developer & Photographer",
    description:
      "Toronto-based Software Developer, Photographer, and Videographer specializing in web development, creative photography, and professional videography services.",
    siteUrl: "https://theshovonsaha.com",
    keywords:
      "Toronto software developer, Toronto photographer, Toronto videographer, web development Toronto, professional photography Toronto",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `G-XXXXXXXXXX`,
        head: true,
        anonymize: true,
        pageTransitionDelay: 0,
        defer: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: siteShortTitle,
        start_url: `/`,
        background_color: colors.lightTheme.background,
        theme_color: colors.lightTheme.primary,
        display: `minimal-ui`,
        icon: siteIcon, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              quality: 80,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: [`develop`],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map(node => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `daily`,
              priority: 0.7,
            }
          }),
      },
    },
    {
      resolve: `gatsby-plugin-webpack-bundle-analyzer`,
      options: {
        production: true, // Run only in production builds
        disable: process.env.NODE_ENV === "development", // Disable during development
        analyzerMode: "static", // Generates a static HTML file
        reportFilename: "bundle-analyzer-report.html",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://theshovonsaha.com",
        sitemap: "https://theshovonsaha.com/sitemap.xml",
        policy: [
          { userAgent: "*", allow: "/" },
          { userAgent: "*", disallow: ["/admin", "/private"] },
        ],
      },
    },
  ],
}
