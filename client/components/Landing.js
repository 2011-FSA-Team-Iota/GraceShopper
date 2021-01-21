import React from 'react'
import {Jumbotron, Container, Button} from 'reactstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAppleAlt} from '@fortawesome/free-solid-svg-icons'

const Landing = () => {
  return (
    <div>
      <Jumbotron fluid className="jumbo1">
        <Container fluid>
          <div
            style={{
              marginTop: 5
            }}
          >
            <FontAwesomeIcon icon={faAppleAlt} color="f5d1" size="1x" />
          </div>
          <div className="overlay">
            <h1 style={{marginBottom: 20}}>Welcome to CESV</h1>
            <p style={{marginLeft: 50, marginRight: 50}}>
              CESV is an American multinational technology company headquartered
              in NYC It is considered one of the Big companies in the U.S.
              information technology industry. Its hardware product includes the
              iPhone smartphone.
            </p>
            {/* <p><Button color="primary">Learn More</Button></p> */}
          </div>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Landing

//https://www.apple.com/v/home/s/images/heroes/iphone-12/iphone_12_us__fo0stbby242m_large.jpg
