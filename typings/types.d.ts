export interface ITimeInterval {
    id: number;
    events: IHistoryEvent[];
    years: [number, number];
    category: string;
}

export interface IHistoryEvent {
    id: number;
    year: number;
    body: string;
}