var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');
var header = require('gulp-header');
var templateCache = require('gulp-angular-templatecache');

function compile(watch) {
	var bundler = watchify(browserify('./src/index.js', {
		debug: true
	}).transform(babel));

	function rebundle() {
		bundler.bundle()
			.on('error', function (err) {
				console.error(err);
				this.emit('end');
			})
			.pipe(source('build.js'))
			.pipe(buffer())
			.pipe(sourcemaps.init({
				loadMaps: true
			}))
			.pipe(sourcemaps.write('./'))
			.pipe(gulp.dest('dist'));
	}

	if (watch) {
		bundler.on('update', function () {
			console.log('-> bundling...');
			rebundle();
		});
	}

	rebundle();
}

gulp.task('index', function() {
	return gulp.src('src/index.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('html', function () {
	return gulp.src('src/**/*.html')
	.pipe(templateCache({ standalone: true, base: function(file) {
		return file.path.replace(__dirname, '');
	}}))
	.pipe(header('module.exports = '))
	.pipe(gulp.dest('./tmp'));
});

gulp.task('html:watch', ['index', 'html'], function () {
	return gulp.watch(['./src/**/*.html'], ['index', 'html', 'build']);
});

gulp.task('build', function () {
	return compile();
});
gulp.task('watch', function () {
	return compile(true);
});

gulp.task('default', ['html:watch', 'watch']);
