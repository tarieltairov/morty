import React from 'react';
import { Link } from 'react-router-dom';
import cl from './Header.module.scss';

const Heager = () => {
    return (
        <div className={cl.header}>
            <div className={cl.header_bottom}>
                <div className={cl.header_bottom_first}>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <h3>
                            OrientTS
                        </h3>
                    </Link>
                </div>
                <div className={cl.header_bottom_second}>
                    <div className={cl.links}>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <span>Главная</span>
                        </Link>
                        <Link to='/price' style={{ textDecoration: 'none' }}>
                            <span>Планы и цены</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Heager;