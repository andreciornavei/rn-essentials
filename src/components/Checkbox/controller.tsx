import React from "react"
import { CheckboxContext } from "./context"
import { CheckboxControllerProps } from "./types"
export const CheckboxController = (props: CheckboxControllerProps): JSX.Element => {

    const [checked, setChecked] = React.useState(props.checked || false);

    const handleOnPress = () => {
        setChecked((value) => {
            props.onChangeValue && props.onChangeValue(!value);
            return !value;
        });
    };

    const realChecked = React.useMemo(() => {
        return props.checked !== undefined ? props.checked : checked;
    }, [props.checked, checked]);

    const state = {
        handleOnPress,
        realChecked
    }

    return (
        <CheckboxContext.Provider value={state}>
            {props.children}
        </CheckboxContext.Provider>
    )
}