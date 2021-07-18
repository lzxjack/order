// import { useState, useEffect } from 'react';
import './index.css';

const Got = props => {
    return (
        <div className="Got-box">
            <div className="main">
                {/* <div className="text">今天做</div> */}
                <div className="name-got">
                    {props.cook ? (
                        <>
                            <span className="red">辣椒</span>炒
                            <span className="blue">{props.name}</span>
                        </>
                    ) : (
                        <span className="red">{props.name}</span>
                    )}
                </div>
            </div>
            <div className="make-btn" onClick={props.reOrder}>
                再试一次!
            </div>
        </div>
    );
};

export default Got;
