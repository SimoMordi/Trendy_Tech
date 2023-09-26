
import './index.css'

const ProductDisplay = () => {

  const electronicProducts = [
    {
      name: "iPhone 13",
      maker: "Apple",
      logo: "apple_logo_url",
      price: 799,
      description: "The iPhone 13 offers new colors, improved battery life, and a smaller notch.",
    },
    {
      name: "Galaxy S22",
      maker: "Samsung",
      logo: "samsung_logo_url",
      price: 999,
      description: "Samsung's flagship smartphone with top-notch hardware and features.",
    },
    {
      name: "MacBook Air",
      maker: "Apple",
      logo: "apple_logo_url",
      price: 999,
      description: "Lightweight, high-performance laptop with a retina display.",
    },
    {
      name: "Surface Laptop 4",
      maker: "Microsoft",
      logo: "microsoft_logo_url",
      price: 999,
      description: "Sleek, slim laptop that combines style and speed.",
    },
    {
      name: "PlayStation 5",
      maker: "Sony",
      logo: "sony_logo_url",
      price: 499,
      description: "Sony's latest gaming console with ultra-fast loading and incredible graphics.",
    },
    {
      name: "Nintendo Switch",
      maker: "Nintendo",
      logo: "nintendo_logo_url",
      price: 299,
      description: "Hybrid gaming console that you can play both at home and on the go.",
    },
    {
      name: "Oculus Quest 2",
      maker: "Meta",
      logo: "meta_logo_url",
      price: 299,
      description: "Next-level VR Gaming with no wires and easy setup.",
    },
    {
      name: "AirPods Pro",
      maker: "Apple",
      logo: "apple_logo_url",
      price: 249,
      description: "Premium in-ear wireless noise-cancelling headphones.",
    },
    {
      name: "Sony WH-1000XM4",
      maker: "Sony",
      logo: "sony_logo_url",
      price: 349,
      description: "Over-ear wireless noise-cancelling headphones with industry-leading sound.",
    },
    {
      name: "iPad Pro",
      maker: "Apple",
      logo: "apple_logo_url",
      price: 799,
      description: "Highly powerful tablet with a stunning display and ProMotion technology.",
    },
    {
      name: "Dell XPS 13",
      maker: "Dell",
      logo: "dell_logo_url",
      price: 1199,
      description: "Compact, high-performance laptop with InfinityEdge display.",
    },
    {
      name: "Google Pixel 6",
      maker: "Google",
      logo: "google_logo_url",
      price: 599,
      description: "Google's flagship smartphone with innovative camera technology.",
    },
    {
      name: "Apple Watch Series 7",
      maker: "Apple",
      logo: "apple_logo_url",
      price: 399,
      description: "Latest Apple Watch model with a more durable and larger display.",
    },
    {
      name: "Bose QuietComfort Earbuds",
      maker: "Bose",
      logo: "bose_logo_url",
      price: 279,
      description: "High-quality earbuds with effective noise cancelling and vibrant sound.",
    },
    {
      name: "Samsung Galaxy Tab S8",
      maker: "Samsung",
      logo: "samsung_logo_url",
      price: 699,
      description: "Powerful Android tablet with a vibrant display and premium design.",
    },
  ];
  
   return (
    <div className="productDisplay">
      {electronicProducts.map(product => (
        <div key={product.name}>
          <h3>Name: {product.name}</h3>
          <h3>Maker: {product.maker}</h3>
          <h3>Price: $ {product.price}</h3>                    
        </div>
      ))}
    </div>
  );
};


export default ProductDisplay;
