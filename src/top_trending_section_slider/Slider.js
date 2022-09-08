import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderWrapper from "./SlickSlider"
import './index.css'


import Card from "../collectiondiv/card";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img src="../images/Polygon 5.png"  className={className}
        style={{ ...style, display: "block",width:"4rem",height:"4rem",marginRight:"-5rem",zIndex:2}}
        onClick={onClick}/>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
  
        <img src="../images/Polygon 4.png"  className={className}
            style={{ ...style, display: "block",marginLeft:"-6rem",width:"4rem",height:"4rem",zIndex:1}}
            onClick={onClick}/>
    );
}

function Apps() {
    const settings = {
        className: "slider variable-width",
        centerMode: true,
        // slidesToShow: 2,
        // slidesToScroll: 
        variableWidth: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        // slidesToShow: ,
        slidesToScroll: 2,
        initialSlide: 0,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        adaptiveHeight: true,
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
            <div className="ft-slick__dots--custom">
                <div className="loading" />
            </div>
        )
    };
    return (<>
        <SliderWrapper className="nft_cards_div" >
            <Slider {...settings} >
                <div className="card_box" >
                    <Card />
                </div>

                <div className="card_box">
                    <Card />
                </div>
                <div className="card_box">
                    <Card />
                </div>
                <div className="card_box">
                    <Card />
                </div>
                <div className="card_box">
                    <Card />
                </div>
                <div className="card_box" >
                    <Card />
                </div>
                <div className="card_box">
                    <Card />
                </div>
                <div className="card_box">
                    <Card />
                </div>
            </Slider>
        </SliderWrapper>

    </>);
}

export default Apps

