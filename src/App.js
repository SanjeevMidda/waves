import './index.css';
import ocean from "./videos/ocean.mp4";

function App() {
  return (
    <div className="App">
      <nav>
        <h3>HOME</h3>
        <h3>WORKS</h3>
        <h3>ABOUT</h3>
        <h3>CONTACT</h3>
        <h3>EXHIBITION</h3>
      </nav>

      <video autoPlay playsInline>
        <source src={ocean} type='video/mp4'></source>
      </video>

      {/* <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div> */}
    </div>
  );
}

export default App;
