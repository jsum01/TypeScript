import { useState } from 'react';
import './App.css';



// 인터페이스 -> 아이템마다 타입지정가능 -> 이렇게하면 만약 실수로 key값을 다르게 해도 오류를 출력해준다.
interface coffee {
  subject: string;
  onClick?: Function; //옵셔널
  option? : Option;
}
// '커피' 인터페이스에 옵션 추가
interface Option { 
  content : string[],
  count : number,
}


function App() {
  const [state, setState] = useState<boolean>(false);


  const item0: coffee = {
    subject: "에스프레소",
    onClick: () => { console.log("에스프레소"); },
    option : {
      content : ['샷추가','디카페인'],
      count : 0,
    }
  };

  const item1: coffee = {
    subject: "아메리카노",
    onClick: () => { console.log("아메리카노"); },
    option : {
      content : ['샷추가','디카페인'],
      count : 0,
    }
  };

  const itemList: coffee[] = [
    item0,
    item1,
    {
      subject: "카페라떼",
      //onClick: () => { console.log("카페라떼"); },
      option : {
        content : ['샷추가'],
        count : 0,
      }
      // price : 21, 이렇게 하면 오류가 난다.
    }
  ]

  // 컴포넌트 - props에도 타입을 지정할 수 있다.
  function Coffee(props: coffee) {
    const onClick = props.onClick ? props.onClick : () => { alert("상세내용 설정X") };
    return <li >
      <b onClick={() => { onClick() }} className='subject'>
        {props.subject}
      </b>
      <button
        style={{ fontSize: '16px' }}
        onClick={() => {
          setState(!state);
        }}
      > 옵션[{props.option?.content.length}]</button>
      <ul>{ state && props.option?.content.map((item) => {
        return <li>{item}</li>
      })}</ul>
    </li>
  }

  return (
    <div className="App">
      1일차
      <hr />
      <h1>커피종류</h1>
      <ul>
        {itemList.map((item) => {
          return <li><Coffee subject={item.subject} onClick={item.onClick} option={item.option}/></li>
        })}
      </ul>
    </div>
  );
}

export default App;
