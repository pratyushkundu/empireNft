import logo from './logo.svg';
import './App.css';
import './index2.css'
import img1 from './images/image 2.png';
import img2 from './images/image 3.png';
import img3 from './images/image 4.png';
import img4 from './images/image 5.png';
import img5 from './images/image 6.png';
import image1 from './images/PFP1.png';
import image2 from './images/PFP1.png'
import image3 from './images/PFP1.png'
import image4 from './images/PFP1.png'
import image5 from './images/PFP1.png'
import image6 from './images/PFP1.png'
import image7 from './images/PFP1.png'
import image8 from './images/PFP1.png'
import image9 from './images/PFP1.png'
import image10 from './images/PFP1.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import Collection from './collectiondiv/collection';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import React, { Component } from "react";
// import Slider from "react-slick";
import App1 from './App1'
import Card from './collectiondiv/card'
import Apps from './App1';
import Collectors_cards from './collectiondiv/collectors_cards';
import pic2 from './images/Group2.png'
import pic3 from './images/Group3.png'
import pic4 from './images/Group4.png'
import pic5 from './images/Group5.png'
import pict1 from './images/image8.png'
import pict2 from './images/image9.png'
import pict3 from './images/image10.png'
import pict4 from './images/image11.png'
import backgroundImg from './images/Rectangle1.png'
import backgroundImg1 from './images/Rectangle2.png'
import backgroundImg2 from './images/Rectangle3.png'
import backgroundImg3 from './images/Rectangle5.png'
import backgroundImg5 from './images/Rectangle6.png'
import backgroundImg6 from './images/Rectangle7.png'
import backgroundImg7 from './images/Rectangle8.png'
import backgroundImg8 from './images/Rectangle9.png'
import backgroundImg9 from './images/Rectangle10.png'


import Learning_section_group_cards from './collectiondiv/learning_section_group_cards';
import Collection_only_one from './collectiondiv/collection_only_one';
import Featured_projects_card from './collectiondiv/featured_projects_card';

