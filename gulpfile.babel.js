/**
 * Created by hkx on 2016/12/30.
 */
'use strict';
import gulp from 'gulp';
import gulpTS from 'gulp-typescript';
import browserSync from 'browser-sync';
import chalk from 'chalk';
import path from 'path';
import config from './config.json';

const DEPLOY = {
	PORT      :  3333,
    LOCALHOST (){
		return `localhost:${this.PORT}`;
	}
};

gulp.task('compile-ts', () => {
	return gulp
		.src(config.compileTsPath)
		.pipe(gulpTS({
			target: 'ES6',
			module: 'commonjs',
			moduleResolution: 'node',
			sourceMap: true,
			noImplicitAny: true
		}))
		.pipe(gulp.dest(config.buildTsPath));
});

gulp.task('reload',()=>{
	browserSync.init({
		proxy :  DEPLOY.LOCALHOST(),
		port  :  DEPLOY.PORT + 1
	});
	gulp.watch(config.watchViewTemplate,(event)=>{
		console.log(`reload views pug : ${chalk.white.bgMagenta.bold(path.basename(event.path))}`);
	}).on('change',browserSync.reload);
});

