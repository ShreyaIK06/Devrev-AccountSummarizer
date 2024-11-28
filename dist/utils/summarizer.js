"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.summarizeSalesData = void 0;
const summarizeSalesData = (salesData) => {
    // Total revenue
    const totalRevenue = salesData.reduce((acc, data) => acc + data.revenue, 0);
    // Total quantity sold
    const totalQuantity = salesData.reduce((acc, data) => acc + data.quantity, 0);
    // Products and their quantities
    const products = salesData.reduce((acc, data) => {
        acc[data.product] = (acc[data.product] || 0) + data.quantity;
        return acc;
    }, {});
    return {
        totalQuantity,
        totalRevenue,
        products,
    };
};
exports.summarizeSalesData = summarizeSalesData;
