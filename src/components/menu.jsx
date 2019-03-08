import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import chartsData from '../data/chartsData';

class Menu extends Component {

    render() {
        const menus = Object.keys(chartsData);

        return (
            <div className='menu'>
                {
                    menus.map((menu, index) => {
                        return <NavLink key={index} to={'/chart/' + menu} activeClassName='active'>
                            <button className='text-upperase'>
                                {menu}
                            </button>
                        </NavLink >;
                    })
                }
            </div>
        );
    }
}

export default Menu;