import ChildComponent from "./Component/childcomponent";

function App() {
  const name = "Aditya Sharma";
  const age = 18;
  const hobby = ["Reading", "Gaming", "Playing"];

  return (
    <ChildComponent name={name} age={age} hobby={hobby} />
  );
}

export default App;