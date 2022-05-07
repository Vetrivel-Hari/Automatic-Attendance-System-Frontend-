import React, { useState } from 'react'
import './homeStyles.css'
import { WebcamCapture } from '../Webcam/Webcam'

const Home = () => {
    const [rollno, setRollno] = useState('');

    var latitude;
    var longitude;
    var altitude;
    var status = 'NULL';

    const submitForm = () => {
        if(!navigator.geolocation) {
            status = 'Geolocation is not supported by browser';
        }
        else {
            status = 'Locating...';
            navigator.geolocation.getCurrentPosition((position) => {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
                altitude = position.coords.altitude;
                localStorage.setItem("latitude", latitude);
                localStorage.setItem("longitude", longitude);
                localStorage.setItem("altitude", altitude);
            }, () => {
                status = 'Unable to retrieve location';
            });
        }

        var formdata = new FormData();

        formdata.append("rollno", rollno);
        formdata.append("latitude", localStorage.getItem("latitude"));
        formdata.append("longitude", localStorage.getItem("longitude"));
        formdata.append("altitude", localStorage.getItem("altitude"));
        formdata.append("image", localStorage.getItem("image"));

        var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
        };

        fetch("https://automatic-attendance-system-3.herokuapp.com/api/attendance", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        //localStorage.clear();
    }

    return (
        <div className="home-container">
            <div className="container">
                <div className="text">
                    <h1>ATTENDANCE</h1>
                    <form className="form">
                        <WebcamCapture/>
                        <input type="text" placeholder="Roll Number" onChange={(e) => setRollno(e.target.value)} />
                        <button type="button" id="login-button" onClick={(e) => submitForm(e)}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home;
