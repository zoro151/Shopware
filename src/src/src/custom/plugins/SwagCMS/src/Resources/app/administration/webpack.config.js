// Require necessary dependencies
const { join } = require('path');
const { ComponentOverridePlugin } = require('@shopware/administration-extension-sdk');

// Export the Webpack configuration
module.exports = () => {
    return {
        // Define entry point for custom plugin
        entry: {
            // Replace 'your-plugin-name' with the actual name of your plugin
            'your-plugin-name': join(__dirname, 'src', 'main.js'),
        },
        output: {
            // Path where bundled files will be output
            path: join(__dirname, 'dist'),
            filename: '[name].js',
        },
        resolve: {
            // Specify which file extensions Webpack will process
            extensions: ['.js', '.vue', '.json'],
            alias: {
                vue$: 'vue/dist/vue.esm.js',
            },
        },
        module: {
            rules: [
                {
                    // Use Babel for ES6+ JavaScript compatibility
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                },
                {
                    // Process Vue.js single file components
                    test: /\.vue$/,
                    loader: 'vue-loader',
                },
                {
                    // Handle CSS and SCSS files
                    test: /\.(scss|css)$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
            ],
        },
        plugins: [
            // Plugin that helps with Shopware component overrides (if necessary)
            new ComponentOverridePlugin(),
        ],
        devtool: 'source-map', // Enable source maps for better debugging
    };
};
