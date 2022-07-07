const http = require("http");
const precocima = require("./precocima.json")
const precoabaixo = require("./precoabaixo.json");

http.createServer((req, res) => {
    
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*'
      })
    
    if(req.url === "/baixo"){
        return res.end(JSON.stringify(precoabaixo))
    }else if(req.url === "/cima"){
        return res.end(JSON.stringify(precocima))
    }else{
        return res.end(JSON.stringify({message: "ok"}))
    }
}).listen(3300, () => {console.log("servidor em funcionamento")})