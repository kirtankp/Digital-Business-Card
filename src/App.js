import About from "./Components/About";
import Profile from "./Components/Profile";
import Socials from "./Components/Socials";

export default function App() {
  return (
    <div className="main-container">
      <Profile/>
      <About/>
      <Socials/>
    </div>
  );
}

