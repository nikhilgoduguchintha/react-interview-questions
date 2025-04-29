import { useState } from "react";
import "./App.css";
import Barchart from "./components/Barchart";

const CHART_DATA = [
  { id: "dep-1", name: "Legal", ticketCount: 32, colour: "#3F888F" },
  {
    id: "dep-2",
    name: "Sales",
    ticketCount: 20,
    colour: "#FFA420",
  },
  {
    id: "dep-3",
    name: "Engineering",
    ticketCount: 60,
    colour: "#22WNE",
  },
  {
    id: "dep-4",
    name: "Manufacturing",
    ticketCount: 5,
    colour: "#9JEHN",
  },
  { id: "dep-5", name: "Maintenance", ticketCount: 14, colour: "#6CHD98" },
  {
    id: "dep-6",
    name: "Human Resourcing",
    ticketCount: 35,
    colour: "#1D1E33",
  },
  {
    id: "dep-7",
    name: "Events",
    ticketCount: 43,
    colour: "#E1CC4F",
  },
];
function App() {
  const [chatToggle, setChatToggle] = useState(false)
  return <center>
    <button className="button" onClick={() => setChatToggle(prev => !prev)}>Chat Toggle</button>
    {chatToggle && <Barchart data={CHART_DATA}/>}
  </center>;
}

export default App;
