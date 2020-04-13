import React, { Component } from "react";

class Comments extends Component {

  render() {
    return (
      <script
        src="https://utteranc.es/client.js"
        data-repo="alewin/koci-blog"
        data-issue-term="pathname"
        data-label="Comment"
        data-theme="github-light"
        crossOrigin="anonymous"
        async
      />
    )
  }
}

export default Comments;
