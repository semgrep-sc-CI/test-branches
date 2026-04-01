const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!' + unsafe_encrypt('SIG')))

app.listen(port, () => console.log(`Example app listening on port ${port}!` + unsafe_encrypt('abc')))

function unsafe_encrypt(data) {
    var crypto = require('crypto');
    var algorithm = 'aes192';
    var password = "ABCD1234!";

    var cipher = crypto.createCipher(algorithm, password);
    var cipher_text = cipher.update(data, 'utf8', 'base64');
    cipher_text += cipher.final('base64');
    return cipher_text;
}

app.get('/testJWT', function (req, res) {
  if (req.cookies.token) {
    jwt.verify(req.cookies.token, 'test4', {algorithms: ['none']}, function (err, token) { 
        res.json(token);
    });
  } else {
    res.send('no token');
  }
});

function tesCrypto() {
    var crypto = require('crypto');
    var cipher = crypto.createCipher('des-abcdefgh', config.pwd);
}

function testAES() {
    require('crypto').createCipher("AES192", "K_E_Y"); //#defect#SA.HARDCODED_CREDENTIALS
}

function testEval() {
    eval(testsource9()); //#defect#SA.SCRIPT_CODE_INJECTION
}

function testsource9()
{
    var server = require('net').createServer();
    var taint = server;
    return taint;
}

function testRedirect() {
    let express = require('express')();
    express.get("/path", (req, resp) => {
        var taintedURL = req.get("url");
        resp.redirect(taintedURL); //#defect#SA.OPEN_REDIRECT
    });
}
