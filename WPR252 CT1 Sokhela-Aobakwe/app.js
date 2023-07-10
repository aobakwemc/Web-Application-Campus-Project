//const appServer = require('express') //incorrect
let express = require('express') //added after test 
let appServer=express();

appServer.set('view engine','ejs') //added after test - very much needed for app to work

//Middleware
//appServer.urlencoded //incorrect
appServer.use(express.urlencoded) //added after test - allows to grab req.body values
appServer.use(express.static('public')) //allows app to access/make use of public folder assets

//Array Data
const myArray = ['foo', 'bar', 'baz', 'foobar'];

//Port and Host
let host = 'localhost'
let port = 8004

//Routes
appServer.get('/', function(req,res) //displays the form
{
    res.render('form.ejs')
    //changed method from post() to get() after test
})

appServer.post('/process-data', function(req,res) //process form data
{
    let textSearch = req.body.txtSearch;

    myArray.forEach(element => 
    {
        if (textSearch===element) 
        {
            console.log('Word found');
        }
        if (textSearch!==element) 
        {
            console.log('Word not found');
        }
    });
    
    res.send('Done') //added after test for page to stop infintely loading
})
appServer.get('/array-data', function(req,res) //load the array information page
{
    res.render('array-data.ejs')
})

appServer.listen(port,host, function(req,res) //alert for server location and port
{
    //port and host arguments added after test, also changed method to listen() instead of get()
    console.log(`Server running on port ${port} on ${host}`);
})

