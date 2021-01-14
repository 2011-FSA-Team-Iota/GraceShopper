import React from 'react'
import {Jumbotron, Container, Button} from 'reactstrap'

const Landing = () => {
  return (
    <div>
      <Jumbotron fluid className="jumbo1">
        <Container fluid>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-2" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Landing

//https://www.apple.com/v/home/s/images/heroes/iphone-12/iphone_12_us__fo0stbby242m_large.jpg
