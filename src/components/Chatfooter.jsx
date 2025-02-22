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
    const prompt= input.toLowerCase().includes("hii")? `Use the greetings array of provided travel information:${history},answer this query: ${input} send any one of the random greeting of the array which best fits for the ${input}`:`Act as a Travel assistant bot and Using the provided travel information:${history},answer this query: ${input}`;
    const options={
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({message:prompt
})
    }
    const response = await fetch('http://localhost:3000/api',options);
    const data = await response.json();
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
