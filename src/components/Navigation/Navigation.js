import React, { useState } from "react";
import classes from "./Navigation.module.scss";
import { Link, useLocation } from "react-router-dom";

const Navigation = ({ options }) => {
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);

  const onClick = (path) => {
    setSelected(path);
    console.log(selected);
  };
  return (
    <div className={classes.navBar}>
      {options.map((item) => (
        <div
          onClick={() => {
            onClick(item.path);
          }}
        >
          <Link key={item.id} to={`kursProject/${item.path}`}>
            <span className={item.path === selected ? classes.selected : ""}>
              {item.name}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
