import React from "react";

const App = () => {
  const onClickButton = () => alert("クリックされました");
  const contentStyle = {
    color: "blue",
    fontSize: "18px",
    fontWeight: "bold"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>あいうえお</h1>
      <p style={contentStyle}>かきくけこ</p>
      <button onClick={onClickButton}>ボタンです</button>
    </>
  );
};

export default App;
