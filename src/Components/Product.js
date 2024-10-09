import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

function Products() {
    const [products, setProducts] = useState([]);
    const api_url = "http://localhost:9001/products"; // Corrected URL for JSON Server

    useEffect(() => {
        getAllPro();
    }, []);

    const getAllPro = () => {
        fetch(api_url)
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching products:', error)); // Added error handling
    };

    // Delete a product by ID with confirmation
    const deletePro = (productId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:9001/products/${productId}`, {
                    method: "DELETE",
                })
                    .then((res) => {
                        if (res.ok) {
                            getAllPro();
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            );
                        } else {
                            Swal.fire(
                                'Error!',
                                'There was an error deleting the product.',
                                'error'
                            );
                        }
                    })
                    .catch((error) => console.error('Error deleting product:', error)); // Added error handling
            }
        });
    };

    return (
        <>
            <div className="container mt-5">
                <h2 className="text-center mb-4">Product List</h2>
                <Link to={'/product/add'} type="button" className="btn btn-success mb-3">Add New Product</Link>

                <table className="table table-bordered table-hover">
                    <thead className="table-light">
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td style={{ textAlign: "start", width: "400px" }}>
                                    {(product.title?.slice(0, 20) || "No title available") + '...'}
                                </td>
                                <td style={{ textAlign: "start", width: "400px" }}>
                                    {(product.description?.slice(0, 40) || "No description available") + '...'}
                                </td>
                                <td>${(typeof product.price === 'number' ? product.price.toFixed(2) : product.price)}</td>
                                <td>
                                    <button onClick={() => deletePro(product.id)} type="button" className="btn btn-danger btn-sm me-1">Delete</button>
                                    <Link to={`/product/edit/${product.id}`} className="btn btn-primary btn-sm me-1 mt-1">Edit</Link>
                                    <Link to={`/product/${product.id}`} className="btn btn-success mt-1 btn-sm" style={{ backgroundColor: "", color: "#fff" }}>
                                        Details
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Products;
