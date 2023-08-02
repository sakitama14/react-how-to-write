import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountButton = () => {
    setNum(num + 1);
  };

  const [num, setNum] = useState(0);
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
      <button onClick={onClickCountButton}>ボタンです</button>
      <p>{num}</p>
    </>
  );
};

export default App;
