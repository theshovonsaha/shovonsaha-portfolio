import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import LogRocket from "logrocket"
const SEO = ({ title, description, lang, meta }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "Person",
      name: site.siteMetadata.author,
      url: site.siteMetadata.siteUrl,
      jobTitle: "Software Developer and Photographer",
      description:
        "Toronto-based Software Developer, Photographer, and Videographer with expertise in web development and creative visual content.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressRegion: "ON",
        addressCountry: "CA",
      },
      sameAs: [
        "https://www.instagram.com/theshovonsaha",
        "https://www.linkedin.com/in/theshovonsaha/",
        "https://github.com/theshovonsaha",
      ],
      knowsAbout: [
        "Software Development",
        "Photography",
        "Videography",
        "Web Development",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Shovon Saha Photography & Development",
      },
    },
  ]

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `geo.region`,
          content: `CA-ON`,
        },
        {
          name: `geo.placename`,
          content: `Toronto`,
        },
        {
          name: `geo.position`,
          content: `43.653226;-79.383184`,
        },
      ].concat(meta)}
      script={[
        {
          type: `application/ld+json`,
          innerHTML: JSON.stringify(schemaOrgJSONLD),
        },
        {
          type: `text/javascript`,
          innerHTML: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "oxt7hrmeew");
          `,
        },
        {
          type: `text/javascript`,
          defer: true,
          dataDomain: "theshovonsaha.com",
          src: "https://plausible.io/js/script.js",
        },
        {
          type: "text/javascript",
          src: "https://cdn.logrocket.io/LogRocket.min.js",
        },
        {
          type: "text/javascript",
          innerHTML: `
            window.LogRocket && window.LogRocket.init('k3rqbk/ss-portfolio');
          `,
        },
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO
