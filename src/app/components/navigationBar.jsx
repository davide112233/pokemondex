"use client";

import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";

export default function NavigationBar() {
    const navbarBrand = "pokedex";

    const navbarLinks = [
        { label: "pokemons", path: "/" },
        { label: "search", path: "/search" },
    ];
    
    return (
        <Navbar fluid className="navigation-bar">
            <NavbarBrand as={Link} href={DOMPurify.sanitize("/")}>
                <span className="navbar-brand" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(navbarBrand) }} />
            </NavbarBrand>
            <NavbarToggle className="burger-button" />
            <NavbarCollapse>
                {navbarLinks.map((links, index) => (
                    <NavbarLink className="navbar-link" key={index} href={DOMPurify.sanitize(links.path)} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(links.label) }} />
                ))}
            </NavbarCollapse>
        </Navbar>
    );
}
