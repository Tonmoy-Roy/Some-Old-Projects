import React from 'react';
import './Navbar.css'
import { BeakerIcon,Bars3Icon } from '@heroicons/react/24/solid'


const Navbar = () => {
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About Us", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Blog", path: "/blog" }
        // Add more route objects as needed
    ];

    return (
        <nav>
            <Bars3Icon className="h-6 w-6 text-blue-500" />

            <ul className='md:flex'>
                {
                    // eslint-disable-next-line react/jsx-key
                    routes.map(route => <li className="route_item">{route.name}</li>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;