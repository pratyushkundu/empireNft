import React from 'react'

const Collectors_cards = ({data}) => {
    return (<>
            <div className='collectors_cards_top_left'>
                <img src={data.image} />
            </div>
            <div className='collectors_cards_top_right'>
                <div className='collectors_name'>{data.collectorName}</div>
                <div className='collectors_items'>{data.collectorItem}</div>
            </div>
    </>)
}

export default Collectors_cards