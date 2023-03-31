# Basic Express 101

### Step-step

1. Make sure you have `node` and `npm` installed in your computer.

```sh
node -v
npm -v
```

2. Init `npm` for start the project.

```sh
npm init
```

3. For now, just press `enter` if you asked to fill something. If done, file `package.json` will appeared in your directory.

```json
{
  "name": "01-express-101",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

4. Install the express

```sh
npm install express
```

5. Create new file `index.js` and copy this script.

```js
const express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(3000, () => {
  console.log("Running on localhost:3000");
});
```

6. Try to run the script, and open `localhost:3000`.

```sh
node index.js
```

7. Improve your script!
