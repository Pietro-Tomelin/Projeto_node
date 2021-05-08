const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const app = express();

app.use(cors());

app.listen(4000, () => {
    console.log("O server está trabalhando na porta 4000!");
});

app.get('/download', (req, res) => {
    var URL = req.query.URL;

    res.header('Content-Disposition', 'attachment; filename="video.mp4');

    ytdl(URL, {
        format: 'mp4'
    }).pipe(res);
});