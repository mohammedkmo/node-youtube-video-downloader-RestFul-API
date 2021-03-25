# node youtube video downloader RestFul API

just a small project using [ytdl-core](https://github.com/fent/node-ytdl-core) package.

## Introduction

node project to create a youtube downloader backend that take a parameter `youtube URL` and send response `download link`.

## Usage

by visiting the download request `URL`:

```bash
https://localhost:3000/download?video_url=[put video URL here]
```

the `response` will be Like:

```bash
{
  title: "title",
  description: "description"
  thumbnail: "thumbnail URL"
  video_url: "video URL"
  publishDate: "2020-10-30",
  author: {
      name: "author name",
      channel_url: "channel URL"
      thumbnail: "thumbnail URL"
      subscriber_count: 19300000
          },
  formats: [
      {
       quality: null,
       url: "download URL"
       audio: true
       },
      {
       quality: "360p",
       url: "download URL"
       audio: true
      }
     ]
}
```

## Installation

Clone the repository

```bash
git clone https://github.com/mohammedkmo/node-youtube-video-downloader-RestFul-API.git
```

then install node modules via NPM

```bash
npm install OR npm i
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)