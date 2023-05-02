import { useState } from 'react';
import './Menu.css';


function Menu({ menuWidth }) {
  const [activeIndex, setActiveIndex] = useState();

  const lists = [
    { id: 1, href: "/home", icon: "home-outline", title: "Home" },
    { id: 2, href: "/#", icon: "person-outline", title: "Profile"},
    { id: 3, href: "/standings", icon: "podium-outline", title: "Standings"},
    { id: 4, href: "/#", icon: "accessibility-outline", title: "Teams"},
    { id: 5, href: "/about", icon: "information-circle-outline", title: "About"},
    { id: 6, href: "/#", icon: "log-in-outline", title: "SignIn"}
  ];

  const handleMouseOver = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      className={"nav-menu"}
      style={{ width: `${menuWidth}vw` }}
    >
      <ul>
        {lists.map((list, index) => (
          <li
            key={list.id}
            className={`list ${index === activeIndex ? "active" : ""}`}
            onMouseOver={() => handleMouseOver(index)}
          >
            <b></b>
            <b></b>
            <a href={list.href}>
              <span className="icon">
                <ion-icon name={list.icon}></ion-icon>
              </span>
              <span className="title">{list.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;