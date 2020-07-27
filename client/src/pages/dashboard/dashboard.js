import React from 'react'
import { Row, Col } from 'react-grid-system'
import './style.css'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import checkinLogo from '././images/checkin.png'
import housekeepingLogo from './images/maid.png'
import inhouseLogo from './images/bed.png'
import bookingLogo from './images/hotel.png'
import updateLogo from './images/update.png'
import billingLogo from './images/bill.png'
import detailedLogo from './images/report.png'
import houseLogo from './images/communications.png'
import maintenanceLogo from './images/maintenanceLogo.png'

function Dashboard () {
  return (
    <Row>
      <Col xs={12} sm={12} md={6} lg={6} xl={3}>
        <div className='btn-group' style={{ display: 'block' }}>
          <Card style={{ marginBottom: '10px' }}>
            <Card.Body>RESERVATION</Card.Body>
          </Card>
          <Link className='btn btn-primary' id='dashboardLink' to='/reserve/new'>
            <img id='bookingLogo' className='smallLogos' alt='bookingLogo' src={bookingLogo} />
                        New Reservation
          </Link>
          <Link className='btn btn-primary' id='dashboardLink' to='/reserve/allreservations'>
            <img id='updateLogo' className='smallLogos' alt='updateLogo' src={updateLogo} />
                        Update Reservation
          </Link>
        </div>
      </Col>
      <Col xs={12} sm={12} md={6} lg={6} xl={3}>
        <div className='btn-group' style={{ display: 'block' }}>
          <Card style={{ marginBottom: '10px' }}>
            <Card.Body>FRONT DESK</Card.Body>
          </Card>
          <Link className='btn btn-primary' id='dashboardLink' to='/frontdesk/arrivals'>
            <img id='checkin' className='smallLogos' alt='checkin' src={checkinLogo} />
                        Arrivals
          </Link>
          <Link className='btn btn-primary' id='dashboardLink' to='/frontdesk/inhouse'>
            <img id='inhouseLogo' className='smallLogos' alt='inhouseLogo' src={inhouseLogo} />
                        In-House Guests
          </Link>
          <Link className='btn btn-primary' id='dashboardLink' to='/frontdesk/maintenance'>
            <img className='smallLogos' id='maintenanceLogo' alt='maintenanceLogo' src={maintenanceLogo} />
                        Maintenance
          </Link>
        </div>
      </Col>
      <Col xs={12} sm={12} md={6} lg={6} xl={3}>
        <div className='btn-group' style={{ display: 'block' }}>
          <Card style={{ marginBottom: '10px' }}>
            <Card.Body>FINANCE</Card.Body>
          </Card>
          <Link className='btn btn-primary' id='dashboardLink' to='/cashiering/billing'>
            <img id='billingLogo' className='smallLogos' alt='billingLogo' src={billingLogo} />
                        Billing
          </Link>
        </div>
      </Col>
      <Col xs={12} sm={12} md={6} lg={6} xl={3}>
        <div className='btn-group' style={{ display: 'block' }}>
          <Card style={{ marginBottom: '10px' }}>
            <Card.Body>REPORTS</Card.Body>
          </Card>
          <Link className='btn btn-primary' id='dashboardLink' to='/reports/housekeeping'>
            <img id='housekeepingLogo' className='smallLogos' alt='housekeepingLogo' src={housekeepingLogo} />
                        Housekeeping Report
          </Link>
          <Link className='btn btn-primary' id='dashboardLink' to='/reports/detailedAvailability'>
            <img id='detailedLogo' className='smallLogos' alt='detailedLogo' src={detailedLogo} />
                        Detailed Availability
          </Link>
          <Link className='btn btn-primary' id='dashboardLink' to='/reports/houseStatus'>
            <img id='houseLogo' className='smallLogos' alt='houseLogo' src={houseLogo} />
                        House Status
          </Link>
        </div>
      </Col>
      <div style={{ clear: 'both' }} />
    </Row>
  )
}

export default Dashboard
