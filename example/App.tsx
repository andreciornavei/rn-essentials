import React from 'react';
import { EssentialProviders } from 'rn-essentials';
import { Home } from './src/pages/Home';

export default function App() {
  return (
    <EssentialProviders
      dbName="db-rn-essentials-example"
      apiBaseURL="http://localhost:1337"
      initialRouteName="/home"
      routes={[
        { name: "/home", component: <Home /> }
      ]}
    />
  );
}

