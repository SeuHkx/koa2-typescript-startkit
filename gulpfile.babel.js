/**
 * Created by hkx on 2016/12/30.
 */
'use strict';
import gulp from 'gulp';
import gulpTS from 'gulp-typescript';
import browserSync from 'browser-sync';
import chalk from 'chalk';
import path from 'path';

const DEPLOY = {
	PORT      :  3333,
    LOCALHOST (){
		return `localhost:${this.PORT}`;
	}
};
gulp.task('compile-ts', () => {
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

gulp.task('reload',()=>{
	browserSync.init({
		proxy :  DEPLOY.LOCALHOST(),
		port  :  DEPLOY.PORT + 1
	});
	gulp.watch('./app/views/**/*.pug',(event)=>{
		console.log(`reload views pug : ${chalk.white.bgMagenta.bold(path.basename(event.path))}`);
	}).on('change',browserSync.reload);
});

