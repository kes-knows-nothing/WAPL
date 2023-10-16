import "./styles/home.scss";

const Home = () => {
  return (
    <div className="home_container">
      <nav>
        <div className="menu_box">
          <img src="./logo.svg" alt="" className="nav_logo" />
          <ul className="menu_list">
            <li>지원 동기</li>
            <li>시장 분석</li>
            <li>WAPL 분석</li>
            <li>고용하기</li>
          </ul>
        </div>
      </nav>
      <div className="introduce_box">
        <div className="introduce">
          <img src="./me.jpg" alt="" className="profile_img" />
          <div className="introduce_data">
                <span className="introduce_title">WAPL 서비스 기획자를 꿈꾸는 이상혁입니다.</span>
                <span className="introduce_content">저는 서비스에 대해 왜라는 질문하고 분석하는 것을 좋아합니다. 제가 관심있는 
                서비스에 대해 사람들이 왜 좋아하는지 혹은 왜 싫어하는지 분석해 글로 쓰며 서비스에 대한 관심을 이어 왔고 서비스를 기획해보고 싶다는 꿈을 갖게 되었습니다. 
                그러던 기존 협업 툴의 장점을 모은 협업 툴을 개발하고 WAPL을 알게 되었고 보다 간편한 협업 시스템을 구축하고 있는 그 과정에 함께하고 싶어 이 페이지를 만들게 되었습니다.
                <br></br><br></br>이 페이지에는 제가 생각하는 협업 툴 시장과 WAPL에 대한 분석을 담았습니다.
                 </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
