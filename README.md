# rn-essentials

## _Overview_

### _Motivations:_
### _Fast project setup:_

**_Install the Expo SDK 42:_**
```bash
expo init my-app --template expo-template-blank-typescript@~42.0.1
```

As you can see on this little piece of code, everithing is embedded in just one provider, the `EssentialProviders`, that will inject everything you need to setup your project as faster as prossible.

You can see all the providers embbeded later on this documentation.

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

## _Utility functions_

> #### **formatDate**
> _All functions you can see on this [README.md](./src/utils/formatDate/README.md) file._

> #### **formatNumber**
> _All functions you can see on this [README.md](./src/utils/formatNumber/README.md) file._

> #### **formatText**
> _All functions you can see on this [README.md](./src/utils/formatText/README.md) file._

> #### **normalizeStyleSize**
> _All functions you can see on this [README.md](./src/utils/normalizeStyleSize/README.md) file._

> #### **resolveErrors**
> _All functions you can see on this [README.md](./src/utils/resolveErrors/README.md) file._

> #### **resolveFilterHttp**
> _All functions you can see on this [README.md](./src/utils/resolveFilterHttp/README.md) file._

> #### **resolveLodash**
> _All functions you can see on this [README.md](./src/utils/resolveLodash/README.md) file._

> #### **resolveParam**
> _All functions you can see on this [README.md](./src/utils/resolveParam/README.md) file._

> #### **resolvePermissions**
> _All functions you can see on this [README.md](./src/utils/resolvePermissions/README.md) file._

---
## _Providers_

> #### **ApiProvider**
> _All api_provider properties you can see on this [README.md](./src/providers/ApiProvider/README.md) file._

> #### **DatabaseProvider**
> _All database_provider properties you can see on this [README.md](./src/providers/DatabaseProvider/README.md) file._

> #### **NotificationProvider**
> _All notification_provider properties you can see on this [README.md](./src/providers/NotificationProvider/README.md) file._

> #### **RefreshProvider**
> _All refresh_provider properties you can see on this [README.md](./src/providers/RefreshProvider/README.md) file._

> #### **RouteProvider**
> _All route_provider properties you can see on this [README.md](./src/providers/RouteProvider/README.md) file._

> #### **SheetProvider**
> _All sheet_provider properties you can see on this [README.md](./src/providers/SheetProvider/README.md) file._

> #### **SocketProvider**
> _All socket_provider properties you can see on this [README.md](./src/providers/SocketProvider/README.md) file._

> #### **StorageProvider**
> _All storage_provider properties you can see on this [README.md](./src/providers/StorageProvider/README.md) file._

> #### **ThemeProvider**
> _All theme_provider properties you can see on this [README.md](./src/providers/ThemeProvider/README.md) file._

---
## _Background Tasks_

> #### **LocationTask**
> _All location_task properties you can see on this [README.md](./src/tasks/LocationTask/README.md) file._

> #### **NotificationTask**
> _All notification_task properties you can see on this [README.md](./src/tasks/NotificationTask/README.md) file._

> #### **FetchTask**
> _All fetch_task properties you can see on this [README.md](./src/tasks/FetchTask/README.md) file._

---
## _Components_

All components is fully customizable in 3 leves:
* The default custom style implemented by this library, where you can find the style structure on [./src/styles/default_theme.ts](./src/styles/default_theme.ts) inside the **`components.[component_name]`**;
* Your custom style that will override the file mentioned above following the same properties. It will style the button to your entire application;
* The inline button component style, this will style only a specific button instance, followin the same properties mentioned above;

> #### **Accordion**
> _All accordion properties you can see on this [README.md](./src/components/Accordion/README.md) file._

> #### **Action**
> _All action properties you can see on this [README.md](./src/components/Action/README.md) file._

> #### **Button**
> _All button properties you can see on this [README.md](./src/components/Button/README.md) file._

> #### **Divider**
> _All divier properties you can see on this [README.md](./src/components/Divider/README.md) file._

> #### **Empty**
> _All empty properties you can see on this [README.md](./src/components/Empty/README.md) file._

> #### **Icon**
> _All icon properties you can see on this [README.md](./src/components/Icon/README.md) file._

> #### **InputError**
> _All input_error properties you can see on this [README.md](./src/components/InputError/README.md) file._

> #### **InputRadio**
> _All input_radio properties you can see on this [README.md](./src/components/InputRadio/README.md) file._

> #### **InputSheet**
> _All input_sheet properties you can see on this [README.md](./src/components/InputSheet/README.md) file._

> #### **InputText**
> _All input_text properties you can see on this [README.md](./src/components/InputText/README.md) file._

> #### **ListFetcher**
> _All list_fetcher properties you can see on this [README.md](./src/components/ListFetcher/README.md) file._

> #### **MorphList**
> _All morph_list properties you can see on this [README.md](./src/components/MorphList/README.md) file._

> #### **Paragraph**
> _All paragraph properties you can see on this [README.md](./src/components/Paragraph/README.md) file._

> #### **Ripple**
> _All ripple properties you can see on this [README.md](./src/components/Ripple/README.md) file._

> #### **Scaffold**
> _All scaffold properties you can see on this [README.md](./src/components/Scaffold/README.md) file._

> #### **Space**
> _All space properties you can see on this [README.md](./src/components/Space/README.md) file._

> #### **TabNav**
> _All tab_nav properties you can see on this [README.md](./src/components/TabNav/README.md) file._

> #### **TabPanel**
> _All tab_panel properties you can see on this [README.md](./src/components/TabPanel/README.md) file._

---

## 🎉 &nbsp;  _Congradulations, You're done._

I hope this plugin helps you in your react native projects and save a lot of time and code.

---
## 📜 &nbsp; _License_

This project is under the MIT license. See the [LICENSE](./LICENSE) for details.

--- 

💻 &nbsp; Developed by André Ciornavei - [Get in touch!](https://www.linkedin.com/in/andreciornavei/)