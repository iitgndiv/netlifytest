import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    const { data } = this.props;
    return (
        <div>
            {/* <p>{data.markdownRemark.excerpt}</p> */}
        <span>{data.markdownRemark.frontmatter.date}</span>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html
          }}
        />
      </div>
    )
  }
}
export const query = graphql`
query BlogPostQuery($slug:String!) {
    markdownRemark(fields:{slug:{eq: $slug}}) {
        html
        fields {
            slug
          }
        frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
        }
    }
}
`;
