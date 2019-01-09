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
            items.forEach(item => {
              this.fs.copy(this.templatePath(item), this.destinationPath(item));
            });
          });
    }
}