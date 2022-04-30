import React from 'react';
import { Link } from 'react-router-dom';
import cl from './Header.module.scss'
import log from '../assets/001-user.png'
const Heager = () => {
    return (
        <div className={cl.header}>
            <div className={cl.header_top}>
                <span>This site was designed with WiX.com website builder. Create your website today. </span>
                <button>Start Now</button>
            </div>
            <div className={cl.header_bottom}>
                <div className={cl.header_bottom_first}>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <h3>
                            OrientTS
                        </h3>
                    </Link>
                </div>
                <div className={cl.header_bottom_second}>
                    <div style={{ width: "150px" }}></div>
                    <div className={cl.links}>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <span>Главная</span>
                        </Link>
                        <Link to='/price' style={{ textDecoration: 'none' }}>
                            <span>Планы и цены</span>
                        </Link>
                    </div>
                    <Link to='/auth' style={{ textDecoration: 'none' }}>
                        <div className={cl.login}>
                            <img src={log} alt="log" />
                            <span>Log in</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Heager;