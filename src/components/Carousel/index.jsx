// import { useEffect, useState } from "react"
// import './Carousel.css'
// import img17 from "../../assets/17.jpg"
// import img18 from "../../assets/18.jpg"
// import img13 from "../../assets/13.jpg"

// const Carousel = () => {

//     const [current, setCurrent] = useState(0)
//     const images = [
//        img17 ,
//         img18 ,
//         img13
//     ]

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrent(prev => (prev + 1) % images.length)
//         }, 3000)
//         return () => clearInterval(timer)
//     }, [images.lenght])


//   return (
//     <div className="caroussel" >
//         { images.map((img, index) => (
//             <div className={current === index ? 'sliding active' : 'sliding'}
//             key={index}>
//                 <img src={img} alt="" />
                
//             </div>
//         ))
//         }
//         <div className="carousel-text">
        
//       </div>
//     </div>
    
//   )
// }

// export default Carousel