import {useState} from 'react'
import Header from './components/Header'
import Chatfooter from './components/Chatfooter'
const App = () => {
  const [message, setMessage] = useState([]);

  return (
    <div className="container">
    <Header/>
      <div className="chat-container">
      <div className="message bot-message">Hello! How can I assist you today?</div>
      {message.map((msg,idx)=>{
            if(msg.role === 'user') return <div key={idx} className="message user-message">{msg.text}</div>
            else return <div key={idx} className="message bot-message">{msg.text}</div>
      })}
      </div>
      <Chatfooter setMessage={setMessage}/>
    </div>
  )
}

export default App
