import Card from './components/Card/Card'
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';

const arr = [
  { name: 'Мужские кроссовки Nike Blazer Mid Suede', price: 12999},
  { name: 'Мужские Кроссовки Nike Air Max 270', price: 15600},
]


function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex mb-40 align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="card-row">
            {arr.map((obj) => (
            <Card />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
