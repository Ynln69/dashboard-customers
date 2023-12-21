import Dashboard from "../Dashboard/Dashboard";
import Sidebar from "../Sidebar/Sidebar";

const App = () => {
  const AppContainer = {
    display: "flex",
  };
  return (
    <div style={AppContainer}>
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default App;
