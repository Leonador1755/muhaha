// 1. Firebase Config ของคุณ (ต้องเป็นตัวเดียวกับในไฟล์ app.js)
const firebaseConfig = {
    apiKey: "AIzaSyDDssU8BA84nfhb6lnzGcWUXbKaw31Ql7U",
    authDomain: "student-b6b02.firebaseapp.com",
    databaseURL: "https://student-b6b02-default-rtdb.firebaseio.com",
    projectId: "student-b6b02",
    storageBucket: "student-b6b02.appspot.com",
    messagingSenderId: "481498014435",
    appId: "1:481498014435:web:eda763dea39a0524f69bd6",
    measurementId: "G-QRNRD9BSEK"
};

// 2. Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();


// 3. อ้างอิงถึง Element ใน report.html
const reportDatePicker = document.getElementById('reportDatePicker');
const viewReportBtn = document.getElementById('viewReportBtn');
const reportContainer = document.getElementById('reportContainer');

// กำหนดวันที่เริ่มต้นเป็นวันปัจจุบัน
reportDatePicker.valueAsDate = new Date();


// 4. Function หลักในการสร้างรายงาน
function generateReport() {
    const date = reportDatePicker.value;
    if (!date) {
        reportContainer.innerHTML = '<p style="color: red;">กรุณาเลือกวันที่ก่อนครับ</p>';
        return;
    }

    reportContainer.innerHTML = '<p>กำลังดึงข้อมูล...</p>';

    // สร้าง Path ไปยังข้อมูลของวันที่เลือก
    const dbPath = `attendance/${date}`;

    // ดึงข้อมูลจาก Firebase แค่ครั้งเดียว
    database.ref(dbPath).once('value')
        .then((snapshot) => {
            const dailyData = snapshot.val();

            // ตรวจสอบว่ามีข้อมูลสำหรับวันที่เลือกหรือไม่
            if (!dailyData) {
                reportContainer.innerHTML = `<p>ไม่พบข้อมูลการเช็คชื่อสำหรับวันที่ ${date}</p>`;
                return;
            }

            let reportHtml = ''; // เตรียมตัวแปรสำหรับเก็บ HTML ที่จะสร้าง

            // วนลูปตามชั้นเรียน (m1, m2, ...)
            for (const gradeKey in dailyData) {
                const gradeData = dailyData[gradeKey];
                
                // วนลูปตามห้องเรียน (room1, room2, ...)
                for (const roomKey in gradeData) {
                    const roomData = gradeData[roomKey];
                    const gradeText = `ม.${gradeKey.substring(1)}`;
                    const roomText = `ห้อง ${roomKey.substring(4)}`;
                    
                    reportHtml += `<h3>${gradeText} / ${roomText}</h3>`;
                    reportHtml += `
                        <table border="1" cellpadding="5" cellspacing="0" style="width:100%; margin-bottom: 20px;">
                            <thead>
                                <tr style="background-color: #f2f2f2;">
                                    <th style="width: 5%;">ลำดับ</th>
                                    <th style="width: 25%;">เลขประจำตัว</th>
                                    <th>ชื่อ - นามสกุล</th>
                                    <th style="width: 15%;">สถานะ</th>
                                </tr>
                            </thead>
                            <tbody>
                    `;

                    let studentIndex = 1;
                    // วนลูปตามรายชื่อนักเรียน (ตามเลขประจำตัว)
                    for (const studentId in roomData) {
                        const studentInfo = roomData[studentId];
                        reportHtml += `
                            <tr>
                                <td style="text-align: center;">${studentIndex}</td>
                                <td style="text-align: center;">${studentId}</td>
                                <td>${studentInfo.name}</td>
                                <td style="text-align: center;">${studentInfo.status}</td>
                            </tr>
                        `;
                        studentIndex++;
                    }

                    reportHtml += `</tbody></table>`;
                }
            }
            
            // นำ HTML ที่สร้างเสร็จแล้วไปแสดงใน reportContainer
            reportContainer.innerHTML = reportHtml;

        })
        .catch((error) => {
            console.error("เกิดข้อผิดพลาดในการดึงข้อมูล: ", error);
            reportContainer.innerHTML = `<p style="color: red;">เกิดข้อผิดพลาด: ${error.message}</p>`;
        });
}


// 5. กำหนด Event Listener ให้กับปุ่ม
viewReportBtn.addEventListener('click', generateReport);