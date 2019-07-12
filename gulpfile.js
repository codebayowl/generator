var gulp            = require('gulp'), // сам Галп
    sass            = require('gulp-sass'), // Sass/SCSS для галпа
    browserSync     = require('browser-sync'), // обновлялка браузера
    concat          = require('gulp-concat'), // конкатенация файлов
    uglify          = require('gulp-uglify'), // сжатие JS
    cssnano         = require('gulp-cssnano'), // минификации CSS
    rename          = require('gulp-rename'), // переименование файлов CSS
    del             = require('del'), //удаление файлов и папок
    imagemin        = require('gulp-imagemin'), // работа с изображениями
    pngquant        = require('imagemin-pngquant'), // работа с png
    cache           = require('gulp-cache'), // кеширование
    autoprefixer    = require('gulp-autoprefixer'), // автопрефиксер
    pug             = require('gulp-pug'); //препроцессор pug

// СБОРКА SASS/SCSS
gulp.task('sass', function() {
    return gulp.src([
			'src/scss/*.+(sass|scss)',
			'!src/scss/_*.*'
		]) // Берем источник
    .pipe(sass()) //Преобразуем Sass в CSS посредством gulp-sass
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
    .pipe(gulp.dest('src/preprod/css')) // Выгружаем результата в папку src/css
    .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

// СЖАТИЕ CSS БИБЛИОТЕК
//gulp.task('css-libs', ['sass'], function() {
//    return gulp.src([
//			'src/assets/libs/normalize.css/normalize.css',
//			'src/assets/mods/**/*.css'
//		])
//		.pipe(concat('libs.min.css')) //конкатенируем
//		.pipe(cssnano()) // Сжимаем
//		.pipe(gulp.dest('src/preprod/css')); // Выгружаем в папку app/css
//});

// СБОРКА PUG
gulp.task('pug', function() {
		return gulp.src([
			'src/pug/*.pug',
			'!src/pug/_*.*'
		])
		.pipe(pug())
		.pipe(gulp.dest('src/preprod'))
});

// ПЕРЕЖАТИЕ БИБЛИОТЕК JS
/*gulp.task('scripts', function() {
    return gulp.src([ // Берем все необходимые библиотеки
			'src/assets/libs/jquery/dist/jquery.min.js' // jQuery
		])
		.pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
		.pipe(uglify()) // Сжимаем JS файл
		.pipe(gulp.dest('src/preprod/js')); // Выгружаем в папку app/js
});*/

// СИНХРОНИЗАЦИЯ БРАУЗЕРА
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'src/preprod'
        },
        notify: false
    });
});

// Отслеживание и публикация скриптов
gulp.task('jayass', function(){
	return gulp.src([
		'src/js/*.js'
	])
	.pipe(gulp.dest('src/preprod/js'));
});

// Отслеживание и публикация изюбражений
gulp.task('imgs', function(){
	return gulp.src([
		'src/img/*.*'
	])
	.pipe(gulp.dest('src/preprod/img'));
});


// ШПИЁН
gulp.task('watch', ['browser-sync', 'sass', /*'css-libs',*/ 'pug', /*'scripts',*/ 'jayass', 'imgs'], function() {
	gulp.watch('src/scss/*.+(scss|sass)', ['sass']); //watch sass files
	gulp.watch('src/pug/*.pug', ['pug']); //watch pug files
	gulp.watch('src/js/*.js', ['jayass']); // watch JS files
	gulp.watch('src/img/*.*', ['imgs']); // watch images
	gulp.watch('src/preprod/*.html', browserSync.reload); // watch HTML files
	gulp.watch('src/preprod/js/*.js', browserSync.reload); // watch JS files
	gulp.watch('src/preprod/img/*.*', browserSync.reload); // reload page images
});

// ПРОДАКШН:
// clear
gulp.task('clean', function() {
	return del.sync('public'); // Удаляем папку public перед сборкой
});
// imgs
gulp.task('img', function() {
	return gulp.src('src/img/**/*') // Берем все изображения из src
		.pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('public/img')); // Выгружаем на продакшен
});
// build
gulp.task('build', ['clean', 'img', 'sass', 'pug', 'jayass'/*, 'scripts'*/], function() {
 
    var buildCss = gulp.src([ // Переносим библиотеки в продакшн
			/*'src/preprod/css/libs.min.css'*/,
			'src/preprod/css/styles.css',
			'src/preprod/css/svg.css'
		])
		/*.pipe(concat('styles.css'))*/
    .pipe(gulp.dest('public/css'));
 
    var buildJs = gulp.src([ 
			/*'src/preprod/js/libs.min.js',*/ // берём минимизированные библиотеки,
			'src/preprod/js/scripts.js' // и наш несжатый скрипт для сайта
		])
		/*.pipe(concat('scripts.js'))*/ // сливаем их в один файл
    .pipe(gulp.dest('public/js')); // и выгружаем в продакшн
 
    var buildHtml = gulp.src('src/preprod/*.html') // Переносим HTML в продакшн
    .pipe(gulp.dest('public'));
 
});
// clear cache
gulp.task('clear', function () {
    return cache.clearAll();
})
// default task
gulp.task('default', ['watch']);