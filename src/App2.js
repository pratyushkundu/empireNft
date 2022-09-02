// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import './index2.css'
import Featured_projects_card from "./collectiondiv/featured_projects_card";
const App2 = () => {
    // const settings = {
    //     className: "slider variable-width",
    //     dots: true,
    //     infinite: true,
    //     centerMode: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     variableWidth: true
    //   };

    return (
        // <div className="featured_projects_carousel" >
            <div className="projects">
                <section id="">
                    <div className="featured_projects">
                        <Featured_projects_card />
                    </div>
                    <div className="featured_projects">
                        <Featured_projects_card />
                    </div>
                    <div className="featured_projects">
                        <Featured_projects_card />
                    </div>
                </section>
            </div>
        // </div>
    );
}

export default App2;