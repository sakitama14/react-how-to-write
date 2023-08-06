import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShow, setFaceShow] = useState(false);

  const onClickCountButton = () => {
    setNum(num + 1);
  };
  const switchShowButton = () => {
    setFaceShow(!faceShow);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShow || setFaceShow(true);
      } else {
        faceShow && setFaceShow(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {/* 通常の文字の渡し方 */}
      {/* <ColorfulMessage color="blue" message="お元気ですか？" fontsize="25px"></ColorfulMessage>
      <ColorfulMessage color="pink" message="元気です！" fontsize="18px" /> */}

      {/* もう一つのバージョン */}
      <ColorfulMessage color="blue" fontsize="18px">
        お元気ですか？
      </ColorfulMessage>
      <ColorfulMessage color="pink" fontsize="18px">
        元気です！
      </ColorfulMessage>
      <button onClick={onClickCountButton}>カウントアップ！</button>
      <button onClick={switchShowButton}>on/off</button>
      <p>{num}</p>
      {faceShow && <p>( *´艸｀)</p>}
    </>
  );
};

export default App;
