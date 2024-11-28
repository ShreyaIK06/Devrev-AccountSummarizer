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
exports.sendMessageToSlack = void 0;
const web_api_1 = require("@slack/web-api");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Loads environment variables from .env
// Initialize Slack client with bot token
const slackClient = new web_api_1.WebClient(process.env.SLACK_BOT_TOKEN);
// Function to send a message to a Slack channel
const sendMessageToSlack = (channel, text) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Sending message to Slack channel
        const result = yield slackClient.chat.postMessage({
            channel: channel,
            text: text,
        });
        // Log the result of the message
        console.log(`Message sent: ${result.ts}`);
    }
    catch (error) {
        console.error('Error sending message to Slack:', error);
    }
});
exports.sendMessageToSlack = sendMessageToSlack;
