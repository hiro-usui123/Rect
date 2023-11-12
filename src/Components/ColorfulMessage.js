export const ColorfulMessage = (props) => {
  console.log(props);
  const { color, children } = props;
  const contentStyle = {
    //color: "blue",
    //color:props.color,
    color: color,
    fontSize: "18px"
  };

  return (
    //<p style={contentStyle}>お元気ですか？</p>
    //<p style={contentStyle}>{props.message}</p>
    //<p style={contentStyle}>{props.children}</p>
    <p style={contentStyle}>{children}</p>
  );
};
