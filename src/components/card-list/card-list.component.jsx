//functional compnent. No access to state because no access to constructor or lifecycle methods. Used to just render html

import React from 'react';

import {Card} from '../card/card.component.jsx';

import './card-list.styles.css';

export const CardList = props => (
    <div className="card-list open">
        <ol>
        {
            props.docs.map(docs => (
            <Card key={docs.id} className="" docs={docs}/>
            ))
         }
        </ol>
    </div>
) 
    
       

        