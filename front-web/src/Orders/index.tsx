import { useEffect, useState } from 'react';
import './styles.css';
import ProductsLists from './ProductsLists';
import StepsHeader from './StepsHeader';
import { Product } from './types';
import { fetchProducts } from '../api';

function Orders() {
const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
       fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error)) 
    }, []);

    return (
       <div className="orders-container">
           <StepsHeader />
           <ProductsLists products={products} />
       </div>
    ) 
}

export default Orders;