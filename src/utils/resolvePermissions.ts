import { Camera, PermissionStatus as CameraPermissionStatus } from "expo-camera";
import {
    getForegroundPermissionsAsync,
    requestForegroundPermissionsAsync,
    PermissionStatus as LocationPermissionStatus
} from "expo-location";
import { Linking, Platform } from "react-native";
import * as Application from 'expo-application';
import * as IntentLauncher from 'expo-intent-launcher';

export const hasCameraPermission = (callback: (granted: boolean) => void) => {
    Camera.getPermissionsAsync().then((perm) => {
        callback(perm.granted)
    })
}

export const requestCameraPermission = (callback: (status: CameraPermissionStatus) => void) => {
    Camera.getPermissionsAsync().then((perm) => {
        if (!perm.canAskAgain) {
            if (Platform.OS == "ios") {
                Linking.openURL('app-settings:');
            } else if (Platform.OS === 'android' && Platform.Version >= 26) {
                const bundleIdentifier = Application.applicationId;
                IntentLauncher.startActivityAsync(IntentLauncher.ACTION_APPLICATION_DETAILS_SETTINGS, {
                    data: `package:${bundleIdentifier}`,
                });
            }
        } else {
            Camera.requestPermissionsAsync().then((cameraPerm) => {
                callback(cameraPerm.status);
            });
        }
    })
}

export const hasLocationPermission = (callback: (granted: boolean) => void) => {
    getForegroundPermissionsAsync().then((perm) => {
        callback(perm.granted)
    })
}

export const requestLocationPermission = (callback: (status: boolean) => void) => {
    getForegroundPermissionsAsync().then((perm) => {
        if (!perm.canAskAgain) {
            if (Platform.OS == "ios") {
                Linking.openURL('app-settings:');
            } else if (Platform.OS === 'android' && Platform.Version >= 26) {
                const bundleIdentifier = Application.applicationId;
                IntentLauncher.startActivityAsync(IntentLauncher.ACTION_APPLICATION_DETAILS_SETTINGS, {
                    data: `package:${bundleIdentifier}`,
                });
            }
        } else {
            requestForegroundPermissionsAsync().then((locationPerm) => {
                callback(locationPerm.status == LocationPermissionStatus.GRANTED);
            });
        }
    })
}