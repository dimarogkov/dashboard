import gulp from 'gulp';
import {plugins} from './gulp/config/plugins.js';
import {path} from './gulp/config/path.js';
import {files} from './gulp/tasks/files.js';
import {reset} from './gulp/tasks/reset.js';
import {html} from './gulp/tasks/html.js';
import {server} from './gulp/tasks/server.js';
import {scss} from './gulp/tasks/scss.js';
import {js} from './gulp/tasks/js.js';
import {images} from './gulp/tasks/images.js';
import {fonts} from './gulp/tasks/fonts.js';
import {getZip} from './gulp/tasks/zip.js';

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins,
};

const watcher = () => {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
};

const mainTask = gulp.parallel(fonts, files, html, scss, js, images);
const serverTask = gulp.parallel(watcher, server);
const dev = gulp.series(reset, mainTask, serverTask);
const build = gulp.series(reset, mainTask);
const deployZip = gulp.series(reset, mainTask, getZip);

export {dev};
export {build};
export {deployZip};

gulp.task('default', dev);
