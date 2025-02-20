import {useState,useRef, useEffect} from 'react'
import Header from './components/Header'
import Chatfooter from './components/Chatfooter'
const App = () => {
  const [message, setMessage] = useState([]);
  const scroll = useRef(null);

  useEffect(()=>{
    if (scroll.current) {
      scroll.current.scrollIntoView({ behavior: 'smooth' });
    }
  },[message])

  return (
    <div className="container">
    <Header/>
     <div className="chat-header">Wherever You Go, AI Knows – Your Personal Travel Assistant!</div>
      <div className="chat-container">
      <div className="message bot-message">Adventure awaits! Tell me where you want to go, and I'll plan the perfect trip for you. </div>
      {message.map((msg,idx)=>{
            if(msg.role === 'user') return <div key={idx} className="message user-message">{msg.text}</div>
            else return <div key={idx} className="message bot-message">{msg.text}</div>
      })}
      <div ref={scroll}></div>
      </div>
      <Chatfooter setMessage={setMessage}/>
    </div>
  )
}

export default App
