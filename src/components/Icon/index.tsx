import React from "react";
import {
    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    FontAwesome5,
    Fontisto,
    Foundation,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    Octicons,
    SimpleLineIcons,
    Zocial
} from "@expo/vector-icons";
import { View } from "react-native";
import { IconPackType } from "../..";
import { ColorValue } from "react-native";


type Props = {
    pack: IconPackType
    name: string
    size: number
    color: ColorValue
    style?: Object
}

const Icon = (props: Props) => {

    const { pack, ...args } = props
    switch (pack) {
        case "AntDesign":
            return <AntDesign name={props.name as any} size={props.size} color={props.color} style={props.style} />
        case "Entypo":
            return <Entypo name={props.name as any} size={props.size} color={props.color} style={props.style} />
        case "EvilIcons":
            return <EvilIcons name={props.name as any} size={props.size} color={props.color} style={props.style} />
        case "Feather":
            return <Feather name={props.name as any} size={props.size} color={props.color} style={props.style} />
        case "FontAwesome":
            return <FontAwesome name={props.name as any} size={props.size} color={props.color} style={props.style} />
        case "FontAwesome5":
            return <FontAwesome5 name={props.name as any} size={props.size} color={props.color} style={props.style} />
        case "Fontisto":
            return <Fontisto name={props.name as any} size={props.size} color={props.color} style={props.style} />
        case "Foundation":
            return <Foundation name={props.name as any} size={props.size} color={props.color} style={props.style} />
        case "Ionicons":
            return <Ionicons name={props.name as any} size={props.size} color={props.color} style={props.style} />
        case "MaterialCommunityIcons":
            return <MaterialCommunityIcons name={props.name as any} size={props.size} color={props.color} style={props.style} />
        case "MaterialIcons":
            return <MaterialIcons name={props.name as any} size={props.size} color={props.color} style={props.style} />
        case "Octicons":
            return <Octicons name={props.name as any} size={props.size} color={props.color} style={props.style} />
        case "SimpleLineIcons":
            return <SimpleLineIcons name={props.name as any} size={props.size} color={props.color} style={props.style} />
        case "Zocial":
            return <Zocial name={props.name as any} size={props.size} color={props.color} style={props.style} />
        default:
            return <View />
    }
}

export { Icon }
