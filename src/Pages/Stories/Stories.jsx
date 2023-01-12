import React from "react";
import { useNavigate } from "react-router-dom";
import storiesimg from "../../Images/storiesimg.jpeg";
import "./Stories.css";
export default function Stories() {
  const navigate = useNavigate();
  return (
    <>
      <div className="storiesContainer">
        <h2>Customers'</h2>
        <h1>beautiful stories</h1>
        <div className="storiesDetail_imagecontainer">
          <div className="storiesDetail">
            <div className="storiedetailcard">
              <div className="avtar_name">
                <img
                  src="https://www.pixinvent.com/materialize-material-design-admin-template/laravel/demo-4/images/user/12.jpg"
                  alt=""
                />
                <div className="cardname">
                  <h3>Olivia dalda</h3>
                  <p>the explorer</p>
                </div>
              </div>
              <p>
                It’s literally amazing and i’m not kidding. they’re all super
                super nice and so talented in a way it’s unexplainable. i got a
                haircut today and they literally saved my hair. it was so
                damaged and they made it like new, and the haircut looks
                flawless. it’s so worth it!!💕
              </p>
            </div>
            <div className="storiedetailcard">
              <div className="avtar_name">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTncxHwv7BXAjmaSBtTzrsp1mVdUkJGEKrUuA&usqp=CAU"
                  alt=""
                />
                <div className="cardname">
                  <h3>jaimee hood</h3>
                  <p>business manager, the explorer</p>
                </div>
              </div>
              <p>
                I explained that I wanted to donate my hair,and promised to
                cry. She made great suggestions and quickly got down to
                business. Despite tears,she was kind and patient and I got a
                great,fun cut ... I've been to the solon before for other
                services-amassage ,manicure/pedicure, which were all pleasant
                experiences. It'sacool salon without pretension.Their prices are
                very reasonable and everyone is friendly and professional.
              </p>
            </div>
            <button onClick={() =>{
             return navigate("/services")
            }}>Schedule an appointment</button>
          </div>
        <img src={storiesimg} alt="" />
        </div>
      </div>
    </>
  );
}
