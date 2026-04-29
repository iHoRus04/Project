const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Tạo 150 dữ liệu giả cho bảng users
const users = [];
for (let i = 1; i <= 150; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        email: `user${i}@example.com`,
        phone: `09${Math.floor(Math.random() * 100000000).toString().padStart(8, '0')}`,
        class: `Class ${String.fromCharCode(65 + (i % 5))}` // Lớp A, B, C, D, E
    });
}

// Serve static files (HTML, CSS, JS) từ thư mục public
app.use(express.static(path.join(__dirname, 'public')));

// API Endpoint cho Page 3 (Ajax Server-Side)
app.get('/api/users', (req, res) => {
    // Datatable yêu cầu response format chuẩn: { data: [...] }
    res.json({ data: users });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
