import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';


const products = [
  { id: 1, name: 'Fresh Tomatoes', price: 'Ksh 200/kg', image: 'https://kgdycslllvipuxweuqwu.supabase.co/storage/v1/object/public/product-images/tomatoes-6757702_1280%20(1).jpg', location: 'Kuresoi_south' },                         
{ id: 2, name: 'Organic Spinach', price: 'Ksh 150/kg', image: 'https://kgdycslllvipuxweuqwu.supabase.co/storage/v1/object/public/product-images/spinach-3463248_1280.jpg', location: 'Kiambaa' },
  { id: 3, name: 'Avocados', price: 'Ksh 30/piece', image: 'https://kgdycslllvipuxweuqwu.supabase.co/storage/v1/object/public/product-images/avocadoes-8181193_1280.jpg', location: 'Keringet' },
  { id: 4, name: 'Fresh Mangoes', price: 'Ksh 40/piece', image: 'https://kgdycslllvipuxweuqwu.supabase.co/storage/v1/object/public/product-images/mangoes-6944865_1280.jpg', location: 'Molo' },                         
  { id: 5, name: 'PassionFruits', price: 'Ksh 180/kg', image: 'https://kgdycslllvipuxweuqwu.supabase.co/storage/v1/object/public/product-images/passsion.webp', location: 'kiptagich' },
  { id: 6, name: 'Potatoes', price: 'Ksh 250/Debe', image: 'https://kgdycslllvipuxweuqwu.supabase.co/storage/v1/object/public/product-images/potatoes.jpg', location: 'Kericho' },



];

function Cards() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <header className="bg-green-600 text-white p-4 mb-6">
        <h1 className="text-2xl">@FarmDirect</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-green-600">{product.price}</p>
              <p className="text-sm text-gray-500 flex items-center">
                <FaMapMarkerAlt className="mr-1" />
                {product.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;