import React, { Component } from "react";

class Comments extends Component {

  render() {
    return (
      <script
        src="https://utteranc.es/client.js"
        repo="alewin/koci-blog"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossOrigin="anonymous"
        async
      />
    )
  }
}

export default Comments;
