import { useEffect, useState } from "react"
import './Carousel.css'

const Carousel = () => {

    const [current, setCurrent] = useState(0)
    const images = [
        'src/assets/17.jpg',
        'src/assets/18.jpg',
        'src/assets/13.jpg'
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % images.length)
        }, 3000)
        return () => clearInterval(timer)
    }, [images.lenght])


  return (
    <div className="caroussel" >
        { images.map((img, index) => (
            <div className={current === index ? 'sliding active' : 'sliding'}
            key={index}>
                <img src={img} alt="" />
                
            </div>
        ))
        }
        <div className="carousel-text">
        <h1>Farewell Bestbuy Hello Trendy_Tech, we're curious about our customers and serious about our products. Let's have a Fun shopping experience</h1>
      </div>
    </div>
    
  )
}

export default Carousel