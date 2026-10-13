const express = require('express')  
const app = express();



let users = [
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
    },
    {
      id: "3",
      name: "Sam Johnson",
      email: "sam.johnson@example.com",
    },
];
app.use(express.json());

app.get("/api/users", (reg,res) =>{
    res.json(users);
});

app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000/");
  });