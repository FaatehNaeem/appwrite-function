const axios = require('axios');

module.exports = async function (req, res) {
    try {
        const notificationResponse = await axios.post('https://api.nativenotify.com/v1/notifications', {
            appId: 22441,
            apiKey: 'PXoDlzlfuW4L0PJ4olFvDV',
            title: 'Daily Notification',
            message: 'This is your daily notification!',
            // Add any other parameters as needed
        });

        res.json({
            status: 'success',
            response: notificationResponse.data
        });
    } catch (error) {
        res.json({
            status: 'error',
            message: error.message
        });
    }
};
