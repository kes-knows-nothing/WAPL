import "./styles/wrapup.scss";
import { useEffect, useRef, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseApp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wrapup = () => {
  const wrapDivRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  const [comment, setComment] = useState("");

  const handleComment = (e) => {
    setComment(e.target.value);
  };
  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("복사 완료!");
    } catch (e) {
      alert("복사에 실패하였습니다");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(comment);
    try {
      await addDoc(collection(db, "comments"), {
        comment,
      });
      setComment("");
      toast.success("피드백이 전송되었습니다.");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    console.log(wrapDivRef.current.offsetTop);
  });
  return (
    <div className="wrapup_container" ref={wrapDivRef}>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
        style={{ fontSize: "13px" }} 
      />

      <div className="contact">
        <span
          className="copy"
          ref={emailRef}
          onClick={() => {
            handleCopyClipBoard(emailRef?.current.innerText);
          }}
        >
          letmeknowkes@gmail.com
        </span>
        <span
          className="copy"
          ref={numberRef}
          onClick={() => {
            handleCopyClipBoard(numberRef?.current.innerText);
          }}
        >
          010-4227-1148
        </span>
        <span className="copy_caption">
          이메일과 전화번호는 클릭하면 복사가 됩니다.
        </span>
      </div>

      <div className="letter">
        <span className="letter_line">
          안녕하세요. 배움을 좋아하는 이상혁입니다.
        </span>
        <span className="letter_line">
          먼저 제 부족한 포트폴리오를 확인해주셔서 감사합니다.
        </span>
        <span className="letter_line">
          혹시 내용이 마음에 드셨다면 연락 부탁드리겠습니다!
        </span>
        <span className="letter_line">
          많이 부족하다고 느끼셨다면 아래 입력창을 통해 짧은 피드백이라도
          남겨주시면 감사하겠습니다.
        </span>
        <span className="letter_line">
          피드백은 제가 더욱 성장한 서비스 기획자로 가는 길에 큰 도움이 됩니다.
        </span>
        <span className="letter_line">
          저에게 배울 수 있는 기회를 주셔서 감사합니다.
        </span>
      </div>
      <form action="" onSubmit={handleSubmit} className="feedback_form">
        <textarea
          className="feedback_input"
          onChange={handleComment}
          placeholder="작은 피드백도 큰 도움이 됩니다. 감사합니다."
          value={comment}
        />
        <button className="feedback_button">피드백 전송</button>
      </form>
    </div>
  );
};

export default Wrapup;
