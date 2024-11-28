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
Object.defineProperty(exports, "__esModule", { value: true });
const devrevApi_1 = require("./api/devrevApi"); // Import fetchClosedDeals from devrevApi
const slack_1 = require("./api/slack"); // Import sendMessageToSlack from slack
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const timeframe = '24h'; // Define your timeframe (e.g., last 24 hours)
            // Fetch closed deals from DevRev API
            const closedDeals = yield (0, devrevApi_1.fetchClosedDeals)(timeframe);
            // Summarize the data (total revenue, number of deals, etc.)
            const totalDeals = closedDeals.length;
            const totalRevenue = closedDeals.reduce((sum, deal) => sum + deal.revenue, 0);
            // Create summary message
            const summary = `
      Closed Deals Summary:
      Total Deals: ${totalDeals}
      Total Revenue: $${totalRevenue}
    `;
            // Send summary to Slack
            const slackChannel = 'C081U0NFR8F'; // Replace with your Slack channel ID
            yield (0, slack_1.sendMessageToSlack)(slackChannel, summary);
            console.log('Message sent to Slack!');
        }
        catch (error) {
            console.error('Error during process:', error);
        }
    });
}
main();
