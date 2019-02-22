> 赋值给 `exports` 不会修改模块，必须使用 `module.exports`

> 如果按确切的文件名没有找到模块，则 Node.js 会尝试带上 .js、 .json 或 .node 拓展名再加载。
.js 文件会被解析为 JavaScript 文本文件， .json 文件会被解析为 JSON 文本文件。 .node 文件会被解析为通过 dlopen 加载的编译后的插件模块。

> 注意：强烈建议将所有的依赖放在本地的 node_modules 目录。 这样将会更快地加载，且更可靠。