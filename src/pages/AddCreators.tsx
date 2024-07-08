import { supabase } from "../client";
import { SyntheticEvent, useState } from "react";
import { Creator } from "../components/types";
import { useNavigate } from "react-router-dom";

export const AddCreators = () => {

    const navigate = useNavigate();

    // We have a creator useState variable following the type Creator, which will have the several input values as initially blank since we are initially creating a new creator. 
    const [creator, setCreator] = useState<Creator>({
        name:'', 
        imageURL: '',  
        description: '', 
        youtube_url: '', 
        twitter_url: '', 
        instagram_url: ''
    });

    // This handles the input changes
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setCreator((prev) => ({
            ...prev,
            [name]: value,
        }));
        console.log(creator.name);
        console.log(creator.description);
        console.log(creator.imageURL);
        console.log(creator.youtube_url);
        console.log(creator.twitter_url);
    };

    // Once we hit the submit button, this button will use and add to supabase. Only if the name, image and description are filled in
    const createCreator = async (event: SyntheticEvent) => {
        event.preventDefault();
        if (creator?.name && creator?.description && creator?.imageURL) {
            const { data, error } = await supabase
                .from('creators')
                .insert([{
                    name: creator.name,
                    description: creator.description,
                    imageURL: creator.imageURL,
                    youtube_url: creator.youtube_url,
                    twitter_url: creator.twitter_url,
                    instagram_url: creator.instagram_url,
                }]);

            if (error) {
                console.error(error);
            } else {
                console.log('Creator added successfully:', data);
                // Clear the form after successful submission
                // setCreator({
                //     name: '',
                //     imageURL: '',
                //     description: '',
                //     youtube_url: '',
                //     twitter_url: '',
                //     instagram_url: ''
                // });
                navigate('/');
            }
        } else {
            console.log("Please fill out all required fields.");
        }
    }

    return(
        <div className='w-full h-full flex flex-col items-center bg-gray-100 p-8'>
            <h1 className='text-3xl font-bold mb-6'>Add a Creator!</h1>
            <form onSubmit={createCreator} className='rounded shadow-lg w-full max-w-lg p-6 bg-white'>
                
                {/* Creator Name */}
                <div className='flex flex-col mb-4'>
                    <label htmlFor="name" className='mb-2 font-medium text-gray-700'>Name:</label>
                    <input
                        className='border-gray-300 border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        type="text"
                        placeholder="Enter Crewmate's name"
                        name="name"
                        value={creator?.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                {/* Creator Image */}
                <div className='flex flex-col mb-4'>
                    <label htmlFor="image" className='mb-2 font-medium text-gray-700'>Image URL: (Provide a link to an image of your creator. Be sure to include the http://)</label>
                    <input
                        className='border-gray-300 border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        type="text"
                        placeholder="Enter image URL"
                        name="imageURL"
                        value={creator?.imageURL}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                {/* Creator Description */}
                <div className='flex flex-col mb-4'>
                    <label htmlFor="description" className='mb-2 font-medium text-gray-700'>Description:</label>
                    <textarea
                        className='border-gray-300 border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        placeholder="Enter description"
                        name="description"
                        value={creator?.description}
                        onChange={handleChange}
                        required
                    />
                </div>

                <h2 className='text-xl font-semibold mt-6 mb-4'>Social Media Links (Make sure to only add the handle)</h2>
                
                {/* YouTube URL */}
                <div className='flex flex-col mb-4'>
                    <label htmlFor="youtube" className='mb-2 font-medium text-gray-700'>YouTube:</label>
                    <input
                        className='border-gray-300 border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        type="text"
                        placeholder="Enter YouTube URL"
                        name="youtube_url"
                        value={creator?.youtube_url}
                        onChange={handleChange}
                    />
                </div>
                
                {/* Twitter URL */}
                <div className='flex flex-col mb-4'>
                    <label htmlFor="twitter" className='mb-2 font-medium text-gray-700'>Twitter:</label>
                    <input
                        className='border-gray-300 border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        type="text"
                        placeholder="Enter Twitter URL"
                        name="twitter_url"
                        value={creator?.twitter_url}
                        onChange={handleChange}
                    />
                </div>
                
                {/* Instagram URL */}
                <div className='flex flex-col mb-4'>
                    <label htmlFor="instagram" className='mb-2 font-medium text-gray-700'>Instagram:</label>
                    <input
                        className='border-gray-300 border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        type="text"
                        placeholder="Enter Instagram URL"
                        name="instagram_url"
                        value={creator?.instagram_url}
                        onChange={handleChange}
                    />
                </div>

                <button
                    className='bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded transition-colors duration-300'
                    type='submit'
                >
                    Add Creator
                </button>
            </form>
        </div>
    )
}