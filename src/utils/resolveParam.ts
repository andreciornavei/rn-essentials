import { RouteProp, useRoute } from "@react-navigation/native";

export function resolveParams<T extends Object>(): T {
    const { params } = useRoute<RouteProp<Record<string, T>, string>>()
    return params as T
}