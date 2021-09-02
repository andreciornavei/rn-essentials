import React from "react"
import socketIOClient, { Socket } from "socket.io-client";
import { useApi } from "../ApiProvider";

export interface SocketProps {
    apiBaseURL?: string
    children?: JSX.Element
}

interface SocketStateProps {
    connect: () => void;
    disconnect: () => void;
    subscribe: (event: string, onEvent: (data: any) => void) => void;
    unsubscribe: (event: string) => Promise<unknown>;
}

const SocketContext = React.createContext<SocketStateProps>({} as SocketStateProps)

export const SocketProvider = (props: SocketProps): JSX.Element => {

    const { token } = useApi()
    const [socket, setSocket] = React.useState<Socket | undefined>(undefined)

    const connect = () => {
        if(!props.apiBaseURL) return
        try {
            setSocket(socketIOClient(props.apiBaseURL, { extraHeaders: { Authorization: token as string } }))
        } catch (error) {
            console.log("error connection", error)
        }
    }

    const disconnect = () => {
        if (socket) socket.disconnect()
    }

    const subscribe = (event: string, onEvent: (data: any) => void) => {
        if (socket) {
            unsubscribe(event).then(() => {
                socket.on(event, onEvent)
            })
        }
    }

    const unsubscribe = (event: string) => {
        return new Promise((resolve) => {
            if (socket && socket.hasListeners(event)) socket.off(event)
            resolve(event)
        })
    }

    const state = {
        connect,
        disconnect,
        subscribe,
        unsubscribe
    }

    return (
        <SocketContext.Provider value={state}>
            {props.children}
        </SocketContext.Provider>
    )
}
