import React from 'react'

const journal = () => {
  return (
    <>
    <div className="grid background-main">
    <div className="container">
    <h1 className="p-4 text-center">{/*{{current_user.fname}}*/}, welcome to your journal!</h1>
    <a href="/logout"><u>Log Out</u></a>
    <div className=" d-flex justify-content-center">
      <div className="text-center p-4 background-element col-lg-8 mb-5 mb-5 p-4 rounded neu-shadow-1 blue-module my-3">
          <h2 className="mb-5 pt-3">How are you feeling today?</h2>
          <form action ="/journal-saved" method="POST">
              <h3>Rank how energetic you felt today:</h3>
              <div className="mb-5 pt-5 pb-5">
                <input type="range" name="energy" min="1" max="10" value="5" id="energy" className="sliders" />
                <img src="./static/icons/5-energy.png" id="energy-icon" />
              </div>
              <h3>Rank how your mood felt today:</h3>
              <div className="mb-5 pt-5 pb-5">
                <input type="range" name="happiness" min="1" max="10" value="5" id="mood" className="sliders" />
                <img src="./static/icons/5-emoji.png" id="emoji" />
              </div>
              <br />
              <h3>Why are you feeling this way?</h3>
              <div className="the-quill-editor my-5">
                <input name="journal_entry" type="hidden" />    
                  <div id="editor-container">
                  </div>
              </div>
              <input type="submit" value="Submit" className="btn btn-large neu-button-1 btn-block btn-green" />
          </form> 
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default journal