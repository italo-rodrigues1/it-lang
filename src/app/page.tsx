"use client";

import { useState } from "react";

export default function Home() {
  const [btnFormat, setBtnFormat] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [responseDecoderAndIncoder, setResponseDecoderAndIncoder] =
    useState("");

  const decoderFormat = () => {
    const arrayWords: string[] = [];

    const objectFormat: any = {
      ".": "a",
      "..": "b",
      "...": "c",
      "....": "d",
      ".....": "e",
      "......": "f",
      ".......": "g",
      "........": "h",
      ".........": "i",
      "..........": "j",
      "...........": "k",
      "............": "l",
      ".............": "m",
      "..............": "n",
      "...............": "o",
      "................": "p",
      ".................": "q",
      "..................": "r",
      "...................": "s",
      "....................": "t",
      ".....................": "u",
      "......................": "v",
      ".......................": "w",
      "........................": "x",
      ".........................": "y",
      "..........................": "z",
    };

    const arrayString = valueInput.split(" ");

    arrayString.forEach((item) => {
      arrayWords.push(item === ",," ? "," : objectFormat[item]);
    });
    setResponseDecoderAndIncoder(arrayWords.join(""));
  };

  const incodeFormat = () => {
    const arrayWords: string[] = [];

    const objectFormat: any = {
      a: ".",
      b: "..",
      c: "...",
      d: "....",
      e: ".....",
      f: "......",
      g: ".......",
      h: "........",
      i: ".........",
      j: "..........",
      k: "...........",
      l: "............",
      m: ".............",
      n: "..............",
      o: "...............",
      p: "................",
      q: ".................",
      r: "..................",
      s: "...................",
      t: "....................",
      u: ".....................",
      v: "......................",
      w: ".......................",
      x: "........................",
      y: ".........................",
      z: "..........................",
    };

    let arrayString = valueInput.split("");
    console.log("arrayString", arrayString);

    arrayString.forEach((item) => {
      arrayWords.push(item === ",," ? "," : objectFormat[item]);
    });
    console.log("arrayWords", arrayWords.join(""));

    setResponseDecoderAndIncoder(arrayWords.join(" "));
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
          height: "100px",
        }}
      >
        <button onClick={() => setBtnFormat("Incoder")}>Incoder</button>
        <button onClick={() => setBtnFormat("Decoder")}>Decoder</button>
      </div>

      {btnFormat && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            margin: "100px 0",
          }}
        >
          <input
            type="text"
            onChange={(e) => setValueInput(e.target.value)}
            style={{
              width: "500px",
              borderRadius: "10px",
              padding: "10px",
              color: "#111",
            }}
          />
          <button
            type="submit"
            onClick={btnFormat === "Incoder" ? incodeFormat : decoderFormat}
            style={{
              borderRadius: "10px",
              padding: "10px",
              color: "#111",
              backgroundColor: "#fff",
            }}
          >
            Transformar
          </button>
        </div>
      )}

      {responseDecoderAndIncoder.length > 0 && (
        <div
          style={{
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Resposta</h1>
          <p>{responseDecoderAndIncoder}</p>
        </div>
      )}
    </div>
  );
}
