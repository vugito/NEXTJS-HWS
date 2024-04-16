export interface Image {
    id: number;
    imgLink: string;
}

export type Event = {
    id: number;
    title: string;
    text: string;
    images: Image[];
}
