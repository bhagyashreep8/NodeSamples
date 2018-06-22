const  express = require('express');
const app = express();

app.use(express.json);
//app contains all the http methods like get ,post,put,delete

app.get('/', (req, resp) => {
    resp.send('welcome to express');
});

const courses = [{
    id : 1,
    name :'course1'
},
{
    id : 2,
    name :'course2'
},
{
    id : 3,
    name :'course3'
}];
//it takes 2 arguments(first is url)
// and second is call back function which will be called when we have an HTTP GET REQUEST
//CALL BACK FUNCTION HAS 2 ARGUMENTS REQUEST AND RESPONSE
app.get('/api/myProfile', (req,res) => {
    res.send('welcome to my profile');
})

app.get('/api/courses', (req,res) => {
    res.send(courses);
})

app.get('/api/courses/:id',(req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
if(!course){
    res.status(404).send('the course with given id was not found');
    res.send(course);
}
})

app.post('/api/courses',(req,res)=>{
    
    if(!req.body.name|| req.body.name.length<3)
    //bad request
    res.status(400).send('length of name should not be less than 3 characters');
    return;
    const course = {
        id: courses.length+1,
        name:req.body.name
    }
    courses.push(course);
    res.send(course);
})
//using environment varibale"PORT"
const port = process.env.PORT || 8082; 
app.listen(port, () => console.log(`listening to ${port}...`));