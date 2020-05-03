---
date: 2020-05-10
title: 'Background Task - useWorker react hook'
template: post
thumbnail: '../../thumbnails/git.png'
slug: background-task-webworker-react-useWorker-hook
categories:
  - Tools
tags:
  - first
---


Two months ago, I started to write my first Open Source **React Hook**: [useWorker](https://github.com/alewin/useWorker).
A simply library that allows you to use WebWorker easily using Reactjs.

Wait wait wait...

# What are Web Workers?
JavaScript is a single-threaded programming language, so it can run only one task at a time.

The main thread is responsable to draw element, wait and run event handles, etcc..
Since Javascript have a single call stack, based on the LIFO principle (Last-in-first-out), one heavy task can block or slowing the execution entire website.

![call stack](images/callstack.png)

Web workers is an Web API, that allow to run scripts in background threads, without impacting to the single call stack of the main thread.

# How works Web Worker?
Web worker has own EventLoop with their Call Stack. The Web Worker and the main thread communicate each other using a system of messages. with `postMessage` they can send a message, with `onmessage` they can recive a message.

**Worker.js**
```javascript
onmessage = function(e) {
  console.log(`Message received from main thread: ${e.data}`);
  postMessage(`Hi main thread, I'm the worker.js`);
}

```

**scripts.js**
```javascript
const worker = new Worker("worker.js");
worker.postMessage('Hi');
worker.onmessage = function(e) {
  console.log(`Message received from worker: ${e.data}`)
}
```
In this way, the main thread is responsable for only urgent task, and can delegate other heavy task to a web worker.

# Then should I use the web worker for anything?, what are Web Worker for?
No, you should use it everywhere, WebWorkers should be used only for task that blocking the UI, or for intense CPU task.

Some use cases:
- Analyze Audio or video source
- Processing, manipulating, filtering large Array, Json, or Object
- Canvas graphic processing
- CSV generation or zip compression
- Heavy math calculation
- Real-time text highlighting, formatting, linting, Spell checkeing
- Background polling system
- Any intense CPU task, that could block UI


## Since Web worker are native, Why not use the API directly, instead of your hook?

To use a web worker with native API you need to create a file with the worker content, and then import it `const worker = new Worker('workerFile.js`)

useWorker, lets you to have the worker function whereever you want, event inside the main script `script.js`.


### Feature:
- Run expensive function without blocking UI
- Supports Promises pattern instead of event-messages
- Clear API (worker, status, terminate)
