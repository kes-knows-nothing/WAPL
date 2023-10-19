import "./styles/data.scss";
import { useRef, useEffect } from "react";

const Data = () => {
  const dataDivRef = useRef(null);

  useEffect(() => {
    console.log(dataDivRef.current.offsetTop);
  }, []);
  return (
    <div className="data_container" ref={dataDivRef}>
      <span className="title">WAPL 역기획</span>
      <div className="data_wrapper">
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          width={800}
          height={450}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F1clsaTrJBEFiOBjfkTgxAd%2FTmaxWAPL-%25EA%25B8%25B0%25EB%258A%25A5%25EA%25B3%25BC-%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0-%25EC%25A0%2595%25EC%259D%2598%3Ftype%3Dwhiteboard%26node-id%3D0%253A1%26t%3DY8t7skWZ0QuaCZqp-1"
          allowfullscreen
        ></iframe>
        <iframe
          style={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
          }}
          width={800}
          height={450}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fs98h5nzfTKJKc7sX7kFFvi%2FTmaxWAPL-Information-Architecture%3Ftype%3Dwhiteboard%26node-id%3D0%253A1%26t%3DWM8EqSOWmQJ4TIrs-1"
          allowFullScreen
        ></iframe>
      </div>
      <span className="information_line">
        WAPL의 기능/데이터 정의서와 IA를 작성을 통해서 어플리케이션의 구조 및
        사용자 플로우를 분석하였고
      </span>
      <span className="information_line">
        이를 통해 한 가지의 제안 사항을 생각했고 서비스 기획자로서 가정하고 가상의 일처리를 해보았습니다.
      </span>
    </div>
  );
};

export default Data;
