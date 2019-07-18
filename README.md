# QR Screen Capture

This is a demo of recognizing QR codes in-browser using the Screen Capture API, namely `getDeviceMedia`. 

It is based on [stream-display](https://github.com/khovansky-al/stream-display) and [jsQR](https://github.com/cozmo/jsQR) libraries. It should work in **Chrome**, **Firefox**, **Edge Mobile** and **Opera for Android**.

Live demo can be found [here](https://khovansky.me/demos/live-qr/)

## How to use

Prepare a website / image / something on your display that has a QR code. Press "Start scanning" and choose where to stream from. Bring the QR code into visibility and navigate back to the tab with the demo. Result should drop into the corresponding area on the page.

## How to launch locally

To build and launch it on your machine just run the usual

```bash
npm install
npm run build
```

And then serve the contents of the build directory with your favourite http server. As an option:

```bash
npm install -g http-server
http-server build
```