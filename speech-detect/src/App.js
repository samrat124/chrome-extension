import React,{useState} from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
 
export  const App = () => {
  const[state,setState]=useState(false);
  const { transcript, resetTranscript } = useSpeechRecognition({
    continuous: true
  });

    console.log(transcript);
    if(transcript.includes('play')){
      setState(true);
    }
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }
   
 
  return (
    <div>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      {state?<img src='https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_05.gif' alt='image'/>:null}
      <p>{transcript}</p>
    </div>
  );
};
 