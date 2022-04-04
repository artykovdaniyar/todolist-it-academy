// PATH
// ===========================================================================
const project_folder = "dist";
const source_folder = "#src";

const path = {
	build: {
		html: project_folder + "/",
		css: project_folder + "/css",
		js: project_folder + "/js",
		img: project_folder + "/img",
		icons: project_folder + "/icons",
		fonts: project_folder + "/fonts",
	},
	src: {
		html: [source_folder + "/**/*.html", "!" + source_folder + "/_*.html"],
		cssCopy: source_folder + "/css/*.css",
		css: source_folder + "/sass/style.scss",
		js: source_folder + "/js/**/*.js",
		img: source_folder + "/img/**/*.{png,jpg,svg,gif,ico,webp}",
		fonts: source_folder + "/fonts/*.{ttf,woff,woff2}",
	},
	watch: {
		html: source_folder + "/**/*.html",
		cssCopy: source_folder + "/css/*.css",
		css: source_folder + "/sass/**/*.scss",
		js: source_folder + "/js/**/*.js",
		img: source_folder + "/img/**/*.{png,jpg,svg,gif,ico,webp}",
	},
	clean: "./" + project_folder + "/",
};

const { src, dest } = require("gulp"),
	gulp = require("gulp"),
	browsersync = require("browser-sync").create(),
	fileinclude = require("gulp-file-include"),
	del = require("del"),
	sass = require("gulp-sass"),
	autoprefixer = require("gulp-autoprefixer"),
	group_media = require("gulp-group-css-media-queries"),
	clean_css = require("gulp-clean-css"),
	rename = require("gulp-rename"),
	uglify = require("gulp-uglify-es").default,
	bro = require("gulp-bro"),
	babelify = require("babelify"),
	imagemin = require("gulp-imagemin"),
	webp = require("gulp-webp"),
	webphtml = require("gulp-webp-html"),
	webpCss = require("gulp-webp-css"),
	ttf2woff = require("gulp-ttf2woff"),
	ttf2woff2 = require("gulp-ttf2woff2");

// Functions (Gulp Tasks)
// ===========================================================================
const browserSync = (params) => {
	browsersync.init({
		server: {
			baseDir: "./" + project_folder + "/",
		},
		port: 3000,
		notify: false,
	});
};
const watchFiles = (params) => {
	gulp.watch([path.watch.html], html);
	gulp.watch([path.watch.css], css);
	gulp.watch([path.watch.js], js);
	gulp.watch([path.watch.img], images);
};
const clean = (params) => {
	return del(path.clean);
};

const html = () => {
	return src(path.src.html).pipe(fileinclude()).pipe(webphtml()).pipe(dest(path.build.html)).pipe(browsersync.stream());
};
const css = () => {
	return src(path.src.css)
		.pipe(
			sass({
				outputStyle: "expended",
			}),
		)
		.pipe(group_media())
		.pipe(
			autoprefixer({
				overrideBrowserslist: ["last 10 versions"],
				cascade: true,
			}),
		)
		.pipe(webpCss())
		.pipe(dest(path.build.css))
		.pipe(clean_css())
		.pipe(
			rename({
				extname: ".min.css",
			}),
		)
		.pipe(dest(path.build.css))
		.pipe(browsersync.stream());
};
const js = () => {
	return src(path.src.js)
		.pipe(fileinclude())
		.pipe(
			bro({
				transform: [babelify.configure({ presets: ["es2015"] })],
			}),
		)
		.pipe(dest(path.build.js))
		.pipe(uglify())
		.pipe(
			rename({
				extname: ".min.js",
			}),
		)
		.pipe(dest(path.build.js))
		.pipe(browsersync.stream());
};
const images = () => {
	return src(path.src.img)
		.pipe(
			webp({
				quality: 70,
			}),
		)
		.pipe(dest(path.build.img))
		.pipe(src(path.src.img))
		.pipe(
			imagemin({
				progressive: true,
				svgoPlugins: [{ removeViewBox: false }],
				interlaced: true,
				optimizationLevel: 3,
			}),
		)
		.pipe(dest(path.build.img))
		.pipe(browsersync.stream());
};
const fonts = () => {
	src(path.src.fonts).pipe(ttf2woff()).pipe(dest(path.build.fonts));
	return src(path.src.fonts).pipe(ttf2woff2()).pipe(dest(path.build.fonts)).pipe(browsersync.stream());
};

// Declerartion of Gulp
// ===========================================================================

const build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts));
const watch = gulp.parallel(build, watchFiles, browserSync);

exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
