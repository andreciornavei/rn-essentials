import _ from "lodash"
export function resolveLodash(props: {
    source?: object,
    path: string,
    key: string
}) {
    const field = _.get(props.source, props.path, {})
    if(field[props.key]) return field[props.key]
    return undefined
}