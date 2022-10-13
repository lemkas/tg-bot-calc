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
      <h1>Калькулятор зеркал</h1>
      <Form />
      хуй
     <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
