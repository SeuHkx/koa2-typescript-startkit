/**
 * Created by hkx on 2016/12/30.
 */
'use strict';
import * as gulp from 'gulp';
import * as gulpTS from 'gulp-typescript';
import * as browserSync from 'browser-sync';

gulp.task('g-server',()=>{
	return gulp.src('./app/**/*.ts')
		.pipe(gulpTS({
			target: 'ES6',
			module: 'commonjs',
			moduleResolution: 'node',
			sourceMap: true,
			noImplicitAny: true
		}))
		.pipe(gulp.dest('./app/build/'))
});

gulp.task('server',()=>{
	browserSync.init({
		proxy : 'localhost:3333',
		port  : 3334
	});
	gulp.watch('./app/views/**/*.pug',()=>{}).on('change',browserSync.reload);
});
