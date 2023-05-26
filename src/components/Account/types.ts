export type DataAccountItem = {
  sum: string;
  time: string;
  reason?: string;
  images?: Array<string>;
};

export type DataAccount = {
  date: string;
  items: Array<DataAccountItem>;
};
