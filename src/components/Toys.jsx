import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Toy from './Toy';


const Toys = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState('Regular')



    useEffect(() => {
        fetch(`https://toy-market-server-phi.vercel.app/allToys/${activeTab}`)
            .then(res => res.json())
            .then(result => {
                setToys(result)
            })
            .catch(error => {
                console.log(error);
            })
    }, [activeTab])




    return (
        // <Tabs className='text-center mb-40 max-w-7xl mx-auto'>
        //     <TabList className='flex justify-center mb-20'>
        <Tabs className='text-center mb-10 md:mb-28 max-w-7xl mx-auto'>
            <TabList>
                <Tab onClick={() => setActiveTab('Regular')} >Regular Car</Tab>
                <Tab onClick={() => setActiveTab('Sports')} >Sports Car</Tab>
                <Tab onClick={() => setActiveTab('Truck')} >Monstar Truck</Tab>
            </TabList>

            <TabPanel className='w-full mx-auto mt-16 md:mt-40'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-center justify-items-center items-center'>
                    {toys.map(toy => <Toy key={toy._id} toy={toy} />)}
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-center justify-items-center items-center'>
                    {toys.map(toy => <Toy key={toy._id} toy={toy} />)}
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-center justify-items-center items-center'>
                    {toys.map(toy => <Toy key={toy._id} toy={toy} />)}
                </div>
            </TabPanel>
        </Tabs>

    );
};

export default Toys;