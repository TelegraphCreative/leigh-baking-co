let mix = require('laravel-mix')
require('laravel-mix-tailwind')


mix
    .setPublicPath('./docs')
	// The App Build
	// .js('./resources/js/app.js', './assets/js')
	.sass('resources/scss/app.scss', './assets/css')
	// .copyDirectory('resources/fonts', './docs/assets/fonts')
	// .copyDirectory('resources/img', 'assets/img')
	// .sourceMaps()
	// .browserSync({
	// 	proxy: 'leigh-baking-co.test',
	// 	files: [
	// 		'./assets/**/*.html',
	// 		'./assets/css/**/*.css',
	// 		'./assets/js/**/*.js',    ]
	// 	})
	.tailwind()
	.version();