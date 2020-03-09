const app = require("express")();

app.get("/about", (req,res)=>{
    const name = {
        name: "Lucy",
        age: 34,
        city: "Copenhagen"
    };
    res.send(name);
})

app.listen(3000, error => {
    if(error) {
        console.log(error);
    }
    console.log("Server is running on port ", 3000);
});