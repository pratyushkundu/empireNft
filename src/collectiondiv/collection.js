import React from 'react'

const Collection = ({ data }) => {
    return (
        <div className='collection_div_2' style={{background:`url(${data.backgroundCollectionImage}) no-repeat`}}>
        <div className='tata'>
            <img src={data.backgroundCollectionImage} id="tata"/>
        </div>
            <div className='popular_collection_section' >
                <div className='verified_img'>
                    <img src={data.collectionLogo} />
                </div>
                <div className='popular_collection_section_description'>
                    <div className='collection_number'>{data.id}</div>
                    <div className='wrap_div'>
                        <div className='popular_collection_section_head'>{data.collectionName}</div>
                        <div className='description_section'>
                            <div className='floor'>
                                <div className='floor_head'>Floor price</div>
                                <div className='floor_price'>
                                    <img className='eth_img' src="images/eth.png" />
                                    <div className='price_eth'>{data.floorPrice}</div>
                                </div>
                            </div>
                            <div className='volume'>
                                <div className='volume_head'>Volume</div>
                                <div className='volume_price'>
                                    <img className='eth_img' src="images/eth.png" />
                                    <div className='price_eth'>{data.VolumePrice}</div>
                                </div>
                            </div>
                            <div className='change'>
                                <div className='change_head'>Change 24h</div>
                                <div className='change_percent'>
                                    <img className='up_img' src="images/Polygon2.png" />
                                    <div className='price_up'>{data.percentPrice}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection;