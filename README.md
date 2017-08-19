# locks
locks

# Getting Started: 
  * `git clone git@github.com:queegvard/locks.git`
  * `cd locks`
  * Install Node/npm : https://nodejs.org/en/download/
  * `npm install` to download dependencies 
  * `node index.js` to start the server.  Note: use `ctrl-C` to kill the server. Rerun `node index.js` to start it again.

# Endpoints to access:
  * `http://localhost:3000/` will give a list of the available endpoints. TODO spiff this page up later
  * `http://localhost:3000/sound_of_silence.html` (is in progress now) will be the sound of silence puzzle page.
  * Add more here ....

# File Hierarchy: 
  There is nothing super fancy going on here. Basically index.js hosts a server at localhost:3000 and allows static access to all files in the /public directory. To create a new webpage/puzzle, do the following:   
  * `touch public/name_of_new_page`
  * Add markup to that new file
  * add the url `http://localhost:3000/name_of_new_page` to the list for the `/` endpoint in index.js
  * run `node index.js` and view it in the browser.  

  There is another statically hosted folder called `assets/` You should put images, svgs, media, etc in this folder to separate it from the markup.
