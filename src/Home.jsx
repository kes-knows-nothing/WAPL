import "./home.scss";

const Home = () => {
  return (
    <div className="home_container">
      <nav>
        <div className="menu_box">
          <img src="./logo.svg" alt="" />
          <ul className="menu_list">
            <li>지원 동기</li>
            <li>시장 분석</li>
            <li>WAPL 분석</li>
            <li>고용하기</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Home;
