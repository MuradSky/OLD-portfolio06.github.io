const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
// const shorthand = require('gulp-shorthand')
const autoprefixer = require("gulp-autoprefixer");
// const rename = require("gulp-rename")
const sassGlob = require("gulp-sass-glob");

module.exports = function styles() {
    return (
        gulp
            .src("src/styles/styles.scss")
            .pipe(plumber())
            .pipe(sassGlob())
            .pipe(sass())
            .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
            .pipe(gulp.dest("build/css"))
    );
};
