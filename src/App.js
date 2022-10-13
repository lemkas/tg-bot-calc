import './App.css';
import {useEffect} from "react";
import Form from "./components/Form";
const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
    tg.ready()
  }, [])

  const onClose = () => {
    tg.close()
  }
  return (
    <div className="App">
      <Form />
      хуй
     <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
