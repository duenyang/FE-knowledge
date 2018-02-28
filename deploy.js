var http = require('http')
var createHandler = require('github-webhook-handler')
var handler = createHandler({
    path: '/webhook',
    secret: 'duenyang'
})
// 上面的 secret 保持和 GitHub 后台设置的一致


function run_cmd(cmd, args, callback) {
    var spawn = require('child_process').spawn;
    var child = spawn(cmd, args);
    var resp = "";

    child.stdout.on('data', function (buffer) {
        resp += buffer.toString();
    });
    child.stdout.on('end', function () {
        callback(resp)
    });
}

http.createServer(function (req, res) {
    console.log('收到请求');
    handler(req, res, function (err) {
        console.log('执行 github-webhook-handler')
        res.statusCode = 404
        res.end('no such location')
    })
}).listen(7000)

handler.on('error', function (err) {
    console.log('错误了!')
    console.error('Error:', err.message)
})

handler.on('push', function (event) {
    console.log('Received a push event for %s to %s',
        event.payload.repository.name,
        event.payload.ref);
    run_cmd('sh', ['./publish.sh'], function (text) {
        console.log(text)
    });
})

/*
handler.on('issues', function (event) {
  console.log('Received an issue event for % action=%s: #%d %s',
    event.payload.repository.name,
    event.payload.action,
    event.payload.issue.number,
    event.payload.issue.title)
})
*/