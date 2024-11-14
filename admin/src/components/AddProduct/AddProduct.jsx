import React, { useState } from 'react';
import upload_area from '../../assets/upload_area.svg';

function AddProduct() {

    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "dogs",
        new_price: "",
        old_price: ""
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    };

    // Function for add button - to add the details in the backend
    const addProduct = async () => {
        console.log(productDetails);

        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product', image);
        formData.append('name', productDetails.name);
        formData.append('category', productDetails.category);
        formData.append('new_price', productDetails.new_price);
        formData.append('old_price', productDetails.old_price);

        try {
            // Upload image first
            await fetch('http://localhost:4000/upload', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: formData,
            }).then((resp) => resp.json())
              .then((data) => { responseData = data });

            // Check if the image upload was successful
            if (responseData.success) {
                product.image = responseData.image_url; // Assuming 'image_url' is the key in response
                console.log(product);

                // Now, add the product details
                await fetch('http://localhost:4000/addproduct', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(product),
                }).then((resp) => resp.json())
                  .then((data) => {
                      if (data.success) {
                          alert("Product added successfully!");
                      } else {
                          alert("Failed to add product.");
                      }
                  });
            } else {
                alert("Image upload failed.");
            }
        } catch (error) {
            console.error('Error:', error);
            alert("Something went wrong!");
        }
    };

    return (
        <div className='box-border w-[100%] max-w-[800px] py-[30px] px-[50px] my-[8px] mx-[10px] rounded-[6px] bg-white'>
            <div className="w-[100%] text-[#7b7b7b] text-[16px]">
                <p>Product Title</p>
                <input value={productDetails.name} onChange={changeHandler} className='box-border w-[100%] h-[50px] rounded-[4px] pl-[15px] border border-solid border-[#c3c3c3] outline-none text-[#7b7b7b] font-"Poppins" text-[14px]' type="text" name='name' placeholder='Type here' />
            </div>

            <div className="w-[100%] text-[#7b7b7b] text-[16px] flex gap-[40px]">
                <div className="w-[50%]">
                    <p>Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} className='box-border w-[100%] h-[50px] rounded-[4px] pl-[15px] border border-solid border-[#c3c3c3] outline-none text-[#7b7b7b] font-"Poppins" text-[14px]' type="text" name='old_price' placeholder='Type here' />
                </div>

                <div className="w-[50%]">
                    <p>Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} className='box-border w-[100%] h-[50px] rounded-[4px] pl-[15px] border border-solid border-[#c3c3c3] outline-none text-[#7b7b7b] font-"Poppins" text-[14px]' type="text" name='new_price' placeholder='Type here' />
                </div>
            </div>

            <div className="w-[100%] text-[#7b7b7b] text-[16px]">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name="category" className='p-[10px] w-[100px] h-[50px] text-[14px] text-[#7b7b7b] border border-solid border-[#7b7b7b8d] rounded-[4px]'>
                    <option value="dogs">Dogs</option>
                    <option value="cats">Cats</option>
                    <option value="accessories">Accessories</option>
                    <option value="hotels">Hotels</option>
                    <option value="adopt">Adopt</option>
                </select>
            </div>

            <div className="">
                <label htmlFor="file-input">
                    <img src={image ? URL.createObjectURL(image) : upload_area} className='h-[120px] w-[120px] rounded-[10px] object-contain my-[10px]' alt="" />
                </label>
                <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
            </div>

            <button onClick={() => addProduct()} className='mt-[20px] w-[160px] h-[50px] rounded-[6px] bg-[#6079ff] border-none cursor-pointer text-white text-[16px] font-medium'>ADD</button>
        </div>
    );
}

export default AddProduct;
