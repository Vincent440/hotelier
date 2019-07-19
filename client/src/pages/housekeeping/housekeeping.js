import React, { Component } from "react";
import { Row, Col } from 'react-grid-system';
import "./style.css";
import InfoPart from "../../components/infoPart";
import Header from "../../components/Header";
import api from '../../utils/api';
import { Container, Table } from 'react-bootstrap';
import Particles from "react-particles-js";

const particleOpt = { particles: { number: { value: 120, density: { enable: true, value_area: 1000 } } } };

class Housekeeping extends Component {

    state = {
        checked: {
            clean: false,
            dirty: false,
            vacant: false,
            occupied: false,
            arrived: false,
            stayOver: false,
            dueOut: false,
            departed: false,
            notReserved: false
        },
        searchResults: []
    };

    makeAxiosCall = () => {
        api.getHouseKeepingStatus(this.state.checked)
            .then(res => this.setState({ searchResults: res }))
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.makeAxiosCall();
    }

    handleCheckboxChange = event => {
        let tempState = this.state.checked;
        switch (event.target.id) {
            case "clean":
                tempState.clean = !this.state.checked.clean;
                break;
            case "dirty":
                tempState.dirty = !this.state.checked.dirty;
                break;
            case "vacant":
                tempState.vacant = !this.state.checked.vacant;
                break;
            case "occupied":
                tempState.occupied = !this.state.checked.occupied;
                break;
            case "arrived":
                tempState.arrived = !this.state.checked.arrived;
                break;
            case "stayOver":
                tempState.stayOver = !this.state.checked.stayOver;
                break;
            case "dueOut":
                tempState.dueOut = !this.state.checked.dueOut;
                break;
            case "departed":
                tempState.departed = !this.state.checked.departed;
                break;
            case "notReserved":
                tempState.notReserved = !this.state.checked.notReserved;
                break;
            case "clearAll":
                tempState.clean = false;
                tempState.dirty = false;
                tempState.vacant = false;
                tempState.occupied = false;
                tempState.arrived = false;
                tempState.stayOver = false;
                tempState.dueOut = false;
                tempState.departed = false;
                tempState.notReserved = false;
                break;
            case "selectAll":
                tempState.clean = true;
                tempState.dirty = true;
                tempState.vacant = true;
                tempState.occupied = true;
                tempState.arrived = true;
                tempState.stayOver = true;
                tempState.dueOut = true;
                tempState.departed = true;
                tempState.notReserved = true;
                break;
            default:
                break;
        }
        this.setState({ checked: tempState }, () => {
            this.makeAxiosCall();
        });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.makeAxiosCall();
    }
    printFunction(){
        window.print();
      }

