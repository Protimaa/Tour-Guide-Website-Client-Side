
import { Helmet } from 'react-helmet-async';
import orderCoverImg from '../../../assets/Order/oradercover.jpg'
import Cover from '../../Shared/Cover/Cover';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useService from '../../../hooks/useService';

import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';



const Order = () => {

    const categories = ['adventure', 'relaxation', 'nature', 'historical', 'offered'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [place] = useService();


    const adventure = place.filter(item => item.category === 'adventure');
    const relaxation = place.filter(item => item.category === 'relaxation');
    const nature = place.filter(item => item.category === 'nature');
    const historical = place.filter(item => item.category === 'historical');
    const offered = place.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>DP Tourist Guide | Booked Page</title>
            </Helmet>
            <Cover img={orderCoverImg} title={'Booked'}></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Adventure</Tab>
                    <Tab>Relaxation</Tab>
                    <Tab>Nature</Tab>
                    <Tab>Historical</Tab>
                    <Tab>Offered</Tab>
                </TabList>
                <TabPanel>
                   <OrderTab items={adventure}></OrderTab>
                </TabPanel>
                <TabPanel>
                   <OrderTab items={relaxation}></OrderTab>
                </TabPanel>
                <TabPanel>
                   <OrderTab items={nature}></OrderTab>
                </TabPanel>
                <TabPanel>
                   <OrderTab items={historical}></OrderTab>
                </TabPanel>
                <TabPanel>
                   <OrderTab items={offered}></OrderTab>
                </TabPanel>
                
            </Tabs>

            
        </div>
    );
};

export default Order;