function App() {

  const partnersLogos = [
    { id: 1, logo: img1 },
    { id: 2, logo: img2 },
    { id: 3, logo: img3 },
    { id: 4, logo: img4 },
    { id: 5, logo: img5 },
  ];

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
  const popCollection = [
    { id: 2, collectionName: "CloneX", floorPrice: "4.5 ", VolumePrice: "250,522", percentPrice: "250,522", collectionLogo: image1 },

  ]

  const popularCollection = [
    { id: 2, collectionName: "CloneX", floorPrice: "4.5 ", VolumePrice: "250,522", percentPrice: "+200%", collectionLogo: image1, backgroundCollectionImage: backgroundImg },
    { id: 3, collectionName: "Azuki", floorPrice: "4.5 ", VolumePrice: "250,522", percentPrice: "+200%", collectionLogo: image2, backgroundCollectionImage: backgroundImg1 },
    { id: 4, collectionName: "OtherDeeds", floorPrice: "4.5 ", VolumePrice: "250,522", percentPrice: "+200%", collectionLogo: image3, backgroundCollectionImage: backgroundImg2 },
    { id: 5, collectionName: "IlluminatiNFT", floorPrice: "4.5 ", VolumePrice: "250,522", percentPrice: "+200%", collectionLogo: image4, backgroundCollectionImage: backgroundImg3 },
    { id: 6, collectionName: "Parallel", floorPrice: "4.5 ", VolumePrice: "250,522", percentPrice: "+200%", collectionLogo: image5, backgroundCollectionImage: backgroundImg5 },
    { id: 7, collectionName: "Moonbirds", floorPrice: "4.5 ", VolumePrice: "250,522", percentPrice: "+200%", collectionLogo: image6, backgroundCollectionImage: backgroundImg6 },
    { id: 8, collectionName: "The SNKRZ NFT", floorPrice: "4.5 ", VolumePrice: "250,522", percentPrice: "+200%", collectionLogo: image7, backgroundCollectionImage: backgroundImg7 },
    { id: 9, collectionName: "DeGods", floorPrice: "4.5 ", VolumePrice: "250,522", percentPrice: "+200%", collectionLogo: image8, backgroundCollectionImage: backgroundImg8 },
    { id: 10, collectionName: "Mfers", floorPrice: "4.5 ", VolumePrice: "250,522", percentPrice: "+200%", collectionLogo: image9, backgroundCollectionImage: backgroundImg9 }
  ]

  const collectorsCards1 = [
    { id: 1, collectorName: "Doodleguy", collectorItem: "Items: 303", image: pic2 },
    { id: 2, collectorName: "KidEight", collectorItem: "Items: 303", image: pic3 },
  ];
  const collectorsCard2 = [
    { id: 3, collectorName: "Thugbirdz", collectorItem: "Items: 303", image: pic4 },
    { id: 4, collectorName: "Other Deeds", collectorItem: "Items: 303", image: pic5 }
  ]

  const learningSection = [
    { id: 1, image: pict1, learningHeads: "Set up your wallet" },
    { id: 2, image: pict2, learningHeads: "Create Your Collection" },
    { id: 3, image: pict3, learningHeads: "Add your NFTs" },
  ]


  return (
    <div className="main_div">
      <div className="hero_section">
        <div className="top_div">
          <div className="header_section">
            <div className="top_div_left">
              <img className="empire_logo" src="images/empireLogo.png" />
            </div>
            <div className="top_div_middle">
              <div className="top_div_mid_heads">Home</div>
              <div className="top_div_mid_heads">Marketplace</div>
              <div className="top_div_mid_heads">Launchpad</div>
              <div className="top_div_mid_heads">Partnership</div>
              <div className="top_div_mid_heads">Create</div>
            </div>
            <div className="top_div_right">
              <div id="button_1">Connect wallet</div>
            </div>
          </div>
        </div>
        <div className="bottom_div">
          <div className="catch_phrase">
            <div className="catch_phrase_top">Discover best digital ARTs and Collect NFTs.</div>
            <div className="catch_phrase_down">Start your nft journey and start earning today.</div>
          </div>
          <div className="CTA_button">
            <div id="button_2">Explore Collections</div>
          </div>
          <div className="hero_imgs" >

          </div>
          <div className='line_stroke'>
            <img src="images/Lines.png" className='stroke'></img>
          </div>
          <div className="partners_div">
            <div className="partners_section">
              {partnersLogos.map((data) => <div className="partners_logos">
                <img src={data.logo} className="img_logos" />
              </div>)
              }
            </div>
          </div>
        </div>
      </div>
      <div className="mid_div">
        <div className="search_section">
          <input className="search_bar" placeholder='Search by collection,user or NFT' ></input>
          <div className="search_bar_right">
            <img className="search_bar_right_logo" src="images/elem4.png" />
          </div>
        </div>
        <div className="featured_project_section">
          <div className="featured_project_head_div">
            <div className="featured_projects_head">Featured projects</div>
            <div className="toggles_div">
              <div className="drop_btn">
                <div id="button_3">Drops</div>
              </div>
              <div className="Auction_text">Auctions</div>
            </div>
          </div>
          {/* <div className="featured_projects_carousel" style={{ marginLeft: "12rem" }}> */}
          {/* <div className="projects">
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
          </div> */}
          {/* </div> */}
        </div>

        <div className='popular_collections'>
          <div className='popular_collection_head'>Popular Collections</div>
          <div className='popular_collections_1'>
            <div className='collection_div_1'>
              <Collection_only_one />
            </div>
          </div>
          <div className='popular_collections_2'>
            {
              popularCollection.map((data) =>
                <Collection data={data} />
              )
            }
          </div>
          <div className='collection_btn'>
            <div id="button_4">View all Collections</div>
          </div>
        </div>
        {/* <div className='top_trending_section'>
          <div className='top_trending_top'>
            <div className='top_trending_head'></div>
            <select id="trending">
              <option ></option>
              <option></option>
            </select>
          </div>
          <div className='fade_out'>
            <div className='left_click_div'>
              <img src="images/Polygon 4.png" id="fire" />
            </div>
            <div className='nft_cards_div'>
              <section className="container" id="slider">
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
                <div className="thumbnail">
                  <Card />
                </div>
                <div className="box1">
                  <Card />
                </div>
              </section>
            </div>
            <div className='right_click_div'>
              <img src="images/Polygon 5.png" id="fire1" />
            </div>
          </div>
        </div> */}
        <div className='top_collectors'>
          <div className='top_collectors_head'>Top Collectors</div>
          <div className='collectors_cards_div'>
            <div className='collectors_cards_top'>
              <div className='collectors_cards_top_left'>
                <img src="images/Group1.png" />
              </div>
              <div className='collectors_cards_top_right'>
                <div className='collectors_name'>Lars larry</div>
                <div className='collectors_items'>Items: 374</div>
              </div>
            </div>
            <div className='collectors_cards_bottom'>
              <div className='collectors_cards_bottom_up'>
                {collectorsCards1.map((data) => <div className='collectors_cards'>
                  <Collectors_cards data={data} />
                </div>)
                }
              </div>
              <div className='collectors_cards_bottom_down'>
                {collectorsCard2.map((data) => <div className='collectors_cards'>
                  <Collectors_cards data={data} />
                </div>)
                }
              </div>
            </div>
          </div>
          <div className='collectors_button'>
            <div id="button_5">View all Collectors</div>
          </div>
        </div>
        <div className='learning_section'>
          <div className='create_and_sell_head'>How to Create and Sell your NFTs</div>
          <div className='info_div'>
            <div className='group_up'>

              {learningSection.map((data) => <div className='group_up_infos'>
                <Learning_section_group_cards data={data} />
              </div>)
              }
            </div>
            <div className='group_down'>
              <div className='group_down_infos'>
                <div className='info_imgs_background'>
                  <img src="images/image10.png" className="info_imgs" />
                </div>


                <div className='group_up_infos_head'>List them for sale</div>
                <div className='details'>Start trading your NFTs. Buy,
                  sell, and auction your favorite
                  collections on the most innovative
                  NFT marketplace on BSC.</div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='partnership_banner'>

          <div className='partnership_head'>Are you a project Looking for partnership?</div>
          <div className='get_in_touch'>
            <img src="images/Group.png" className='get_in_touch_img' />
          </div>
          <div className='contact_button'>
            <div id="button_6">Contact Us</div>
          </div>
        </div>
        <div className='partner_div'>
          <img src="images/Mask group.png" className='hide' />
        </div> */}
        <div className='footer'>
          <div className='footer_top'>
            <div className='logo_div'>
              <img className='logo_img' src="images/LogoEmpre.png"></img>
            </div>
            <div className='about_us'>
              <div className='about_us_head'>
                About Us
              </div>
              <div className='about_details_div'>
                <div className='about_us_details'>Home</div>
                <div className='about_us_details'>Rankings</div>
                <div className='about_us_details'>Terms</div>
                <div className='about_us_details'>Privacy Policy</div>
              </div>
            </div>
            <div className='Market_place'>
              <div className='Market_place_head'>
                Marketplace
              </div>
              <div className='Market_details_div'>
                <div className='Market_place_details'>Create NFT</div>
                <div className='Market_place_details'>My account</div>
                <div className='Market_place_details'>Marketplace</div>
              </div>
            </div>
            <div className='community'>
              <div className='community_head'>
                Join the Community
              </div>
              <div className='community_details_div'>
                <div className='social_handles'>
                  <img id="img1" src="images/Telegram.png"></img>
                </div>
                <div className='social_handles'>
                  <img id="img2" src="images/Twitter.png"></img>
                </div>
                <div className='social_handles'>
                  <img id="img3" src="images/Instagram.png"></img>
                </div>
                <div className='social_handles'>
                  <img id="img4" src="images/dribbble.png"></img>
                </div>
              </div>
            </div>
          </div>
          <div className='footer_bottom'>
            <div className='copyright_head'>© Empire NFT Marketplace 2021.</div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;

