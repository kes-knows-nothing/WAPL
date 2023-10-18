import "./styles/if.scss";

const If = () => {
  return (
    <div className="if_container">
      <span className="title">이런 건 어떨까요?</span>
      <div className="if_content_wrapper">
        <span className="small_title">1. 현재 상태: 부서, 직급란의 부재</span>

        <span className="information_line">
          현재 부서나 직급에 대한 내용이 없어 협업에서 어려움이 발생할 수 있다고
          생각합니다.
        </span>
        <span className="information_line">
          예를 들어, 개발팀과 기획팀이 새로운 프로젝트를 진행 중에 새롭게 룸을
          개설하며 진행해야하는 상황에서 기획팀 누구를 초대해야하는지 일일
          물어야하는 상황이 발생합니다.
        </span>
        <span className="information_line">
          또한, 부서별로 필터링 되지 않는다면 일일히 기획팀 을 찾아 초대해하므로
          굉장히 불편한 UX을 겪게 됩니다.
        </span>

        <img src="./member.png" alt="ex1" className="example1" />
        <span className="caption">
          그림1. 누가 어디 소속인지 알기 어려운 상태입니다.
        </span>
        <span className="small_title">
          2. 예상 되는 어려움이나 비용: DB 스키마 변경
        </span>
        <span className="information_line">
          개발팀 입장에서 이미 데이터가 축적된 테이블의 컬럼 추가로 스키마를
          변경하는 것에 어려움이 있을 수 있습니다.{" "}
          </span>
          <span className="information_line">이 기능으로 유저가 누리는 편익이 현재 발생하는 비용에 비해 크다고 생각하기에</span>
        <span className="information_line">이 기능의 필요성으로 설득하여 작업이 이루어 질 수 있도록 하겠습니다.</span>
        <span className="small_title" id="mock_up_title">3. 목업</span>
        <iframe
        className="mock_up"
        style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
        width={800}
        height={450}
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FmS6SXKvoBImWVMOBBEEJVp%2F%25EB%25AA%25A9%25EC%2597%2585%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DtzAu3kHkxm1ABcKT-1"
        allowFullScreen
      ></iframe>
      </div>
    </div>
  );
};

export default If;
