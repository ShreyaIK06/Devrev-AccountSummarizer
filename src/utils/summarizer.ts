// src/utils/summarizer.ts
import { SalesData, SalesSummary } from './types'; // Ensure this path is correct

export const summarizeSalesData = (salesData: SalesData[]): SalesSummary => {
  // Total revenue
  const totalRevenue = salesData.reduce((acc, data) => acc + data.revenue, 0);
  
  // Total quantity sold
  const totalQuantity = salesData.reduce((acc, data) => acc + data.quantity, 0);
  
  // Products and their quantities
  const products = salesData.reduce((acc, data) => {
    acc[data.product] = (acc[data.product] || 0) + data.quantity;
    return acc;
  }, {} as { [key: string]: number });

  return {
    totalQuantity,
    totalRevenue,
    products,
  };
};
