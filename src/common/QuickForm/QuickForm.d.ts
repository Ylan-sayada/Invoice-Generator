/*type FormStatetype = {
    isInvalid: boolean;
    errMsgStruct: {
        key: string;
        msg: string[];
    }[];
}*/
interface QuickForm {
    handleSubmit:
    (
        data: any,
        formState: FormStatetype
    ) => void,
    cancel: any,
    style?: React.CSSProperties
}
