import { useEffect, useState } from 'react';
import './Menu.css';


function Menu({isActive, isLoggedIn }) {
  const [activeIndex, setActiveIndex] = useState();
  const [icon, setIcon] = useState('');

  const lists = [
    { id: 1, href: "/home", icon: "home-outline", title: "Home" },
    { id: 2, href: "/profile", icon: "person-outline", title: "Profile"},
    { id: 3, href: "/standings", icon: "podium-outline", title: "Standings"},
    { id: 4, href: "/teams", icon: "accessibility-outline", title: "Teams"},
    { id: 5, href: "/about", icon: "information-circle-outline", title: "About"},
    { id: 6, href: "/signin", icon: icon, title: "SignIn"}
  ];

  useEffect(() => {
    // Check login status on component mount
    if(isLoggedIn){
      setIcon("log-out-outline");
    }else {
      setIcon("log-in-outline");
    }
  }, [isLoggedIn]);

  const handleMouseOver = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      className={`nav-menu${isActive ? " active" : ""}`}
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