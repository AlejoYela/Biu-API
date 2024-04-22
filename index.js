const http = require('node:http')

const PORT = process.env.PORT ?? 4321

const server = http.createServer((req, res) => {

    console.log(`request received: ${req.url}`);
    res.end('Hola mundo')
})

server.listen(PORT, ()=>{
    console.log(`Server listening at port http://localhost:${PORT}`);
})