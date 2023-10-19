import "./styles/home.scss";
import Home from "./Home";
import Analyze from "./Analyze";
import Wapl from "./Wapl";
import Data from "./Data";
import If from "./If";
import Wrapup from "./wrapup";
function App() {
  const moveHome = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  const moveAnalyze = () => {
    window.scroll({ top: 874, behavior: "smooth" });
  }
  const moveWapl = () => {
    window.scroll({ top: 1845, behavior: "smooth" });
  }
  const moveWrap = () => {
    window.scroll({ top: 5934, behavior: "smooth" });
  }
  return (
    <>
      <nav>
        <div className="menu_box">
          <img src="./logo.svg" alt="" className="nav_logo" />
          <ul className="menu_list">
            <li onClick={moveHome}>지원 동기</li>
            <li onClick={moveAnalyze}>시장 분석</li>
            <li onClick={moveWapl}>WAPL 분석</li>
            <li onClick={moveWrap}>고용하기</li>
          </ul>
        </div>
      </nav>
      <Home />
      <Analyze />
      <Wapl />
      <Data />
      <If />
      <Wrapup />
    </>
  );
}

export default App;
