const fs = require('fs')
const path = require('path')
const generator = require('yeoman-generator')

module.exports = class extends generator {

    constructor (args, options) {
        super(args, options)
        this.sourceRoot(path.resolve(__dirname, "../../android"))
    }

    gen() {
        fs.readdir(this.sourceRoot(), (err, items) => {
            const excluedFiles = [""];
            items.filter(item => !excluedFiles.includes(item)).forEach(item => {
              const filePath = this.templatePath(item);
              this.fs.copy(filePath, this.destinationPath(item));
            });
          });
    }
}