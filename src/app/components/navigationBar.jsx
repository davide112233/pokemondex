"use client";

import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";

export default function NavigationBar() {
    const pathname = usePathname();
    const navbarBrand = "pokedex";

    const navbarLinks = [
        { label: "pokemons", path: "/" },
        { label: "search", path: "/search" },
    ];

    return (
        <Navbar fluid className="navigation-bar">
            <NavbarBrand as={Link} href={DOMPurify.sanitize("/")}>
                <span
                    className="navbar-brand"
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(navbarBrand),
                    }}
                />
            </NavbarBrand>
            <NavbarToggle className="burger-button" />
            <NavbarCollapse>
                {navbarLinks.map((link, index) => {
                    const isActive = pathname === link.path;
                    return (
                        <NavbarLink
                            as={Link}
                            key={index}
                            href={DOMPurify.sanitize(link.path)}
                            className={`navbar-link ${isActive ? "active" : "not-active"}`}
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(link.label),
                            }}
                        />
                    );
                })}
            </NavbarCollapse>
        </Navbar>
    );
}
