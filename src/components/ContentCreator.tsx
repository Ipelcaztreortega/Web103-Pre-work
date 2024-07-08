import { useEffect, useState } from "react";
import { supabase } from "../client";
import { Creator } from "./types";
import { Link } from "react-router-dom";

// Imported icons
import youtubeIcon from '../assets/icons/youtube.png';
import instagramIcon from '../assets/icons/instagram.png';
import twitterIcon from '../assets/icons/twitter.png'


export const ContentCreator = () => {

    // Creating state to hold all the creators
    const [creators, setCreators] = useState<Creator[]>([]);

    // From the table we then grab/GET ALL the users from the table
    const readCreator = async() => {
        const { data, error } = await supabase
            .from('creators')
            .select('*');

        if (error) {
            console.log('Error fetching creators')
        } else {
            setCreators(data || []);
            console.log(data)
        }
    }

    useEffect(() =>{
        readCreator();
    }, [])
    return(

        <div className='flex justify-center flex-wrap m-2 gap-4'>
            {creators.map((creator) => (
                <div
                    key={creator.id}
                    className='relative border-2 border-black rounded w-1/4 h-64 p-4 bg-cover bg-no-repeat font-WorkSans'
                    style={{ backgroundImage: `url(${creator.imageURL})` }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-50 rounded"></div>

                    <div className="relative z-10">
                        <div>
                            <p className='font-bold text-white'>{creator.name}</p>
                            <p className='text-white'>{creator.description}</p>
                        </div>
                        

                        <div className='w-1/3 flex justify-between'>
                            {/* Media Links */}
                            <a className='text-white' href={`https://www.youtube.com/@${creator.youtube_url ?? creator.youtube_url}`} target="_blank" rel="noreferrer">
                            {/* Will only render the image if condition is true, using logical operator && */}
                                {creator.youtube_url && <img src={youtubeIcon} alt="YouTube" className="h-6 w-6" />}
                            </a>

                            <a className='text-white' href={`https://www.instagram.com/${creator.instagram_url ?? creator.instagram_url}`} target="_blank" rel="noreferrer">
                                { creator.instagram_url && <img src={instagramIcon} alt="Instagram" className="h-6 w-6 color-white" /> }
                            </a>

                            <a className='text-white' href={`https://x.com/${creator.twitter_url ?? creator.twitter_url}`} target="_blank" rel="noreferrer">
                                {creator.twitter_url && <img src={twitterIcon} alt="Twitter" className="h-6 w-6" />}
                            </a>
                        </div>

                        <div className='mt-2'>
                            <Link to={`/viewcreator/${creator.name}`} state={creator} className='border-white border-2 rounded'>
                                <button className='text-white px-2 py-1'>Info</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}