import { sendMessageToSlack } from '../api/slack'; // Ensure correct import path

(async () => {
    try {
        const channel = process.env.SLACK_CHANNEL_ID || ''; // Optional: Provide Slack channel ID
        const testMessage = 'Hello from Slack Test! 🚀 This is a test message from your app.';

        await sendMessageToSlack(channel, testMessage);
        console.log('Test message sent to Slack successfully!');
    } catch (error) {
        console.error('Error sending test message to Slack:', error);
    }
})();
