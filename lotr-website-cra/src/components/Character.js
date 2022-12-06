import React from "react";

export default function Transaction({character}) {
  
  const {name, wikiUrl, height, race, gender, spouse, birth, death} = character
  
  return (
    <tr>
      <td style={{textAlign: "right"}}><a rel="noreferrer" href={wikiUrl} target="_blank" >{name}</a></td>
      <td style={{textAlign: "center"}}>{height}</td>
      <td style={{textAlign: "center"}}>{race}</td>
      <td style={{textAlign: "center"}}>{gender}</td>
      <td style={{textAlign: "center"}}>{spouse}</td>
      <td style={{textAlign: "center"}}>{birth}</td>
      <td style={{textAlign: "center"}}>{death}</td>
    </tr>
  );
}