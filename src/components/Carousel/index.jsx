import { useEffect, useState } from "react"
import './Carousel.css'
import img17 from "../../assets/17.jpg"
import img18 from "../../assets/18.jpg"
import img13 from "../../assets/13.jpg"

const Carousel = () => {

    const [current, setCurrent] = useState(0)
    const images = [
       img17 ,
        img18 ,
        img13
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
        <h1>Farewell Bestbuy Hello Trendy_Tech, Trendy-Tech is an eCommerce platform designed for tech enthusiasts, by tech enthusiasts. We are curious about our customers and serious about our products. Let's have a Fun shopping experience</h1>
      </div>
    </div>
    
  )
}

export default Carousel