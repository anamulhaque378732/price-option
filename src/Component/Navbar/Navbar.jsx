import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/Ai';


const Navbar = () => {

    const [open, setOpen] = useState(false);

    const routes = [{ path: '/', name: 'Home', id: 1 }, { path: '/about', name: 'About', id: 2 }, { path: '/contact', name: 'Contact', id: 3 }, { path: '/products', name: 'Products', id: 4 }, { path: '*', name: 'NotFound', id: 5 }];



    return (


        <nav className="text-black bg bg-yellow-300 p-6">

            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ?
                        <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>

                }
                </div>

            <ul className= {` md:flex absolute  md:static ${open? 'top-12':'-top-60'} bg-yellow-300 px-6`}>

                {
                    routes.map(route => <Link key={route.id} route={route}  ></Link>)
                }
            </ul>

        </nav>

    )




};

export default Navbar;