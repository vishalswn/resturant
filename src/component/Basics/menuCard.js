// import React from 'react'
// import './style.css'

import { useState } from 'react';
import Menu from "./menuApi";
const MenuCard = ({ menuData }) => {
    const myStyle = { color: "red" }
    return (
        <>
            <section className="main-card-cointainer">
                {menuData.map((curElem, index) => {

                    const { id, name, category, image, description } = curElem;

                    return (
                        <div className="card-container" kay={id}>
                            <div className="card">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle">
                                        {id}
                                    </span>
                                    <span className="card-author subtle" style={myStyle}></span>
                                    <h2 className="card-title">{curElem.name}</h2>
                                    <span className="card-description subtle">
                                        {curElem.description}
                                    </span>
                                    <div className="card-read">Read</div>
                                </div>
                                <img src={curElem.image} alt="images" className="card-media" />
                                <span className="card-tag subtle">Order Now</span>
                            </div>
                        </div>


                    )
                })}
            </section>
        </>
    )

}
export default MenuCard;