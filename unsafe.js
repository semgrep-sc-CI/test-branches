function unsafe_encrypt(data) {
    var crypto = require('crypto');
    var algorithm = 'aes192';
    var password = "ABCD1234!";

    var cipher = crypto.createCipher(algorithm, password);
    var cipher_text = cipher.update(data, 'utf8', 'base64');
    cipher_text += cipher.final('base64');
    return cipher_text;
}
