import React from 'react';
import { MyRoutes } from './Routes';
import { useUser } from './auth';

import './App.css';

function App() {
  const { isLoading, user } = useUser();

  return (
    <div className="App">
      <MyRoutes isLoading={isLoading} user={user} />
    </div>
  );
}

export default App;