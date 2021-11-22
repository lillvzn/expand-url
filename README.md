# Expand shortened URLs

You might have tools that help shorten the huge messy URLS to make them look more elegant and readable. For example https://www.youtube.com/user/TheStraightPipes/about can be shortened to https://bit.ly/3nyZgUz

## What's the point in expanding URLs?

In addition to converting the shortened URLs to their original form, we can aslo prevent viruses and reaching inappropriate websites. For example, if this URL: https://www.somewebsite.com/virus.dmg is shortened to https://bit.ly/234v2Y, there is no way of finding where the URL takes you. So comes the solution, expand URL.

### File Structure

<pre>
-- ExpandURL
     +-- _public
     |   +-- index.html
     |   +-- style.css
     |   +-- main.js
     +-- index.js
     +-- package.json

</pre>

### DEMO

![URL expansion demo](https://s8.gifyu.com/images/expandUrl.gif)

### Dependencies

<pre>
express: npm i express
request: npm i request
nodemon: npm i nodemon -D
</pre>

### Execution

<pre>
npm init -y
npm start
localhost:3000
</pre>
