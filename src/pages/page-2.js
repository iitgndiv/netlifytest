import React from 'react'
import Link from 'gatsby-link'

const SecondPage = ({data}) => (
  <div>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostListing key={node.id} post={node} />
    ))}
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage

const PostListing = ({ post }) => (
  <article>
    <h3>{post.frontmatter.title}</h3>
    <span>{post.frontmatter.date}</span>
    <p>{post.excerpt}</p>
    <p><Link to={post.fields.slug}>see more..</Link></p>
    -----------------------------------
    {/* <div
      dangerouslySetInnerHTML={{
        __html: post1.html
      }}
    /> */}
    ----------------------------------
  </article>
);


export const postQuery = graphql`
query postQuery 
{
  
  allMarkdownRemark {
    edges {
      node {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM DD YYYY")
        }
        html
      }
    }
  }

}
`;
