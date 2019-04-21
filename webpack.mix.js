let mix = require("laravel-mix");
require("laravel-mix-tailwind");
require("laravel-mix-purgecss");

mix
  .setPublicPath("./docs")
  // The App Build
  .js("./resources/js/app.js", "./assets/js")
  .sass("resources/scss/app.scss", "./assets/css")
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
  .purgeCss({
    enabled: mix.inProduction(),
    whitelist: ["-short"],
    folders: ["resources", "docs"],
    extensions: ["twig", "html", "js", "php", "vue"]
  })
  .tailwind()
  .version();
