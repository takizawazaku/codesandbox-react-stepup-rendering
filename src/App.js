import { useState, useCallback } from "react";
import "./styles.css";
import { ChildArea } from "./ChildArea";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  // アロー関数は毎回新しい関数を生成していると判断される
  // const onClickClose = () => setOpen(false);
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      {/* ここでは毎回新しい関数を渡されていると判断され、memo化しても再レンダリングが走ってしまう */}
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
