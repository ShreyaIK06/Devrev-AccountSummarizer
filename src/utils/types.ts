// src/utils/types.ts
export interface SalesData {
    date: string;
    product: string;
    quantity: number;
    revenue: number;
  }
  
  export interface SalesSummary {
    totalQuantity: number;
    totalRevenue: number;
    products: { [product: string]: number };
  }

  export interface Deal {
    id: string;
    revenue: number;
    accountName: string;
    status: string;
    closedDate: string;
}

  
  
  
  