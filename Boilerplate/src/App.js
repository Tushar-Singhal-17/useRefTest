

import React, {useRef} from 'react';



function App() {

  let firstParagraph = useRef()
  let secondParagraph = useRef()                    // We have removed the useref's functionality, hence the test cases should fail


  return (
    <div className="App" style={{textAlign: "center"}}>
      <p data-cy="changed" ref={firstParagraph} >Initial Paragraph </p>
      <button data-cy="clicked" onclick={null}>Change First Paragraph Text</button>

      <p data-cy="changed2" ref={secondParagraph} >Second Paragraph </p>
            <button data-cy="clicked2" onclick={null}>Change Second Paragraph Background Color</button>
    </div>
  );
}



export default App;