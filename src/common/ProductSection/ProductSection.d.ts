interface ProductSection {
    editMode: boolean,
    title?: keyof DataUser,
    outsideRef?: React.RefObject,
    data: DataUser
}
