import * as nodePath from 'path';
const rootFolder=nodePath.basename(nodePath.resolve());

const buildFolder='./dist';
const srcFolder='./src';

export const path={
    build:{
        js:`${buildFolder}/js/`,
        css:`${buildFolder}/css/`,
        html:`${buildFolder}/`,
        images:`${buildFolder}/img/`,
        files:`${buildFolder}/files/`,
        fonts:`${buildFolder}/fonts/`,
    },
    src:{
        js:`${srcFolder}/js/app.js`,
        images:`${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg:`${srcFolder}/img/**/*.svg`,
        scss:`${srcFolder}/scss/style.scss`,
        html:`${srcFolder}/*.html`,  //pug
        files:`${srcFolder}/files/**/*.*`,
        svgicons:`${srcFolder}/svgicons/svg.*`,

    },
    watch:{
        js:`${srcFolder}/**/*.js`,
        scss:`${srcFolder}/**/*.scss`,
        html:`${srcFolder}/**/*.html`,//pug
        files:`${srcFolder}/files/**/*.*`,
        images:`${srcFolder}/img/**/*.{jpg,jpeg,png,svg,ico,gif,webp}`,
    },
    clean:buildFolder,
    buildFolder:buildFolder,
    srcFolder:srcFolder,
    rootFolder: rootFolder,
    ftp:`test`
}