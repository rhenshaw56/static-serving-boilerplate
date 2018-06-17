const gulp = require('gulp');
const sync = require('browser-sync');


gulp.task('sync', () => {
    sync.init({
        server: {
            baseDir: 'src/'
        },
        port: process.env.PORT || 5600,
        open: false,
        ghostMode: false
    });
});

gulp.task('default', ['sync'], () => {
    gulp.watch('*.js').on('change', sync.reload);
    gulp.watch('./*/*.js').on('change', sync.reload);
    gulp.watch('./src/*.html').on('change', sync.reload);
    gulp.watch('./src/*.js/').on('change', sync.reload);
});
