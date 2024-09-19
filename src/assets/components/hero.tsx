import Carousel from 'react-bootstrap/Carousel';
import slideImg1 from '../image/Slider1.jpg'
import slideImg2 from '../image/Slider2.jpg'
import slideImg3 from '../image/slide3.jpg'
import slideImg4 from '../image/slide5.jpg'
import './hero.css'

function HeroApp(){
    return(
    
        <Carousel className='hero'>
        <Carousel.Item>
            <img src={slideImg1} alt='slide 1' />
          {/* <ExampleCarouselImage text="First slide" /> */}
          <Carousel.Caption className='one'>
            <h3>Welcome to Daali Microfinance Bank</h3>
            <p>
            Your journey to financial empowerment starts here! At Daali Microfinance Bank, we are committed to providing accessible loans, secure savings, and innovative banking solutions tailored to your needs. Join us today and take the first step toward financial independence with a partner you can trust.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>

        <img src={slideImg2} alt='slide 1' />
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <Carousel.Caption className='two'>
            <h3>Empowering Small Businesses</h3>
            <p>At Daali Microfinance Bank, we fuel the growth of small businesses with our tailored micro-loan solutions. Whether you're starting up or expanding, we offer flexible loan options designed to help you succeed. Let’s turn your business dreams into reality—one loan at a time.

</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={slideImg3} alt='slide 1' />
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <Carousel.Caption className='three'>
            <h3>Secure Your Future with Our Savings Plans</h3>
            <p>
            Take control of your financial future with our high-interest savings accounts. No matter your goal—saving for a home, education, or emergencies—Daali Microfinance Bank provides secure and rewarding savings options to help you achieve your dreams.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <img src={slideImg4} alt='slide 1' />
          <Carousel.Caption className='four'>
            <h3>Global Reach, Local Care</h3>
            <p>
            With branches across the world, Daali Microfinance Bank brings international expertise with a personal touch to each community we serve. Experience world-class financial services with solutions designed to meet your local needs, wherever you are.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
    
    
    }
    
    
    export default HeroApp