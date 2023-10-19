import "./styles/home.scss";
import { useRef, useEffect } from "react";

const Home = () => {
  const homeDivRef = useRef(null);

  useEffect(() => {
    console.log(homeDivRef.current.offsetTop);
  }, []);
  
  return (
    <div className="home_container" ref={homeDivRef}>
      <div className="introduce_box">
        <div className="introduce">
          <img src="./me.jpg" alt="" className="profile_img" />
          <div className="introduce_data">
            <span className="introduce_title">
            서비스 기획자를 꿈꾸는 이상혁입니다.
            </span>
            <span className="introduce_content">
              서비스에 대해 왜라는 질문하고 분석하는 것을 좋아합니다. 제가
              관심있는 서비스에 대해 사람들이 왜 좋아하는지 혹은 왜 싫어하는지
              분석해 글로 쓰며 서비스에 대한 관심을 이어 왔고 서비스를
              기획해보고 싶다는 꿈을 갖게 되었습니다. <br></br>

              최근에는 뜨거운 경쟁이 벌어지고 있는 협업 툴 서비스에 관심을 갖게 되었고 협업 툴 시장 및 WAPL에 대해 분석하였습니다.
              이 분석을 통해서 개선점을 찾았고 서비스 기획자로서 어떻게 개선을 진행시킬 것인지 작성하였습니다.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
