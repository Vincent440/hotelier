import React, { Component } from 'react';
import smallLogo from "./solidcolor.png";
import { Card } from 'react-bootstrap';
import "./style.css";
import ReactWeather from 'react-open-weather';
//Optional include of the default css styles 
import 'react-open-weather/lib/css/ReactWeather.css';
import api from '../../utils/api';

class InfoPart extends Component {
    state = {
        hotelInfo: []
    };
    makeAxiosCall = () => {
        api.getHotelInfo(1)
            .then(res => this.setState({ hotelInfo: res }))
            .catch(err => console.log(err));
    }
    componentDidMount() {
        this.makeAxiosCall();
    }
    render() {
        console.log(process.env.REACT_APP_WEATHER_API_KEY);
        return (
            <Card id="infoCard">
                <Card style={{ marginBottom: "10px" }}>
                    <Card.Img variant="top" src={smallLogo} className="App-logo" id="smallLogo" alt="smallLogo" style={{ marginBottom: "10px" }} />
                </Card>
                {this.state.hotelInfo.map(info => (
                    <div key={InfoPart.hotel_info_id} id="hotelInfoPart">
                        <div className="text-center" id="hotelName">{info.hotel_name}</div>
                        <div className="small faded" id="hotelAddress">{info.address}</div>
                        <div className="small faded" id="hotelAddress">{info.city}, {info.state} {info.zip}</div>
                        <div className="small faded" id="hotelEmail">{info.email}</div>
                        <div className="text-center" id="hotelPhone"><i className="fa fa-phone fa-rotate-90"></i>{info.phone}</div>
                        <br/>

                    </div>
                ))}
                <div className="card-text">
                    <ReactWeather
                        forecast="today"
                        apikey={process.env.REACT_APP_WEATHER_API_KEY}
                        type="city"
                        city="Cleveland"
                        units='F' />
                </div>
                <h5 className="card-title" id="userNameD">User Name: {this.props.user.username}</h5>
                <div id="optionsDiv">
                    <button className="btn btn-block btn-default" id="userSetting"><i className="fa fa-gear"></i></button>
                    <button className="btn btn-block btn-default" id="logOut" onClick={this.props.logout}><i className="fa fa-sign-out-alt"></i></button>
                </div>
            </Card>
        )
    }
};

export default InfoPart;