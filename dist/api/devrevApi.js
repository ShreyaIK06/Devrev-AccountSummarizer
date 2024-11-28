"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchClosedDeals = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Make sure to load the .env file
const DEVREV_API_URL = "https://api.devrev.ai"; // Base URL for the DevRev API
const API_TOKEN = process.env.DEVREV_API_TOKEN; // Your API token from the .env file
if (!API_TOKEN) {
    throw new Error("DevRev API Token is missing. Please check your .env file.");
}
// Function to fetch closed and won opportunities from DevRev
const fetchClosedDeals = (timeframe) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Using DevRev API Token:', API_TOKEN); // Ensure token is being loaded correctly
        // Make GET request to DevRev API with necessary query params and headers
        const response = yield axios_1.default.get(`${DEVREV_API_URL}/opportunities`, {
            headers: { Authorization: `Bearer ${API_TOKEN}` }, // Authentication via Bearer Token
            params: { status: "closed", won: true, timeframe }, // Query params to filter by status and timeframe
        });
        return response.data; // Return the response data from API
    }
    catch (error) {
        console.error("Error fetching closed deals:", error);
        throw error; // Rethrow the error so the caller can handle it
    }
});
exports.fetchClosedDeals = fetchClosedDeals;
