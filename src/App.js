import "./App.css";
import SideBar from "./components/SideBar";
import TopNav from "./components/TopNav";

function App() {
  return (
    <div className="flex">
      <TopNav />
      <SideBar />
    </div>
  );
}

export default App;
