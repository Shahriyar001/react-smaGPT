import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import Test from "./test";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user.png";
import gptImgLogo from "./assets/chatgptLogo.svg";
import { sendMsgToOpenAi } from "./openai";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      Text: "hi",
      isBot: true,
    },
  ]);

  const handleSend = async () => {
    const res = await sendMsgToOpenAi(input);
    setMessages([
      ...messages,
      { text: input, isBot: false },
      { text: res, isBot: true },
    ]);
  };

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="logo" className="logo" />
            <span className="brand">SmaGPT</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="new chat" className="addBtn" /> New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Query" /> What is Programming?
            </button>
            <button className="query">
              <img src={msgIcon} alt="Query" /> How to use an api?
            </button>
            <Test />
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="" className="listItemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="" className="listItemsImg" />
            Upgrade To pre
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatImg" src={userIcon} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              dicta eius quas ad nihil? Esse iusto rem voluptatem quidem minus!
            </p>
          </div>

          <div className="chat bot">
            <img className="chatImg" src={gptImgLogo} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              dicta eius quas ad nihil? Esse iusto rem voluptatem quidem minus!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, quisquam optio recusandae sunt eaque tenetur unde eos,
              blanditiis beatae quae facere quia dignissimos nostrum repellendus
              iure error rem. Possimus quo quibusdam nostrum explicabo
              consectetur non, sapiente laudantium sequi dolorum saepe quasi
              aperiam ex nobis esse rerum enim! Nemo, velit dolore. Molestiae
              veritatis quaerat sed. Corporis illum mollitia molestiae.
              Accusantium ratione eum maxime quasi quisquam in rem perspiciatis,
              expedita fuga iste, n
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              name=""
              id=""
              placeholder="Send a message..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button className="send" onClick={handleSend}>
              <img src={sendBtn} alt="send" />
            </button>
          </div>
          <p>
            ChatGPT may produce inaccurect information about people, place or
            facts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
