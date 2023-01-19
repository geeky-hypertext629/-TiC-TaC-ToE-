import React, { useState } from 'react';
import { useEffect } from 'react';
import Block from "./components/Block";
import Combos from "./components/Winning";


export default function App() {

  const [player, setplayer] = useState("X");

  const [positions, setposition] = useState(["", "", "", "", "", "", "", "", "",]);


  function updateWinner() {
    if(player==="X")
    alert(`The winner is O`);
    else
    alert(`The winner is X`);
    setposition(["", "", "", "", "", "", "", "", "",])
    setplayer("X");
  }


  useEffect(()=>{
    for(let i=0;i<Combos.length;i++)
    {
      let check = true;
      let temp = positions[Combos[i][0]];
      if(temp!=="")
      {
      for(let j=0;j<3;j++)
      {
        if (temp !== positions[Combos[i][j]])
          check = false;
      }
      if (check === true) {
        updateWinner();
        break;
      }
    }
  }
   // eslint-disable-next-line react-hooks/exhaustive-deps
  },[player])



  function clickedDiv(val) {
    if (positions[val] === "") {
      positions[val] = player;
      setposition(positions);
      if (player === "X")
        setplayer("O");
      else
        setplayer("X");
    }

  }

  return (
    <>
      <div className="container">
        <div className="row">
          <Block pos={0} value={positions[0]} updatevalue={clickedDiv} />
          <Block pos={1} value={positions[1]} updatevalue={clickedDiv} />
          <Block pos={2} value={positions[2]} updatevalue={clickedDiv} />
        </div>
        <div className="row">
          <Block pos={3} value={positions[3]} updatevalue={clickedDiv} />
          <Block pos={4} value={positions[4]} updatevalue={clickedDiv} />
          <Block pos={5} value={positions[5]} updatevalue={clickedDiv} />
        </div>
        <div className="row">
          <Block pos={6} value={positions[6]} updatevalue={clickedDiv} />
          <Block pos={7} value={positions[7]} updatevalue={clickedDiv} />
          <Block pos={8} value={positions[8]} updatevalue={clickedDiv} />
        </div>
      </div>
    </>
  )
}
