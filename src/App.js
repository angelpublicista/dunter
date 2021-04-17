import Header from "./components/Header/Header";
import "./App.sass";
import CardCat from "./components/CardCat/CardCat";
import ImgBg from "./components/CardCat/img/image-cat.jpg";
function App() {
  return (
    <div className="App">
      <CardCat imgBg={ImgBg} text="Hola" style="style-2"/>
    </div>
  );
}

export default App;
