## 什么是NodeJs
Node.js 是一个开源和跨平台的 JavaScript 运行时环境。 它几乎是任何类型项目的流行工具！

Node.js 在浏览器之外运行 V8 JavaScript 引擎（Google Chrome 的内核）。 这使得 Node.js 的性能非常好。

Node.js 应用程序在单个进程中运行，无需为每个请求创建新的线程。 Node.js 在其标准库中提供了一组异步的 I/O 原语，以防止 JavaScript 代码阻塞，通常，Node.js 中的库是使用非阻塞范式编写的，使得阻塞行为成为异常而不是常态。

当 Node.js 执行 I/O 操作时（比如从网络读取、访问数据库或文件系统），Node.js 将在响应返回时恢复操作（而不是阻塞线程和浪费 CPU 周期等待）。

这允许 Node.js 使用单个服务器处理数千个并发连接，而​​不会引入管理线程并发（这可能是错误的重要来源）的负担。

Node.js 具有独特的优势，因为数百万为浏览器编写 JavaScript 的前端开发者现在无需学习完全不同的语言，就可以编写除客户端代码之外的服务器端代码。

在 Node.js 中，可以毫无问题地使用新的 ECMAScript 标准，因为你不必等待所有用户更新他们的浏览器，你负责通过更改 Node.js 版本来决定使用哪个 ECMAScript 版本，你还可以通过运行带有标志的 Node.js 来启用特定的实验性功能。

大量的库
npm 以其简单的结构帮助 Node.js 生态系统蓬勃发展，现在 npm 仓库托管了超过 1,000,000 个开源包，你可以自由使用。

## Node.js 应用程序的示例
Node.js 中最常见的 Hello World 示例是 Web 服务器：
```js
const http = require('http')

const hostname = '127.0.0.1'

const port = 3000

const server = http.createServer((req, res) => {

res.statusCode = 200

res.setHeader('Content-Type', 'text/plain')

res.end('Hello World\n')

})

server.listen(port, hostname, () => {

console.log(`Server running at http://${hostname}:${port}/`)

})
```

要运行此代码片段，则将其另存为 server.js 文件并在终端中运行 node server.js。

此代码首先引入 Node.js http 模块。

Node.js 有一个很棒的标准库，包括一流的网络支持。

http 的 createServer() 方法创建新的 HTTP 服务器并返回。

服务器设置为监听指定的端口和主机名。 当服务器准备好时，则回调函数被调用，在此示例中会通知我们服务器正在运行。

每当接收到新请求时，都会调用 request 事件，其提供两个对象：请求（http.IncomingMessage 对象）和响应（http.ServerResponse 对象）。

这两个对象对于处理 HTTP 调用是必不可少的。

第一个提供请求的详细信息。 在这个简单的示例中，它没有被使用，但是你可以访问请求头和请求数据。

第二个用于向调用者返回数据。