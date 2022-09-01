import React from 'react'

const Learning_section_group_cards = ({ data }) => {
    return (
        <>
            <div className='info_imgs_background'>
                <img src={data.image} className="info_imgs" />
            </div>

            <div className='group_up_infos_head'>{data.learningHeads}</div>
            <div className='details'>Create your Binance Smart Chain
                (BEP-20) wallet on Metamask then
                connect your wallet to our website
                to get started.</div>
        </>
    )
}

export default Learning_section_group_cards