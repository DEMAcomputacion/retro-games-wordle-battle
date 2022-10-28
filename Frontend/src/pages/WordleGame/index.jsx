import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Wordle } from "../../components/WordleComponents/Wordle";

export const WordleGame = () => {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("https://s4-10-m-mern-production.up.railway.app/api/v1/word")
      .then((res) => res.json())
      .then((json) => {
        //     // random int between 0 & 14
        console.log(json);
        setSolution(json.word.toLowerCase());
      });
  }, [setSolution]);
  return <Wordle solution={solution} />;
};
