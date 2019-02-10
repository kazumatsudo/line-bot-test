const server = require("express")();
const line = require("@line/bot-sdk");

const line_config = {
    channelAccessToken: "oiUJc2XpQTCSkuoPGxxC9DK8wxnkakn8wEPErFF+xW3GDmx1P8pvPzKLARedp0ShIMaZVqEZvf4H3es+Vgp4hVFo0FYxqkYdM7P1C37Hb9vbh278BafKRsVRaCqv6VzuHwL9PGqjNf4+IVt8ZHWM3AdB04t89/1O/w1cDnyilFU=",
    channelSecret: "ccdd13685d9945198ff25803b9195de2"
};

server.post(
    '/webhook',
    line.middleware(line_config),
    (req, res) => {
        res.sendStatus(200);
        console.log(req.body);
    });

server.listen(process.env.PORT || 3000);
