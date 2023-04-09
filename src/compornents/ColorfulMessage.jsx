import React from "react";

const ColorfulMessage = (props) => {
  console.log(props, "カラフル");
  const { color, message } = props;
  const contentStyle = {
    // color: "blue",
    color, //省略記法
    fontSize: "18px"
  };

  return (
    <>
      {/* <p style={contentStyle}>お元気ですか！</p> */}
      <p style={contentStyle}>{message}</p>
    </>
  );
};

export default ColorfulMessage;
