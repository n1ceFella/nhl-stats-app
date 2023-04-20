import React from "react";
import { useState } from 'react';
import './Search.css';


function Search() {
    return (
        <form>
            <div className="search">
                <span className="search-icon">
                    <ion-icon name="search-outline"></ion-icon>
                </span>
                <input className="search-input" type="text" placeholder="Search" maxLength={30} />
            </div>
            
        </form>
    );
}

export default Search;