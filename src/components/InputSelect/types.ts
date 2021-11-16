import { InputRadioProps } from "../..";
import { AccordionStyleProps } from "../Accordion/types";


export interface InputSelectStyleProps extends AccordionStyleProps, Pick<InputRadioProps, "unselectedOptions" | "selectedOptions"> { }

interface InputSelectMixingProps extends Pick<InputRadioProps, "options" | "value" | "onSelect"> { }

export interface InputSelectProps extends InputSelectStyleProps, InputSelectMixingProps {
    placeholder: string
}