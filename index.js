const server = require("./server");

const port = 4000;

server.listen(4000, () => {
    console.log(`\n***Server Listening on ${port}! `)
})