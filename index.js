const http = require('node:http')
const PORT = 4321

const productosJSON = require('./products/products.json')

const processRequest = (req, res) => {
    const { method, url } = req
    switch (method) {
        case 'GET':
            switch (url) {
                case '/productos':
                    res.setHeader('Content-Type', 'application/json; charset=utf-8')
                    return res.end(JSON.stringify(productosJSON))
                default:
                    res.statusCode = 404
                    res.setHeader('Content-Type', 'text/html; charset=utf-8')
                    return res.end('<h1>404</h1>')
            }
    }

}

const server = http.createServer(processRequest)

server.listen(1234, () => {
    console.log(`server linstening on port http://localhost:${PORT}`);
})