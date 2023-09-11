import { useState } from 'react';
import './App.css';

interface CoffeeMenu {
  menu: {
    name: string,
    option: [
      {
        optionName: string;
        count: number;
      },
      {
        optionName: string;
        count: number;
      },
    ]
  }
}

function App() {

  // 커피메뉴 리스트
  const list: CoffeeMenu[] = [ //객체배열을 사용한
    { menu: { name: '아메리카노', option: [{ optionName: '디카페인', count: 0 }, { optionName: '샷추가', count: 0 },] } },
    { menu: { name: '에스프레소', option: [{ optionName: '디카페인', count: 0 }, { optionName: '샷추가', count: 0 },] } },
    { menu: { name: '카페라떼', option: [{ optionName: '디카페인', count: 0 }, { optionName: '샷추가', count: 0 }] } },
  ]
  // 카운트할 State
  const [countState, setCountState] = useState<CoffeeMenu[]>(list); //State 타입지정 & 초기화
  // Fucntion to Up | Down handle 
  function handleUpDown(nameIndex: number, optionIndex: number, action: 'up' | 'down') {
    const updateList = [...countState];
    if (action === 'up') {
      updateList[nameIndex].menu.option[optionIndex].count++;
      setCountState(updateList);
    } else if (action === 'down') {
      updateList[nameIndex].menu.option[optionIndex].count--;
      setCountState(updateList);
    }
  }
  return (
    <div className="App">
      <h1>Coffee Kiosk</h1>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>
            {item.menu.name}
            {/* name별 옵션 */}
            <ul>
              {item.menu.option.map((optionItem, optionIndex) => {
                return <li key={optionIndex}>
                  {optionItem.optionName}
                  <button onClick={() => { handleUpDown(index, optionIndex, 'down') }}> - </button>
                  <span> {countState[index].menu.option[optionIndex].count} </span>
                  <button onClick={() => { handleUpDown(index, optionIndex, 'up') }}> + </button>
                </li>
              })}
            </ul>
          </li>
        })}
      </ul >
    </div >
  );
}

export default App;
