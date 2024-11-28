import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

export const sendMessageToSlack = async (channelId: string, message: string) => {
    const webhookUrl = process.env.SLACK_WEBHOOK_URL;

    if (!webhookUrl) {
        throw new Error('Slack webhook URL is missing. Please set SLACK_WEBHOOK_URL in your .env file.');
    }

    try {
        const payload = { text: message };
        const response = await axios.post(webhookUrl, payload);
        console.log('Message sent to Slack:', response.data);
    } catch (error) {
        console.error('Error sending message to Slack:', error);
        throw error;
    }
};
