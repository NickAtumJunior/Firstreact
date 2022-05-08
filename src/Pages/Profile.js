import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Profile() {


  const [msg,setmsg] = useState('');
  const [err,seterr] = useState('')
   const styling = {
     textAlign: 'center',
     fontWeight:600
   }
  function sendEmail(e){
     e.preventDefault();
     emailjs.sendForm('service_4xbofxe','template_cxg9prq',e.target,'hDGzehktfnxj6v6-b')
     .then(res =>{
      
       setmsg('Message send succesfully' );

     }).catch(err =>{

       seterr('Message not send or You are offline');

     });
  }

    return (
 <div id='profile' className='ui container'>
   <center><h1>Keep touch with me</h1></center> <br></br>
   {"\n"}
   {""}
   {""}
   <div className="ui four column grid" >
       <div className="row">
           <a className='column' style={styling} href='https://www.linkedin.com/in/nithish1b4'>Linkedin{""}<i className='linkedin icon'></i></a>
           <a className='column' style={styling} href='https://www.facebook.com/nithishkumarthirucelvam'>facebook{""}<i className='facebook icon'></i></a>
           <a className='column' style={styling} href=' https://wa.me/9344150665'>Whatsapp{""}<i className='whatsapp icon'></i></a>
           <a className='column' style={styling} href='mailto:nithishthirucelvam007@gmail.com'>Mail Me{""}<i className='envelope icon'></i></a>
       </div>
       <a className='column' style={styling} href='tel:9344150665'>Call me{""}<i className='phone icon'></i></a>
       <a className='column' style={styling} href='https://www.youtube.com/channel/UCmJ6M4-Yp04p4vJRWcBI21g'>Subscribe{""}<i className='youtube icon'></i></a>
       <a className='column' style={styling} href='https://twitter.com/NithishkumarTh2'>Follow me{""}<i className='twitter icon'></i></a>
       <a className='column' style={styling} href='https://www.instagram.com/in/nithishmuthya007'>Instagram{""}<i className='instagram icon'></i></a>
      </div> <br></br>
      <center><h1>Your Thoughts</h1></center> <br></br>
   <form className="ui form" onSubmit={sendEmail} >
       <div className="field">
           <label>Name</label>
           <input type="text" name="first_name" placeholder="your name" required/>
      </div>
      <div className="field">
           <label>Email</label>
           <input type='email' name="user_email" placeholder="Your email..." required/>
      </div>
      <div className="field">
           <label>Message</label>
          <textarea className='ui' name='message' placeholder='your thoughts' rows={4} required/>
      </div>
      <button className="ui  primary button" type="submit">Submit</button>
  </form>
    <div className='ui container'>
        <center><h1 style={{color:'green'}}>{msg}</h1></center>
        <center><h1 style={{color:'red'}}>{err}</h1></center>
    </div> {"\n"}
    
 </div>
    );
}

export default Profile;