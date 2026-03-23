import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6"> Product List </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-lg p-4 flex flex-col">
            <img src={product.images[0]} alt={product.title} className="h-48 w-full object-cover rounded"
               onError={(e) =>
                (e.target.src = "https://via.placeholder.com/300/200")} />
            <h2 className="font-bold mt-3 text-xl"> {product.title} </h2>
            <p className="text-sm text-gray-500 mt-1 line-clamp-2"> {product.description} </p>
            <p className="font-bold mt-2"> ${product.price} </p>
            <p className="text-yellow-500 mt-1 font-bold"> ⭐ {product.rating ?? "No rating"} </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;