import React from 'react'

const card = () => {
    return (
        <div className='nft_card'>
        {/* <div className='card_div'> */}
        <div className="card_div_top">
            <div className='nft_img'></div>
        </div>
        <div className='card_div_bottom'>
            <div className='naming_likes_div'>
                <div className='Naming_div'>
                    <div className='nft_name'>Apelogy</div>
                    <div className='nft_hastag'>#1500 Traveller</div>
                </div>
                <div className='likes_div'>
                    <img className='likes_img' src="images/heart.png" />
                    <div className='likes_number'>88</div>
                </div>
            </div>
        </div>
        <div className='pricing_div'>
            <div className='pricing_inner_div'>
                <div className='pricing_left'>
                    <div className='listed_price_head'>Listed price</div>
                    <div className='listed_price'>154 ETH</div>
                </div>
                <div className='pricing_right'>
                    <div className='highest_price_head'>Highest price</div>
                    <div className='highest_price'>7.544 ETH</div>
                </div>
            </div>
        </div>

        {/* </div> */}
    </div>
    )
}

export default card