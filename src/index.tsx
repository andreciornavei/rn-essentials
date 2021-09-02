//**********************************//
// EXPORTING PROVIDERS              //
//**********************************//
// It exports an embedded provider  //
// that implements all needed       //
// providers in app                 //
//**********************************//
export * from "./providers/index"
export * from "./providers/ApiProvider"
export * from "./providers/DatabaseProvider"
export * from "./providers/NotificationProvider"
export * from "./providers/RefreshProvider"
export * from "./providers/SheetProvider"
export * from "./providers/SocketProvider"
export * from "./providers/StorageProvider"
export * from "./providers/ThemeProvider"

//**********************************//
// EXPORTING COMPONENTS             //
//**********************************//

export * from "./components/_HelloWorld"
export * from "./components/Icon"
export * from "./components/Button"
export * from "./components/Scaffold"
export * from "./components/Scaffold/components/ScaffoldAppBar"
export * from "./components/Scaffold/components/ScaffoldAppBarAction"
export * from "./components/Scaffold/components/ScaffoldAppBarTitle"

//**********************************//
// EXPORTING UTILS                  //
//**********************************//

export * from "./utils/formatDate"
export * from "./utils/formatErrors"
export * from "./utils/formatNumber"
export * from "./utils/formatText"
