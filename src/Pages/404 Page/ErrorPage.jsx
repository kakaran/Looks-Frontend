import React from "react";
import { Button, Result } from "antd";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
    const navigate = useNavigate();
  return (
    <>
      <div style={{ backgroundColor: "#e9cebc", padding: "0px 25px" }}>
        <Navbar />
      </div>
      <Result
        status="404"
        title="404"
        subTitle="We're sorry, the page you requested could not be found. Please go back to the Homepage "
        extra={<Button type="primary" onClick={()=>{navigate("/")}}>Back Home</Button>}
      />
      <Footer/>
    </>
  );
};

export default ErrorPage;
