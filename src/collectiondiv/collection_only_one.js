import React from 'react'

const Collection_only_one = () => {
  return (
    
            <div className='popular_collection_section'>
                <div className='verified_img'>
                    <img src="images/PFP1.png" />
                </div>
                <div className='popular_collection_section_description'>
                    <div className='collection_number'>1</div>
                    <div className='popular_collection_section_head'>CloneX</div>
                    <div className='description_section'>
                        <div className='floor'>
                            <div className='floor_head'>Floor price</div>
                            <div className='floor_price'>
                                <img className='eth_img' src="images/eth.png" />
                                <div className='price_eth'>4.5 </div>
                            </div>
                        </div>
                        <div className='volume'>
                            <div className='volume_head'>Volume</div>
                            <div className='volume_price'>
                                <img className='eth_img' src="images/eth.png" />
                                <div className='price_eth'>250,522</div>
                            </div>
                        </div>
                        <div className='change'>
                            <div className='change_head'>Change 24h</div>
                            <div className='change_percent'>
                                <img className='up_img' src="images/Polygon2.png" />
                                <div className='price_up'>+200%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    

export default Collection_only_one