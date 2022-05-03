import React from 'react';
import cl from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={cl.sixth}>
        <div className={cl.sixth_top}>
            <div>
                <img src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Facebook.png" alt="" />
                <img src="https://static.wixstatic.com/media/01ab6619093f45388d66736ec22e5885.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Twitter.png" alt="" />
                <img src="https://static.wixstatic.com/media/7528824071724d12a3e6c31eee0b40d4.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LinkedIn.png" alt="" /></div>
        </div>
    </div>
    );
};

export default Footer;