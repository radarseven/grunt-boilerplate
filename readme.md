# Grunt Boilerplate aka CodeKit Killah

- Watch for changes in .scss and .js
- Compile .scss
- Lint, concatenate and minify .js
- Optimize images (See "Additional Tasks" below)

## Technical Notes

First, make sure the `Grunt CLI` and `grunt-init` are installed globally.

    `npm install -g grunt-cli`
    `npm install -g grunt-init`

Second, clone the `grunt-init` template locally:

    `git clone git@github.com:radarseven/grunt-boilerplate.git ~/.grunt-init/codekitkillah`

Now, `cd` into your project directory.

Initialize `codekitkillah` (note `codekitkillah` could be any name you desire):

    `grunt-init codekitkillah`

Install all dependencies in `package.json`. (Note, you may need to run as `sudo` user):

    `npm install`

To begin watching `.js` and `.scss` files run Grunt:

    `grunt watch`

## Additional Tasks

### Image Optimization

To optimize images run:

    `grunt imagemin`

This will optimize all images in `/assets/img/` and save them to `/assets/img/min/`.

## To-Do

- Solution to handle javascript plugins

## Reference

- [Grunt](http://gruntjs.com/)
- [grunt-init](http://gruntjs.com/project-scaffolding)
- [grunt-init-query](https://github.com/gruntjs/grunt-init-jquery)
- [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
- [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass)
- [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)
- [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
- [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)
- [matchdep](https://npmjs.org/package/matchdep)
