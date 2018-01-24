var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
// first arg is the tasks name
gulp.task('sass', function() {
    return gulp.src(['src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

// // Move the javascript files into our /src/js folder
// gulp.task('js', function() {
//     return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js'])
//         .pipe(gulp.dest("src/js"))
//         .pipe(browserSync.stream());
// });

// Static Server + watching scss/html files
// second arg are the tasks which are run before the third argument
gulp.task('serve', ['sass'], function() {
    
        // ./ is the working folder (not really needed)
        browserSync.init({
            server: "./src"  
        });
    
        gulp.watch(['src/scss/*.scss'], ['sass']);
        gulp.watch(['src/js/*.js']).on('change', browserSync.reload);;
        gulp.watch("src/modules/*.html").on('change', browserSync.reload);
        gulp.watch("src/*.html").on('change', browserSync.reload);
    });    

gulp.task('default', ['serve']);



// gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
// gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);