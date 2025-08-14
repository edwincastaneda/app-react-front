import React from 'react';
import MainLayoutWithSidebar from "./app/layouts/MainLayoutWithSidebar";
import Dashboard from "./app/pages/Dashboard";

const App: React.FC = () => {
  return (
      <MainLayoutWithSidebar>
        <Dashboard />
      </MainLayoutWithSidebar>
  );
};

export default App;
