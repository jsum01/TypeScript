import { useNavigate } from "react-router-dom";
import styles from "./TopBar.module.css";

export default function TopBar() {

  const navigate = useNavigate();

  return (
    <div className={styles.topBarBody}>
      {/* Left Contents */}
      <div className={styles.leftContents}>
        {/* 로고 */}
        <div
          className={styles.logo}
          onClick={() => { navigate('/') }}>
          UM
        </div>
        {/* 홈 */}
        <div
          className={styles.mainpage_Link}
          onClick={() => { navigate('/') }}>
          홈
        </div>
        {/* 공지사항 */}
        <div
          className={styles.notice_Link}
          onClick={() => { navigate('notice')}}>
          공지사항
        </div>
        {/* 질문 게시판 */}
        <div
          className={styles.questBoard_Link}
          onClick={() => { navigate('/questboard') }}>
          질문게시판
        </div>
      </div>
      {/* Right Contents */}
      <div className={styles.rightContents}>
        {/* 마이페이지 */}
        <div
          className={styles.mypage_Link}>
          마이페이지
        </div>
        {/* 로그인 */}
        <div className={styles.login_Link}>
          로그인
        </div>
      </div>
    </div>
  )
}