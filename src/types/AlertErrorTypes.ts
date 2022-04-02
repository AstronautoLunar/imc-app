export type OptionsButtontypes = {
    text: string;
    color: string;
    press: () => void;
}

export type AlertErrorProps = {
    children: string;
    optionsButton?: OptionsButtontypes;
    visible: boolean;
}