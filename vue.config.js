module.exports = {
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'src/index.html',
            filename: 'index.html',
            title: 'YuLuo',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    }
}