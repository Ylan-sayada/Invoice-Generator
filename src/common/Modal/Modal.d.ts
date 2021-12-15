interface Modal {
    handleClose: Function,
    style?: React.CSSProperties,
    title?: string,
    IllustrationImg?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    className?: string,
    children: React.ReactElement
}