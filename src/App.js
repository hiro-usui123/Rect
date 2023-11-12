/* eslint react-hooks/exhaustive-deps off */
//もとから出なかった。

import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

import { ColorfulMessage } from "./Components/ColorfulMessage";
import { useEffect, useState } from "react";

const App = () => {
  console.log("最初");
  const onClickButton = () => {
    alert(123);
  };
  const onClickCountUp = () => {
    setNumber(num + 1);
  };
  const onClickCShowFlag = () => setShowFaceFlag(!showFaceFlag);

  //setNumはどこから？
  //const [num,setNum] = useState(0);
  const [num, setNumber] = useState(0);
  const [showFaceFlag, setShowFaceFlag] = useState(true);

  useEffect(() => {
    console.log("useEffect");
    if (num > 0) {
      if (num % 3 === 0) {
        showFaceFlag || setShowFaceFlag(true);
      } else {
        showFaceFlag && setShowFaceFlag(false);
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  // if(num > 0){
  //   if (num % 3 === 0) {
  //     //ループするらしい。
  //     showFaceFlag || setShowFaceFlag(true);
  //   } else {
  //     showFaceFlag &&  setShowFaceFlag(false);
  //   }
  // }

  // const contentStyle = {
  //   color: "blue",
  //   fontSize: "18px"
  // };

  // const contentLedyStyle = {
  //   color: "pink",
  //   fontSize: "18px"
  // };

  //Q コメントアウトしたい。<p style={contentStyle}>お元気ですか？</p>
  // <p style={contentLedyStyle}>元気です!</p>

  //<ColorfulMessage color='blue' message='お元気ですか？' />
  //<ColorfulMessage color='pink' message='元気です!' />

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink" message="元気です!">
        元気です!
      </ColorfulMessage>
      <button onClick={onClickButton}> ボタン </button>
      <br />
      <button onClick={onClickCountUp}> カウントアップ </button>
      <br />
      <button onClick={onClickCShowFlag}> ON/OFF </button>
      <p>{num}</p>
      {showFaceFlag && <p>☺</p>}
    </>
  );
};

export default App;
