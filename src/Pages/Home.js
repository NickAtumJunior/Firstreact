import React from 'react';




function Home() {
 
  
    return (
        <div className='home'>
           <div className='container'>
      <div className='row'>
        
        <div className='col'>
        <div className='home_two'>
              <h1 style={{color:"white"}}>Hi! Everyone I'm <span className='lone'>{"\n"}LoneWolf</span></h1> <br></br>
              <h3>FullStack Developer Based in <span className='blue'>India.</span></h3> <br></br>
              <p>Let me Introduce myself,I start my career as a <span className='blue'>UI Designer</span> 
                and thereafter I changed my career as a <span className='blue'>Front-End-Dev</span>.Now I'm a 
                <span className='blue'>Fullstack-Dev</span>.after getting married with <span className='red'>Javascript </span>
                 and having many childrens especially <span className='red'>React,Angular,Node,Three.js</span>,I had completed 
                Civil Engineering  in AnnaUniversity Affiliated College "Sounds Weird" yes, But I have an <span className='blue'> Passionate </span> 
                 in AI.
              </p>
                  <br></br>
              <button className="ui primary button"> Hire Me</button>     <button className="ui primary button ">Resume</button>
           </div>
        </div>
      </div>
    </div>
</div>
    );
}

export default Home;