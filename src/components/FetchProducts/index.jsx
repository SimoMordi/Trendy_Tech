import axios from "axios";
import { useEffect, useState } from "react"


const fetchProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
          try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
          } catch (error) {
            console.error(error);
            setError('Failed to fetch data')
          }
      }
      fetchData()
    }, [])

  return (
        { products, error }
  )
}

export default fetchProducts