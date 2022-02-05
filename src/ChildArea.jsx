import { memo } from "react";
const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

// memoを使うことでpropsが変更されない限り再レンダリングされない
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChildAreaがレンダリングされた!!");

  const data = [...Array(2000).keys()];
  for (const row of data) {
    console.log("...");
  }

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
