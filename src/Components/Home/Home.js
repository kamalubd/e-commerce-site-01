import React from 'react';
import './Home.css'
import banner from '../../images/banner.jpg'
import banner2 from '../../images/banner-2.jpg'

const Home = () => {
    return (
        <div>
            <div className='top-banner'>
                <img src={banner} alt=""/>
            <div className="promotionals">
            <div className='content'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat omnis est beatae quidem qui pariatur ducimus cumque saepe ea voluptatum deleniti, perspiciatis laudantium autem, vero eius? Ipsa iure quod deleniti.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat omnis est beatae quidem qui pariatur ducimus cumque saepe ea voluptatum deleniti, perspiciatis laudantium autem, vero eius? Ipsa iure quod deleniti.
                <p><button>Shop Now</button></p>

            </div>
            <div className='promotion'>
                <img src={banner2} alt=""/>

            </div>
            </div>
            </div>
        </div>
    );
};

export default Home;