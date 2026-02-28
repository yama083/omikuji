/** @jsxImportSource @emotion/react */
import React, { useState } from "react";

const OmikujiApp = () => {
  // 今の状態：[idle, loading, success, error]
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState("idle");

  async function drawOmikuji() {
    try {
      setResult(null);
      setStatus("loading");

      const res = await fetch("/fortunes.json");
      const data = await res.json();
      const random = data[Math.floor(Math.random() * data.length)];
      setResult(random);
      setStatus("success");
      console.log("取得結果：", random);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      css={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        css={{
          textAlign: "center",
          width: 500,
          height: 500,
          margin: "auto",
        }}
      >
        <h1>おみくじ</h1>
        <button onClick={drawOmikuji}>運試し</button>
        <p
          css={{
            marginTop: 20,
            width: 200,
            padding: 20,
            margin: "20px auto",
            borderRadius: 10,
            color: "#fff",
            transition: "all .3s ease",
            backgroundColor: result?.color ?? "#333",
          }}
        >
          {result?.title ?? "ここに結果がでるよ！"}
        </p>
        <p>今の状態：{status}</p>
      </div>
    </div>
  );
};

export default OmikujiApp;
