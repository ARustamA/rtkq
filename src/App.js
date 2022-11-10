import { useGetGoodsQuery } from './redux/goodsApi';

function App() {
  const { data = [], isLoading } = useGetGoodsQuery();
  return (
    <div>
      {isLoading &&
        <h2 className=' text-center bg-red-500 font-serif'>
          Loading...</h2>}
      <ul className='list-item'>
        {data.map(item => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
