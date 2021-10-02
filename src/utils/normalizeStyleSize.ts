import normalize from "react-native-normalize"

export function normalizeStyleSize(sizeProps: any) {
    return {
        paddingLeft: (sizeProps.paddingLeft && typeof sizeProps.paddingLeft == "number") ? normalize(sizeProps.paddingLeft) : sizeProps.paddingLeft,
        paddingRight: (sizeProps.paddingRight && typeof sizeProps.paddingRight == "number") ? normalize(sizeProps.paddingRight) : sizeProps.paddingRight,
        paddingTop: (sizeProps.paddingTop && typeof sizeProps.paddingTop == "number") ? normalize(sizeProps.paddingTop) : sizeProps.paddingTop,
        paddingBottom: (sizeProps.paddingBottom && typeof sizeProps.paddingBottom == "number") ? normalize(sizeProps.paddingBottom) : sizeProps.paddingBottom,
        width: (sizeProps.width && typeof sizeProps.width == "number") ? normalize(sizeProps.width, "width") : sizeProps.width,
        height: (sizeProps.height && typeof sizeProps.height == "number") ? normalize(sizeProps.height, "height") : sizeProps.height,
        borderRadius: (sizeProps.borderRadius && typeof sizeProps.borderRadius == "number") ? normalize(sizeProps.borderRadius) : sizeProps.borderRadius,
        top: (sizeProps.top && typeof sizeProps.top == "number") ? normalize(sizeProps.top) : sizeProps.top,
        left: (sizeProps.left && typeof sizeProps.left == "number") ? normalize(sizeProps.left) : sizeProps.left,
        right: (sizeProps.right && typeof sizeProps.right == "number") ? normalize(sizeProps.right) : sizeProps.right,
        bottom: (sizeProps.bottom && typeof sizeProps.bottom == "number") ? normalize(sizeProps.bottom) : sizeProps.bottom,
        fontSize: (sizeProps.fontSize && typeof sizeProps.fontSize == "number") ? normalize(sizeProps.fontSize) : sizeProps.fontSize,
    }
}