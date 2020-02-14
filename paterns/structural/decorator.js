class Server {
  constructor(ip, port) {
    this.ip = ip
    this.port = port
  }

  get url() {
    return `https://${this.ip}:${this.port}`
  }
}

function aws(server) {
  server.isAWS = true
  server.awsInfo = function() {
    return server.url
  }

  return server
}

function oracle(server) {
  server.oracle = true
  server.oracleInfo = function() {
    return server.url
  }
  server.port += 500
  return server
}

const awsServer = aws(new Server('192.125.13.15', '80'))
console.log(awsServer.awsInfo())

const oracleServer = oracle(new Server('192.168.243.50',1000))
console.log(oracleServer.oracleInfo())


