import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react"
import { LogoRealEstate } from '../icons/logo'

export default function NavbarComponent() {
    return (
        <header>
            <Navbar position="static" maxWidth='full'>
                <NavbarBrand>
                    <LogoRealEstate size={34} fill='#2553AA' />
                    <p className="font-bold text-inherit ml-2 text-primary-700">HomelyHub</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-8" justify="end">
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
                    {/* <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            Sell
                        </Link>
                    </NavbarItem> */}
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
            </Navbar>
        </header>
    )
}
