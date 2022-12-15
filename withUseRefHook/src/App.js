

import React, {useRef} from 'react';



function App() {

  let firstParagraph = useRef()
  let secondParagraph = useRef()


  return (
    <div className="App" style={{textAlign: "center"}}>
      <p data-cy="changed" ref={firstParagraph} >Initial Paragraph </p>
      <button data-cy="clicked" onClick={() => firstParagraph.current.innerText = "Changed Paragraph"}>Change First Paragraph Text</button>

      <p data-cy="changed2" ref={secondParagraph} >Second Paragraph </p>
            <button data-cy="clicked2" onClick={() => secondParagraph.current.style.backgroundColor = "#f2e47d"}>Change Second Paragraph Background Color</button>
    </div>
  );
}



export default App;