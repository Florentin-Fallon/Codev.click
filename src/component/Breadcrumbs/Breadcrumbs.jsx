import { useLocation, Link } from "react-router-dom";
import React from "react";
import { slugToTitle } from "../Service/SlugService";

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return(
        <nav className="text-white my-4 absolute ml-2 ">
            <ul className="flex">
                <li>
                    <Link to="/" className="hover:text-indigo-500 hover:underline hover:font-semibold font-semibold">Accueil</Link>
                </li>
                {
                    pathnames.map((value, index) => {
                        const last = index === pathnames.length - 1
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`
                        const title = slugToTitle(value)

                        return (
                            <li key={to}>
                                <span className="mx-2">/</span>
                                {
                                    last ? (
                                        <span>{title}</span>
                                    ) : (
                                        <Link to={to} className="hover:text-indigo-500 hover:underline">{title}</Link>
                                    )
                                }
                            </li>
                        )
                    })
                }
            </ul>

        </nav>
    )
    
}

export default Breadcrumbs;