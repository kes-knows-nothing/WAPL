import './styles/wapl.scss'

const Wapl = () => {
  return (
    <div className="wapl_container">
      <span className="title">WPAL 전략 분석</span>
      <iframe
        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
        width="800"
        height="450"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fm4RH7bKftYUUExtZqGKv62%2FWAPL-%25EC%25A0%2584%25EB%259E%25B5-%25EB%25B6%2584%25EC%2584%259D%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DzCE1MdhiaRtXzvnb-1"
        allowFullScreen
        title="Embedded Figma Document"
      />
      <span className="information_line">WPAL은 메신저형 그리고 업무형 협업 두 가지 형태를 종합한 올인원 협업 툴을 지향한다고 생각합니다.</span>
      <span className="information_line">비단, 칸반 보드와 메신저 기능 구현을 넘어 <span className='highlight'>새로운 창으로 이동하지 않고 어플리케이션 내에서 동작</span>한다는 것이 큰 특징입니다.</span>
      <span className="information_line">더불어, 메일 시스템도 내장시켜 통합적인 시스템 구축 1선에 있다고 생각합니다.</span>
    </div>
  );
};

export default Wapl;
