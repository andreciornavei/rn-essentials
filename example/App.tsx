import React from 'react';
import { Home } from './src/pages/Home';
import { EssentialProviders } from '@andreciornavei/rn-essentials';

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

