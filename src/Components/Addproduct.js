import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Swal from 'sweetalert2';
import axios from 'axios'; // Import axios

function AddProduct() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate inputs before submitting
        if (!title || !price || !description) {
            Swal.fire('Error', 'Please fill in all fields.', 'error');
            return; // Prevent submission if fields are empty
        }

        try {
            const response = await axios.post("http://localhost:9001/products", {
                title: title,
                price: Number(price),
                description: description
            });

            // Show the generated ID if available
            Swal.fire('Success', `Product added successfully! ID: ${response.data.id}`, 'success');

            // Reset the fields after submission
            setTitle('');
            setPrice('');
            setDescription('');

            // Navigate to the product list after successful addition
            navigate('/Product');
        } catch (error) {
            Swal.fire('Error', 'There was a problem adding the product.', 'error');
            console.error('Error:', error);
        }
    };

    return (
        <>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}> 
                <div className="mb-3">
                    <label htmlFor="proTitle" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="proTitle"
                        aria-describedby="Product Title"
                        placeholder="Product title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} // Update title state
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="proPrice" className="form-label">Price</label>
                    <input
                        type="number"
                        className="form-control"
                        id="proPrice"
                        aria-describedby="Product Price"
                        placeholder="Product price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)} // Update price state
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="proDescription" className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        id="proDescription"
                        aria-describedby="Product Description"
                        placeholder="Product description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} // Update description state
                    />
                </div>

                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </>
    );
}

export default AddProduct;
