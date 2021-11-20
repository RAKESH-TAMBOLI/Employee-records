import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link, Text } from '@chakra-ui/react'

const MenuLink = ({ children, url }) => {
    return (
        <Link
            as={RouterLink}
            class='no-underline mx-10 text-md font-semibold 
           items-center hover:text-gray-200 transition duration-500 ease-in-out'
            to={url}>
            {children}
        </Link>
    )
}
const Header = () => {
    return (
        <div class='flex flex-row shadow-md fixed w-full top-0 z-10 py-4 px-4 bg-gray-700'>
            <MenuLink url='/'>
                <Text>Home</Text>
            </MenuLink>
            <MenuLink url='/'>
                <Text>Address</Text>
            </MenuLink>
            <MenuLink url='/'>
                <Text>Details</Text>
            </MenuLink>
            <MenuLink url='/'>
                <Text>Contact</Text>
            </MenuLink>
        </div>
    )
}
export default Header