    render() {
        return (
            <Container>
                <Particles params={particleOpt} id="particul" />
                <Row >
                    <Col xs={6} sm={4} md={3} lg={3} xl={2}>
                        <InfoPart user={this.props.user} logout={this.props.logout} />
                    </Col>
                    <Col xs={6} sm={8} md={9} lg={9} xl={10}>
                        <Row>
                            <Col xl={12}>
                                <Header>HOUSEKEEPING</Header>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={12}>
                                <div id="res">
                                    <Row>
                                        <Col xl={10}>
                                            <Row  id="firstRow">
                                                <Col xl={3}>
                                                    <h6>Room Status:</h6>
                                                </Col>
                                                <Col xl={1}>
                                                    Clean 
                                                </Col>
                                                <Col xl={1}>
                                                    <input type="checkbox" id="clean" checked={this.state.checked.clean}
                                                        onChange={this.handleCheckboxChange} />
                                                </Col>
                                                <Col xl={1}>
                                                    Dirty {this.state.rooms}
                                                </Col>
                                                <Col xl={1}>
                                                    <input type="checkbox" id="dirty" checked={this.state.checked.dirty}
                                                        onChange={this.handleCheckboxChange} />
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xl={2}>
                                            <button type="button" className="btn btn-success" id="selectAll" checked={this.state.checked.selectAll}
                                                onClick={this.handleCheckboxChange}> Select All </button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl={10}>
                                            <Row id="secondRowP">
                                                <Col xl={3}>
                                                    <h6> Front Office Status: </h6>
                                                </Col>
                                                <Col xl={1}>
                                                    Vacant
                                                </Col>
                                                <Col xl={1}>
                                                    <input type="checkbox" id="vacant" checked={this.state.checked.vacant}
                                                        onChange={this.handleCheckboxChange} />

                                                </Col>
                                                <Col xl={1}>
                                                    Occupied 
                                                </Col>
                                                <Col xl={1}>
                                                    <input type="checkbox" id="occupied" checked={this.state.checked.occupied}
                                                        onChange={this.handleCheckboxChange} />
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xl={2}>
                                            <button type="button" className="btn btn-success" id="clearAll" checked={this.state.checked.clearAll}
                                                onClick={this.handleCheckboxChange}>Clear All </button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl={10}>
                                            <Row id="firstRow">
                                                <Col xl={3}>
                                                    <h6> Reservation Status: </h6>
                                                </Col>
                                                <Col xl={1}>
                                                    Arrived
                                                </Col>
                                                <Col xl={1}>
                                                    <input type="checkbox" id="arrived" checked={this.state.checked.arrived}
                                                        onChange={this.handleCheckboxChange} />
                                                </Col>

                                                <Col xl={2}>
                                                    Stay Over
                                                </Col>
                                                <Col xl={1}>
                                                    <input type="checkbox" id="stayOver" checked={this.state.checked.stayOver}
                                                        onChange={this.handleCheckboxChange} />
                                                </Col>
                                            </Row>
                                            <Row id="secondRow">
                                                <Col xl={3}>
                                                </Col>
                                                <Col xl={1}>
                                                    Departed
                                                </Col>
                                                <Col xl={1}>
                                                    <input type="checkbox" id="departed" checked={this.state.checked.departed}
                                                        onChange={this.handleCheckboxChange} />
                                                </Col>
                                                <Col xl={2}>
                                                    Due Out
                                                </Col>
                                                <Col xl={1}>
                                                    <input type="checkbox" id="dueOut" checked={this.state.checked.dueOut}
                                                        onChange={this.handleCheckboxChange} />
                                                </Col>

                                                <Col xl={2}>
                                                    Not Reserved
                                                </Col>
                                                <Col xl={1}>
                                                    <input type="checkbox" id="notReserved" checked={this.state.checked.notReserved}
                                                        onChange={this.handleCheckboxChange} />
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xl={2}>
                                            <button type="button" className="btn btn-success"  onClick={this.printFunction}>Print</button>
                                        </Col>
                                    </Row>
                                </div>
                                <div id="res2">
                                    <Row id="thirdRow" >
                                        <Col xl={12}>
                                            <Table>
                                                <tbody>
                                                    <tr>
                                                        <th>Room</th>
                                                        <th>Room Type</th>
                                                        <th>Room Status</th>
                                                        <th>Front Office Status</th>
                                                        <th>Reservation Status</th>
                                                    </tr>
                                                    {this.state.searchResults.map(room => (
                                                        <tr key={room.room_num}>
                                                            <td>{room.room_num}</td>
                                                            <td>{room.type}</td>
                                                            <td>
                                                                {room.active === 0 ? room.inactive : (room.clean === 1 ? "Clean" : "Dirty")}
                                                            </td>
                                                            <td>{room.occupied === 1 ? "Occupied" : "Vacant"}</td>
                                                            <td>
                                                                {room.checked_out === 1 ? "Departed" : (room.departure ? room.departure : ((room.stayover ? room.stayover : ((room.checked_in === 1 ? "Arrived" : "Not Reserved")))))}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Housekeeping;