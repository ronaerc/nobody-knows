//functional compnent. No access to state because no access to constructor or lifecycle methods. Used to just render html

import React from 'react';

import './card.styles.css';

export const Card = ({docs, showMain, active}) => (
    <li className={active ? 'card-container active': 'card-container'} onClick={showMain} >
       <button>
            <p className="">
                {docs.id}
            </p>
            <h2 className="">{docs.cat}</h2>
        </button>
    </li>
) 