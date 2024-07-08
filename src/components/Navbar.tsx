import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="w-full bg-red-200 shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6 font-WorkSans">
                <div className="text-xl font-bold text-gray-800">
                    <p>CreatorVerse</p>
                </div>
                <div className="flex space-x-4 text-gray-800">
                    <Link className="hover:text-red-500 transition-colors duration-300" to="/">View Creators</Link>
                    <Link className="hover:text-red-500 transition-colors duration-300" to="/addcreator">Add Creator</Link>
                </div>
            </div>
        </nav>
    );
};
