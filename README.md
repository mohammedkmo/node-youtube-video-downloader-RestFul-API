# node youtube video downloader RestFul API



## Introduction

node project to create a youtube downloader backend that take a parameter `youtube URL` and send response `download link`

## Usage

by visiting the download request `URL`

```bash
https://localhost:3000/download?video_url=[put video URL here]
```

the `response` will be Like

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
