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
 <div className='profile' class='ui container'>
   <center><h1>Keep touch with me</h1></center> <br></br>
   {"\n"}
   {""}
   {""}
   <div class="ui four column grid" >
       <div class="row">
           <a class='column' style={styling} href='https://www.facebook.com/nithishkumarthirucelvam'>Linkedin{""}<i class='linkedin icon'></i></a>
           <a class='column' style={styling} href='https://www.facebook.com/nithishkumarthirucelvam'>facebook{""}<i class='facebook icon'></i></a>
           <a class='column' style={styling} href='https://www.facebook.com/nithishkumarthirucelvam'>Whatsapp{""}<i class='whatsapp icon'></i></a>
           <a class='column' style={styling} href='https://www.facebook.com/nithishkumarthirucelvam'>Mail Me{""}<i class='envelope icon'></i></a>
       </div>
       <a class='column' style={styling} href='https://www.facebook.com/nithishkumarthirucelvam'>Call me{""}<i class='phone icon'></i></a>
       <a class='column' style={styling} href='https://www.facebook.com/nithishkumarthirucelvam'>Subscribe{""}<i class='youtube icon'></i></a>
       <a class='column' style={styling} href='https://www.facebook.com/nithishkumarthirucelvam'>Follow me{""}<i class='twitter icon'></i></a>
       <a class='column' style={styling} href='https://www.facebook.com/nithishkumarthirucelvam'>Linkedin{""}<i class='linkedin icon'></i></a>
      </div> <br></br>
      <center><h1>Your Thoughts</h1></center> <br></br>
   <form class="ui form" onSubmit={sendEmail} >
       <div class="field">
           <label>Name</label>
           <input type="text" name="first_name" placeholder="your name" required/>
      </div>
      <div class="field">
           <label>Email</label>
           <input type='email' name="user_email" placeholder="Your email..." required/>
      </div>
      <div class="field">
           <label>Message</label>
          <textarea class='ui' name='message' placeholder='your thoughts' rows={4} required/>
      </div>
      <button class="ui  primary button" type="submit">Submit</button>
  </form>
    <div class='ui container'>
        <center><h1 style={{color:'green'}}>{msg}</h1></center>
        <center><h1 style={{color:'red'}}>{err}</h1></center>
    </div> {"\n"}
    
 </div>
    );
}

export default Profile;