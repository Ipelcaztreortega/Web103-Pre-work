import { useLocation } from "react-router-dom";
import { supabase } from "../client";
import { Creator } from "./types";
import { useNavigate } from "react-router-dom";

const DeleteCreator = () => {

    // We use location to find this component, the use the creator const to hold the data of the passed Creator type data
    const location = useLocation();
    const creator = location.state as Creator;
    const navigate = useNavigate();

    // When we click on the button Delete, then we will run this function which target THE ID and removes it from the table then navigates us to the home page
    const deleteCreator = async() => {
        await supabase
            .from('creators')
            .delete()
            .eq('id', creator.id)
        
        navigate('/');
    }
        

    return(
        <div className=''>
            <button className='bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded transition-colors duration-300' onClick={deleteCreator}>Delete</button>
        </div>
    )
}

export default DeleteCreator;