import React from "react"
import socketIOClient, { Socket } from "socket.io-client";

export interface SocketProps {
    apiBaseURL?: string
    children?: JSX.Element
}

interface SocketStateProps {
    emit: (event: string, data?: any) => void
    connect: (token: string) => void;
    disconnect: () => void;
    subscribe: (event: string, onEvent: (data: any) => void) => void;
    unsubscribe: (event: string) => Promise<unknown>;
    onload: React.Dispatch<React.SetStateAction<(() => void) | undefined>>
}

const SocketContext = React.createContext<SocketStateProps>({} as SocketStateProps)

export const SocketProvider = (props: SocketProps): JSX.Element => {

    const socket = React.useRef<Socket | undefined>(undefined)
    const [onloadReady, onload] = React.useState<(() => void) | undefined>(undefined)

    const connect = (token: string) => {
        if (!props.apiBaseURL) return
        try {
            socket.current = socketIOClient(props.apiBaseURL, { extraHeaders: { Authorization: token as string } })
        } catch (error) {
            console.log("error connection", error)
        }
    }

    const disconnect = () => {
        if (socket.current) socket.current.disconnect()
    }

    const subscribe = (event: string, onEvent: (data: any) => void) => {
        if (socket.current) {
            unsubscribe(event).then(() => {
                socket.current?.on(event, onEvent)
            })
        }
    }

    const unsubscribe = (event: string) => {
        return new Promise((resolve) => {
            if (socket.current && socket.current.hasListeners(event)) socket.current.off(event)
            resolve(event)
        })
    }

    const emit = (event: string, data?: any) => {
        if (socket.current) socket.current.emit(event, data)
    }

    React.useEffect(() => {
        if (socket && onloadReady) onloadReady()
    }, [socket, onloadReady])

    const state = {
        emit,
        connect,
        disconnect,
        subscribe,
        unsubscribe,
        onload
    }

    return (
        <SocketContext.Provider value={state}>
            {props.children}
        </SocketContext.Provider>
    )
}
