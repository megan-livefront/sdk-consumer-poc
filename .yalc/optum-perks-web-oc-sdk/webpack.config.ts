import path from 'path'
import 'dotenv/config'
import { fileURLToPath } from 'url'
import TerserPlugin from 'terser-webpack-plugin'
import type webpack from 'webpack'
import webpackObj from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** Webpack config for SDK. */
// eslint-disable-next-line import/no-unused-modules
export default async ({ dev, prod }: Record<string, unknown>): Promise<webpack.Configuration> => {
  const isDev = dev === true
  const isProd = prod === true

  return {
    mode: isProd ? 'production' : 'development',
    target: 'web',
    resolve: {
      extensions: ['.js', '.json', '.ts', '.tsx', '.scss', '.css'], // Add .scss here
      fallback: {
        querystring: fileURLToPath(import.meta.resolve('querystring-browser')),
        fs: false,
        path: false,
        stream: false,
        zlib: false,
      },
    },
    devtool: isDev ? 'eval' : false,
    entry: './index.ts',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      library: {
        type: 'module',
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|ts|tsx)$/,
          exclude: [/node_modules/],
          use: 'swc-loader',
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.scss$/,
          exclude: /\.module\.scss$/, // Exclude .module.scss files
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader', // Resolves @import, url(), etc.
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  loadPaths: [
                    path.join(__dirname, '../optum-perks-web-components/src/assets/styles'),
                    path.join(__dirname, '../optum-perks-web-styles/src/styles'),
                  ],
                },
              },
            },
          ],
        },
        {
          test: /\.module.scss$/,
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]__[hash:base64:5]',
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  loadPaths: [
                    path.join(__dirname, '../optum-perks-web-components/src/assets/styles'),
                    path.join(__dirname, '../optum-perks-web-styles/src/styles'),
                  ],
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpackObj.ProvidePlugin({
        React: 'react',
      }),
      // Extract CSS in production
      isProd &&
        new MiniCssExtractPlugin({
          filename: 'bundle.css', // Output filename for the CSS
        }),
    ].filter(Boolean), // Only add the plugin if in production
    stats: 'errors-only',
    experiments: {
      layers: true,
      outputModule: true,
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
    externals: {
      react: 'react',
    },
  }
}
