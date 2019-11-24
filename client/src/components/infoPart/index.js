import React, { Component } from 'react';
import smallLogo from "../logo/hotelworx_logo.png";
import { Card } from 'react-bootstrap';
import "./style.css";
import api from '../../utils/api';
import UserContext from '../../UserContext';

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
    return (
    <UserContext.Consumer>
        {({ user,getUserLogout }) => (
        <Card id="infoCard">
            <Card style={{ marginBottom: "10px" }}>
                <Card.Img variant="top" src={smallLogo} className="App-logo" id="smallLogo" alt="smallLogo" />
            </Card>
            {this.state.hotelInfo.map(info => (
                <div key={info.hotel_info_id} id="hotelInfoPart" className="my-auto">
                    <div className="text-center" id="hotelName">{info.hotel_name}</div>
                    <div className="small faded" id="hotelAddress">{info.address}</div>
                    <div className="small faded" id="hotelAddress">{info.city}, {info.state} {info.zip}</div>
                    <div className="small faded" id="hotelEmail">{info.email}</div>
                    <div className="text-center" id="hotelPhone"><i className="fa fa-phone fa-rotate-90"></i>{info.phone}</div>
                    <br/>
                </div>
            ))}
            <h5 className="card-title text-capitalize" id="userNameD">User Name: {user.username}</h5>
            <div id="optionsDiv">
                <button className="btn btn-block btn-default" id="logOut" onClick={getUserLogout}><i className="fa fa-sign-out-alt"></i></button>
            </div>
        </Card>
            )}
    </UserContext.Consumer>
    );
  }
};

export default InfoPart;