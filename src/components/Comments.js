import React, { Component } from "react";
import md5 from "md5";
import Gitalk from 'gitalk'
import config from "../../data/SiteConfig";

import "gitalk/dist/gitalk.css";

class Comment extends Component {
  componentDidMount() {
    const { clientID, clientSecret, repo, owner, admin } = config.gitalk;
    const p = window.location.pathname;
    const id = md5(p.endsWith("/") ? p.slice(0, -1) : p);
    const { title } = this.props

    const gitalk = new Gitalk({
      clientID,
      clientSecret,
      repo,
      owner,
      admin,
      distractionFreeMode: true,
      id,
      title,
    });

    gitalk.render("gitalk-container");
  }

  render() {
    return <div id="gitalk-container" />;
  }
}

export default Comment;
