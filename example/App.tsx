import React from 'react';
import { EssentialProviders } from '@andreciornavei/rn-essentials';
import { Home } from './src/pages/Home';
import { _Accordion } from './src/pages/_Accordion';
import { _Button } from './src/pages/_Button';
import { _Sheet } from './src/pages/_Sheet';
import { _Input } from './src/pages/_Input';
import { _TabNav } from './src/pages/_TabNav';

export default function App() {
  return (
    <EssentialProviders
      dbName="db-rn-essentials-example"
      apiBaseURL="http://localhost:1337"
      initialRouteName="/home"
      routes={[
        { name: "/home", component: Home },
        { name: "/component_accordion", component: _Accordion },
        { name: "/component_button", component: _Button },
        { name: "/component_sheet", component: _Sheet },
        { name: "/component_input", component: _Input },
        { name: "/component_tabnav", component: _TabNav }
      ]}
    />
  );
}

