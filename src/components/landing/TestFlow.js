import React from 'react'
import img1 from '../../Assets/img/testimg1.png';
import img2 from '../../Assets/img/testimg2.png';
import img3 from '../../Assets/img/testimg3.png';
import './test.css'

const TestFlow = () => {
    return (
        <div className='test' id="test">
            <h2 className='header'>Assess your Quality for your Dream Job</h2>
            <h2 className='header2'> Here's How</h2>
            <div className='sections'>
                <div className='sections_text'>
                    <h3>1. Attempt your expert curated tests</h3>
                    <p>Score above the passing criteria and earn Skill badges. These skill badges prove your worthiness to potential employers.</p>
                </div>
                <div className='sections_img' >

                    <img src={img1} alt="Header Img" />
                </div>
            </div>
            <div className='sections'>
                <div className='sections_img' >
                    <img src={img2} alt="Header Img" />
                </div>
                <div className='sections_text margin_left'>
                    <h3>2. Showcase your Badges</h3>
                    <p>Your earned badges are applicable to be shared to many companies. Once you have a skill badge, you don’t have to attempt the same test again.</p>
                </div>
            </div>
            <div className='sections'>
                <div className='sections_text'>
                    <h3>3. Apply to your desired employers and get an interview</h3>
                    <p>Checkout which companies are interested in your skill-set. Then apply to these companies, and we promise you won’t have to repeat your already attempted tests. This will save your time and the companies time too.</p>
                </div>
                <div className='sections_img' >
                    <img src={img3} alt="Header Img" />
                </div>
            </div>
        </div>
    )
}

export default TestFlow