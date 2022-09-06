import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderWrapper from "./SlickSlider";
import './index.css'
import Featured_projects_card from "../collectiondiv/featured_projects_card";

const App2 = () => {
    const settings = {
        className: "slider variable-width",
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
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

    return (
        <SliderWrapper className="featured_projects_carousel">
            <Slider {...settings} >

                <div >
                    <div className="featured_projects">
                        <Featured_projects_card />
                    </div>
                </div>
                <div >
                    <div className="featured_projects">
                        <Featured_projects_card />
                    </div>
                </div>
                <div>
                    <div className="featured_projects">
                        <Featured_projects_card />
                    </div>
                </div>
                <div>
                    <div className="featured_projects">
                        <Featured_projects_card />
                    </div>
                </div>
            </Slider>
        </SliderWrapper>
    );
}

export default App2;