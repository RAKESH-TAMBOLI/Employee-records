import React, { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import axios from 'axios'
import {
    Button,
    Text,
    Flex,
    Input,
    Link,
    Spacer,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Box,
    IconButton,
    InputGroup,
    Icon
} from '@chakra-ui/react'
import { GoSearch } from 'react-icons/go'
import { AiFillDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
const EmployeeDetail = () => {
    const [search, setSearch] = useState('')
    const [records, setRecord] = useState([])
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

    // On Page load display all records
    const loadEmployeeDetail = async () => {
        const { data } = await axios.get('/api/employess/')
        setRecord(data)
    }

    useEffect(() => {
        loadEmployeeDetail()
    }, [])

    // Insert Employee Records
    const submitEmployeeRecord = async e => {
        e.preventDefault()
        e.target.reset()
        await axios.post('/api/employess/', user)
        loadEmployeeDetail()
    }

    // // Search Records here
    const searchRecords = () => {
        axios.get(`/api/employess/searchRecord/${search}`).then(response => {
            setRecord(response.data)
        })
    }

    // // Delete Employee Record
    const deleteRecord = employeeId => {
        axios
            .delete(`/api/employess/${employeeId}`)
            .then(result => {
                loadEmployeeDetail()
            })
            .catch(() => {
                alert('Error in the Code')
            })
    }
    return (
        <div class='flex items-center justify-around'>
            <Flex
                mt='20'
                direction='column'
                boxShadow='lg'
                rounded='md'
                p='10'
                ml='10'
                bgColor='white'
                width='sm'>
                <div class='flex items-center'>
                    <Text class='text-xl mb-3 font-semibold'>
                        Insert Employee Recodes
                    </Text>
                </div>
                <form onSubmit={submitEmployeeRecord}>
                    <Spacer h='3' />
                    <Input
                        width='64'
                        type='text'
                        name='firstname'
                        placeholder='john'
                        value={firstname}
                        onChange={e => onInputChange(e)}
                    />
                    <Spacer h='3' />
                    <Input
                        type='text'
                        width='64'
                        name='lastname'
                        placeholder='doe'
                        value={lastname}
                        onChange={e => onInputChange(e)}
                    />
                    <Spacer h='3' />
                    <Input
                        width='64'
                        type='text'
                        name='email'
                        placeholder='email'
                        value={email}
                        onChange={e => onInputChange(e)}
                    />
                    <Spacer h='3' />
                    <Input
                        type='text'
                        width='64'
                        name='phone'
                        placeholder='phone'
                        value={phone}
                        onChange={e => onInputChange(e)}
                    />
                    <Spacer h='3' />
                    <Input
                        type='text'
                        width='64'
                        name='salary'
                        placeholder='salary'
                        value={salary}
                        onChange={e => onInputChange(e)}
                    />
                    <Button type='submit' mt='4' colorScheme='teal'>
                        Insert Record
                    </Button>
                </form>
            </Flex>
            <div class='flex flex-col'>
                {/* serachBox */}
                <Text class='text-2xl mb-2 tracking-wider font-semibold'>
                    View Records
                </Text>
                <div class='flex items-center mb-6'>
                    <InputGroup>
                        <Input
                            type='text'
                            width='65'
                            placeholder='search employee here'
                            onChange={e => setSearch(e.target.value)}
                        />
                        <IconButton
                            ml='2'
                            colorScheme='teal'
                            aria-label='Call Segun'
                            size='md'
                            onClick={searchRecords}
                            icon={<GoSearch />}
                        />
                    </InputGroup>
                </div>
                {/* table  */}
                <div>
                    <Box bgColor='white' rounded='lg' shadow='lg' px='5' py='5'>
                        <Table variant='striped' colorScheme='gray' size='md'>
                            <Thead>
                                <Tr>
                                    <Th>NAME</Th>
                                    <Th>LAST NAME</Th>
                                    <Th>EMAIL</Th>
                                    <Th>PHONE</Th>
                                    <Th>SALARY</Th>
                                    <Th>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {records.map(employee => (
                                    <Tr>
                                        <Td>{employee.firstname}</Td>
                                        <Td>{employee.lastname}</Td>
                                        <Td>{employee.email}</Td>
                                        <Td>{employee.phone}</Td>
                                        <Td>{employee.salary}</Td>
                                        <Td>
                                            <Flex
                                                justify='space-between'
                                                alignItems='center'>
                                                <Link
                                                    onClick={() => {
                                                        const confirmBox =
                                                            window.confirm(
                                                                'Do you really want to delete ' +
                                                                    employee.firstname
                                                            )
                                                        if (
                                                            confirmBox === true
                                                        ) {
                                                            deleteRecord(
                                                                employee._id
                                                            )
                                                        }
                                                    }}>
                                                    <Icon
                                                        color='red'
                                                        as={AiFillDelete}
                                                        w={5}
                                                        h={5}
                                                    />
                                                </Link>
                                                <Link
                                                    as={RouterLink}
                                                    to={`/employee/editid/${employee._id}`}>
                                                    <Icon
                                                        color='green'
                                                        as={FiEdit}
                                                        w={5}
                                                        h={5}
                                                    />
                                                </Link>
                                            </Flex>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </Box>
                </div>
            </div>
        </div>
    )
}
export default EmployeeDetail
