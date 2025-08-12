// 1. Firebase Config ของคุณ
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

// 3. ข้อมูลนักเรียน (อัปเดตโครงสร้างให้มี id และ name)
const dummyStudents = {
    m1: {
        room1: [
            { id: "10190", name: "เด็กชายทัตตกร วชิพันธ์วิชาญ" },
            { id: "10196", name: "เด็กชายนภดล สืบกลัด" },
            { id: "10201", name: "เด็กชายอนิรุต ปานเกตุ" },
            { id: "10203", name: "เด็กชายอรรถกวี ชาวนาเมือง" },
            { id: "10287", name: "เด็กหญิงฐิติรัตน์ มีสุข" },
            { id: "10290", name: "เด็กหญิงตวิษา -" },
            { id: "10295", name: "เด็กหญิงเบญจวรรณ ชาวนา" },
            { id: "10298", name: "เด็กหญิงปัณณพร จิตต์นิยม" },
            { id: "10302", name: "เด็กหญิงพัฒธระวี ศรีราจันทร์" }
        ],
        room2: [
            { id: "10206", name: "เด็กชายสยามรัตน์ ยุงรัมย์" },
            { id: "10331", name: "เด็กหญิงนัชชา บุญมี" },
            { id: "10315", name: "เด็กหญิงศุภิสรา ศรีราจันทร์" },
            { id: "10207", name: "เด็กชายไกรวิชญ์ นาพะยัพ" },
            { id: "10213", name: "เด็กชายสุรพัศ สถิตพงศ์พิพัฒน์" },
            { id: "10319", name: "เด็กหญิงโชติกา ศรีเนตร" },
            { id: "10322", name: "เด็กหญิงณัฐนิชา ศิลางาม" },
            { id: "10329", name: "เด็กหญิงลัดดาวรรณ วิทิตวัชรา" },
            { id: "10330", name: "เด็กหญิงวันวิสา -" },
            { id: "10334", name: "เด็กหญิงแสงทอง -" }
        ],
        room3: [
            { id: "10214", name: "เด็กชายกรฤต สุพลัง" },
            { id: "10220", name: "เด็กชายโชคดี ม่วงรุ่ง" },
            { id: "10223", name: "เด็กชายทรงทรัพย์ ทรัพย์ทำเงิน" },
            { id: "10227", name: "เด็กชายธีรเดช โสภา" },
            { id: "10232", name: "เด็กชายวีรวัฒน์ สุดทะใจ" },
            { id: "10237", name: "เด็กชายอมรกานต์ เกิดโภคา" },
            { id: "10240", name: "เด็กชายอิทธิพล กลิ่นขจร" },
            { id: "10339", name: "เด็กหญิงเนตรชนก ไทยอุบล" },
            { id: "10341", name: "เด็กหญิงวราภรณ์ -" },
            { id: "10458", name: "เด็กหญิงอนันต์ญา -" }
        ],
        room4: [
            { id: "10243", name: "เด็กชายชาลิตร คำจันทร์" },
            { id: "10246", name: "เด็กชายณัชณนนท์ รุ่งแจ้ง" },
            { id: "10250", name: "เด็กชายธีรวัฒน์ บุญจีน" },
            { id: "10254", name: "เด็กชายพิศุทธิ์ เนียมหอม" },
            { id: "10345", name: "เด็กหญิงกรรณิการ์ สารชาติ" },
            { id: "10346", name: "เด็กหญิงกาญจนา ทองชม" },
            { id: "10350", name: "เด็กหญิงณัฐนันท์ สมน้อย" },
            { id: "10356", name: "เด็กหญิงฟ้าใส -" },
            { id: "10358", name: "เด็กหญิงวรัชยา ทับเมือง" },
            { id: "ไม่ทราบ", name: "เด็กหญิงเกตุแก้ว พวงรวด" }
        ],
        room5: [
            { id: "10263", name: "เด็กชายไชยภพ จิตนิยม" },
            { id: "10269", name: "เด็กชายรัชรพงษ์ อุปจักร์" },
            { id: "10273", name: "เด็กชายสุธีกานต์ กาญจนเพ็ชร" },
            { id: "10274", name: "เด็กชายอภิเดช ผิวเอี่ยม" },
            { id: "10369", name: "เด็กหญิงนภาเพชร อินทรสกุล" },
            { id: "10373", name: "เด็กหญิงปุณยาพร กาญจนเพชร" },
            { id: "10377", name: "เด็กหญิงวนิดา ปิ่นบัวทอง" },
            { id: "10379", name: "เด็กหญิงศรี -" },
            { id: "10385", name: "เด็กหญิงอารียา ไกรดลธรรม" }
        ],
        room6: [
            { id: "10277", name: "เด็กชายพัชรพล ตันกิตติมงคล" },
            { id: "10281", name: "นายแอโด้ทู -" },
            { id: "10390", name: "เด็กหญิงณิชา -" },
            { id: "10466", name: "เด็กหญิงเจนจิรา แก้วฉลวย" }
        ]
    },
    m2: {
        room1: [
            { id: "09879", name: "เด็กชายขจรเกียรติ ผลงาม" },
            { id: "09884", name: "เด็กชายเด่นภูมิ งามโขนง" },
            { id: "09890", name: "เด็กชายศิรชัช โภชนพันธ์" },
            { id: "09891", name: "เด็กชายศุภกิตติ์ ใจงาม" },
            { id: "09975", name: "เด็กหญิงชนิดา ผ่องงามวงศ์" },
            { id: "09979", name: "เด็กหญิงณัฐธิชา โตหลิ่ม" },
            { id: "09981", name: "เด็กหญิงนวนิษฐ์ เงินบาท" },
            { id: "09986", name: "เด็กหญิงพิมพ์ลดา ตุ๊ไทร" },
            { id: "09992", name: "เด็กหญิงวารี แสงรัศมี" },
            { id: "09995", name: "เด็กหญิงโสรยา ทิตติวณิชย์" }
        ],
        room2: [
            { id: "09896", name: "เด็กชายพงศ -" },
            { id: "09900", name: "เด็กชายสันติ ทิพวัน" },
            { id: "09998", name: "เด็กหญิงกันยา อุ้ยฟัก" },
            { id: "10008", name: "เด็กหญิงภูรดา วิเศษสิงห์" },
            { id: "10010", name: "เด็กหญิงวาสินี พรหมจารีย์" },
            { id: "10001", name: "เด็กหญิงชุติมา วงษ์สา" },
            { id: "10013", name: "เด็กหญิงธัญชนก ทองเปราะ" },
            { id: "10018", name: "เด็กหญิงอารีญา พิชาวีร์" },
            { id: "ไม่ทราบ", name: "เด็กหญิงพัณธพร วจนะธนากุล" }
        ],
        room3: [
            { id: "09907", name: "เด็กชายจีรภัทร กระต่ายเทศ" },
            { id: "09910", name: "เด็กชายธนธัทร อุดม" },
            { id: "09916", name: "เด็กชายอดิเทพ อินทเกตุ" },
            { id: "09918", name: "เด็กชายอัศม์เดช เชื้อไพบูลย์" },
            { id: "10022", name: "เด็กธนัสชา สุภาพ" },
            { id: "10025", name: "เด็กหญิงศศิวิมล อยู่เกิด" },
            { id: "10029", name: "เด็กหญิงบูบู -" },
            { id: "10031", name: "เด็กหญิงพิมพิสา เสียงล้ำ" },
            { id: "10038", name: "เด็กหญิงศุภิสรา ดาเปรม" }
        ],
        room4: [
            { id: "09927", name: "เด็กชายชวกร แผ้วงาน" },
            { id: "09931", name: "เด็กชายธนาดุล สมบุญ" },
            { id: "09932", name: "เด็กชายธรณ์ธันย์ ศรีทองผาภูมิ" },
            { id: "09941", name: "เด็กชายสุเทพ เสียงใส" },
            { id: "10045", name: "เด็กหญิงชนม์มิภา ลิมปานนท์" },
            { id: "10047", name: "เด็กหญิงธีรดา ทวีสุข" },
            { id: "10055", name: "เด็กหญิงศวิตา กมลกาญจนกูล" },
            { id: "10056", name: "เด็กหญิงศศิวิภา ปันนา" },
            { id: "ไม่ทราบ", name: "เด็กชายพิทักษ์ โนใหม่" }
        ],
        room5: [
            { id: "09946", name: "เด็กชายขวัญชัย พุ่มนาค" },
            { id: "09952", name: "เด็กชายธนาธร หยวกบุญมา" },
            { id: "09955", name: "เด็กชายปฏิภาณ กำประโคน" },
            { id: "09960", name: "เด็กชายวรรณธนะ กามขุนทด" },
            { id: "09964", name: "เด็กชายอรรถวุฒิ กลิ่นเกริญ" },
            { id: "10060", name: "เด็กหญิงกันยรัตน์ โฉมศรี" },
            { id: "10066", name: "เด็กหญิงปลายฟ้า พัชรธาดากานต์" },
            { id: "10070", name: "เด็กหญิงรุ่งวดี น้าสุวรรณ" },
            { id: "10074", name: "เด็กหญิงศิริบุญ ลำใย" },
            { id: "09743", name: "เด็กหญิงญาณัชศา ฉิมเนย" }
        ],
        room6: [
            { id: "09966", name: "เด็กชายกันตพงศ์ พรมวัน" },
            { id: "10080", name: "เด็กหญิงฉันทิศา ทองเปราะ" },
            { id: "10085", name: "เด็กหญิงอรปรียา ทวีศรี" }
        ]
    },
    m3: {
        room1: [
            { id: "09555", name: "เด็กชายจิณณะ อาบวารี" },
            { id: "09559", name: "เด็กชายเด่นชัย -" },
            { id: "09566", name: "เด็กชายพุฒิพงษ์ กาญจนบุตร" },
            { id: "09571", name: "เด็กชายสิทธิโชค ธนาสุทธิกมล" },
            { id: "09572", name: "เด็กชายอดิสรณ์ แย้มอาษา" },
            { id: "09661", name: "เด็กหญิงญาณิศา ออสถิตย์" },
            { id: "09664", name: "เด็กหญิงดาวิกา อุทัยรังษี" },
            { id: "09671", name: "เด็กหญิงพิมรดา ใจเอื้อย" },
            { id: "09675", name: "เด็กหญิงอธิชา แก้วอร่าม" },
            { id: "09660", name: "เด็กหญิงญาณิศา หอยสังข์" }
        ],
        room2: [
            { id: "09576", name: "เด็กชายชนกนันท์ จันทร์ชาวนา" },
            { id: "09584", name: "เด็กชายปุญญภัฒน์ สินสอน" },
            { id: "09587", name: "เด็กชายอักษรศาสตร์ สร้อยทอง" },
            { id: "09685", name: "เด็กหญิงบัณฑิตา มาศรี" },
            { id: "09690", name: "เด็กหญิงเปรมกมล มะนาวหวาน" },
            { id: "09691", name: "เด็กหญิงพิริญา สัมพันธ์" },
            { id: "09696", name: "เด็กหญิงศุทธวีร์ ฝักบัว" },
            { id: "10152", name: "เด็กหญิงรพีพรรณ กมลศิวพร" }
        ],
        room3: [
            { id: "09590", name: "เด็กชายคงเดช เกษร" },
            { id: "09595", name: "เด็กชายธนภัทร แอบเสมา" },
            { id: "09597", name: "เด็กชายธีรกร พ่วงแสง" },
            { id: "09702", name: "เด็กหญิงนงนุช สุทโธ" },
            { id: "09703", name: "เด็กหญิงนันธิชา กันยามา" },
            { id: "09609", name: "เด็กชายภาคภูมิ สำนักพงษ์" },
            { id: "09611", name: "เด็กชายสิปปกร -" },
            { id: "09711", name: "เด็กหญิงธนัญญา บุญวัน" }
        ],
        room4: [
            { id: "09612", name: "เด็กชายจิรกิตติ์ -" },
            { id: "09617", name: "เด็็กชายปวร แย้มจับ" },
            { id: "09621", name: "เด็กชายศุภกร ฝูงประเสริฐ" },
            { id: "09866", name: "เด็กชายชยพล พันแสง" },
            { id: "09718", name: "เด็กชายชิดชนก แซ่เฮ้ง" },
            { id: "09720", name: "เด็กหญิงฑิพวริน เถียรสุข" },
            { id: "09725", name: "เด็กหญิงปณิดา ตุมรสุนทร" },
            { id: "09730", name: "เด็กหญิงวันทนา โพธิ์เงิน" },
            { id: "09731", name: "เด็กหญิงศิริกานดา อิ่มพลับ" },
            { id: "09738", name: "เด็กหญิงอรุณลักษณ์ แผ่นงา" },
            { id: "09739", name: "เด็กหญิงอันชฎา เขม้นกิจ" }
        ],
        room5: [
            { id: "09627", name: "เด็กชายโกศัลย์ เหลืองอรุณทรัพย์" },
            { id: "09635", name: "เด็็กชายธนวัฒน์ สอนพันธ์" },
            { id: "09640", name: "เด็กชายพิชญะ เพ็ชรลำ" },
            { id: "09646", name: "เด็กชายสภาพร เสนาะดี" },
            { id: "09860", name: "เด็กชายภูวนาท งอนสันเทียะ" },
            { id: "10164", name: "เด็กชายปริญญา ทับทิมสี" },
            { id: "09744", name: "เด็กหญิงฐิดาพร เอียมสุขา" },
            { id: "09751", name: "เด็กหญิงอรพรรณ กองยิง" }
        ],
        room6: [
            { id: "09653", name: "เด็กชายธีรยุทธ ศรีภูมิ" },
            { id: "09657", name: "เด็กชายสิทธิศักดิ์ พวงทอง" },
            { id: "09758", name: "เด้กหญิงอ้อย -" },
            { id: "ไม่ทราบ", name: "เด็กหญิงปิยะธิดา รัศมีพรหม" }
        ]
    },
    m4: {
        room1: [
            { id: "09282", name: "นายธนพล จันมาต" },
            { id: "09286", name: "นายพงศพัศ ธนาสุทธิกมล" },
            { id: "09365", name: "นางสาววรรณสิริ เหลืองสะอาด" },
            { id: "09403", name: "นางสาวพรทิวา ไพฑูรย์" },
            { id: "09437", name: "นางสาวลาล่า -" },
            { id: "10431", name: "นางสาวนฤพร -" },
            { id: "10447", name: "นางสาววราภร ทัศกลาง" }
        ],
        room2: [
            { id: "09276", name: "นายอารักษ์ บัวเบา" },
            { id: "10404", name: "นายธีระธัช -" },
            { id: "09386", name: "นางสาวกมลวรรณ รังดี" },
            { id: "10421", name: "นางสาวกชกร อักษรทรางกูล" },
            { id: "10429", name: "นางสาวนภัทรสร จันทร์ตาแก้ว" },
            { id: "10449", name: "นางสาวสุพิชชา จำปาคำ" },
            { id: "10471", name: "นางสาวสเพียงชนก สิทธิพรกุล" }
        ],
        room3: [
            { id: "09361", name: "นางสาวนิพาดา พรพงษ์กิตติ" },
            { id: "09372", name: "นางสาวจันทกานต์ สิริอุดมกุล" },
            { id: "09378", name: "นางสาวสายน้ำผึ้ง เชียงกา" },
            { id: "09832", name: "นางสาวกัญญารัตน์ นาคประดิษฐิ์" },
            { id: "10426", name: "นางสาวชลิตา ลูโย๊ะ" },
            { id: "10448", name: "นางสาวสุกานดา รัตตริยวงค์" },
            { id: "10455", name: "นางสาวแอขื่อเชอ -" },
            { id: "09290", name: "นายมรุเดช -" }
        ],
        room4: [
            { id: "09268", name: "นายพงศกร วิชิต" },
            { id: "09292", name: "นายเมืองออง -" },
            { id: "09323", name: "นายสืบสกุล คล้ายเนียม" },
            { id: "09340", name: "นายวัทธิกร หงษ์รัตวงค์" },
            { id: "09836", name: "นายวายุ ส่องสว่าง" },
            { id: "09380", name: "นางสาวหนึ่งฤทัย ธรรมกาญจน์" },
            { id: "09387", name: "นางสาวกานต์ธิดา ศรอารา" },
            { id: "09553", name: "นางสาวนภัทร บุญมี" },
            { id: "10423", name: "นางสาวกนกอร พันธ์ภักดี" }
        ],
        room5: [
            { id: "09305", name: "นายพงพิพัฒ ศรีราจันทร์" },
            { id: "09874", name: "นายยุทธนา มาตะ" },
            { id: "10414", name: "นายวิษนุ -" },
            { id: "09394", name: "นางสาววิรากานต์ หงษ์ษา" },
            { id: "09409", name: "นางสาวสุประวีณ์ พุกรอด" },
            { id: "09427", name: "นางสาวอรอุมา พรเทวี" },
            { id: "ไม่ทราบเลข", name: "นายศราวุธ -" }
        ],
        room6: [
            { id: "09261", name: "นสยกิติพันธ์ พรเทวี" },
            { id: "09335", name: "นายพชระ ทองแดง" },
            { id: "10397", name: "นายกิตติพล -" },
            { id: "10402", name: "นายธันวา -" },
            { id: "10413", name: "นายวิโรจน์ แดงสุวรรณ์" }
        ]
    },
    m5: {
        room1: [
            { id: "08950", name: "นายเล็ก -" },
            { id: "08966", name: "นายภาณุวัฒน์ ไพรวัน" },
            { id: "10096", name: "นายธนายุต สังขไพรจิตร" },
            { id: "09065", name: "นางสาวพิชญ์สินี ตันประเสริฐ" },
            { id: "09102", name: "นางสาวจันทกานต์ กานต์เจริญ" },
            { id: "09106", name: "นางสาววิรดา โพธิ์เงิน" },
            { id: "10113", name: "นางสาวช่อลดา วจนะธนากุล" },
            { id: "10132", name: "นางสาวปาลิตา ทนทาน" }
        ],
        room2: [
            { id: "08977", name: "นายจักรพงศ์ เพชรแท้" },
            { id: "09052", name: "นางสาวขนิษฐา ชะตาดี" },
            { id: "09068", name: "นางสาวสุชานันท์ กำประโคน" },
            { id: "09125", name: "นางสาวสาวินี ชูดำ" },
            { id: "10133", name: "นางสาวเปรมวิกา ขาวเจริญ" },
            { id: "10134", name: "นางสาวพรชนก โม่เอน" },
            { id: "10182", name: "นางสาววรรณวิภา -" }
        ],
        room3: [
            { id: "08971", name: "นายคฑาวุธ แก้วอยู่ดี" },
            { id: "09057", name: "นางสาวโชติกา สุขพันธ์" },
            { id: "09081", name: "นางสาวสุภาวดี เจริญรัตน์กาญจนา" },
            { id: "09147", name: "นางสาวนนแตอู -" },
            { id: "09150", name: "นางสาวฉัตร ยืนนาน" },
            { id: "10121", name: "นางสาวนฤมล รัตนา" },
            { id: "10125", name: "นางสาวเนื้อทอง ฝอยทอง" },
            { id: "10144", name: "นางสาววรรณี มิลินวรากุล" },
            { id: "09087", name: "นางสาวชุติกาญจน์ ชุ่มชื้น" },
            { id: "09092", name: "นางสาวพรทิพย์ แสงอุทัย" }
        ],
        room4: [
            { id: "08954", name: "นายอภิสิทธ์ รื่นเริงใจ" },
            { id: "09023", name: "นายกิตติภูมิ กรกฎทอง" },
            { id: "09035", name: "นายวิชัย สิริพงษ์พิมุกข์" },
            { id: "10102", name: "นายวรพล ตาละคำ" },
            { id: "10105", name: "นายศุภกร ภัทร์ศิริชัย" },
            { id: "09120", name: "นางสาวยุพาพร ศิริสวัสดิ์" },
            { id: "09548", name: "นางสาวสุนันทา ลิสอน" }
        ],
        room5: [
            { id: "08969", name: "นายศุภกร ธนารัตนกุลพร" },
            { id: "09049", name: "นายภาคภูมิ เขียวมีมูล" },
            { id: "09032", name: "นายภูมิพิทักษ์ ศรีสว่างทิพย์" },
            { id: "09077", name: "นางสาวนัฐชานันท์ พิกุลทิพย์" },
            { id: "09146", name: "นางสาวจุฑามาศ ศรีใส" },
            { id: "10136", name: "นางสาวพัชราภรณ์ มะลิพงค์" },
            { id: "10148", name: "นางสาวสุภาวดี ประกอบธรรม" }
        ],
        room6: [
            { id: "08944", name: "นายธนวัฒน์ ศรีฉ่ำ" },
            { id: "09003", name: "นายอาณัฐพล แย้มอาษา" },
            { id: "09033", name: "นายรณกร เอี่ยมสะอาด" },
            { id: "10106", name: "นายสุชานันท์ สะอาด" }
        ]
    },
    m6: {
        room1: [
            { id: "08655", name: "นายภิรภูมิ เอี่ยมจินดา" },
            { id: "08720", name: "นายทรงวุฒิ ห้าวเส็ง" },
            { id: "09759", name: "นายพงศกร ดาบทอง" },
            { id: "08665", name: "นางสาวฐิติมา โรจนวรินทร์" },
            { id: "08677", name: "นางสาวสาธิตา พรทิวา" },
            { id: "08678", name: "นางสาวสุณิตา ตราทอง" },
            { id: "08709", name: "นางสาววัชรินทร์ แก้วใหญ่" },
            { id: "09787", name: "นางสาวณิชาพัชร์ อินมั่น" },
            { id: "09789", name: "นางสาวสุดารัตน์ คงจันทร์" }
        ],
        room2: [
            { id: "08653", name: "นายนิติธร กุมพล" },
            { id: "08819", name: "นายธนภัทร ดีเสมอ" },
            { id: "09764", name: "นายกัณฑ์อเนก หนาแน่น" },
            { id: "08708", name: "นางสาวมัญชรี อินหอม" },
            { id: "08715", name: "นางสาวอภิษฎา ฉายอรุณ" },
            { id: "08808", name: "นางสาวปาลิตา สืบฝัน" },
            { id: "09794", name: "นางสาวญาดา สิงคะโจม" },
            { id: "09854", name: "นางสาวมะลิพร วิเศษคุณากร" },
            { id: "ไม่ทราบ", name: "นายชัย -" }
        ],
        room3: [
            { id: "09767", name: "นายกิตติ -" },
            { id: "08740", name: "นางสาวฐิติมา ใจหลง" },
            { id: "08768", name: "นางสาวกรองทอง เหล่าแก้ว" },
            { id: "08776", name: "นางสาววิชาดา ผอบทอง" },
            { id: "10163", name: "นางสาวลลนา วงษ์ภาส" },
            { id: "08753", name: "นายจิรพัฒน์ รอดอนงค์" },
            { id: "08745", name: "นางสาวศศิฬา จรพันธุ์" },
            { id: "09808", name: "นาวสาวกฤษณา แสงอรุณ" }
        ],
        room4: [
            { id: "08684", name: "นายคุณารักษ์ ดวงคุณ" },
            { id: "08786", name: "นายณัฐกรณ์ ดวงตา" },
            { id: "09772", name: "นายกิตติศักรดิ์ พึ่งประสพ" },
            { id: "09776", name: "นายธนพงษ์ ธิบดี" },
            { id: "08693", name: "นายลิแอม คนาบี" },
            { id: "08775", name: "นางสาวรัตติกาล ภาพสุวรรณ" },
            { id: "09815", name: "นางสาวดาราวรรณ เฮงฮู้" }
        ],
        room5: [
            { id: "08800", name: "นายวีรภัทร์ เอี่ยมสะอาด" },
            { id: "08714", name: "นางสาวหรัญญา บุญเรือง" },
            { id: "08778", name: "นางสาวพิมลวรรณ -" }
        ],
        room6: [
            { id: "08662", name: "นายศราวุฒิ แสงเกตุ" },
            { id: "08818", name: "นายตนุภัทร วายประโคน" },
            { id: "09781", name: "นายนภัศ หอมฟุ้ง" }
        ]
    }
};


