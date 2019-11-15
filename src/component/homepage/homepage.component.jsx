import React from 'react';
import './homepage.styles.scss';

export const HomePage = () => {
    return (
        <div className='homepage'>
            <div className='directory-menu'>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>HATS</div>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>JACKETS</div>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>SWEATERS</div>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>GIRLS</div>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>GUYS</div>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    )
}