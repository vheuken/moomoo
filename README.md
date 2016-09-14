# moomoo

Listen to music with friends.

Currently undergoing a rewrite.

The original version used Node.js. While this made the initial prototype quick to put together, development slowed to a crawl. After attempting to rewrite it using Node.js again, I realized that it was the wrong tool for the job.

The main issues with using Node were the following:

1. Error handling was hard, espessially in heavily nested code.
2. Because of the event loop, things like server-side hashing were clunky and would have had to been moved to a separate service (preferably written in something that wasn't Node.js). 
3. Third party libraries were often of low quality and had to be manually patched. 
4. The tooling, compared to a language like Clojure, is quite poor
5. Testing Node's asyncronous code is a nightmare.

To have a look at the original Node code, [visit the "pre-rewrite" branch](https://github.com/vheuken/moomoo/tree/pre-rewrite/)

![Screenshot of Moomoo](http://i.imgur.com/StwrYSl.png)
