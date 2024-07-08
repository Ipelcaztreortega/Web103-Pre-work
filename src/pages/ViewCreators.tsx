import { Link, useLocation } from "react-router-dom";
import { Creator } from "../components/types";
import DeleteCreator from "../components/DeleteCreator";

// Imported icons
import youtubeDarkIcon from '../assets/icons/youtube_dark.png';
import instagramDarkIcon from '../assets/icons/instagram_dark.png';
import twitterDarkIcon from '../assets/icons/twitter_dark.png';

export const ViewCreators = () => {

    // We use location to find this component, then use the creator const to hold the data of the passed Creator type data
    const location = useLocation();
    const creator = location.state as Creator;

    return (
        // We then use the creator const and display the content
        <div className='flex justify-center items-center font-WorkSans bg-blue-200 min-h-screen p-4'>
            <div className='border-2 border-black w-full md:w-1/2 p-4 bg-white rounded-lg shadow-lg flex flex-col md:flex-row gap-4'>
                
                <div className='flex justify-center md:justify-start'>
                    <img className='w-full md:w-80 h-80 object-cover rounded-lg' src={creator.imageURL} alt='Photo' />
                </div>

                <div className='flex flex-col justify-between w-full p-4'>
                    <div>
                        <p className='text-2xl font-bold mb-2'>{creator.name}</p>
                        <p className='text-gray-700 mb-4'>{creator.description}</p>
                    </div>

                    {/* Social Media Links */}
                    <div className='flex gap-4 mb-4'>
                        <a href={`https://www.youtube.com/@${creator.youtube_url ?? creator.youtube_url}`} target="_blank" rel="noreferrer">
                            {creator.youtube_url && <img src={youtubeDarkIcon} alt="YouTube" className="h-6 w-6" />}
                        </a>
                        <a href={`https://www.instagram.com/${creator.instagram_url ?? creator.instagram_url}`} target="_blank" rel="noreferrer">
                            {creator.instagram_url && <img src={instagramDarkIcon} alt="Instagram" className="h-6 w-6" />}
                        </a>
                        <a href={`https://x.com/${creator.twitter_url ?? creator.twitter_url}`} target="_blank" rel="noreferrer">
                            {creator.twitter_url && <img src={twitterDarkIcon} alt="Twitter" className="h-6 w-6" /> }
                        </a>
                    </div>

                    {/* Action Buttons */}
                    <div className='flex gap-4'>
                        <Link to='/editcreator' state={creator}>
                            <button className='bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded transition-colors duration-300'>
                                Edit
                            </button>
                        </Link>
                        <DeleteCreator />
                    </div>
                </div>
            </div>
        </div>
    );
};

