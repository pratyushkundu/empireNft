import React from 'react'

const featured_projects_card = () => {
    return (<>
    
        <div className='featured_projects_div_left'>
            <div className='project_div'>
                <div className='project_title'>Bubblegoose</div>
                <div className='project_description'>Bubblegoose Ballers by Carl
                    Jones (Producer Of The
                    Boondocks and Black
                    Dynamite) is a gaggle
                    of 10,000 gees.</div>
                <div className='view_project_button'>
                    <div id="button_7">View Collection</div>
                </div>
                <div className='PFPs_div'>
                    <img className='PFPs_image' src="images/PFP.png"></img>
                    <div className='team_size'>6 Team members</div>
                </div>
            </div>
            <div className='right'></div>
        </div>

    </>
    )
}

export default featured_projects_card