import fs from 'fs';
import csvParser from 'csv-parser';

// Define SalesData interface
interface SalesData {
  date: string;
  product: string;
  quantity: number;
  revenue: number;
}

// Function to parse CSV and return sales data
export const parseCsv = (filePath: string): Promise<SalesData[]> => {
  return new Promise((resolve, reject) => {
    const salesData: SalesData[] = [];
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (row) => {
        // Push each row into the salesData array
        salesData.push({
          date: row['date'],  // Assuming the CSV column is named 'date'
          product: row['product'],  // Assuming the CSV column is named 'product'
          quantity: parseInt(row['quantity'], 10),  // Parse quantity as an integer
          revenue: parseFloat(row['revenue']),  // Parse revenue as a float
        });
      })
      .on('end', () => resolve(salesData))  // Resolve the promise when done
      .on('error', (err) => reject(err));  // Reject on error
  });
};
