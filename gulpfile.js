let gulp = require('gulp'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    //autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    runSequence = require('run-sequence');

let bs_baseDir = 'dist';

let sass_in = 'src/**/*.{scss,sass}';
let sass_out = 'dist';

let pug_in = 'src/**/!(_)*.pug';
let pug_watch = 'src/pug/*.pug';
let pug_out = 'dist';

let js_in = 'src/**/*.js';
let js_out = 'dist';

let show_notifications = true; //dont show notifications when BS starts

function compileSass() {
    let stream = gulp.src(sass_in)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', notify.onError(function (error) {
            return 'SASS error.\n'+'Look in the console for details.\n\n\n'+error;
        })))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(sass_out))
        .pipe(browserSync.stream());
    if (show_notifications)
        stream.pipe(notify({message: 'CSS changed.', onLast: true}));
    return stream;
}

function compilePug() {
    let stream = gulp.src(pug_in)
        .pipe(pug({pretty: true}))
        .on('error', notify.onError(function (error) {
            return 'PUG error.\nLook in the console for details.\n\n\n'+error;
        })).pipe(gulp.dest(pug_out))
        ;
    if (show_notifications)
        stream.pipe(notify({message: 'HTML changed.', onLast: true}));
    return stream;
}

function moveJS() {
    let stream =  gulp.src(js_in)
        .pipe(gulp.dest(js_out));
    if (show_notifications)
        stream.pipe(notify({message: 'JS changed.', onLast: true}));
    return stream;
}

function runBrowserSync() {
    browserSync({
        server: {
            baseDir: bs_baseDir
        },
        notify: true
    });
    show_notifications = true;
}

gulp.task('sass', compileSass);

gulp.task('pug', compilePug);
gulp.task('pug-reload', ['pug'], function() {
    browserSync.reload();
});

gulp.task('js', moveJS);
gulp.task('js-reload', ['js'], function() {
    browserSync.reload();
});



gulp.task('browserSync', runBrowserSync);

gulp.task('build-browserSync', function() { //build first, then run BS
    show_notifications = false; //dont show notifications when building 1st time
    runSequence(['sass', 'pug', 'js'], 'browserSync');
});

gulp.task('watch', ['build-browserSync'], function() {
    gulp.watch(sass_in, ['sass']);
    gulp.watch(pug_watch, ['pug-reload']);
    gulp.watch(js_in, ['js-reload']);
});

gulp.task('default', ['watch']);