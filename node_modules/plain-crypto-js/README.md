# plain-crypto-js

JavaScript library of crypto standards.

## Discontinued

Active development of CryptoJS has been discontinued. This library is no longer maintained.

Nowadays, NodeJS and modern browsers have a native `Crypto` module. The latest version of CryptoJS already uses the native Crypto module for random number generation, since `Math.random()` is not crypto-safe. Further development of CryptoJS would result in it only being a wrapper of native Crypto. Therefore, development and maintenance has been discontinued, it is time to go for the native `crypto` module.

## Node.js (Install)

Requirements:

- Node.js
- npm (Node.js package manager)

```bash
npm install plain-crypto-js
```

### Usage

ES6 import for typical API call signing use case:

```javascript
import sha256 from 'plain-crypto-js/sha256';
import hmacSHA512 from 'plain-crypto-js/hmac-sha512';
import Base64 from 'plain-crypto-js/enc-base64';

const message, nonce, path, privateKey; // ...
const hashDigest = sha256(nonce + message);
const hmacDigest = Base64.stringify(hmacSHA512(path + hashDigest, privateKey));
```

Modular include:

```javascript
var AES = require("plain-crypto-js/aes");
var SHA256 = require("plain-crypto-js/sha256");
...
console.log(SHA256("Message"));
```

Including all libraries, for access to extra methods:

```javascript
var CryptoJS = require("plain-crypto-js");
console.log(CryptoJS.HmacSHA1("Message", "Key"));
```

## Client (browser)

Requirements:

- Node.js
- Bower (package manager for frontend)

```bash
bower install plain-crypto-js
```

### Usage

Modular include:

```javascript
require.config({
    packages: [
        {
            name: 'plain-crypto-js',
            location: 'path-to/bower_components/plain-crypto-js',
            main: 'index'
        }
    ]
});

require(["plain-crypto-js/aes", "plain-crypto-js/sha256"], function (AES, SHA256) {
    console.log(SHA256("Message"));
});
```

Including all libraries, for access to extra methods:

```javascript
// Above-mentioned will work or use this simple form
require.config({
    paths: {
        'plain-crypto-js': 'path-to/bower_components/plain-crypto-js/plain-crypto-js'
    }
});

require(["plain-crypto-js"], function (CryptoJS) {
    console.log(CryptoJS.HmacSHA1("Message", "Key"));
});
```

### Usage without RequireJS

```html
<script type="text/javascript" src="path-to/bower_components/plain-crypto-js/plain-crypto-js.js"></script>
<script type="text/javascript">
    var encrypted = CryptoJS.AES(...);
    var encrypted = CryptoJS.SHA256(...);
</script>
```

## API

See: https://cryptojs.gitbook.io/docs/

### AES Encryption

#### Plain text encryption

```javascript
var CryptoJS = require("plain-crypto-js");

// Encrypt
var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();

// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
var originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(originalText); // 'my message'
```

#### Object encryption

```javascript
var CryptoJS = require("plain-crypto-js");

var data = [{id: 1}, {id: 2}]

// Encrypt
var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123').toString();

// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

console.log(decryptedData); // [{id: 1}, {id: 2}]
```

### List of modules


- ```plain-crypto-js/core```
- ```plain-crypto-js/x64-core```
- ```plain-crypto-js/lib-typedarrays```

---

- ```plain-crypto-js/md5```
- ```plain-crypto-js/sha1```
- ```plain-crypto-js/sha256```
- ```plain-crypto-js/sha224```
- ```plain-crypto-js/sha512```
- ```plain-crypto-js/sha384```
- ```plain-crypto-js/sha3```
- ```plain-crypto-js/ripemd160```

---

- ```plain-crypto-js/hmac-md5```
- ```plain-crypto-js/hmac-sha1```
- ```plain-crypto-js/hmac-sha256```
- ```plain-crypto-js/hmac-sha224```
- ```plain-crypto-js/hmac-sha512```
- ```plain-crypto-js/hmac-sha384```
- ```plain-crypto-js/hmac-sha3```
- ```plain-crypto-js/hmac-ripemd160```

---

- ```plain-crypto-js/pbkdf2```

---

- ```plain-crypto-js/aes```
- ```plain-crypto-js/tripledes```
- ```plain-crypto-js/rc4```
- ```plain-crypto-js/rabbit```
- ```plain-crypto-js/rabbit-legacy```
- ```plain-crypto-js/evpkdf```

---

- ```plain-crypto-js/format-openssl```
- ```plain-crypto-js/format-hex```

---

- ```plain-crypto-js/enc-latin1```
- ```plain-crypto-js/enc-utf8```
- ```plain-crypto-js/enc-hex```
- ```plain-crypto-js/enc-utf16```
- ```plain-crypto-js/enc-base64```

---

- ```plain-crypto-js/mode-cfb```
- ```plain-crypto-js/mode-ctr```
- ```plain-crypto-js/mode-ctr-gladman```
- ```plain-crypto-js/mode-ofb```
- ```plain-crypto-js/mode-ecb```

---

- ```plain-crypto-js/pad-pkcs7```
- ```plain-crypto-js/pad-ansix923```
- ```plain-crypto-js/pad-iso10126```
- ```plain-crypto-js/pad-iso97971```
- ```plain-crypto-js/pad-zeropadding```
- ```plain-crypto-js/pad-nopadding```


## Release notes

### 4.2.0

Change default hash algorithm and iteration's for PBKDF2 to prevent weak security by using the default configuration.

Custom KDF Hasher

Blowfish support

### 4.1.1

Fix module order in bundled release.

Include the browser field in the released package.json.

### 4.1.0

Added url safe variant of base64 encoding. [357](https://github.com/brix/plain-crypto-js/pull/357)

Avoid webpack to add crypto-browser package. [364](https://github.com/brix/plain-crypto-js/pull/364)

### 4.0.0

This is an update including breaking changes for some environments.

In this version `Math.random()` has been replaced by the random methods of the native crypto module.

For this reason CryptoJS might not run in some JavaScript environments without native crypto module. Such as IE 10 or before or React Native.

### 3.3.0

Rollback, `3.3.0` is the same as `3.1.9-1`.

The move of using native secure crypto module will be shifted to a new `4.x.x` version. As it is a breaking change the impact is too big for a minor release.

### 3.2.1

The usage of the native crypto module has been fixed. The import and access of the native crypto module has been improved.

### 3.2.0

In this version `Math.random()` has been replaced by the random methods of the native crypto module.

For this reason CryptoJS might does not run in some JavaScript environments without native crypto module. Such as IE 10 or before.

If it's absolute required to run CryptoJS in such an environment, stay with `3.1.x` version. Encrypting and decrypting stays compatible. But keep in mind `3.1.x` versions still use `Math.random()` which is cryptographically not secure, as it's not random enough. 

This version came along with `CRITICAL` `BUG`. 

DO NOT USE THIS VERSION! Please, go for a newer version!

### 3.1.x

The `3.1.x` are based on the original CryptoJS, wrapped in CommonJS modules.


