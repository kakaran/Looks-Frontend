import React from 'react';
import axios from 'axios';
import Footer from '../../../Components/Footer/Footer'
import Navbar from '../../../Components/Navbar/Navbar'
import "./Service_Page.css"
import { useEffect } from 'react';

const Service_Page = () => {

    useEffect(() => {
        const loadpackages = async () =>{
            try {
                const data = (await axios()).data
            } catch (error) {
                console.log(error)
            }
        }
      },[])
          return (
        <>
            <div style={{backgroundColor : "#e9cebc", padding : "0px 25px"}}>
                <Navbar />
            </div>
            <div className="Services_PageContainer">
                <h1>Services</h1>
                <h3>Packages</h3>
                <div className="packages_Container">
                    <div className="Package_Card">
                        <img src="" alt="" />
                        <p>Detail</p>
                        <p>Price</p>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Service_Page