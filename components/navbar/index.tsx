'use client'

import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react"
import { LogoRealEstate } from '../icons/logo'

export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const menuItems = [
        "Buy",
        "Sell",
        "Rent",
        "Agents",
        "Contact Us"
    ]

    return (
        <header>
            <Navbar
                position="static"
                maxWidth='full'
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
            >
                <NavbarContent className="sm:hidden pr-3" justify="center">
                    <NavbarBrand>
                        <LogoRealEstate size={34} fill='#2553AA' />
                        <p className="font-bold text-inherit">HomelyHub</p>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-8" justify="end">
                    <NavbarBrand>
                        <LogoRealEstate size={34} fill='#2553AA' />
                        <p className="font-bold text-inherit ml-2 text-primary-700">HomelyHub</p>
                    </NavbarBrand>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Buy
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Sell
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Rent
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Agents
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className='bg-primary-700 rounded-lg py-3 px-4 text-white' href="#">
                            Contact Us
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent className="sm:hidden" justify="end">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                </NavbarContent>

                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className={`w-full ${index === 4 ? 'bg-primary-700 rounded-lg py-3 px-4 text-white text-center' : ''}`}
                                color="foreground"
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </header>
    )
}
