import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner />
            <AdvertisedItems />
            <Categories />
            <Contact />
        </div>
    );
};

export default Home;