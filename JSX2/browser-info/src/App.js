
import './App.css';

function App() {
  const browserInfo = navigator.userAgent;
  return(
    <div>
      <h1>Browser Information</h1>
      <p>{browserInfo}</p>
    </div>
  );
}

export default App;
