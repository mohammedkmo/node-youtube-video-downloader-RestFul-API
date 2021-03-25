const ytdl = require('ytdl-core');

module.exports = {
  download: async (req, res) => {
    const url = req.query.video_url;

    try {
      let info = await ytdl.getInfo(url);
      let highest = ytdl.chooseFormat(info.formats, { quality: 'highest' });
      let lowest = ytdl.chooseFormat(info.formats, { quality: 'lowest' });

      res.statusCode = 200;
      res.json({
        title: info.videoDetails.title,
        description: info.videoDetails.description,
        thumbnail: info.videoDetails.thumbnails[4].url,
        video_url: info.videoDetails.video_url,
        publishDate: info.videoDetails.publishDate,
        author: {
          name: info.videoDetails.author.name,
          channel_url: info.videoDetails.author.channel_url,
          thumbnail: info.videoDetails.author.thumbnails[2].url,
          subscriber_count: info.videoDetails.author.subscriber_count,
        },
        formats: [
          {
            quality: lowest.qualityLabel,
            url: lowest.url,
            audio: true,
          },
          {
            quality: highest.qualityLabel,
            url: highest.url,
            audio: true,
          },
        ],
      });
    } catch (ex) {
      res.json({
        msg: 'can not get this video',
      });
    }
  },


  main: (req, res) => {
    res.json({
      msg: 'Hello World',
    });
  },
};
