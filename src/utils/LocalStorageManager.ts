

interface LocalStorageManagerType {
    elements: JSON[] | undefined;
    dataName: string
    getStorageData: (dataName: string) => JSON[] | undefined | void;
}
class LocalStorageManager implements LocalStorageManagerType {
    elements;
    dataName;
    constructor(private name: string) {
        this.dataName = this.name;
        this.elements = this.getStorageData(this.dataName);
        if (typeof this.elements === "undefined") {
            this.createStorage(this.name, []);
            this.elements = [];
        }
    }
    private createStorage = (dataName: string, value: object) => {
        localStorage.setItem(dataName, JSON.stringify(value));
    };
    getStorageData = (dataName: string) => {
        let result = localStorage[dataName];
        return result ? JSON.parse(result) : undefined;
    };
    appendDataToStorage = (data: object) => {
        this.elements.push(data);
    };
    removeDataFromStorage = (ID: string) => {
        this.elements = this.elements.filter((element: any) => element.ID !== ID);
        this.submitDataToLocalStorage();
    };
    submitDataToLocalStorage = () => {
        try {
            localStorage.setItem(this.dataName, JSON.stringify(this.elements));
        } catch {
            throw new Error("To much data.");
        }
    };
    getDataName = () => {
        return this.dataName;
    };
    getElements = () => {
        return this.elements;
    };
}
export default LocalStorageManager;

/**
 * verifier si il y a deja des info .
 * si il y a des info les prendre et les inclure dans redux
 * ajouter des info
 * effacer des info
 * mettre a jour des info
 */
