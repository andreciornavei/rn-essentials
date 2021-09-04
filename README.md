# rn-essentials

## _Overview_

### _Motivations:_
### _Fast project setup:_
As you can see on this little piece of code, everithing is embedded in just one provider, the `EssentialProviders`, that will inject everything you need to setup your project as faster as prossible.

You can see all the providers embbeded later this documentation.

```jsx
import React from 'react';
import { EssentialProviders } from '@andreciornavei/rn-essentials';
import { Home } from './src/pages/Home';
import { _Button } from './src/pages/_Button';

export default function App() {
  return (
    <EssentialProviders
      dbName="db-rn-essentials-example"
      apiBaseURL="http://localhost:1337"
      initialRouteName="/home"
      routes={[
        { name: "/home", component: Home },
        { name: "/component_button", component: _Button }
      ]}
    />
  );
}
```

---

## _Providers_

---
## _Components_

### Button

The button component is fully customizable in 3 leves:
* The default custom style implemented by this library, where you can find the style structure on [./src/styles/default_theme.ts](./src/styles/default_theme.ts) inside the **`components.button.property`**;
* Your custom style that will override the file mentioned above following the same properties. It will style the button to your entire application;
* The inline button component style, this will style only a specific button instance, followin the same properties mentioned above;

All button properties you can see on this [README.md](./src/components/Button/README.md) file.

---

## 🎉 &nbsp;  _Congradulations, You're done._

I hope this plugin helps you in your react native projects and save a lot of time and code.

---
## 📜 &nbsp; _License_

This project is under the MIT license. See the [LICENSE](./LICENSE) for details.

--- 

💻 &nbsp; Developed by André Ciornavei - [Get in touch!](https://www.linkedin.com/in/andreciornavei/)