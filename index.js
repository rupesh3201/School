import express from 'express';

const app = express();

app.use(express.json());

const Students = [
    { id: 1, name: "Rupesh", city: "Pune" },
    { id: 2, name: "Nilesh", city: "Nanded" },
    { id: 3, name: "Harish", city: "Hingoli" },
    { id: 4, name: "Ganesh", city: "Sangola" }
];

// GET all students
app.get("/students", (req, res) => {
    res.json({
        success: true,
        data: Students,
        msg: "Students fetched successfully"
    });
});

// POST: Add a new student
app.post("/students", (req, res) => {
    const { id, name, city } = req.body;

    // Validation checks
    if (!id) {
        return res.status(400).json({ success: false, msg: "ID is required" });
    }
    if (!name) {
        return res.status(400).json({ success: false, msg: "Name is required" });
    }
    if (!city) {
        return res.status(400).json({ success: false, msg: "City is required" });
    }

    // Check if student with the given ID already exists yes 
    const existingStudent = Students.find(stu => stu.id === id);
    if (existingStudent) {
        return res.status(400).json({ success: false, msg: "Student with this ID already exists" });
    }

    // delete student  api
    app.delete("/students/:id",(req,res)=>{
        const {id} = req.params;
        let studentindex = -1 ;
        Students.map((Students,id)=>
        {
            if(Students.id == id)
            {
                studentindex = id ;
            }

        })
        if(studentindex == -1)
        {
        return res.json({
            success :false ,
            msg : "student not found",
        });
    }
    Students.splice(studentindex , 1);
    res.json ({ 
        success : true ,
        msg : "student deleted sucessful",
    })
    })

    const newStudent = { id, name, city };
    Students.push(newStudent);

    res.status(201).json({
        success: true,
        data: newStudent,
        msg: "Student added successfully"
    });
});

// GET: Server health check
app.get("/health", (req, res) => {
    res.json({ success: true, msg: "Server is running" });
});

// Handle undefined routes
app.all("*", (req, res) => {
    res.status(404).json({ success: false, msg: "Path not found" });
});

// Start server
const PORT = 5003;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
