import React from "react";

export const ColorfulMessage = (props) => {
  const { color, fontsize, children } = props;
  const contentStyle = {
    color,
    fontSize: fontsize
  };
  // 通常のバージョン
  //   return <p style={contentStyle}>{props.message}</p>;
  // };

  // もう一つのバージョン
  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfulMessage;