// 4. อ้างอิงถึง Element ใน HTML
const datePicker = document.getElementById('datePicker');
const gradeSelect = document.getElementById('gradeSelect');
const classSelect = document.getElementById('classSelect');
const loadStudentsBtn = document.getElementById('loadStudentsBtn');
const studentListContainer = document.getElementById('studentListContainer');
const saveAttendanceBtn = document.getElementById('saveAttendanceBtn');
const statusMessage = document.getElementById('statusMessage');

// กำหนดวันที่เริ่มต้นเป็นวันปัจจุบัน
datePicker.valueAsDate = new Date();


// 5. Function การทำงานต่างๆ
function loadStudents() {
    const grade = gradeSelect.value;
    const room = classSelect.value;
    studentListContainer.innerHTML = '';
    statusMessage.textContent = '';
    const students = dummyStudents[grade]?.[room] || [];
    if (students.length > 0) {
        // วนลูปจากข้อมูลนักเรียนที่เป็น object array
        students.forEach((student, index) => {
            const studentElement = document.createElement('div');
            studentElement.className = 'student-entry';
            studentElement.setAttribute('data-student-id', student.id);
            studentElement.setAttribute('data-student-name', student.name);

            studentElement.innerHTML = `
                <span>${index + 1}. [${student.id}] ${student.name}</span>
                <div class="status-options">
                    <input type="radio" id="status-${student.id}-present" name="status-${student.id}" value="มา" checked>
                    <label for="status-${student.id}-present" style="margin: 0px 0px 0px 0px;">มา</label>
                    
                    <input type="radio" id="status-${student.id}-leave" name="status-${student.id}" value="ลา">
                    <label for="status-${student.id}-leave" style="margin: 0px 0px 0px 0px;">ลา</label>
                    
                    <input type="radio" id="status-${student.id}-absent" name="status-${student.id}" value="ขาด">
                    <label for="status-${student.id}-absent" style="margin: 0px 0px 0px 0px;">ขาด</label>
                    
                    <input type="radio" id="status-${student.id}-skip" name="status-${student.id}" value="โดด">
                    <label for="status-${student.id}-skip" style="margin: 0px 0px 0px 0px;">โดด</label>
                </div>
            `;
            studentListContainer.appendChild(studentElement);
        });
        saveAttendanceBtn.style.display = 'block';
    } else {
        studentListContainer.innerHTML = `<p>ไม่พบข้อมูลนักเรียนสำหรับชั้น ${gradeSelect.options[gradeSelect.selectedIndex].text} / ${classSelect.options[classSelect.selectedIndex].text}</p>`;
        saveAttendanceBtn.style.display = 'none';
    }
}

