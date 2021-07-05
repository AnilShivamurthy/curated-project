import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../Redux/Action/Action";
import "./Layout.css";

const Layout = () => {
  const active = useSelector((state) => state.combineActive.active);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setActive(e.target.id));

    var list = document.querySelector(".active");
    if (list !== null) {
      list.classList.remove("active");
    }
    e.target.className = "items active";
  };

  return (
    <div>
      <ul className="nav-items">
          <li className="items active" id="photo" active={active === "photo"} onClick={(e, id) => handleClick(e, id)}>Photos</li>
          <li className="items" id="video" active={active === "video"} onClick={(e, id) => handleClick(e, id)}>Videos</li>
          <li className="items" id="favourite" active={active === "favourite"} onClick={(e, id) => handleClick(e, id)}>Favourite</li>
      </ul>
    </div>
  );
};

export default Layout;
