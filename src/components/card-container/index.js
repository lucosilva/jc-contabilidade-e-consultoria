import React from 'react';
import './style.css';

import CardWithIcon from '../card-with-icon';
import CardWithIconCenter from '../card-with-icon-center';
import CardWithButton from '../card-with-button';

import ButtonAction from '../button';

function CardContainer({ typeCard, objCard, buttonAction }) {

    const card = [...objCard];
    const action = { ...buttonAction };
   
    var TypeSelect;

    switch (typeCard) {
        case "card-with-icon":
            TypeSelect = CardWithIcon;
            break;
        case "card-with-icon-center":
            TypeSelect = CardWithIconCenter;
            break;
        case "card-with-button":
            TypeSelect = CardWithButton;
            break;
    }

    return (
        <section className='card-container'>
            <div className="container">
                <div className="list">
                    {card.map(({ title, icon_main, context, cta, urlAction }) => {
                        return <TypeSelect titulo={title} icon={icon_main} cta={cta} urlAction={urlAction}> {context} </TypeSelect >
                    })}
                </div>

                {
                    (function () {
                        if (action.active) {
                            return (
                                <div className="container-action">
                                    <ButtonAction url={action.url} titulo={action.title} classAdd={action.classAdicional} />
                                </div>
                            )
                            /*"bg-black"*/
                        }
                    })()
                }

            </div>
        </section>
    );
}

export default CardContainer;

