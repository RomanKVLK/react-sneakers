function App() {
  return (
    <div className="wrapper">

      <div className="overlay">
        <div className="drawer">
          <h2 className="mb-30">Корзина</h2>
          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers"/>
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>15 199 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers"/>
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>15 199 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
            </div>
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li className="d-flex">
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li className="d-flex">
                <span>Нолог 5%</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="greenButton">Оформить заказ<img src="/img/arrow.svg" alt="Arrow" /></button>
          </div>
        </div>
      </div>





      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="m-0 text-uppercase">React Sneakers</h3>
            <p className="m-0">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="cart" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={20} height={20} src="/img/user.svg" alt="user" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex mb-40 align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="card-row">
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img className="card_image" width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img className="card_image" width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img className="card_image" width={133} height={112} src="/img/sneakers/3.jpg" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img className="card_image" width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers" />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}

export default App;
