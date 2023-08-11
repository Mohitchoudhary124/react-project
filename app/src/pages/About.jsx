import React, { useState } from 'react'
import Footer from '../external-component/Footer';
import LeftBar from '../external-component/LeftBar';
function About() {
  const [color, setColor] = useState("")
  const changeColor = () => {
    setColor(color)
    document.getElementById('id1').style.background = color
  }
  const [text, setText] = useState("");
  const handleUppercase = () => {
    const newtext = text.toUpperCase();
    setText(newtext);
  }
  const handleLowercase = () => {
    const newtext = text.toLowerCase();
    setText(newtext);
  }

  const handleTrim = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    console.log(newText.join(" "));
  }
  return (

    <div>
      <div className='page-setup'>
        <div className='page-deta'>
          <div className='p-3'>
            <div className='bg-div p-3 border-radios-3 mb-3' id='id1' style={{background: "color", border:"1px solid #000"}}>
                {color} Add color name and click add button
            </div>
            <input type='text' value={color} onChange={(e)=>{setColor(e.target.value)}} placeholder='add color name' />
            <button className='btn btn-primary' onClick={changeColor}>Add Color</button>
          </div>
          <div className='mt-3 p-3'>
            <div>
              <h1>Your {text}</h1>
              <textarea name="text" className='p-2' value={text} onChange={(e)=>{setText(e.target.value)}} id="" style={{width: "100%"}} rows="10" placeholder='Your text put here'></textarea>
              <button className='btn btn-primary' onClick={handleUppercase}>Set text in Upper Case</button>
              <button className='btn btn-primary' onClick={handleLowercase}>Set text in Lower Case</button>
              <button className='btn btn-primary' onClick={handleTrim}>Trim</button>
            </div>
            <p>
              your total careactor is {text.length} and word {text.split(" ").length}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;