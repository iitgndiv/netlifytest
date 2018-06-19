import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const IndexPage = ({data}) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p><b>{data.site.siteMetadata.title}</b></p>
    <p><i>{data.site.siteMetadata.desc}</i></p>
    <p>Now go build something great.</p>
    <Img sizes={data.background.sizes} />
    hello
    <Img sizes={data.background2.sizes} />
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage

export const query = graphql`
query SiteMeta 
{
  site {
   siteMetadata {
     title
     desc
   }
  }

  background: imageSharp(id: { regex: "/bg.jpg/" }) {
    sizes(maxWidth: 1240) {
      ...GatsbyImageSharpSizes
    }
  }

  background2: imageSharp(id: { regex: "/image001.jpg/" }) {
    sizes(maxWidth: 500) {
      ...GatsbyImageSharpSizes
    }
  }

  

}
`;
