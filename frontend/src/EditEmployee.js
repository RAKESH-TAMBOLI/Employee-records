import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Button, Text, Flex, Input, Spacer } from '@chakra-ui/react'

const EditEmployee = () => {
    let navigate = useNavigate()
    // get id
    const { id } = useParams()
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        salary: ''
    })
    // //  Object Destructuring
    const { firstname, lastname, email, phone, salary } = user
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        const fetchEmployee = async () => {
            const { data } = await axios.get(`/api/employess/${id}`)
            setUser(data)
        }
        fetchEmployee()
    }, [])

    const updateEmployee = async e => {
        e.preventDefault()
        await axios.put(`/api/employess/${id}`, user)
        navigate('/')
    }

    return (
        <div class='flex justify-center'>
            <Flex
                alignItems='center'
                mt='20'
                direction='column'
                boxShadow='lg'
                rounded='md'
                p='10'
                ml='10'
                bgColor='white'
                width='sm'>
                <div class='flex items-center flex-col'>
                    <Text class='text-xl mb-3 font-semibold'>Employee Id:</Text>
                    <Text class='text-xl text-gray-400 font-semibold'>
                        {id}
                    </Text>
                </div>
                <Input
                    width='64'
                    type='text'
                    mb='2'
                    mt='4'
                    name='firstname'
                    placeholder='john'
                    value={firstname}
                    onChange={e => onInputChange(e)}
                />
                <Spacer h='3' />
                <Input
                    type='text'
                    width='64'
                    mb='2'
                    name='lastname'
                    placeholder='doe'
                    value={lastname}
                    onChange={e => onInputChange(e)}
                />
                <Spacer h='3' />
                <Input
                    width='64'
                    type='text'
                    mb='2'
                    name='email'
                    placeholder='email'
                    value={email}
                    onChange={e => onInputChange(e)}
                />
                <Spacer h='3' />
                <Input
                    type='text'
                    width='64'
                    mb='2'
                    name='phone'
                    placeholder='phone'
                    value={phone}
                    onChange={e => onInputChange(e)}
                />
                <Spacer h='3' />
                <Input
                    type='text'
                    width='64'
                    mb='2'
                    name='salary'
                    placeholder='salary'
                    value={salary}
                    onChange={e => onInputChange(e)}
                />
                {/* </FormControl> */}
                <Button
                    type='submit'
                    onClick={updateEmployee}
                    mt='4'
                    colorScheme='teal'>
                    Update
                </Button>
                {/* </form> */}
            </Flex>
        </div>
    )
}
export default EditEmployee
