//import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ul className="lists">
        <li>Lisbon</li>
        <li>Paris</li>
        <li>Sydney</li>
      </ul>
      <header className="App-header">
        <form>
          <input type="text" placeholder="Enter a city..." />
          <input type="submit" id="search" value="Search" />
          <input type="submit" id="current" value="Current" />
        </form>
      </header>
      <footer>
        <p>
          <a
            className="color-blue"
            href="https://wonderful-cajeta-40173a.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Open-source code</span>
          </a>
          , by
          <a
            className="color-blue"
            href="https://github.com/ElpeAJ/weather-react.git"
            target="_blank"
            rel="noreferrer"
          >
            <span> Elpedia J. Arthur </span>
          </a>
          from
          <a
            className="color-blue"
            href="https://www.shecodes.io/"
            target="_blank"
            rel="noreferrer"
          >
            Shecodes
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
