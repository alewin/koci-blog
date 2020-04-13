import React from "react";

const Comments = () => (
  <section
    ref={elem => {
      if (!elem) {
        return;
      }
      const scriptElem = document.createElement("script");
      scriptElem.src = "https://utteranc.es/client.js";
      scriptElem.async = true;
      scriptElem.crossOrigin = "anonymous";
      scriptElem.setAttribute("data-repo", "alewin/koci-blog");
      scriptElem.setAttribute("data-issue-term", "pathname");
      scriptElem.setAttribute("data-label", "Comment");
      scriptElem.setAttribute("data-theme", "github-light");
      elem.appendChild(scriptElem);
    }}
  />
);

export default Comments;
