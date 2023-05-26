import NavBar from '../../components/NavBar';
import SharedFooter from '../../components/SharedFooter';
import Banner from '../../components/Banner';
import { useEffect, useState } from 'react';
import { Button, Table, TextInput } from 'flowbite-react';
import useTitle from '../../hooks/useTitle';
import { FaArrowRight, FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import AllToyList from '../../components/AllToyList';


const AllToys = () => {
    useTitle('AllToys')
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState('Regular Car')
    const [show, setShow] = useState(true)





    useEffect(() => {
        fetch(`https://toy-market-server-phi.vercel.app/allToys/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                console.log(show);
                if (!show) {
                    setToys(data)
                }
                else {
                    setToys(data.slice(0, 5))
                } 

            })
            .catch(error => {
                console.log(error);
            })
    }, [activeTab, show])



    const handleSearch = (event) => {


        event.preventDefault();
        const form = event.target;
        const search = form.search.value;


        fetch(`https://toy-market-server-phi.vercel.app/allToy/${search}`)
            .then(res => res.json())
            .then(data => {
                if (!show) {
                    setToys(data)
                }
                else {
                    setToys(data.slice(0, 5))
                }
                if (data.length < 1) {
                    toast(`'No data found for ${search}`)
                } else {
                    toast(`Search result for ${search}`)
                }

            })

    }


    console.log(toys);

    return (
        <>
            <NavBar></NavBar>
            <Banner></Banner>

            <div className=' relative max-w-xs mx-auto mt-28'>
                <form onSubmit={handleSearch} className=' relative max-w-xs mx-auto'>
                    <TextInput
                        className=' max-w-xs mx-auto mt-20 relative'
                        id="search2"
                        type="text"
                        name='search'
                        placeholder="Search"
                        required={true}
                        shadow={true}
                    ></TextInput>

                    <button type="submit">
                        <FaSearch className=' text-indigo-500 absolute text-2xl right-2 top-2' />
                    </button>
                </form>

            </div>


            <div className='min-h-screen flex flex-col max-w-7xl mx-auto mb-20' >
                <div className=' flex-grow relative overflow-x-auto mt-20'>

                    <Table className=' overflow-x-scrol' hoverable={true}>
                        <Table.Head>
                            <Table.HeadCell className='!pl-20'>
                                PICTURE
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Seller
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Toy Name
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Category
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Price
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Available Quantity
                            </Table.HeadCell>
                            <Table.HeadCell className="!pl-12">
                                Details
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">


                            {
                                toys.map((toy, index) => <AllToyList key={toy._id} toy={toy} index={index} ></AllToyList>)
                            }


                        </Table.Body>
                    </Table>






                    {
                        toys.length < 1 &&
                        <>
                            <h1 className='text-xl md:text-6xl text-gray-600 font-semibold my-40 text-center md:mt-60'>There is no toys added</h1>
                            <div className='flex justify-center'><Link to={'/addToy'}><Button gradientDuoTone="purpleToBlue" className='bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900'>Add now<FaArrowRight className=' w-5 h-5 ml-2 pt-1' /></Button></Link></div>
                        </>
                    }


                    {
                        show && toys.length == 5 &&
                        <div className='flex justify-center mt-20 mb-10'>
                            <Button onClick={() => setShow(false)} gradientDuoTone="purpleToBlue" className=' bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900 mt-10'>Show More</Button>
                        </div>
                    }

                </div>
            </div>
            <SharedFooter></SharedFooter>
        </>
    );
};

export default AllToys;