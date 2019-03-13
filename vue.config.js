module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: "https://hjaltes-impartial-elephant.s1.umbraco.io",
                ws: true,
                changeOrigin: true
            },
        }
    }
}