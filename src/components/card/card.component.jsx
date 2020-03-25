//functional compnent. No access to state because no access to constructor or lifecycle methods. Used to just render html

import React from 'react';

import './card.styles.css';

export const Card = props => (
    <li className="card-container">
        <a href="#">
            <p className="">
                {props.docs.id}
            </p>
            <h2 className="">{props.docs.name}</h2>
        </a>
    </li>
) 