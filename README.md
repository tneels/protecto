# gallery
simple artist gallery

## install
You need to install node.js to compile this project.

* Go to the folder you want to install your project.
* Open a terminal and run "cd path/to/your/project".
* Then "git clone git@github.com:tneels/gallery.git".
* Run "cd gallery" and "npm install". It will create a node_modules folder with all the dependencies needed. It take few minutes.

## Add or modify content
* Open src/data.json with a text editor like atom or sublime text.
* Modify this file with the content you want to have in the gallery. Note : .json files, every value/key start and finish with a "
* Add the artworks pictures in src/assets/uploads.

## Deploy with gh-pages
In the terminal, run "gulp deploy". It will build the website and deploy it. Go to the website to verify that it is up to date with your new content.
