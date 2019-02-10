const server = require("express")();
const line = require("@line/bot-sdk");

const lineConfig = {
    channelAccessToken: process.env.LINE_ACCESS_TOKEN,
    channelSecret: process.env.LINE_CHANNEL_SECRET
};
const bot = new line.Client(lineConfig);

server.post(
    '/webhook',
    line.middleware(lineConfig),
    (req, res) => {
        res.sendStatus(200);

        const eventsProcessed = [];
        req.body.events.forEach(event => {
            if (event.type === "message" && event.message.type === "text"){
                eventsProcessed.push(bot.replyMessage(event.replyToken, {
                    type: "text",
                    text: `あなたは 「${event.message.text}」 と入力しました。`
                }));
            }
        });

        Promise
            .all(eventsProcessed)
            .then(response => console.log(`${response.length} event(s) processed.`));
    });

server.listen(process.env.PORT || 3000);
