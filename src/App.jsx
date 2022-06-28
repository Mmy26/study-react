import { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
const App = () => {
  // [stateの値, state値を変更する関数名] = useState(初期値);
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceSHowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceSHowFlag(!faceShowFlag);
  };
  // stateな値が切り替わると再レンダリングされるため、on/offの切り替えが、下記のifでtrueの戻されてしまうため,useEffect()で動作の不備を回避させる必要がある
  // 第二引数"":再レンダリングされるたびに読み込まれる
  // 第二引数[]:再レンダリングされても読み込まれてない
  // 第二引数[変数]:再レンダリングされたとき’変数’だけが読み込まれる

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceSHowFlag(true);
      } else {
        faceShowFlag && setFaceSHowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* color="red" message="元気です！"をPropsで渡す */}
      <ColorfulMessage color="red">元気です</ColorfulMessage>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <br />
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      {faceShowFlag && <p>٩( ᐛ )و</p>}
    </>
  );
};

export default App;
