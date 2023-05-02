import React from "react";
import './AboutBar.css';


function AboutBar() {
    return (
        <div className="about-bar">
            <h2>About Author</h2>
            <br/>
            <p>Hi, my name is Volodymyr and I'm novice programmer.
                I want to introduce my portfolio web application written on React.js and Node.js. 
                The NHL Stats Portal is a sleek and informative website for hockey fans and analysts alike.
                 The site provides a wealth of statistics, including team and player performance data,
                  as well as advanced analytics such as Corsi and Fenwick ratings.
                   The user-friendly interface allows for easy navigation and customization
                    of the data displayed, making it a valuable tool for those looking to gain
                     deeper insights into the game of hockey. Overall, the NHL Stats Portal is
                      a well-designed and useful resource for anyone interested in the hockey.
                        </p>
                        {/* In addition to that, application is powered by GPT AI to provide analytics.
                        Portal allows you to register and leave comments. */}
            <br/><br/>
            <div className="media-links">
                <span>
                    <a href="https://www.linkedin.com/in/volodymyr-labliuk-975b88184/">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                </span>
                <span>
                    <a href="https://github.com/n1ceFella">
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                </span>
                <span>
                    <a href="https://www.instagram.com/vlabliuk/">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                </span>
            </div>
        </div>
    );
}

export default AboutBar;