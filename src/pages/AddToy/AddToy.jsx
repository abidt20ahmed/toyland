import { Button, Label } from 'flowbite-react';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import SharedFooter from '../../components/SharedFooter';
import NavBar from '../../components/NavBar';
import { AuthContext } from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const AddToy = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    useTitle('AddToy')



    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;
        const ratings = form.ratings.value;
        if (ratings < 6) {

            console.log('Valid ratings:', ratings);

        } else {

            return toast('Invalid ratings! valid(0-5)');

        }
        const category = form.category.value;
        const weight = form.weight.value;
        const description = form.description.value;
        const date = new Date();
        const seller = user?.displayName;
        const email = user?.email;
        const data = {
            productName: name,
            brand,
            price,
            quantity,
            photo,
            ratings,
            category,
            weight,
            description,
            date,
            seller,
            email


        }


        fetch('https://toy-market-server-phi.vercel.app/postToy', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                navigate('/myToys')
                toast('Toy Posted Successfully')
            })
            .catch(error => {
                console.log('Error:', error);
            });



    }


    return (


        <>
            <NavBar></NavBar>
            <section className="bg-slte-100 dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16 bg-slate-100 m-10 rounded-xl">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
                    <form className='' onSubmit={handleAddToy}>
                        <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
                            <div className="sm:col-span-3">
                                <Label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</Label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required />
                            </div>
                            <div className="sm:col-span-2">
                                <Label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo Url</Label>
                                <input type="text" name="photo" id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Photo Url" required />
                            </div>
                            <div className="w-full">
                                <Label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</Label>
                                <input type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required />
                            </div>
                            <div className="sm:col-span-2">
                                <Label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</Label>
                                <select id="category" name='category' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    {/* <option className='hidden' defaultValue="Select category">Regular Car</option> */}
                                    <option value="Regular">Regular Car</option>
                                    <option value="Sports">Sports Car</option>
                                    <option value="Truck">Monster Truck</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <Label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</Label>
                                <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$0.00" required />
                            </div>
                            <div className="w-full">
                                <Label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Available Quantity</Label>
                                <input type="number" name="quantity" id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Quantity" required />
                            </div>
                            <div className="w-full">
                                <Label htmlFor="ratings" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ratings</Label>
                                <input type="text" name="ratings" id="ratings" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="5" required />
                            </div>
                            <div>
                                <Label htmlFor="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Weight (gm)</Label>
                                <input type="number" name="weight" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="12" required="" />
                            </div>
                            <div className="sm:col-span-3">
                                <Label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</Label>
                                <textarea id="description" rows="5" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
                            </div>
                            <Button gradientDuoTone="purpleToBlue" type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-2xl font-medium text-center text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900">
                                Add Toy
                            </Button>
                        </div>
                    </form>
                </div>
            </section>
            <SharedFooter></SharedFooter>
        </>
    );
};

export default AddToy;