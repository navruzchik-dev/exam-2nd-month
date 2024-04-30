import React, { useEffect, useState } from 'react';
import { MdOutlineStar, MdLocalOffer } from "react-icons/md";
import Navbar from '../components/Navbar';

const truncateDescription = (description, maxLength) => (
  description.length > maxLength ? `${description.substring(0, maxLength - 3)}...` : description
);

const Products = ({ filterByRating }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        // Добавляем 10 новых продуктов
        const additionalProducts = Array.from({ length: 10 }, (_, index) => ({
          id: `new-${index + 1}`,
          title: `New Product ${index + 1}`,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          rating: 4.9,
          thumbnail: "https://via.placeholder.com/150",
          discountPercentage: 10,
          stock: 100,
          price: 100
        }));
        const allProducts = [...data.products, ...additionalProducts];
        // Сортируем продукты по убыванию рейтинга
        const sortedProducts = allProducts.sort((a, b) => b.rating - a.rating);
        setProducts(sortedProducts);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-fluid bg-purple-500">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {products && products.length > 0 ? (
            products.map((product, id) => (
              <div key={id} className="bg-white rounded-lg overflow-hidden shadow-lg container mx-auto max-w-[90%]">
                <img src={product.thumbnail} alt="" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
                  <p className="text-sm text-gray-600 mb-4">{truncateDescription(product.description, 72)}</p>
                  <div className="flex items-center mb-2">
                    <p className="text-sm text-gray-800 mr-2">Rating: {product.rating}</p>
                    <MdOutlineStar color="#FFA500" size="20" />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <MdLocalOffer className="text-red-500 mr-1" />
                      <p className="text-sm text-red-500 font-semibold">{product.discountPercentage}% Off</p>
                    </div>
                    <p className="text-sm text-gray-600">In-stock: <span className="font-semibold">{product.stock}</span></p>
                  </div>
                  <p className="text-lg font-semibold text-gray-800">Price: <span className="text-green-600">${product.price}</span></p>
                  <button className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-400 transition">Buy Now</button>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
