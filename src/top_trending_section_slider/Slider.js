import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderWrapper from "./SlickSlider"

import Card from "../collectiondiv/card";

function Apps() {
    const settings = {
        className: "slider variable-width",
        centerMode: true,
        // slidesToShow: 2,
        // slidesToScroll: ,
        variableWidth: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        speed: 500,
        arrows: false,
        adaptiveHeight: true,
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
            <div className="ft-slick__dots--custom">
                <div className="loading" />
            </div>
        )
    };
    return (<>
        <SliderWrapper className="nft_cards_div">
            <Slider {...settings}>
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

