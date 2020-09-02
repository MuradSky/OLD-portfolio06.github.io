const gulp = require("gulp");
const plumber = require("gulp-plumber");
//const eslint = require('gulp-eslint')
const babel = require("gulp-babel");

module.exports = function script() {
    return (
        gulp
            .src("src/js/*.js")
            .pipe(plumber())
            .pipe(babel())
            //.pipe(eslint())
            //.pipe(eslint.format())
            .pipe(gulp.dest("build/js"))
    );
};
