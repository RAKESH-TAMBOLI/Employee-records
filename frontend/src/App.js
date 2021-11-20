import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container, Flex } from '@chakra-ui/react'
import Footer from './components/Footer'
import Header from './components/Header'
import EmployeeDetail from './EmployeeDetail'
import EditEmployee from './EditEmployee'
function App() {
    return (
        <BrowserRouter>
            <Header />
            <Container maxW='8xl' bgColor='gray.100'>
                <Flex
                    as='main'
                    as='main'
                    minH='xl'
                    py='5'
                    px='5'
                    direction='column'>
                    <Routes>
                        <Route exact path='/' element={<EmployeeDetail />} />
                        <Route
                            path='/employee/editid/:id'
                            element={<EditEmployee />}
                        />
                    </Routes>
                </Flex>
            </Container>
            <Footer />
        </BrowserRouter>
    )
}

export default App
