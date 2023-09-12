import { useNavigate } from "react-router-dom";
import styles from "./TopBar.module.css";

export default function TopBar() {

  const navigate = useNavigate();

  return (
    <div className={styles.topBarBody}>
      {/* Left Contents */}
      <div className={styles.leftContents}>
        {/* 로고 */}
        <div className={styles.logo}>
          UM board
        </div>
        {/* 홈 */}
        <div onClick={() => { navigate('/') }}>
          홈
        </div>
        {/* 공지사항 */}
        <div>
          공지사항
        </div>
        {/* 질문 게시판 */}
        <div>
          질문게시판
        </div>
      </div>
      {/* Right Contents */}
      <div className={styles.rightContents}>
        {/* 마이페이지 */}
        <div>
          마이페이지
        </div>
        {/* 로그인 */}
        <div className={styles.loginButton}>
          로그인
        </div>
      </div>
    </div>
  )
}