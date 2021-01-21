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
              marginTop: 5,
              marginBottom: 80
            }}
          />
          <div className="overlay">
            <h1 style={{marginBottom: 20, letterSpacing: '8px'}}>
              Welcome to CESV-||
            </h1>
            <p
              style={{marginLeft: 50, marginRight: 50, fontFamily: 'helvetica'}}
            >
              CESV-11 is a multinational company headquartered in the heart of
              New York with over 200+ satillite offices around the world. Our
              company specializes in information technology solutions as well as
              a leading retailer of Apple and Samsung. We plan to continue
              expanding our horizon and strive for perfection.
            </p>
            <p
              style={{marginLeft: 50, marginRight: 50, fontFamily: 'helvetica'}}
            >
              CESV-11は、本社を置く多国籍企業です。
              ニューヨークの中心部にあり、世界中に200を超えるサティライトオフィスがあります。当社は情報技術ソリューションを専門とし、アップルとサムスンの大手小売業者です。今後も視野を広げ、完璧を目指していきます。
            </p>
            <p
              style={{marginLeft: 50, marginRight: 50, fontFamily: 'helvetica'}}
            >
              CESV-11 es una empresa multinacional con sede en el corazón de
              Nueva York con más de 200 oficinas satillite en todo el mundo.
              Nuestra empresa se especializa en soluciones de tecnología de la
              información y es un minorista líder de Apple y Samsung. Planeamos
              seguir ampliando nuestro horizonte y luchar por la perfección.
            </p>
            <p
              style={{marginLeft: 50, marginRight: 50, fontFamily: 'helvetica'}}
            >
              CESV-11은 본사가있는 다국적 기업입니다. 전 세계에 200 개 이상의
              위성 사무실이있는 뉴욕의 중심부에 있습니다. 우리 회사는 정보 기술
              솔루션을 전문으로하며 Apple과 Samsung의 선도적 인 소매 업체입니다.
              우리는 우리의 지평을 계속 확장하고 완벽을 위해 노력할 계획입니다.
            </p>
            <p
              style={{marginLeft: 50, marginRight: 50, fontFamily: 'helvetica'}}
            >
              CESV-11 est une société multinationale dont le siège est au cœur
              de New York avec plus de 200 bureaux satillites à travers le
              monde. Notre société est spécialisée dans les solutions de
              technologie de l'information ainsi que l'un des principaux
              détaillants d'Apple et de Samsung. Nous prévoyons de continuer à
              élargir notre horizon et de viser la perfection.
            </p>
            <p
              style={{marginLeft: 50, marginRight: 50, fontFamily: 'helvetica'}}
            >
              CESV-11是一家跨国公司，总部位于
              位于纽约市中心，在全球拥有200多个卫星办公室。我们公司专门从事信息技术解决方案，并且是Apple和Samsung的领先零售商。我们计划继续扩大视野，追求完美
            </p>
            {/* <p><Button color="primary">Learn More</Button></p> */}
            <div id="cover-photo-container">
              <img
                src="iphone_12_us__fo0stbby242m_large.jpg"
                id="cover-photo"
              />
            </div>
          </div>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Landing

//https://www.apple.com/v/home/s/images/heroes/iphone-12/iphone_12_us__fo0stbby242m_large.jpg
