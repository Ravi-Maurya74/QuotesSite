import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState();

  async function fetchData() {
    const proxyUrl = "https://api.allorigins.win/raw?url=";
    const targetUrl = "https://zenquotes.io/api/random";
    const cacheBuster = new Date().getTime(); // current time in milliseconds
    const quoteData = await fetch(`${proxyUrl}${targetUrl}&${cacheBuster}`);
    const json = await quoteData.json();
    console.log(json);
    setData(json);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const quoteHtml = data && (
    <div>
      <h1>{data[0]["q"]}</h1>
      <h2>{data[0]["a"]}</h2>
    </div>
  );

  return (
    <>
      {quoteHtml}
      <button onClick={fetchData}>Refresh Quote</button>
    </>
  );
}

export default App;
