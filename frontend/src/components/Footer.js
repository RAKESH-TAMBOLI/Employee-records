import React from 'react'
import { Flex } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Flex
            as='footer'
            align='center'
            // bgColor='gray.100'
            py='5'
            justifyContent='center'>
            <p>Copyright &copy; rakesh tamboli. All Rights Reserved.</p>
        </Flex>
    )
}

export default Footer
