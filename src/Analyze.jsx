import './styles/analyze.scss';

const Analyze = () => {
  const tistoryUrl = "https://kesknowsnothing.tistory.com/35";

  const moveToTistory = () => {
    window.open(tistoryUrl, "_blank");
  };

  return (
    <div className="analyze_container">
      <span className="title">시장 분석</span>
      <iframe
        className="analyze_figma"
        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
        width="1000"
        height="450"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F3eP0BOvr6roH5h7sRySD1O%2FUntitled%3Ftype%3Dwhiteboard%26node-id%3D0%253A1%26t%3DsDCl3L3NExT1qL76-1"
        allowFullScreen
        title="Embedded Figma Document"
      />
      <span className="information_line">
        더 자세한 내용은 아래 블로그 글을 확인해주세요.
      </span>
      <img src="./tistory.svg" alt="tistory" className="tistory_img" onClick={moveToTistory}/>
    </div>
  );
};

export default Analyze;
