"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCsv = void 0;
const fs_1 = __importDefault(require("fs"));
const csv_parser_1 = __importDefault(require("csv-parser"));
// Function to parse CSV and return sales data
const parseCsv = (filePath) => {
    return new Promise((resolve, reject) => {
        const salesData = [];
        fs_1.default.createReadStream(filePath)
            .pipe((0, csv_parser_1.default)())
            .on('data', (row) => {
            // Push each row into the salesData array
            salesData.push({
                date: row['date'], // Assuming the CSV column is named 'date'
                product: row['product'], // Assuming the CSV column is named 'product'
                quantity: parseInt(row['quantity'], 10), // Parse quantity as an integer
                revenue: parseFloat(row['revenue']), // Parse revenue as a float
            });
        })
            .on('end', () => resolve(salesData)) // Resolve the promise when done
            .on('error', (err) => reject(err)); // Reject on error
    });
};
exports.parseCsv = parseCsv;
