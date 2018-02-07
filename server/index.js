const express = require("express");
require('./services/passport');


const app = express();
require('./routes/authRoutes')(app);




// client-id 929951212884-s07g24p8urh1fc5gpmin7mk58jphdkqb.apps.googleusercontent.com  public token
// client-secret a3X0WSYEdkVs9oSKXegN84fo private token


// app.get("/", (req, res) => {
//   res.send({ hello: "world" });
// });




const PORT = process.env.PORT ||  5000;

app.listen(PORT);
