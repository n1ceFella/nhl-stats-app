import React from "react";
import { useState } from 'react';
import './Menu.css';


function Menu() {

  const [activeIndex, setActiveIndex] = useState();

  const lists = [
    { id: 1, href: '/about', icon: 'information-circle-outline', title: 'About' },
    { id: 2, href: '/standings', icon: 'basketball-outline', title: 'Standings' },
    { id: 3, href: '/teams', icon: 'accessibility-outline', title: 'Teams' },
  ];

  const handleMouseOver = (index) => {
    setActiveIndex(index);
  };

    return (
      <div className="nav-menu">
        <ul>
        {lists.map((list, index) => (<li
            key={list.id}
            className={`list ${index === activeIndex ? 'active' : ''}`}
            onMouseOver={() => handleMouseOver(index)}
          >
            <a href={list.href}>
              <span className="icon">
                <ion-icon name={list.icon}></ion-icon>
              </span>
              <span className="title">{list.title}</span>
            </a>
          </li>))};
        </ul>
      </div>
    );
  }

export default Menu;