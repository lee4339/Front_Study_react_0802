import Carousel from 'react-bootstrap/Carousel';

function Carousel01() {
  return (
    <Carousel fade> 
    {/*
     속성을 적용에 따라 슬라이드 스타일 결정
     <Carousel> : 일반적인 슬라이드 효과
     <Carousel fade> : fade-페이드인 효과
     <Carousel slide={false}> : slide={false} - 슬라이드 기능 상실
     <Carousel.Item interval={1000}> : 각각의 아이템 속도 설정
    */}
      <Carousel.Item>
        <div style={{width: '100%', height: '300px', backgroundColor: 'red'}}>
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{width: '100%', height: '300px', backgroundColor: 'blue'}}>
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{width: '100%', height: '300px', backgroundColor: 'yellow'}}>
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{width: '100%', height: '300px', backgroundColor: 'pink'}}>
            <Carousel.Caption>
            <h3>fourth slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel01;