import React from "react"
import { ActivityIndicator } from "react-native";
import { Connection, createConnection, EntitySchema } from "typeorm";


export interface DatabaseProps {
    dbName?: string
    dbEntities?: (string | Function | EntitySchema<any>)[] | undefined
    children?: JSX.Element
}

interface DatabaseStateProps {
    connection: Connection | null;
}

const DatabaseContext = React.createContext<DatabaseStateProps>({} as DatabaseStateProps);

export const DatabaseProvider = (props: DatabaseProps) => {
    const [connection, setConnection] = React.useState<Connection | null>(null);

    const connect = React.useCallback(async () => {
        if (!props.dbName) return
        const createdConnection = await createConnection({
            type: 'expo',
            database: props.dbName,
            driver: require('expo-sqlite'),
            entities: props.dbEntities,
            synchronize: true,
        });
        setConnection(createdConnection);
    }, []);

    React.useEffect(() => {
        if (!connection && props.dbName) connect();
    }, [connect, connection]);

    if (!connection && props.dbName) {
        return <ActivityIndicator />;
    }

    const state = {
        connection
    }

    return (
        <DatabaseContext.Provider value={state}>
            {props.children}
        </DatabaseContext.Provider>
    );
};

export function useDatabase() {
    const context = React.useContext(DatabaseContext);
    return context;
}