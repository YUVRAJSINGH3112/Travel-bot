import { useState } from "react"

const Chatfooter = ({message,setMessage}) => {
  const [input,setInput]=useState("");

  const handleEnter=(e)=>{
      if(e.key=="Enter" && input.trim()!=""){
        sendHandle();
  }
}

  const getbotmsg = async () => {
    const history = message.map(m => `${m.role}: ${m.text}`).join("\n"); 
    const options={
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({message:`Context:\n${history}\nUser Query: ${input}`
})
    }
    const response = await fetch('http://localhost:3000/api',options);
    const data = await response.json();
    console.log(data)
    setMessage((prevmsg)=>[...prevmsg,{role:"bot",text:data.message}])
  }
  const sendHandle=()=>{
    if(input==="") return
    setMessage((prevmsg)=>[...prevmsg,{role:"user",text:input}])
    getbotmsg();
    setInput(""); 
  }
  return (
    <div className="chat-footer">
        <input type="text"
                placeholder="Type your message here..."
                className="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleEnter}
        />
    <button className="send-button" onClick={sendHandle}>Send</button>
    </div>
  )
}

export default Chatfooter
