# base.css

1. 使用 [Normalize.css](https://github.com/necolas/normalize.css) 来校正不同设备和浏览器之间的细小的不一致，
2. 参考 [Bootstrap v4](https://github.com/twbs/bootstrap/tree/v4-dev) 创建了一些Utilities （工具）类

## 使用
请先安装 [NodeJS](https://nodejs.org)

### node

执行 `npm install` 安装依赖文件

### gulp

执行 `gulp less` 将 less文件编译生成 css 文件

执行 `gulp rename` 将 less 文件编译成 css 文件，并压缩生成后缀 .min.css 文件

执行 `gulp default` 将 less 转换为 css，压缩 css 文件，并重命名为 .min.css 文件

## License

Available under MIT. See [LICENSE](http://rem.mit-license.org/) for more details.

