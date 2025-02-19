import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api', async (req, res) => {
    try {
        let message = req.body.message;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },  
            body: JSON.stringify({
                "contents": [{
                    "parts": [{
                        "text": message
                    }]
                }]
            })
        };

        const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyAT33jwXL3yGjyEleHIC-_4k_kD9tIXYhI", options);
        const data = await response.json();
        console.log(data);  
        if (!data.candidates || data.candidates.length === 0) {
            return res.status(500).json({ error: "Invalid API response" });
        }

        const botReply = data.candidates[0].content.parts[0].text; 
        res.json({ message: botReply });
        
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(3000, () => console.log('Listening on port 3000'));
