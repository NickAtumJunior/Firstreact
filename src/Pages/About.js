import React from 'react';

function About() {

  const elementStyle = {
    padding: 1 + "%",
    margin: 3+ '%'
  } 
  const containerStyle = {
     paddingTop: 4 + "%",
  }

  const textColor = {
    color: "white",
  }
  const subTextColor ={
    color: "rgb(220, 245, 0)"
  }
    return (

        <div className='about'>
            <div className="container" style={containerStyle}>
                  <center><h1 style={{backgroundColor: "white",  width: "fitContent"}}>Skills of Mine</h1></center> 
           
                <center style={containerStyle}>
                <div className="row">
                          <div className="col" style={elementStyle} >
                               <h1 style={textColor}>98%</h1>
                               <h3 style={subTextColor}>HTML</h3>
                          </div>
                          <div className="col" style={elementStyle} >
                               <h1 style={textColor}>95%</h1>
                               <h3 style={subTextColor}>CSS</h3>
                          </div>
                          <div className="col" style={elementStyle} >
                               <h1 style={textColor}>91%</h1>
                              <h3 style={subTextColor}>Javascript</h3>
                          </div>
                         <div className="col" style={elementStyle} >
                              <h1 style={textColor}>83%</h1>
                              <h3 style={subTextColor}>React</h3>
                         </div>
                  </div>       

                  <div className="row"> 
                         <div className="col" style={elementStyle} >
                             <h1 style={textColor}>99%</h1>
                             <h3 style={subTextColor}>Anime.js</h3>
                        </div>
                        <div className="col" style={elementStyle} >
                             <h1 style={textColor}>97%</h1>
                             <h3 style={subTextColor}>AOS</h3>
                        </div>
                        <div className="col" style={elementStyle} >
                            <h1 style={textColor}>90%</h1>
                           <h3 style={subTextColor}>Node.js</h3>
                        </div>
                       <div className="col" style={elementStyle} >
                           <h1 style={textColor}>89%</h1>
                           <h3 style={subTextColor}>Github</h3>
                       </div>
                 </div>
                 
                 <div className="row"> 
                       <div className="col" style={elementStyle} >
                          <h1 style={textColor}>98%</h1>
                          <h3 style={subTextColor}>Bootstrap</h3>
                       </div>
                       <div className="col" style={elementStyle} >
                          <h1 style={textColor}>87%</h1>
                          <h3 style={subTextColor}>MUI</h3>
                       </div>
                       <div className="col" style={elementStyle} >
                          <h1 style={textColor}>98%</h1>
                          <h3 style={subTextColor}>Semantic UI</h3>
                       </div>
                       <div className="col" style={elementStyle} >
                          <h1 style={textColor}>90%</h1>
                          <h3 style={subTextColor}>UI UX</h3>
                       </div>
                  </div>
                </center>
        </div>
   </div>
    );
}

export default About;