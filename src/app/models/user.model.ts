export interface User {
    id: string;
    user: string;
    img: string;
    messages: Message[];
}

export interface Message {
    id: string;
    text: string;
    created: string;
    createdBy: Date;
}