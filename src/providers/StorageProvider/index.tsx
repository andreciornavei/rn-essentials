import React from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  children: JSX.Element
}

interface StorageStore {
  get: <T extends unknown>(key: string) => Promise<T | undefined>;
  set: (key: string, data: any) => Promise<void>;
  remove: (key: string) => Promise<void>;
}

const StorageContext = React.createContext<StorageStore>({} as StorageStore)

export const StorageProvider = (props: Props): JSX.Element => {

  const set = async (key: string, data: any) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {

    }
  }

  const get = async <T extends any>(key: string): Promise<T | undefined> => {
    try {
      const data = await AsyncStorage.getItem(key)
      if (data != undefined) return JSON.parse(data);
      return undefined
    } catch (error) {
      return undefined;
    }
  }

  const remove = async (key: string) => {
    await await AsyncStorage.removeItem(key);
  }

  const store = {
    get,
    set,
    remove
  }

  return (
    <StorageContext.Provider value={store}>
      { props.children}
    </StorageContext.Provider>
  )
}

export function useStorage() {
  const context = React.useContext(StorageContext);
  return context;
}
