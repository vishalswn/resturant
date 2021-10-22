import React from "react";
import { useState } from 'react';
import './style.css'
const Navbar = ({ filterItem, menuList }) => {
    // const [menuData,setMenuData] = useState(Menu);

    return (<>
        <nav className="navbar">
            <div className="btn-group">
                {
                    menuList.map((curElem) => {
                        return (
                            <button className="btn-group__item"
                                onClick={() => filterItem(curElem)}>
                                {curElem}
                            </button>
                        )

                    })
                }
                {/* <button className="btn-group__item" onClick={() => filterItem("breakfast")}>Breackfast</button>
                <button className="btn-group__item" onClick={() => filterItem("lunch")}>lunch</button>
                <button className="btn-group__item" onClick={() => filterItem("evening")}>Evening</button>
                <button className="btn-group__item" onClick={() => filterItem("dinner")}>Dinner</button>
                <button className="btn-group__item" onClick={() => setMenuData(Menu)}>All</button> */}
            </div>
        </nav>
    </>
    )
};
export default Navbar;
