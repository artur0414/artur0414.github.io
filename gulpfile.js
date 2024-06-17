const {src, dest, watch} = require('gulp');

//css

const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

function css (done) {
    src('src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(dest('build/scss'))

    done()
}


function dev(done){
    watch('src/scss/**/*.scss', css)
    done()
}

exports.dev = dev;