import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />

      <div className="container">
        <TextArea heading="Enter your Text here" />
      </div>
    </>
  );
}

export default App;
