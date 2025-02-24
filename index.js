import express from 'express';

const app = express();

app.use(express.json());

const Students = [
    { id: 1, name: "Rupesh", city: "Pune" },
    { id: 2, name: "Nilesh", city: "Nanded" },
    { id: 3, name: "Harish", city: "Hingoli" },
    { id: 4, name: "Ganesh", city: "Sangola" }
];

// status codes 
// 200 ok
// 201 created resuoce
// 400 bad request
// 401 unauthrozied
// 402 forbidden 
// 404 not found
// 500 internal server error
// 502 bad gateway
// 504

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

    if (!id || !name || !city) {
        return res.status(400).json({ success: false, msg: "ID, Name, and City are required" });
    }

    const existingStudent = Students.find(stu => stu.id === id);
    if (existingStudent) {
        
        return res.status(400).json({ success: false, msg: "Student with this ID already exists" });
    }

    const newStudent = { id, name, city };
    Students.push(newStudent);

    res.status(201).json({
        success: true,
        data: newStudent,
        msg: "Student added successfully"
    });
});

// DELETE: Remove a student
app.delete("/students/:id", (req, res) => {
    const studentId = parseInt(req.params.id);

    const studentIndex = Students.findIndex(student => student.id === studentId);
    if (studentIndex === -1) {
        return res.status(404).json({ success: false, msg: "Student not found" });
    }

    Students.splice(studentIndex, 1);
    res.json({
        success: true,
        msg: "Student deleted successfully"
    });
});

// UPDATE: Modify student data (PUT)
app.put("/students/:id", (req, res) => {
    const studentId = parseInt(req.params.id);
    const { name, city } = req.body;

    const studentIndex = Students.findIndex(student => student.id === studentId);
    if (studentIndex === -1) {
        return res.status(404).json({ success: false, msg: "Student not found" });
    }

    Students[studentIndex] = {
        id: studentId,
        name: name || Students[studentIndex].name,
        city: city || Students[studentIndex].city
    };

    res.status(200).json({
        success: true,
        data: Students[studentIndex],
        msg: "Student updated successfully"
    });
});

// UPDATE: Modify student city only (PATCH)
app.patch("/students/city/:id", (req, res) => {
    const studentId = parseInt(req.params.id);
    const { city } = req.body;

    const studentIndex = Students.findIndex(student => student.id === studentId);
    if (studentIndex === -1) {
        return res.status(404).json({ success: false, msg: "Student not found" });
    }

    if (!city) {
        return res.status(400).json({ success: false, msg: "City is required" });
    }

    // Update only the city field
    Students[studentIndex].city = city;

    res.status(200).json({
        success: true,
        data: Students[studentIndex],
        msg: "Student city updated successfully"
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
