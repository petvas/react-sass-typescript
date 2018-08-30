const DtsCreator = require('typed-css-modules');
const glob = require('glob');
const sass = require('node-sass');

const creator = new DtsCreator();

glob('src/**/*.scss', {}, (error, filePaths) => {
  for (const filePath of filePaths) {
    sass.render({
        file:filePath
    }, function(err, result){
        let css = result.css.toString();

        creator.create(filePath, css)
          .then(dtsContent => dtsContent.writeFile())
          .catch((error) => console.log(error));
    });

  }
});