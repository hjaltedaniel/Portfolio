module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: "https://hjaltes-impartial-elephant.s1.umbraco.io"
            },
            '^/umbraco': {
                target: "https://hjaltes-impartial-elephant.s1.umbraco.io"
            },
        }
    }
}