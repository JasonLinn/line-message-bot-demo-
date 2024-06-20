const express = require('express')
const linebot = require('linebot')

require('dotenv').config()

const app = express()
const bot = new linebot({
  channelId: process.env.channelId,
  channelSecret: process.env.channelSecret,
  channelAccessToken: process.env.channelAccessToken
})
// 程式碼都寫在下面這個區塊內
bot.on('message', async event => {
  let msg = {
    "type": "imagemap",
    "baseUrl": "https://line-message-bot-demo.onrender.com/statics/cat",
    "altText": "貓貓",
    "baseSize": {
      "width": 1040,
      "height": 1040
    },
     "video": {
        "originalContentUrl": "https://line-message-bot-demo.onrender.com/statics/video.mp4",
        "previewImageUrl": "https://line-message-bot-demo.onrender.com/statics/videoPreview.jpg",
        "area": {
            "x": 520,
            "y": 0,
            "width": 520,
            "height": 1040
        },
        "externalLink": {
            "linkUri": "https://example.com/see_more.html",
            "label": "查看更多貓貓"
        }
    },
    "actions": [
      {
        "type": "message",
        "area": {
          "x": 0,
          "y": 0,
          "width": 520,
          "height": 1040
        },
        "text": "貓貓"
      }
    ]
  }
  event.reply(msg)
})
// 程式碼都寫在這個區塊內 ＾＾＾
app.post('/webhook', bot.parser())
app.listen(3000, res => {
  console.log('伺服器服務運行在 http://localhost:3000')
})