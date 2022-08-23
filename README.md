# [nunocoracao.com](nunocoracao.com)

Repo for my personal homepage with everything I've been up to, and where I write about stuff I am interested in. Decided to make this repo public so that people can suggest edits to articles using github.

## Frameworks and Misc.
These are the tools that I've used to build this...

### Framework
https://gohugo.io

### Theme
https://github.com/jpanther/congo

### Icons
https://fontawesome.com/icons


## If you want to fork
The Congo theme is setup using git submodules, if you want to fork the repo please rung the following commands after clone.
```
git submodule init
git submodule update
```

>*IMPORTANT*
Current version overrides search.js theme file. Yeah I know, not pretty. Had to do this so that the site could support both mobile and desktop menu structures.

```
//var showButton = document.getElementById("search-button");
var showButtonBasic = document.getElementById("search-button-basic");
var showButtonHamburger = document.getElementById("search-button-hamburger");

//showButton.addEventListener("click", displaySearch);
showButtonBasic.addEventListener("click", displaySearch);
showButtonHamburger.addEventListener("click", displaySearch);
```
