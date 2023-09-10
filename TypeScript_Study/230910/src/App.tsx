import { useState } from 'react';
import './App.css';

interface CoffeeMenu {
  item: string[];
  subitem: string[];
  count: number;
}


function App() {

  const list: CoffeeMenu = {
    item: ['아메리카노', '에스프레소', '카페라떼',],
    subitem: [`샷추가`, `원두 변경`,],
    count: 0,
  }

  const [countState, setCountState] = useState<CoffeeMenu>(list);

  return (
    <div className="App">
      <h1>Coffee Kiosk</h1>
      <ul>
        {list.item.map((item, index) => {
          return <li key={index}>
            {item}
            <ul>
              {list.subitem.map((item, index) => {
                return <li key={index}>
                  {item}
                  <button onClick={() => {setCountState(countState-1)}}>-</button>
                  <span>{list.count}</span>
                  <button onClick={() => {setCountState(countState+1)}}>+</button>
                </li>
              })}
            </ul>
          </li>
        })}
      </ul>
    </div>
  );
}

export default App;
