let gulp = require('gulp'),
  sass = require('gulp-sass'),
  connect = require('gulp-connect'),
  pug = require('gulp-pug'),
  plumber = require('gulp-plumber'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify-es').default,
  autoprefixer = require('gulp-autoprefixer');

function reload(done) {
  connect.server({
    root: 'public',
    livereload: true,
    port: 8080
  });
  done();
}

function styles() {
  return (
    gulp.src('src/scss/styles.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 3 versions'],
      cascade: false
    }))
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(gulp.dest('public/css'))
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('public/css'))
    .pipe(connect.reload())
  );
}

function scripts() {
  return (
    gulp.src('src/js/scripts.js')
    .pipe(plumber())
    .pipe(gulp.dest('public/js'))
    .pipe(uglify())
    .pipe(rename('scripts.min.js'))
    .pipe(gulp.dest('public/js'))
    .pipe(connect.reload())
  );
}

function html() {
  return (
    gulp.src('*.html')
    .pipe(plumber())
    .pipe(connect.reload())
  );
}

function views() {
  return (
    gulp.src('src/pug/*.pug')
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('public/'))
    .pipe(connect.reload())
  )
}

function watchTask(done) {
  gulp.watch('public/*.html', html);
  gulp.watch('src/scss/**/*.scss', styles);
  gulp.watch('src/js/scripts.js', scripts);
  gulp.watch('src/pug/**/*.pug', views);
  done();
}

const watch = gulp.parallel(watchTask, reload);
const build = gulp.series(gulp.parallel(styles, scripts, html, views));

exports.reload = reload;
exports.styles = styles;
exports.scripts = scripts;
exports.html = html;
exports.views = views;
exports.watch = watch;
exports.build = build;
exports.default = watch;