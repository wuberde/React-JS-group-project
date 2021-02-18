import React, { Component } from 'react'


export default function Search(props) {
    return (

                <div className="search-bar">
                    <div>
                    <h3>What beer are you looking for?</h3>
                    </div>
                    <div className="serch-input">
                        <input type="text" placeholder="Country or sort..." className="search-field" onChange={props.handleOnChange}/>
                        <button className="search-btn search-field" onClick={props.search}>Search</button>
                    </div>
                </div>

    )
}
