import ColorfulMessage from "./components/ColorfulMessage";
const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px",
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* color="red" message="元気です！"をPropsで渡す */}
      <ColorfulMessage color="red">元気です</ColorfulMessage>

      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
