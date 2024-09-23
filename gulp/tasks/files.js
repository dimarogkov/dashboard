export const files = () => {
    return app.gulp
        .src(app.path.src.files, {sourcemaps: app.isDev})
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: 'FILES',
                    message: 'Error: <%= error.message %>',
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.files))
        .pipe(app.plugins.browserSync.stream());
};
