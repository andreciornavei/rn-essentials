import React from "react"
import * as Notifications from 'expo-notifications';

interface Props {
    children: JSX.Element
}

interface NotificationStore {
    notify: (title: string, message: string) => void
}

const NotificationContext = React.createContext<NotificationStore>({} as NotificationStore)

export const NotificationProvider = (props: Props): JSX.Element => {

    React.useEffect(() => {
        Notifications.setNotificationHandler({
            handleNotification: async () => ({
                shouldShowAlert: true,
                shouldPlaySound: false,
                shouldSetBadge: false,
            }),
        });
    }, [])

    const notify = (title: string, message: string) => {
        Notifications.scheduleNotificationAsync({
            content: {
                title: title,
                body: message,
                sound: true,
                priority: Notifications.AndroidNotificationPriority.MAX
            },
            trigger: null,
        });
    }

    const store = {
        notify
    }

    return (
        <NotificationContext.Provider value={store}>
            { props.children}
        </NotificationContext.Provider>
    )

}

export function useNotification() {
    const context = React.useContext(NotificationContext);
    return context;
}
