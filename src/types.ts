export type Food = {
  id: number;
  name: string;
}

export enum OrderState {
  Pending = "pending",
  Completed = "completed",
}