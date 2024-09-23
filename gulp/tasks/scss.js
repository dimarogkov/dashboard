import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import webpCss from 'gulp-webpcss';
import autoPrefixer from 'gulp-autoprefixer';

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp
        .src(app.path.src.scss, {sourcemaps: app.isDev})
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: 'SCSS',
                    message: 'Error: <%= error.message %>',
                })
            )
        )
        .pipe(
            sass({
                outputStyle: 'expanded',
            })
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                webpCss({
                    webpCss: '.webp',
                    noWebpClass: '.no-webp',
                })
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                autoPrefixer({
                    grid: true,
                    overrideBrowserslist: ['last 3 versions'],
                    cascade: true,
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browserSync.stream());
};