/**
 * บันทึกข้อมูลการเช็คชื่อลง Firebase Realtime Database
 */
function saveAttendance() {
    const date = datePicker.value;
    if (!date) {
        statusMessage.textContent = 'ข้อผิดพลาด: กรุณาเลือกวันที่ก่อนบันทึก';
        statusMessage.style.color = 'red';
        return;
    }
    const grade = gradeSelect.value;
    const room = classSelect.value;
    const attendanceData = {};
    const studentElements = studentListContainer.querySelectorAll('div[data-student-id]');

    studentElements.forEach(el => {
        // ดึง id และ name ที่เก็บไว้จาก data attribute
        const studentId = el.getAttribute('data-student-id');
        const studentName = el.getAttribute('data-student-name');
        const checkedRadio = el.querySelector('input[type="radio"]:checked');

        if (studentId && studentName && checkedRadio) {
            // ใช้ studentId เป็น key หลัก และเก็บ object ที่มีทั้งชื่อและสถานะ
            attendanceData[studentId] = {
                name: studentName,
                status: checkedRadio.value
            };
        }
    });

    if (Object.keys(attendanceData).length === 0) {
        statusMessage.textContent = 'ไม่มีข้อมูลให้บันทึก';
        return;
    }

    const dbPath = `attendance/${date}/${grade}/${room}`;

    statusMessage.textContent = 'กำลังบันทึก...';
    statusMessage.style.color = 'black';

    database.ref(dbPath).set(attendanceData)
        .then(() => {
            statusMessage.textContent = `บันทึกข้อมูลวันที่ ${date} สำเร็จ!`;
            statusMessage.style.color = 'green';
        })
        .catch((error) => {
            statusMessage.textContent = 'เกิดข้อผิดพลาดในการบันทึก: ' + error.message;
            statusMessage.style.color = 'red';
            console.error(error);
        });
}

// 6. กำหนด Event Listeners
loadStudentsBtn.addEventListener('click', loadStudents);
saveAttendanceBtn.addEventListener('click', saveAttendance);
