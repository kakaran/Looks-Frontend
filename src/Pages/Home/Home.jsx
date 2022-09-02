import React from 'react';
import Footer from '../../Components/Footer/Footer';
import NavHome from '../../Components/Nav_Home/NavHome';
import Experience from '../Experience/Experience'
import Services from '../Services/Services';
import Stories from '../Stories/Stories';

export default function Home() {
    return (
        <>
            <NavHome/>
            <Services />
            <Stories />
            <Experience />
            <Footer />
        </>
    )
}
