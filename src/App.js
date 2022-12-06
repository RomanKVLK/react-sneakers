import React from 'react';
import axios from 'axios'
import Card from './components/Card'
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://635eb78303d2d4d47af4dab0.mockapi.io/items').then(res => {
      return res.json();
    }).then(json => {
      setItems(json);
    });

    axios.get('https://635eb78303d2d4d47af4dab0.mockapi.io/items').then(res => setItems(res.data));
    axios.get('https://635eb78303d2d4d47af4dab0.mockapi.io/cart').then(res => setCartItems(res.data))
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://635eb78303d2d4d47af4dab0.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj])
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://635eb78303d2d4d47af4dab0.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex mb-40 align-center justify-between">
          <h1>{searchValue ? `Поиск по запросу "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."></input>
            {searchValue && <img onClick={() => setSearchValue('')} className="clear cu-p" src="/img/btn-remove.svg" alt="Remove"/>}
          </div>
        </div>
        <div className="card-row">
            {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
            <Card
              key={index} 
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log('Добавили в закладки')}
              onPlus={onAddToCart} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
