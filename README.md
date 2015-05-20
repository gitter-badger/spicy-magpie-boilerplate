<div style="text-align: center">
    <h1>
        Spicy Magpie's Boilerplate
    </h1>
    <img src="https://raw.githubusercontent.com/spicymagpie/spicy-magpie-boilerplate/master/images/logo.png" alt="Spicy Magpie's Boilerplate Logo">
</div>
<hr>

## Documentation Status

[![Join the chat at https://gitter.im/spicymagpie/spicy-magpie-boilerplate](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/spicymagpie/spicy-magpie-boilerplate?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This documentation is intentionally incomplete. It is just a getting started
guide and should be complemented with the Website documentation.

## What is it?

The Spicy Magpie's Boilerplate is a quick prototyping framework for new HTML
design projects. It provides a toolkit to ease HTML design, development and
further deployment, enforcing the current Web standards and playing nicely with
frameworks and development libraries.

It works with Linux, Mac and Windows. You can use it to write HTML and plain-old
PHP Websites easily.

## Why should I use it?

This project aims to help developers and designers to create efficient HTML code
without much effort. Once your project is finished, you will get compressed
versions of your files, resulting in less overhead to your servers.

## What does it include?

The following features are implemented:

  - An HTTP Server with live reloading.
  - Bower configured to install external libraries.
  - CSS and JavaScript code linting.
  - File concatenation and minification.
  - Automated sitemaps.
  - Cache manifest file.
  - Apache and Nginx sample configuration files.

## How to install it?

To use this project, you need [Node.js](http://www.nodejs.org/) and
[Git](http://www.git-scm.com) installed on your machine. Make sure you know
how to use a Terminal program (in Windows, it's called the Command Prompt).

### Short version

Make sure to replace **/my/path** by your project directory. Remember that
Windows uses **\** instead of **/**

``` shell
$ npm -g install grunt-cli bower
$ git clone git://github.com/spicymagpie/spicy-magpie-boilerplate.git /my/path
$ cd /my/path
$ npm install
$ bower install
$ grunt serve
```

### Installing Grunt

Grunt is a JavaScript task runner. If you do not know how to use Grunt, you
may want to visit [the Grunt homepage](http://www.gruntjs.com/).

``` shell
$ npm -g install grunt-cli
```

### Installing Bower

Bower is the package manager for the Web. You can read more about it by reading
[its homepage](http://www.bower.io).

``` shell
$ npm -g install bower
```

### Downloading the Spicy Magpie's Boilerplate.

You have two choices to download the Spicy Magpie's Boilerplate. The first one
is by heading to [the homepage](http://www.spicymagpieboilerplate.org), clicking
on the **Download** button to grab the latest release.

If you want to use the Terminal, you can do the following:

``` shell
$ git clone https://github.com/spicymagpie/spicy-magpie-boilerplate.git /my/path
```

Change /my/path to the directory where you want your project to live.

### Installing project requirements

Before running the server, you must write the following:

``` shell
$ npm install && bower install
```

This will download your project dependencies. If you want to add dependencies to
your project, you can use bower to make it persistent:

``` shell
$ bower install --save jquery
```

Be sure to check the documentation for bower at its homepage.

## How to use it?

### Start the server

Everytime you want to work on a site, you should open a Terminal (or a Windows
command-line terminal) and execute the following:

``` shell
$ cd /my/path
$ grunt serve
```

This will open Google Chrome. In the Terminal, you will see something like:

``` shell
[BS] Access URLs:
 ----------------------------------------------
       Local: http://localhost:5000
    External: http://192.168.0.1:5000
      Tunnel: https://vniwieebvs.localtunnel.me
 ----------------------------------------------
          UI: http://localhost:3001
 UI External: http://192.168.0.2:3001
 ----------------------------------------------
[BS] Serving files from: .
[BS] Watching files...
```

The Access URLs are intended to be opened in different locations. If you pass
the URL specified after **Tunnel** to someone outside your network, that person
will be able to preview the site and watch the changes automatically too.

### Edit the code

Open the project directory in your editor of choice (We use Brackets and Atom,
but you can use Dreamweaver if you wish), write your code and save your files.
Google Chrome will refresh the changes automatically. Add more pages by copying
the file located in **template/index.html**, and create an offline version with
**offline.html** if you wish.

### Add libraries

If you want to add libraries, close the server by pressing Ctrl+C. Once you
return to the command line prompt, execute the following:

``` shell
$ bower install --save materialize
```

This will install MaterializeCSS using Bower.

Now, your library is added, but for it to be rendered properly, you must
declare the files you will use in your **filelist.json** file. This replaces the
practice of adding multiple **link rel="stylesheet"** and/or **script** tags
in your code.

Restart the server again and your CSS and JavaScript files will be added to the
resulting build.

### Finish

At a certain point you will be happy with your HTML design, and are almost
ready to publish it. First, open the **package.json** file and make changes to
the pertinent values. This will help you ensure consistency across HTML files.
The file is pretty understandable, though.

To create the final result, go back to your terminal and write:

``` shell
$ grunt dist
```

There will be a **dist/** directory containing compressed versions of your HTML,
CSS and JavaScript files. Publish those files instead of your project directory.
Don't forget to keep your project directory in a safe backup for further mods!

## How to contribute?

  - Test it.
  - Read the docs and provide suggestions.
  - Write a yeoman generator.
  - Write a rails-dist task. (?)
  - Write a config file for Nginx.
  - Add some sort of templating language (Mustache? Slim?) for v0.2.0

Your feedback will be always greatly appreciated!

If you find that your project is being used but you are not properly credited,
please let us know.

## Technologies involved

### Core technologies

  - HTML5
  - CSS3
  - JavaScript

### Preprocessors

  - [LESS](http://www.lesscss.org/)
  - [SASS/SCSS](http://www.sass-lang.org/)
  - [Stylus](http://learnboost.github.io/stylus/)
  - [CoffeeScript](http://www.coffeescript.org)
  - [Traceur ES6](https://github.com/google/traceur-compiler)

### Supporting files

  - [Adobe Cross Domain Policy File Specification](http://www.adobe.com/devnet/articles/crossdomain_policy_file_spec.html)
  - [Apple Touch Icons, as explained by Mathias Bynens](https://mathiasbynens.be/notes/touch-icons)
  - [BrowserSync](http://browsersync.io/)
  - [EditorConfig](http://editorconfig.org/)
  - [Grunt](http://www.gruntjs.com/)
  - [HumansTXT](http://www.humanstxt.org/)
  - [ParaType Sans Serif, Serif and Mono free fonts](http://www.paratype.com/public/)
  - [RobotsTXT](http://www.robotstxt.org/)
  - [Sitemap XML](http://www.sitemap.org/)

## Maintainers

  - [Spicy Magpie](spicy.magpie@gmail.com)

## Collaborators

  - [José Tomás Albornoz Rodríguez](https://github.com/eljojo)
  - [Daniela Escobar Arco](https://github.com/danidani)
  - [Mauricio Carrasco Filgueira](https://github.com/rblzr)
