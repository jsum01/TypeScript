import { useState } from "react"
import TopBar from "./TopBar"

interface Question {
  title: string;
  content: string;
  name: string;
  date: string;
  view: number;
  up: number;
}


export default function QuestBoard() {
  const list: Question = {
    title: '첫게시글',
    content: '게시글을 올려야 합니다.',
    name: '엄지석',
    date: '2023.09.12.13:21',
    view: 112,
    up: 123,
  }

  // 글 추가할 state형성
  const [qList, setQList] = useState<Question>(list);

  return (
    <div>
      <TopBar />
      <h1>질문 게시판</h1>
      <table>
        <tr>
          <th>No.</th>
          <th>Title</th>
          <th>Name</th>
          <th>Date</th>
          <th>View</th>
          <th>Up</th>
        </tr>
        <tr>
          
        </tr>
      </table>

      <div> 제목:
        <input name="제목" value={qList.title} onChange={(e) => {
          const inputQList = {
            ...qList,
            title: e.target.value
          }
          setQList(inputQList);
        }}/>
      </div>
      <div> 이름:
        <input name="이름" value={qList.name} />
      </div>
      <div> 날짜:
        <input name="날짜" value={qList.title} />
      </div>
      <div> 내용:
        <input name="내용" value={qList.title} />
      </div>

      <button>등록</button>
    </div>
  )
}