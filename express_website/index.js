const  express = require('express');
const app = express();
//app contains all the http methods like get ,post,put,delete

app.get('/', (req, resp) => {
    resp.send('welcome to express');
});


//it takes 2 arguments(first is url)
// and second is call back function which will be called when we have an HTTP GET REQUEST
//CALL BACK FUNCTION HAS 2 ARGUMENTS REQUEST AND RESPONSE
app.get('/api/myProfile', (req,res) => {
    res.send('welcome to my profile');
})

app.get('/api/myCourses', (req,res) => {
    res.send([1,2,3]);
})
app.get('/api/myCourses/:id',(req,res) => {
    res.send(req.params.id);
})
//using environment varibale"PORT"
const port = process.env.PORT || 8082; 
app.listen(port, () => console.log(`listening to ${port}...`));