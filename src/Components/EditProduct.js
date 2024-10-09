import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function EditProduct() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const api_url = `http://localhost:9001/products/${id}`;
    const navigate = useNavigate();

    useEffect(() => {
        fetch(api_url)
            .then((res) => res.json())
            .then((data) => {
                setTitle(data.title);
                setPrice(data.price);
                setDescription(data.description);
            })
            .catch((error) => console.error('Error fetching product:', error));
    }, [api_url]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = {
            title,
            price: Number(price),
            description,
        };

        fetch(api_url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProduct),
        })
        .then((res) => {
            if (res.ok) {
                Swal.fire('Updated!', 'Your product has been updated.', 'success');
                navigate('/Product');
            } else {
                Swal.fire('Error!', 'There was an error updating the product.', 'error');
            }
        })
        .catch((error) => console.error('Error updating product:', error));
    };

    return (
        <div className="container mt-5">
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea 
                        className="form-control" 
                        id="description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        required
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="price" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update Product</button>
            </form>
        </div>
    );
}

export default EditProduct;
