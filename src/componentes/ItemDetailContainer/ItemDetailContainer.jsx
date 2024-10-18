import './ItemDetailContainer.css'
import { useState, useEffect } from 'react' 
import { getProductsById, getElementsByCategory } from "../Products/Products"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();
  
    useEffect(() => {
      getProductsById(itemId)
        .then((response) => {
          setProduct(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }, [itemId]);
  
    return (
      <div className="ItemDetailContainer">
        <ItemDetail {...product} />
      </div>
    );
  };

  const CategoryProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getElementsByCategory(category)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [category]);

  return (
    <div className="CategoryProductsContainer">
      <ProductList products={products} />
    </div>
  );
};

export default ItemDetailContainer;