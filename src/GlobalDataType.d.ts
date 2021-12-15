type DataUser = {
    ID: string;
    firstName: string,
    lastName: string,
    companyName: string,
    generatedAt: string,
    phoneNumber: string,
    address: string,
    city: string,
    country: string
    postCode: string,
    gender: string,
    prefix: prefix_eng | prefix_heb | prefix_fr
}
type SubmitData = Omit<DataUser, "generatedAt" | "prefix" | "ID">
type PartialUserData = Partial<SubmitData>;