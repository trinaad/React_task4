import React from "react";
import UserTable from "./components/C1";

const App = () => {
  const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33"];

  return (
    <div className="app">
      <UserTable />
    </div>
  );
};

export default App;
