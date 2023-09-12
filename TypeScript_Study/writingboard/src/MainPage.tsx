import Login from "./component/Login";
import TopBar from "./component/TopBar";

export default function MainPage() {


  return(
    <div>
      {/* 상단바 */}
      <TopBar />
      <Login />
    </div>
  )
}