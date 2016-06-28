const 	gulp = require('gulp'),
		less = require('gulp-less'),
		path = require('path'),
		minify = require('gulp-clean-css'),
		rename = require('gulp-rename'),
		autoprefixer =  require('gulp-autoprefixer'),
		csscomb = require('gulp-csscomb');

gulp.task('default', function(){
	console.log('Myau');
})

// CSS
gulp.task('css', function(){
	return gulp.src('src/css/style.less')
	.pipe(less({
		paths: [ path.join(__dirname, 'less', 'includes') ]
	}))
	.pipe(autoprefixer({browsers: ['last 35 versions']}))
	.pipe(csscomb())
	.pipe(gulp.dest('build/css'))
	.pipe(minify())
	.pipe(rename({ suffix: '.min' }))
	.pipe(gulp.dest('build/css'));
});

// Watcher
gulp.task('watch', function(){
	gulp.watch('src/css/style.less', ['css'])
});
