# Grunt Boilerplate aka CodeKit Killah

- Watch for changes in .scss and .js
- Compile .scss
- Lint, concatenate and minify .js
- Optimize images (See "Additional Tasks" below)

## Technical Notes

First, make sure the Grunt CLI is installed.

    `npm install -g grunt-cli`

Next, `cd` into your project directory and install all dependencies in package.json by running:

    `npm install`

To being watching .js and .scss file run Grunt:

    `grunt`

## Additional Tasks

### Image Optimization

To optimize images run:

    `grunt imagemin`

This will optimize all images in `/assets/img/` and save them to `/assets/img/min/`.

## To-Do

- Solution to handle javascript plugins

## Reference

- [Grunt](http://gruntjs.com/)
- [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
- [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass)
- [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)
- [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
- [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)
- [matchdep](https://npmjs.org/package/matchdep)
