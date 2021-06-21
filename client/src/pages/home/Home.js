import React from 'react';
import Header from '../../header/Header';
import SideBar from '../../sideBar/SideBar';
import Posts from '../../posts/Posts';
import './home.css';

export default function Home() {
    return (
        <>
            <Header />
            <div className="home">
                <Posts />
                <SideBar />
            </div>
        </>
    )
}
