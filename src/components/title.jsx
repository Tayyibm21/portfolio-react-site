import React, { memo } from "react";

import "../styles/title.scss";

const Title = memo(() => {
  return (
    <section className="title_container">
      <div className="title_background"></div>
      <div className="title_filter"></div>{" "}
      <div className="title_contents">
        <h1>Tayyib Mahmood</h1>
        <div className="line"></div>
        <h1></h1>
        <h2>Full Stack Software Developer</h2>
        <h4>
          ...
        </h4>
      </div>
    </section>
  );
});

export default Title;
