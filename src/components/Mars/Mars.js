import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Mars.scss';

function Mars() {
    const [ data, setData ] = useState([]);
    const [pictures, setPictures] = useState([])
    const [isTrue, setIsTrue] = useState(false)

	useEffect(() => {
		axios
			.get(
				'https://api.nasa.gov/insight_weather/?api_key=r9VwcSsdAkCVogLFSSwjW9Kkxn2aIGAKQg3XRwie&feedtype=json&ver=1.0',
			)
			.then((response) => {
				const newArr = Object.values(response.data);
				setData(newArr);
				console.log(newArr);
			})
			.catch((err) => {
				console.log(err);
			});
    }, []);
    
    useEffect(() => {
        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=r9VwcSsdAkCVogLFSSwjW9Kkxn2aIGAKQg3XRwie')
        .then(res => setPictures(res.data.photos))
        .catch(err => console.log(err))

    }, [])

	return (
        <div className="marsWrapper">
        {isTrue? <h1>Yes its true</h1>: ''}
        <h2>Mars Weather Last 5 Days</h2>
			<div className='marsWeather'>
				
				{data.slice(1, 6).map((day,idx) => (
					<div className="day" key={idx}>
						<p><span>Date:</span>{day.First_UTC.slice(0, 10)}</p>
						<p><span>Average</span>{day.AT.av}</p>

						<p><span>High:</span>{day.AT.mx}</p>
						<p><span>Low</span>{day.AT.mn}</p>
						<p><span>Data Points:</span> {day.AT.ct}</p>
						<p><span>Season:</span>{day.Season}</p>
					</div>
				))}
            </div>
            <div>
            <h2>Mars Rover Photos</h2>
            {console.log(pictures, 'pictures.photos')}
            {pictures && pictures.map((pic,idx)=> (
                <img key={idx} alt="Mars Rover Photos" src={pic.img_src}/>
            ))}
            </div>
		</div>
	);
}

export default Mars;
