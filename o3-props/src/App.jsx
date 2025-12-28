import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card user='Sagar' age={18} />
      <Card user='Bittu' age={21} />
      
    </div>
  );
};

export default App;
