import { useState } from 'react';
import { useGetGoodsQuery,useAddProductMutation,useDeleteProductMutation } from './redux/goodsApi';

function App() {
  const [count, setCount] = useState('');
  const [newProduct, setNewProduct] = useState('');
  const { data = [], isLoading } = useGetGoodsQuery(count);
  const [addProduct, {isError}] = useAddProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  
  const handleAddProduct = async () => {
    if (newProduct){
      await addProduct({ name: newProduct}).unwrap();
      setNewProduct('')
    } 
  }

  const handlerDeleteProduct = async (id) =>{
    await deleteProduct(id).unwrap();
  }

  return (
    <div>
      <div>
        <input type="text"
        value={newProduct} 
        onChange={(e)=> setNewProduct(e.target.value)}
          />
          <button onClick={ handleAddProduct }>
            Add product
          </button>
      </div>
      <div>
        <select value={count} onChange={(e) => setCount(e.target.value)}>
          <option value={"''"}>all</option>
          <option value={"1"}>1</option>
          <option value={"2"}>2</option>
          <option value={"3"}>3</option>
        </select>
      </div>
      {isLoading &&
        <h2 className=' text-center bg-red-500 font-serif'>
          Loading...</h2>}
      <ul className='list-item'>
        {data.map(item => (
          <li key={item.id}
          onClick={()=>handlerDeleteProduct(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
