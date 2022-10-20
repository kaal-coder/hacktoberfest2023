const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var i = 0;
var newItem = [];
var workItem = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', "ejs");

app.get('/', (req, res) => {
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString('en-US', options);

    res.render('list', { listTitle: day, newListItem: newItem, i: i });
});

app.post("/", function (req, res) {

    let Item = req.body.item;
    if (req.body.list === "Work") {
        workItem.push(Item);
        res.redirect('/work');
    } else {

        newItem.push(Item);
        res.redirect("/");
    }
});

app.get('/work', function (req, res) {

    res.render('list', { listTitle: "Work Item", newListItem: workItem });

});



app.listen(3000, () => {
    console.log('Example app listening on port port!');
});

