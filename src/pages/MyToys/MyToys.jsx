import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import NavBar from '../../components/NavBar';
import SharedFooter from '../../components/SharedFooter';
import { FaArrowRight } from 'react-icons/fa';
import MyToysList from '../../components/MyToysList';
import { Button, Spinner, Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    useTitle('Mytoys')
    const { user, loading } = useContext(AuthContext)
    const [toys, setToys] = useState([]);
    console.log(user?.email);
    const [asc, setAsc] = useState(true)
    const [state, setState] = useState('Descending')
    // const userEmail = user?.email;

    console.log(user);


    const handleSort = () => {
        setAsc(!asc)
        if (asc) {
            toast('Descending Sorted')
        } else {
            toast('Ascending Sorted')
        }
        if (state === 'Ascending') {
            setState('Descending')
        } else {
            setState('Ascending')
        }

    }



    useEffect(() => {
        fetch(`https://toy-market-server-phi.vercel.app/mytoys/${user?.email}?sort=${asc ? 'asc' : ''}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            });
        // fetch(`https://toy-market-server-phi.vercel.app/mytoys/${user?.email}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setToys(data)
        //     })
    }, [user?.email, asc])

    // localhost: 5000 / all ? emai = example@abc.com& sort=asc

    const handleDelete = id => {
        console.log('id', id);
        if (id) {
            const procced = confirm('Are you sure you want to delete')

            if (procced) {
                fetch(`https://toy-market-server-phi.vercel.app/myToys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            toast('Successfully deleted')
                        }

                        const remaining = toys.filter(toy => toy._id !== id);
                        setToys(remaining)

                    })
            }
        }
    }


    if (loading) {
        return <div className="text-center absolute top-1/2 right-1/2">
            <Spinner
                aria-label="Large spinner example"
                size="xl"
            />
        </div>
    }


    return (
        <>


            <NavBar></NavBar>

            <div className='min-h-screen flex flex-col max-w-7xl mx-auto mb-20' >
                <div className=' flex-grow relative overflow-x-auto lg:mt-20'>
                    <h2 className="text-4xl font-bold text-indigo-700  text-center"><span
                        className="inline-block h-full bg-gradient-to-r from-purple-500 via-blue-500 to-blue-700 text-transparent bg-clip-text"
                        style={{
                            WebkitTextFillColor: 'transparent',
                            display: 'inline-flex',
                            alignItems: 'center',
                            lineHeight: '2'
                        }}

                    >
                        Explore and Manage Your Collection:
                    </span></h2>
                    <h2 className="text-4xl font-bold text-indigo-700  text-center"><span
                        className="inline-block h-full bg-gradient-to-r from-purple-500 via-blue-500 to-blue-700 text-transparent bg-clip-text"
                        style={{
                            WebkitTextFillColor: 'transparent',
                            display: 'inline-flex',
                            alignItems: 'center',
                            lineHeight: '2'
                        }}

                    >
                        Sort:
                    </span></h2>
                    {
                        toys.length > 0 &&
                        <div className='flex justify-center mb-10'>
                            <Button onClick={handleSort} gradientDuoTone="purpleToBlue" className=' bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900 mt-10'>{state}</Button>
                    </div>
                    }


                    <Table className=' overflow-x-scrol' hoverable={true}>
                        <Table.Head>
                            <Table.HeadCell className='!pl-20'>
                                PICTURE
                            </Table.HeadCell>
                            <Table.HeadCell>
                                PRODUCT NAME
                            </Table.HeadCell>
                            <Table.HeadCell className=''>
                                Brand
                            </Table.HeadCell>
                            <Table.HeadCell className=''>
                                Ratings
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Category
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Price
                            </Table.HeadCell>
                            <Table.HeadCell className='pl-10'>
                                Update
                            </Table.HeadCell>
                            <Table.HeadCell className="!p-4">
                                Delete
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">


                            {
                                toys && 
                                toys.map((toy, index) => <MyToysList key={toy._id} handleDelete={handleDelete} toy={toy} index={index} ></MyToysList>)
                            }


                        </Table.Body>
                    </Table>






                    {
                        toys.length < 1 &&
                        <>
                            <h1 className='text-xl md:text-6xl font-semibold my-40 text-center md:mt-60'><span
                                className="inline-block h-full bg-gradient-to-r from-purple-500 via-blue-500 to-blue-700 text-transparent bg-clip-text"
                                style={{
                                    WebkitTextFillColor: 'transparent',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    lineHeight: '2'
                                }}
                            >
                                Seems you have no toys added
                            </span></h1>
                            <div className='flex justify-center'><Link to={'/addToy'}><Button gradientDuoTone="purpleToBlue" className='bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900'>Add now<FaArrowRight className=' w-5 h-5 ml-2 pt-1' /></Button></Link></div>
                        </>
                    }

                </div>
            </div>



            <SharedFooter></SharedFooter>
        </>
    );
};

export default MyToys;