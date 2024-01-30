import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';

const sass = gulpSass(dartSass);

function compileSass() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/styles'));
}

function compileJs() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'))
}

function compileImages() {
    return gulp.src('./src/assets/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/assets'))
}
gulp.task('compileSass', compileSass);
gulp.task('compileJs', compileJs);
gulp.task('compileImages', compileImages);

gulp.task('default', () => {
    gulp.watch('./src/styles/*.scss', { ignoreInitial:false }, gulp.series(compileSass));
    gulp.watch('./src/scripts/*.js', { ignoreInitial:false }, gulp.series(compileJs));
    gulp.watch('./src/assets/*', { ignoreInitial:false }, gulp.series(compileImages));
})


