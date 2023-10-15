import express from "express";
import body_parser from "body-parser";
import qr from "qr-image";
import fs from "fs";

// <-----   qr generator using express,ejs and qr-image   ----->

const app = express();
app.use(body_parser.urlencoded({extended:true}));
app.use( express.static( "qr-images" ) );
app.use(express.static("public"));
app.set('view engine','ejs');

app.listen(3000, (req,res)=>{
  console.log("Server started on port:3000");
});

app.get('/', async (req,res)=>{
  res.render('form',{imageUrl:"/alt.jpg"});
});

app.post('/', (req,res)=>{
  var url= req.body.url;
  var qr_svg = qr.image(url);
  if(url === ""){
    res.render('form',{imageUrl: "/alt.jpg"})
  }
  else{
    qr_svg.pipe(fs.createWriteStream("./qr-images/qr_img.png"));

    fs.writeFile("./urls/URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
    res.render('form',{imageUrl: "/qr_img.png"})
  }
})

