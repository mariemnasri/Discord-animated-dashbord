import "./App.css";
import ChannelBar from "./components/ChannelBar";
import ContentContainer from "./components/ContentContainer";
import SideBar from "./components/SideBar";
import TopNav from "./components/TopNav";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <ChannelBar />
      <ContentContainer />
    </div>
  );
}

export default App;
