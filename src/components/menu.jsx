import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { getChartTypes } from '../data/service';

class Menu extends Component {
    render() {
        return (
            <div className='menu'>
                {
                    getChartTypes().map((menu, index) => {
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