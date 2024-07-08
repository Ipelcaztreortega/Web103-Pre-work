import { useLocation, useNavigate } from "react-router-dom";
import { Creator } from "../components/types";
import { SyntheticEvent, useState} from "react";
import { supabase } from "../client";
import DeleteCreator from "../components/DeleteCreator";

export const EditCreators = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // We get this passed Creator data from ViewCreator
    const initialCreator = location.state as Creator;

    // We set creator as initially the initial/preexisting data for this specific card that we clicked edit on
    const [creator, setCreator] = useState<Creator>({
        id: initialCreator.id,
        name: initialCreator.name,
        imageURL: initialCreator.imageURL,
        description: initialCreator.description,
        youtube_url: initialCreator.youtube_url,
        twitter_url: initialCreator.twitter_url,
        instagram_url: initialCreator.instagram_url,
    });

    // This handles the input changes
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setCreator((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Once we submit the form this function will update the table creators and it's data WHERE the id matches that specific card id
    const updateCreator = async (event: SyntheticEvent) => {
        event.preventDefault();
        if (creator?.name && creator?.description && creator?.imageURL) {
            const { data, error } = await supabase
                .from('creators')
                .update([{
                    name: creator.name,
                    description: creator.description,
                    imageURL: creator.imageURL,
                    youtube_url: creator.youtube_url,
                    twitter_url: creator.twitter_url,
                    instagram_url: creator.instagram_url,
                }])
                .eq('id', creator.id);  // Ensure you update the correct creator

            if (error) {
                console.error(error);

            // Then once we successfully update and click submit, we get a success response and navigate back to the home page. 
            } else {
                console.log('Creator updated successfully:', data);
                navigate('/');
            }
        } else {
            console.log("Please fill out all required fields.");
        }
    };

    return (
            <div className='w-full h-full flex flex-col items-center bg-gray-100 p-8'>
            <h1 className='text-3xl font-bold mb-6'>Edit Creator!</h1>
            <form onSubmit={updateCreator} className='rounded shadow-lg w-full max-w-lg p-6 bg-white'>
                
                {/* Creator Name */}
                <div className='flex flex-col mb-4'>
                    <label htmlFor="name" className='mb-2 font-medium text-gray-700'>Name:</label>
                    <input
                        className='border-gray-300 border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        type="text"
                        placeholder="Enter Crewmate's name"
                        name="name"
                        value={creator.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Creator Image */}
                <div className='flex flex-col mb-4'>
                    <label htmlFor="image" className='mb-2 font-medium text-gray-700'>Image URL:</label>
                    <input
                        className='border-gray-300 border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        type="text"
                        placeholder="Enter image URL"
                        name="imageURL"
                        value={creator.imageURL}
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
                        value={creator.description}
                        onChange={handleChange}
                        required
                    />
                </div>

                <h2 className='text-xl font-semibold mt-6 mb-4'>Social Media Links</h2>

                {/* YouTube URL */}
                <div className='flex flex-col mb-4'>
                    <label htmlFor="youtube" className='mb-2 font-medium text-gray-700'>YouTube:</label>
                    <input
                        className='border-gray-300 border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        type="text"
                        placeholder="Enter YouTube URL"
                        name="youtube_url"
                        value={creator.youtube_url}
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
                        value={creator.twitter_url}
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
                        value={creator.instagram_url}
                        onChange={handleChange}
                    />
                </div>

                {/* Submit Button */}
                <button
                    className='bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded transition-colors duration-300'
                    type='submit'
                >
                    Update Creator
                </button>

                {/* Delete Button */}
                <div className='w-full mt-4'>
                    <DeleteCreator />
                </div>
            </form>
        </div>

    );
};
