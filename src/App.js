import React from 'react';
import Card from './components/Card'
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://635eb78303d2d4d47af4dab0.mockapi.io/items').then(res => {
      return res.json();
    }).then(json => {
      setItems(json);
    });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex mb-40 align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="card-row">
            {items.map((item, index) => (
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
