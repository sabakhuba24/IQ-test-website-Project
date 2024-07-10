const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");
const browserSync = require('browser-sync').create();

//compile scss into css
function style() {
    //1.where is my scss
    return gulp.src('src/assets/styles/scss/**/*.scss') //gets all files ending with .scss in src/scss
    //2. pass that file through sass compiler
    .pipe(sass().on('error', sass.logError))
    //3. where do I save the compiled css file
    .pipe(gulp.dest('src/assets/styles/css'))
    //4. stream change to all browsers
    .pipe(browserSync.stream());
}

//minify js to min.js
function minifyJs() {
    return gulp.src('src/assets/js/**/*.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('src/assets/minJs'))
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./src",
            index: "/index.html"
        }
    });
    gulp.watch('src/assets/styles/scss/**/*.scss', style);
    gulp.watch('src/*.html').on('change', browserSync.reload);
    gulp.watch('src/assets/js/**/*.js', minifyJs);
}

exports.style = style;
exports.minifyJs = minifyJs;
exports.watch = watch;