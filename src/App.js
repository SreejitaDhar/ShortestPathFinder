import './App.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';

function App() {
  return (
    <div className="App">
      <center>
        <div class="home-detail1">
          <h1>SHORTEST PATH FINDER by visualizing DIJKSTRA'S ALGORITHM</h1>
        </div>
        <div class="home-detail1">
          <h2>made by SREEJITA DHAR</h2>
        </div>
      </center>

      
      {/* <div class="home-detail2">
        <h2>
          made by <span className="textline"></span>
        </h2>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
      <script>
        var type= new Typed('.textline',
          strings:["SREEJITA DHAR","a abaal"],
          typeSpeed:100,
          backSpeed:100,
          backDelay:1000,
          loop:true
        )
      </script> */}
      <PathfindingVisualizer></PathfindingVisualizer>
    </div>
  );
}

export default App;
