import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../components/assets/dropdown_icon.png';
import Item from '../components/items/Item';
import HotelsCard from '../components/hotelsCard/HotelsCard';

function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Number of items per page
  const [sortBy, setSortBy] = useState('default'); // Sorting option

  // Handle sorting of products based on selected option
  const sortedProducts = [...all_product].sort((a, b) => {
    if (sortBy === 'priceAsc') return a.new_price - b.new_price; // Sort by price ascending
    if (sortBy === 'priceDesc') return b.new_price - a.new_price; // Sort by price descending
    return 0; 
  });

  // Filter products by category
  const filteredProducts = sortedProducts.filter(item => props.category === item.category);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <img src={props.banner} alt="" />

      {/* shop category index and sort */}
      <div className="flex m-[0px 170px] px-[120px] justify-between items-center pt-4 pb-2 ">
        <p><span className='font-semibold'>Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredProducts.length)}</span> out of {filteredProducts.length} products</p>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className=" bg-white border border-[#888] p-2 rounded-md "
          >
            <option value="default">Default</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
          </select>
      </div>

      {/* shop category products */}
      <div className="px-[140px] m-[20px 70px] grid grid-cols-4 justify-items-center lg:grid-cols-4 sm:grid-cols-1 gap-[80px]">
        {currentItems.length > 0 ? (
          currentItems.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p>No products found for this category.</p> // Fallback if no products
        )}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center mt-12 mb-24">
        {[...Array(totalPages).keys()].map(number => (
          <button
            key={number + 1}
            className={`px-4 py-2 mx-1 ${currentPage === number + 1 ? 'bg-gray-500 text-white' : 'bg-gray-300'}`}
            onClick={() => handlePageChange(number + 1)}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ShopCategory;
