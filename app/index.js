const app = require("express")();

app.get("/", (req, res) => 
res.send("using port 2222 :)"));

app.listen(2222, () => console.log('listening on 2222'))