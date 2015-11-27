var gulp = require('gulp')
var sprity = require('sprity');
var sprityJS = require('sprity-js');

gulp.task('sprites', function () {
  return sprity.src({
    src: './resources/images/**/*.png',
    style: 'sprite.js',
    dimension: [{
      ratio: 1, dpi: 72
    }],
    split: true,
    orientation: 'binary-tree',
    margin: 0,
    processor: sprityJS // The important part for sprity JS
  })
  .pipe(gulp.dest('src/sprites/'));
});
