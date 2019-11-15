import React from 'react';
import './menu-item.styles.scss';

export const MenuItems = ({title, imageUrl}) => {
    return (
                <div 
                className='menu-item'>
                    <div 
                    className='background-image'
                    style={{
                        backgroundImage : `url(${imageUrl})`
                    }} >
                    </div>
                    <div className='content'>
                        <div className='title'>{title}</div>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
                // <div className='menu-item'>
                //     <div className='content'>
                //         <div className='title'>HATS</div>
                //         <span className='subtitle'>SHOP NOW</span>
                //     </div>
                // </div>
                // <div className='menu-item'>
                //     <div className='content'>
                //         <div className='title'>JACKETS</div>
                //         <span className='subtitle'>SHOP NOW</span>
                //     </div>
                // </div>
                // <div className='menu-item'>
                //     <div className='content'>
                //         <div className='title'>SWEATERS</div>
                //         <span className='subtitle'>SHOP NOW</span>
                //     </div>
                // </div>
                // <div className='menu-item'>
                //     <div className='content'>
                //         <div className='title'>GIRLS</div>
                //         <span className='subtitle'>SHOP NOW</span>
                //     </div>
                // </div>
                // <div className='menu-item'>
                //     <div className='content'>
                //         <div className='title'>GUYS</div>
                //         <span className='subtitle'>SHOP NOW</span>
                //     </div>
                // </div>
    )
}