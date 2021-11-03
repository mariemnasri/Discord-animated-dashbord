import "./App.css";
import ChannelBar from "./components/ChannelBar";
import SideBar from "./components/SideBar";
import TopNav from "./components/TopNav";

function App() {
  return (
    <div className="flex">
      <TopNav />
      <SideBar />
      <ChannelBar />
    </div>
  );
}

export default App;
