import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const api_url = "http://localhost:9001/products"; 
    const [product, setProduct] = useState({});
    const { productId } = useParams(); 

    useEffect(() => {
        fetch(`${api_url}/${productId}`) 
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [productId]);  


   

    return (
        <div className="container mt-5">
            <div className="card text-center" style={{ width: "100%", maxWidth: "400px", margin: "auto" }}>
                <img 
                    src={product.image} 
                    className="card-img-top" 
                    alt={product.title} 
                    style={{ 
                        height: "200px", 
                        objectFit: "contain" 
                    }} 
                />
                <div className="card-body d-flex flex-column" style={{ height: "100%" }}>
                    <h5 className="card-title" style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                        {product.title}
                    </h5>
                    <p className="card-text" style={{ 
                        textAlign: "center", 
                        fontFamily: "Arial, Helvetica, sans-serif", 
                        fontSize: "1rem", 
                        marginBottom: "0.5rem" 
                    }}>
                        {product.description}
                    </p>
                    <p className="card-text" style={{ 
                        fontSize: "1.25rem", 
                        fontWeight: "bold", 
                        marginBottom: "0.5rem" 
                    }}>
                        <strong>Price: ${product.price?.toFixed(2)}</strong>
                    </p>
                    {product.rating && (
                        <p className="card-text" style={{ 
                            fontSize: "1rem", 
                            color: "#e8054c" 
                        }}>
                            <strong>Rating: {product.rating.rate} ⭐ ({product.rating.count} reviews)</strong>
                        </p>
                    )}
                    <a href='/#' className="btn btn-primary mt-auto">Close</a>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
