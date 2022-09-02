// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import React, { Component } from "react";
// import Slider from "react-slick";
import './index1.css';
import './index2.css';
import App from "./App";
import Card from "./collectiondiv/card";
import Featured_projects_card from "./collectiondiv/featured_projects_card";

function Apps() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        className:"center"
    };
    return (<>
        {/* <div style={{ backgroundColor: "yellow", border: "2px solid green",marginLeft:"2rem" ,marginTop:"10rem",width:"120rem"}}> */}
            {/* <Slider {...settings} style={{ border: "2px solid black" }}> */}
                <div >
                    <Featured_projects_card/>
                </div>
                <div >
                <Featured_projects_card/>
                </div>
                <div >
                <Featured_projects_card/>
                </div>
                <div >
                <Featured_projects_card/>
                </div>
                <div >
                <Featured_projects_card/>
                </div>
                <div >
                <Featured_projects_card/>
                </div>
                <div >
                <Featured_projects_card/>
                </div>
                <div >
                <Featured_projects_card/>
                </div>
            {/* </Slider> */}
        {/* </div> */}
        {/* <div class="slide-container">
            <img id="slide-left" class="arrow" src="images/Polygon 4.png" />
            <section className="container" id="slider">
                <div className="thumbnail">
                    < />
                </div>
                <div className="thumbnail">
                    <Card />
                </div>
                <div className="thumbnail">
                    <Card />
                </div>
                <div className="thumbnail">
                    <Card />
                </div>
                <div className="thumbnail">
                    <Card />
                </div>
                <div className="thumbnail">
                    <Card />
                </div>
                <div className="thumbnail">
                    <Card />
                </div>
                <div className="thumbnail">
                    <Card />
                </div>
                <div className="box1">
                    <Card />
                </div>
            </section>
            <img id="slide-right" class="arrow" src="images/Polygon 5.png" />
        </div> */}
    </>);
}

export default Apps

// import React from 'react'
// import "./index1.css";
// import './index2.css'
// import Card from "./collectiondiv/card";


// const Cards = () => {
//     return (
//         <div >
//         <Card/>
//         <div className='nft_card'>
//             {/* <div className='card_div'> */}
//             <div className="card_div_top">
//                 <div className='nft_img'></div>
//             </div>
//             <div className='card_div_bottom'>
//                 <div className='naming_likes_div'>
//                     <div className='Naming_div'>
//                         <div className='nft_name'>Apelogy</div>
//                         <div className='nft_hastag'>#1500 Traveller</div>
//                     </div>
//                     <div className='likes_div'>
//                         <img className='likes_img' src="images/heart.png" />
//                         <div className='likes_number'>88</div>
//                     </div>
//                 </div>
//             </div>
//             <div className='pricing_div'>
//                 <div className='pricing_inner_div'>
//                     <div className='pricing_left'>
//                         <div className='listed_price_head'>Listed price</div>
//                         <div className='listed_price'>154 ETH</div>
//                     </div>
//                     <div className='pricing_right'>
//                         <div className='highest_price_head'>Highest price</div>
//                         <div className='highest_price'>7.544 ETH</div>
//                     </div>
//                 </div>
//             </div>

//             {/* </div> */}
//         </div>
//         </div>
//     )
// }

// export default Cards
const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };