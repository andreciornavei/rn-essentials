import { InputRadioProps, InputRadioSingleValue } from "../..";
import { AccordionProps, AccordionStyleProps } from "../Accordion/types";


export type InputSelectStyleProps = AccordionStyleProps & Pick<InputRadioProps, "unselectedOptions" | "selectedOptions">

type InputSelectRadioProps = Pick<InputRadioProps, "options" | "value">

type InputSelectAccordionProps = Pick<AccordionProps, "placeholder" | "placeholderStrategy">

export type InputSelectProps = InputSelectStyleProps & InputSelectAccordionProps & InputSelectRadioProps & {
    onSelect?: (value: InputRadioSingleValue) => void
}