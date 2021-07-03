import React from 'react'
import './Browser.css'

function Browser() {
    return (
        <div className='browser'>
            <div className="nav">
                <div className='circle3'>
                    <div className="circlered"></div>
                    <div className="circleyellow"></div>
                    <div className="circlegreen"></div>
                </div>
                <div className="addressbar">Search or enter a website name</div>
                <div> copy</div>

            </div>
            <div className="view">

            </div>
        </div>
    )
}

export default Browser
