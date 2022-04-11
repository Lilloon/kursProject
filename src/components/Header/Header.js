import menu from "../../data/menuData";
import Navigation from "../Navigation/Navigation";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <div className={classes.header}>
      <h1>Курсовой проект Гришина Никиты, Группа 18Ип1бп</h1>
      <Navigation options={menu} />
    </div>
  );
};

export default Header;
