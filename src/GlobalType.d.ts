type LangAndFlag = {
    language: string,
    Flag: React.ElementType
}
type BasisHtmlElement = {
    children?: HTMLElement | React.ReactNode,
    style?: React.CSSProperties,
}
type TranslationDescLink = {
    [key: string]: string | undefined
}
type ListOfLink = {
    link: string,
    desc: TranslationDescLink
}