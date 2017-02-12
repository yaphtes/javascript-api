module.exports = {
    // основной файл приложения
    entry: './src/App.jsx',

    // куда следует поместить файл сборки
    output: {
        // название файла
        filename: 'bundle.js',

        // путь файла
        path: './public/'
    },

    // сборка
    module: {

        // загрузчики
        loaders: [
            {
                // расширения файлов, которые мы хотим пропустить через загрузчик
                test: /\.jsx?$/,

                // что не нужно загружать через загрузчик
                exclude: /node_modules/,

                // загрузчик
                loader: 'babel-loader' // webpack знает где взять конфиг для babel, это: .babelrc или package.json
            },
            {
                test: /\.styl$/,
                // загрузчики срабатывают справа налево
                loaders: ['style-loader', 'css-loader', 'stylus-loader']

                // PS: <link> в html указывать не нужно, webpack сделает это за нас
            }
        ]
    },

    // сервер не создает файл bundle.js, он держит сборку в ОЗУ,
    // следовательно записывает ее на ПЗУ, если нужен bundle.js,
    // то нужно будет запустить сборку отдельно
    devServer: {
        // Путь до контента, будет доступен по http://localhost/
        contentBase: './public/',

        // порт
        port: 3000
    },

    // следить за изменениями, не требуется при использовании webpack-dev-server
    // watch: true,

    // использовать source maps.
    // возможные значения https://webpack.js.org/configuration/devtool/
    devtool: 'cheap-module-eval-source-map',

    // Как модули будут разрешены (resolved)
    resolve: {
        // расширения
        extensions: ['.js', '.json', '.jsx']
    }
};



// Использование webpack в качестве промежуточног ПО, для Express
// https://webpack.js.org/guides/development/#webpack-dev-middleware
