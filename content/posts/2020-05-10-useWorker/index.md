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


https://github.com/alewin/useWorker
Two months ago, I started to write my first Open Source react hook: [useWorker](https://github.com/alewin/useWorker). It's a library that allows you to use WebWorker simply and easily.

### Feature:
- Run expensive function without blocking UI
- Supports Promises pattern instead of event-messages
- Clear API (worker, status, terminate)

# What are Web Workers?
Javascript is a single-threaded language, based on the concept of [Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop) and Event Queue. Since Javascript have a single call stack, one heavy task can block the entire application.
Web Workers allow to run scripts in background threads, utilizing all the CPUs core, without impacting to the single call stack.

# Then should I use the web worker for anything?, what are Web Worker for?
No, you should use WebWorkers only when your task is blocking the UI, or is an intense CPU task.

Some use cases:
- Analyze Audio or video source
- Processing, manipulating, filtering large Array, Json, or Object
- Canvas graphic processing
- CSV generation or zip compression
- Heavy math calculation
- Real-time text highlighting, formatting, linting, Spell checkeing
- Background polling system
- Any intense CPU task, that could block UI


## Why do I have to use useWorker()


