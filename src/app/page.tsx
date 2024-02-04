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
    <div className="h-screen w-full">
      <div className="h-[100px] flex items-center justify-center space-x-10">
        <button onClick={() => setBtnFormat("Incoder")}>Incoder</button>
        <button onClick={() => setBtnFormat("Decoder")}>Decoder</button>
      </div>

      {btnFormat && (
        <div className="flex max-[600px]:flex-col items-center justify-center space-x-10 max-[600px]:space-y-10 max-[600px]:space-x-0 mt-[100px]  max-[600px]:px-[10px]">
          <input
            className="w-[500px] max-[600px]:w-full rounded-[10px] p-[10px] text-black"
            type="text"
            onChange={(e) => setValueInput(e.target.value)}
          />
          <button
            className="rounded-[10px] p-[10px] text-black bg-white"
            type="submit"
            onClick={btnFormat === "Incoder" ? incodeFormat : decoderFormat}
          >
            Transformar
          </button>
        </div>
      )}

      {responseDecoderAndIncoder.length > 0 && (
        <div className="h-auto flex flex-col items-center justify-center space-x-10 max-[600px]:space-x-0 mt-[100px]">
          <h1>Resultado : </h1>
          <p>{responseDecoderAndIncoder}</p>
        </div>
      )}
    </div>
  );
}
