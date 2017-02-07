/**
 * Created by hkx on 2016/12/30.
 */
'use strict';
import * as gulp from 'gulp';
import * as gulpTS from 'gulp-typescript';
import * as browserSync from 'browser-sync';
import * as chalk from 'chalk';
import deploy from './app/config/config';

const LOCALHOST = `localhost:${deploy.port}`;

gulp.task('compileTS', () => {
	return gulp
		.src('./app/**/*.ts')
		.pipe(gulpTS({
			target: 'ES6',
			module: 'commonjs',
			moduleResolution: 'node',
			sourceMap: true,
			noImplicitAny: true
		}))
		.pipe(gulp.dest('./app/build/'));
});

gulp.task('server',()=>{
	browserSync.init({
		proxy :  LOCALHOST,
		port  :  deploy.port + 1
	});
	gulp.watch('./app/views/**/*.pug',(event)=>{
		console.log(chalk.white.bgMagenta.bold(event.path));
	}).on('change',browserSync.reload);
});

