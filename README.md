# Basic Express 101

### Step-step

1. Make new folder.

```sh
mkdir 01-express-101
```

2. Open the folder.

```sh
cd 01-express-101
```

3. Make sure you have `node` and `npm` installed in your computer.

```sh
node -v
npm -v
```

4. Init `npm` for start the project.

```sh
npm init
```

5. For now, just press `enter` if you asked to fill something. If done, file `package.json` will appeared in your directory.

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

6. Install the express

```sh
npm install express
```

7. Create new file `index.js`

```sh
touch index.js
```

8. Copy this script.

```js
const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(3000, () => {
  console.log("Running on localhost:3000");
});
```

9. Try to run the script, and open `localhost:3000`.

```sh
node index.js
```

10. Improve your script!
