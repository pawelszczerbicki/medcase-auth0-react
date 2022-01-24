import './App.css';
import {useAuth0} from "@auth0/auth0-react";
import {useEffect, useState} from "react";

function App() {
  const [token, setToken] = useState();
  const {getAccessTokenSilently, user} = useAuth0()

  useEffect(() => {
    getAccessTokenSilently()
      .then(t => setToken(t))
      .catch(console.log)
  }, [setToken, getAccessTokenSilently])

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello, I'm argo in ReactJS</p>
        <p>My token is:  {token},</p>
        <p>user is: {JSON.stringify(user)}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
