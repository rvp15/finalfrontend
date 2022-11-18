import React from "react";
import { Link} from "react-router-dom";
import { items } from "./MenuItems";
import "./Menu.css"
function Menu({ isOpen, onChange }) {
  return (
    <div className={`Menu ${isOpen && "open"}`}>
      <span
        className="material-icons btn-close"
        onClick={() => onChange(false)}
      >
        close
      </span>
      <div className="Menu-items">
        {items.map((item, index) => (
          <Link to='/amenities' key={index}>
            {item.itemText}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Menu;