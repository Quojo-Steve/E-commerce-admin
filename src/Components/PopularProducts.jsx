import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data";

function PopularProducts() {
  // Use slice to get only the first 5 items from the products array
  const popularProducts = products.slice(0, 5);

  return (
    <div className="w-[20rem] bg-white p-4 rounded-sm border border-gray-200">
      <strong className="text-gray-700 font-medium">Popular Products</strong>
      <div className="mt-4 flex flex-col gap-3">
        {popularProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="flex items-start hover:no-underline"
          >
            <div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
              <img
                className="w-full h-full object-cover rounded-sm"
                src={product.img}
                alt={product.title}
              />
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm text-gray-800">{product.title}</p>
              <span
                className={`${
                  product.inStock === 0
                    ? "text-red-500"
                    : product.inStock > 50
                    ? "text-green-500"
                    : "text-orange-500"
                } text-xs font-medium`}
              >
                {product.inStock === 0
                  ? "Out of Stock"
                  : product.inStock + " in Stock"}
              </span>
            </div>
            <div className="text-xs text-gray-400 pl-1.5">
              {product.price}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PopularProducts;
