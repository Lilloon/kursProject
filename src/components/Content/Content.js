import React from "react";
import content from "../../data/content";
import { useParams } from "react-router-dom";
import classes from "./Content.module.scss";

const Content = () => {
  const params = useParams();
  return (
    <div className={classes.list}>
      {content[params.contentPath] &&
        content[params.contentPath].map((item) => (
          <div className={classes.card}>
            <img src={item.image} alt="img" />
            <div className={classes.text}>
              <p className={classes.title}>{item.title}</p>
              <p className={classes.information}>{item.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Content;
