import React from 'react'
import Navbar from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import SearchMenu from '../componentsMenu/SearchMenu'

export default function ProfilePage() {
    return (
        <BrowserRouter>
            <Navbar />
            <SearchMenu />
        </BrowserRouter>
    )
}
