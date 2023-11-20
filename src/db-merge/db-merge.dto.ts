export interface dataRawTable {
  table_name: string;
}

export interface cloudUser {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface cloudProduct {
  id: number;
  name: string;
  price: number;
  description: string;
}
