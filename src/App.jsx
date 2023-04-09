/** eslint react-hooks/exhaustive-deps: off */

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./compornents/ColorfulMessage";

const App = () => {
  console.log("最初");
  //const [動的に変わるstate変数, それを更新するstate更新関数] = useState(初期値);
  const [num, setNum] = useState(0);
  const [faceShow, setFaceShow] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwhitchShowFlag = () => {
    setFaceShow(!faceShow);
  };

  const contentLedyStyle = {
    color: "pink",
    fontSize: "18px"
  };

  useEffect(() => {
    //第二引数の配列を空文字にするとuseEffect内処理は最初の一回だけ行う
    //配列にstateを指定するとそのstateが更新されたとき処理を実行する
    // console.log("useEffect");
    if (num > 0) {
      if (num % 3 === 0) {
        // setFaceShow(true);
        //faceShowがfalseなら
        faceShow || setFaceShow(true);
      } else {
        //faceShowがtrueの時だけ
        faceShow && setFaceShow(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);
  //即実行のstate変更を書くと無限ループしてしまう
  // if (num > 0) {
  //   if (num % 3 === 0) {
  //     // setFaceShow(true);
  //     //faceShowがfalseなら
  //     faceShow || setFaceShow(true);
  //   } else {
  //     //faceShowがtrueの時だけ
  //     faceShow && setFaceShow(false);
  //   }
  // }

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue" message="お元気ですか？" />
      <p style={contentLedyStyle}>元気です！</p>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwhitchShowFlag}>on / off</button>
      <p>{num}</p>
      {faceShow && <p> ^^) _旦~~</p>}
    </>
  );
};

export default App;
