import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Clean existing data
  await prisma.answer.deleteMany();
  await prisma.question.deleteMany();
  await prisma.predictorSession.deleteMany();
  await prisma.cutoff.deleteMany();
  await prisma.comparisonItem.deleteMany();
  await prisma.comparison.deleteMany();
  await prisma.savedCollege.deleteMany();
  await prisma.review.deleteMany();
  await prisma.course.deleteMany();
  await prisma.placement.deleteMany();
  await prisma.exam.deleteMany();
  await prisma.college.deleteMany();
  await prisma.user.deleteMany();

  // Create demo users
  const hashedPassword = await bcrypt.hash("password123", 10);
  const users = await Promise.all([
    prisma.user.create({ data: { name: "Arjun Sharma", email: "arjun@example.com", password: hashedPassword } }),
    prisma.user.create({ data: { name: "Priya Patel", email: "priya@example.com", password: hashedPassword } }),
    prisma.user.create({ data: { name: "Rahul Gupta", email: "rahul@example.com", password: hashedPassword } }),
  ]);

  // Create Exams
  const jeeMain = await prisma.exam.create({
    data: {
      name: "JEE Main",
      conductingBody: "NTA",
      eligibility: "10+2 with PCM, min 75%",
      syllabus: "Physics, Chemistry, Mathematics",
    },
  });
  const jeeAdv = await prisma.exam.create({
    data: {
      name: "JEE Advanced",
      conductingBody: "IIT",
      eligibility: "Top 2.5 lakh JEE Main qualifiers",
      syllabus: "Physics, Chemistry, Mathematics (advanced)",
    },
  });
  const neet = await prisma.exam.create({
    data: {
      name: "NEET",
      conductingBody: "NTA",
      eligibility: "10+2 with PCB, min 50%",
      syllabus: "Physics, Chemistry, Biology",
    },
  });

  const collegesData = [
    {
      name: "Indian Institute of Technology Bombay",
      location: "Mumbai",
      state: "Maharashtra",
      type: "government",
      fees: 250000,
      rating: 4.8,
      overview: "IIT Bombay is one of India's premier engineering institutes, established in 1958. Located in Powai, Mumbai, it is consistently ranked among the top engineering colleges in India and Asia. Known for its cutting-edge research, world-class faculty, and vibrant campus life, IIT Bombay attracts the brightest minds across the country.",
      establishedYear: 1958,
      nirfRanking: 3,
      website: "https://www.iitb.ac.in",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/IIT_Bombay_-_Main_Building.jpg/1280px-IIT_Bombay_-_Main_Building.jpg",
        "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
      ],
      placement: { averagePackage: 2400000, highestPackage: 25000000, placementPercentage: 96, topRecruiters: ["Google", "Microsoft", "Goldman Sachs", "McKinsey", "Amazon"] },
      courses: [
        { name: "B.Tech Computer Science", duration: "4 years", fees: 250000, eligibility: "JEE Advanced", seats: 120 },
        { name: "B.Tech Electrical Engineering", duration: "4 years", fees: 250000, eligibility: "JEE Advanced", seats: 90 },
        { name: "B.Tech Mechanical Engineering", duration: "4 years", fees: 250000, eligibility: "JEE Advanced", seats: 80 },
        { name: "M.Tech Computer Science", duration: "2 years", fees: 50000, eligibility: "GATE", seats: 60 },
      ],
      reviews: [
        { userId: users[0].id, rating: 5, title: "Best engineering college in India", comment: "The research facilities, faculty quality, and placement opportunities are unmatched. The campus life is vibrant with hundreds of student clubs and annual festivals like Mood Indigo." },
        { userId: users[1].id, rating: 4.5, title: "Amazing learning environment", comment: "Challenging curriculum but incredibly rewarding. The peer group here pushes you to your limits. Hostel facilities are good and the Mumbai location is a bonus." },
      ],
      cutoffs: [
        { examId: jeeAdv.id, courseIndex: 0, category: "General", openingRank: 1, closingRank: 65 },
        { examId: jeeAdv.id, courseIndex: 0, category: "OBC", openingRank: 50, closingRank: 180 },
        { examId: jeeAdv.id, courseIndex: 1, category: "General", openingRank: 100, closingRank: 350 },
      ],
    },
    {
      name: "Indian Institute of Technology Delhi",
      location: "New Delhi",
      state: "Delhi",
      type: "government",
      fees: 220000,
      rating: 4.7,
      overview: "IIT Delhi, established in 1961, is located in the heart of India's capital. It is renowned for its engineering programs, interdisciplinary research centers, and strong industry connections. The institute has produced some of India's most prominent entrepreneurs, scientists, and leaders.",
      establishedYear: 1961,
      nirfRanking: 2,
      website: "https://home.iitd.ac.in",
      images: [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
        "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
      ],
      placement: { averagePackage: 2200000, highestPackage: 22000000, placementPercentage: 95, topRecruiters: ["Microsoft", "Google", "Flipkart", "Adobe", "Texas Instruments"] },
      courses: [
        { name: "B.Tech Computer Science", duration: "4 years", fees: 220000, eligibility: "JEE Advanced", seats: 100 },
        { name: "B.Tech Electronics Engineering", duration: "4 years", fees: 220000, eligibility: "JEE Advanced", seats: 80 },
        { name: "B.Tech Civil Engineering", duration: "4 years", fees: 220000, eligibility: "JEE Advanced", seats: 70 },
        { name: "MBA", duration: "2 years", fees: 900000, eligibility: "CAT", seats: 50 },
      ],
      reviews: [
        { userId: users[1].id, rating: 4.8, title: "Top tier education and placement", comment: "The location in Delhi gives amazing industry exposure. Fests like Rendezvous are incredible. Faculty is world-class and very accessible." },
        { userId: users[2].id, rating: 4.5, title: "Great campus, great opportunities", comment: "Strong alumni network in Delhi NCR. The startup ecosystem here is thriving. Course load is intense but manageable." },
      ],
      cutoffs: [
        { examId: jeeAdv.id, courseIndex: 0, category: "General", openingRank: 30, closingRank: 100 },
        { examId: jeeAdv.id, courseIndex: 0, category: "OBC", openingRank: 80, closingRank: 250 },
        { examId: jeeAdv.id, courseIndex: 1, category: "General", openingRank: 200, closingRank: 500 },
      ],
    },
    {
      name: "BITS Pilani",
      location: "Pilani",
      state: "Rajasthan",
      type: "private",
      fees: 520000,
      rating: 4.6,
      overview: "Birla Institute of Technology and Science, Pilani is one of India's most prestigious private engineering institutions. Founded in 1964, BITS Pilani is known for its unique dual-degree programs, Practice School program offering industry internships, and an exceptional alumni network in Silicon Valley and across India.",
      establishedYear: 1964,
      nirfRanking: 25,
      website: "https://www.bits-pilani.ac.in",
      images: [
        "https://images.unsplash.com/photo-1607013407627-6352b4a67029?w=800",
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800",
      ],
      placement: { averagePackage: 1800000, highestPackage: 18000000, placementPercentage: 92, topRecruiters: ["Google", "Microsoft", "Goldman Sachs", "Sprinklr", "Oracle"] },
      courses: [
        { name: "B.E. Computer Science", duration: "4 years", fees: 520000, eligibility: "BITSAT", seats: 150 },
        { name: "B.E. Electronics", duration: "4 years", fees: 520000, eligibility: "BITSAT", seats: 120 },
        { name: "M.Sc. Mathematics", duration: "5 years (Integrated)", fees: 480000, eligibility: "BITSAT", seats: 60 },
        { name: "M.B.A.", duration: "2 years", fees: 800000, eligibility: "CAT/GMAT", seats: 40 },
      ],
      reviews: [
        { userId: users[0].id, rating: 4.7, title: "Freedom and flexibility unlike any other", comment: "BITS Pilani gives you incredible freedom to choose your own path. The Practice School is a game-changer - you get real industry experience. The campus is self-sufficient and beautiful." },
        { userId: users[2].id, rating: 4.5, title: "Best private engineering college", comment: "The dual degree option is fantastic. Alumni network in US tech companies is unparalleled. APOGEE and OASIS fests are legendary." },
      ],
      cutoffs: [
        { examId: jeeMain.id, courseIndex: 0, category: "General", openingRank: 500, closingRank: 2000 },
        { examId: jeeMain.id, courseIndex: 0, category: "OBC", openingRank: 1500, closingRank: 4500 },
        { examId: jeeMain.id, courseIndex: 1, category: "General", openingRank: 2000, closingRank: 5000 },
      ],
    },
    {
      name: "National Institute of Technology Trichy",
      location: "Tiruchirappalli",
      state: "Tamil Nadu",
      type: "government",
      fees: 145000,
      rating: 4.4,
      overview: "NIT Trichy is consistently ranked as the top NIT in India. Established in 1964 as REC Trichy, it is known for its strong technical education, excellent placements, and vibrant campus culture. The institute has 17 academic departments and over 50 active student clubs.",
      establishedYear: 1964,
      nirfRanking: 8,
      website: "https://www.nitt.edu",
      images: [
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
        "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800",
      ],
      placement: { averagePackage: 1200000, highestPackage: 12000000, placementPercentage: 88, topRecruiters: ["TCS", "Infosys", "Samsung", "Hyundai", "Qualcomm"] },
      courses: [
        { name: "B.Tech Computer Science", duration: "4 years", fees: 145000, eligibility: "JEE Main", seats: 100 },
        { name: "B.Tech Mechanical Engineering", duration: "4 years", fees: 145000, eligibility: "JEE Main", seats: 90 },
        { name: "B.Tech Civil Engineering", duration: "4 years", fees: 145000, eligibility: "JEE Main", seats: 80 },
        { name: "M.Tech VLSI Design", duration: "2 years", fees: 80000, eligibility: "GATE", seats: 30 },
      ],
      reviews: [
        { userId: users[2].id, rating: 4.5, title: "Best NIT by far", comment: "The placement statistics are exceptional for a government college. Faculty is very research-oriented. The student community is diverse and supportive. Pragyan tech fest is world-class." },
      ],
      cutoffs: [
        { examId: jeeMain.id, courseIndex: 0, category: "General", openingRank: 1000, closingRank: 3500 },
        { examId: jeeMain.id, courseIndex: 0, category: "OBC", openingRank: 3000, closingRank: 8000 },
        { examId: jeeMain.id, courseIndex: 1, category: "General", openingRank: 5000, closingRank: 15000 },
      ],
    },
    {
      name: "Vellore Institute of Technology",
      location: "Vellore",
      state: "Tamil Nadu",
      type: "private",
      fees: 420000,
      rating: 4.2,
      overview: "VIT Vellore is one of India's largest private engineering universities with over 35,000 students. Established in 1984, it is known for its technologically advanced infrastructure, wide choice of electives through FFCS system, and strong international collaborations with over 400 universities worldwide.",
      establishedYear: 1984,
      nirfRanking: 11,
      website: "https://vit.ac.in",
      images: [
        "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800",
        "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
      ],
      placement: { averagePackage: 850000, highestPackage: 10000000, placementPercentage: 85, topRecruiters: ["TCS", "Wipro", "Infosys", "Cognizant", "Capgemini"] },
      courses: [
        { name: "B.Tech Computer Science", duration: "4 years", fees: 420000, eligibility: "VITEEE", seats: 400 },
        { name: "B.Tech Biomedical Engineering", duration: "4 years", fees: 420000, eligibility: "VITEEE", seats: 100 },
        { name: "B.Tech Information Technology", duration: "4 years", fees: 420000, eligibility: "VITEEE", seats: 300 },
        { name: "M.Tech Software Engineering", duration: "2 years", fees: 280000, eligibility: "GATE/TOEFL", seats: 50 },
      ],
      reviews: [
        { userId: users[0].id, rating: 4.2, title: "Good infrastructure, lots of choices", comment: "FFCS system gives amazing flexibility in course selection. Campus is huge and well-maintained. International exchange programs are excellent. Food options on campus are great." },
        { userId: users[1].id, rating: 4.0, title: "Great for networking", comment: "Diverse student body from all over India. Tech fest Gravitas attracts top companies. The coding culture is strong with multiple competitive programming clubs." },
      ],
      cutoffs: [
        { examId: jeeMain.id, courseIndex: 0, category: "General", openingRank: 15000, closingRank: 45000 },
        { examId: jeeMain.id, courseIndex: 0, category: "OBC", openingRank: 35000, closingRank: 80000 },
      ],
    },
    {
      name: "Indian Institute of Technology Madras",
      location: "Chennai",
      state: "Tamil Nadu",
      type: "government",
      fees: 230000,
      rating: 4.9,
      overview: "IIT Madras, established in 1959, is India's top-ranked engineering institute for several consecutive years. Located on a sprawling 600-acre forested campus in Chennai, it is known for exceptional research output, strong industry ties with Chennai's tech hub, and producing world-class engineers.",
      establishedYear: 1959,
      nirfRanking: 1,
      website: "https://www.iitm.ac.in",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/IIT_Madras_Campus.jpg/1280px-IIT_Madras_Campus.jpg",
        "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
      ],
      placement: { averagePackage: 2600000, highestPackage: 28000000, placementPercentage: 97, topRecruiters: ["Uber", "Google", "Qualcomm", "Texas Instruments", "Flipkart"] },
      courses: [
        { name: "B.Tech Computer Science", duration: "4 years", fees: 230000, eligibility: "JEE Advanced", seats: 100 },
        { name: "B.Tech Aerospace Engineering", duration: "4 years", fees: 230000, eligibility: "JEE Advanced", seats: 50 },
        { name: "B.Tech Chemical Engineering", duration: "4 years", fees: 230000, eligibility: "JEE Advanced", seats: 60 },
        { name: "Ph.D. Research", duration: "5 years", fees: 30000, eligibility: "GATE + Interview", seats: 200 },
      ],
      reviews: [
        { userId: users[1].id, rating: 5, title: "India's best. Period.", comment: "The campus with deer roaming freely is something else. Research culture is extraordinary. Alumni network spans every major tech company globally. Saarang is the best cultural fest in South India." },
        { userId: users[0].id, rating: 4.8, title: "Exceptional research and placement", comment: "The faculty-to-student ratio is excellent. iCampus digital initiatives are ahead of their time. Getting into Shaastra or Saarang organizing committees teaches more than any course." },
      ],
      cutoffs: [
        { examId: jeeAdv.id, courseIndex: 0, category: "General", openingRank: 1, closingRank: 55 },
        { examId: jeeAdv.id, courseIndex: 0, category: "OBC", openingRank: 40, closingRank: 150 },
        { examId: jeeAdv.id, courseIndex: 1, category: "General", openingRank: 150, closingRank: 400 },
      ],
    },
    {
      name: "Delhi Technological University",
      location: "New Delhi",
      state: "Delhi",
      type: "government",
      fees: 180000,
      rating: 4.1,
      overview: "Formerly known as Delhi College of Engineering, DTU is one of Delhi's premier engineering institutions established in 1941. It offers a wide range of undergraduate and postgraduate programs with a strong focus on industry-relevant curriculum and entrepreneurship. Its location in the capital provides excellent networking and placement opportunities.",
      establishedYear: 1941,
      nirfRanking: 36,
      website: "https://dtu.ac.in",
      images: [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
        "https://images.unsplash.com/photo-1607013407627-6352b4a67029?w=800",
      ],
      placement: { averagePackage: 1050000, highestPackage: 9500000, placementPercentage: 82, topRecruiters: ["Amazon", "Paytm", "Zomato", "Josh Technology", "Samsung R&D"] },
      courses: [
        { name: "B.Tech Computer Science", duration: "4 years", fees: 180000, eligibility: "JEE Main", seats: 120 },
        { name: "B.Tech Software Engineering", duration: "4 years", fees: 180000, eligibility: "JEE Main", seats: 100 },
        { name: "B.Tech Electronics", duration: "4 years", fees: 180000, eligibility: "JEE Main", seats: 90 },
        { name: "M.Tech AI & ML", duration: "2 years", fees: 120000, eligibility: "GATE", seats: 30 },
      ],
      reviews: [
        { userId: users[2].id, rating: 4.1, title: "Great Delhi government college", comment: "Being in Delhi gives amazing startup ecosystem exposure. TechFest DTU attracts good companies. The alumni network in product companies is strong. Faculty quality varies by department." },
      ],
      cutoffs: [
        { examId: jeeMain.id, courseIndex: 0, category: "General", openingRank: 2000, closingRank: 7000 },
        { examId: jeeMain.id, courseIndex: 0, category: "OBC", openingRank: 6000, closingRank: 14000 },
        { examId: jeeMain.id, courseIndex: 1, category: "General", openingRank: 8000, closingRank: 18000 },
      ],
    },
    {
      name: "Manipal Institute of Technology",
      location: "Manipal",
      state: "Karnataka",
      type: "private",
      fees: 480000,
      rating: 4.3,
      overview: "MIT Manipal, part of Manipal Academy of Higher Education, is one of India's most cosmopolitan campuses. Founded in 1957, it offers 26 engineering disciplines and is known for its autonomous curriculum, international collaborations, and a highly active student community from all 29 states and 58 countries.",
      establishedYear: 1957,
      nirfRanking: 43,
      website: "https://manipal.edu/mit.html",
      images: [
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800",
        "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800",
      ],
      placement: { averagePackage: 920000, highestPackage: 8500000, placementPercentage: 80, topRecruiters: ["Infosys", "Cognizant", "Capgemini", "UST Global", "Ernst & Young"] },
      courses: [
        { name: "B.Tech Computer Science", duration: "4 years", fees: 480000, eligibility: "MET/JEE Main", seats: 300 },
        { name: "B.Tech Mechatronics", duration: "4 years", fees: 480000, eligibility: "MET/JEE Main", seats: 80 },
        { name: "B.Tech Aeronautical Engineering", duration: "4 years", fees: 480000, eligibility: "MET/JEE Main", seats: 60 },
      ],
      reviews: [
        { userId: users[0].id, rating: 4.3, title: "Best college life experience", comment: "The campus is literally a small town. Everything from cafes to cinemas within walking distance. The diverse student community from across India and abroad is a massive advantage. Revels fest is incredible." },
      ],
      cutoffs: [
        { examId: jeeMain.id, courseIndex: 0, category: "General", openingRank: 20000, closingRank: 60000 },
      ],
    },
    {
      name: "IIT Kharagpur",
      location: "Kharagpur",
      state: "West Bengal",
      type: "government",
      fees: 200000,
      rating: 4.6,
      overview: "IIT Kharagpur, the first IIT established in India in 1951, holds a special place in the country's engineering history. Spread over 2,100 acres — the largest of all IITs — it has 22 academic departments and 13 multi-disciplinary centres. Known for its pioneering research, diverse programs, and legendary alumni including Sundar Pichai and N. R. Narayana Murthy.",
      establishedYear: 1951,
      nirfRanking: 5,
      website: "https://www.iitkgp.ac.in",
      images: [
        "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
        "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800",
      ],
      placement: { averagePackage: 2000000, highestPackage: 20000000, placementPercentage: 93, topRecruiters: ["Google", "Microsoft", "Morgan Stanley", "Reliance", "L&T"] },
      courses: [
        { name: "B.Tech Computer Science", duration: "4 years", fees: 200000, eligibility: "JEE Advanced", seats: 110 },
        { name: "B.Tech Mining Engineering", duration: "4 years", fees: 200000, eligibility: "JEE Advanced", seats: 40 },
        { name: "B.Tech Architecture", duration: "5 years", fees: 200000, eligibility: "JEE Advanced + AAT", seats: 35 },
        { name: "5-year Integrated M.Sc.", duration: "5 years", fees: 180000, eligibility: "JEE Advanced", seats: 120 },
      ],
      reviews: [
        { userId: users[1].id, rating: 4.6, title: "Largest IIT campus in India", comment: "The sheer scale of the campus is mind-blowing — you need a cycle to get around. The diversity of programs is unmatched among IITs. Spring Fest is one of India's biggest cultural events." },
        { userId: users[2].id, rating: 4.5, title: "Legendary alumni, great research", comment: "The alumni network is something else. NEN entrepreneurship cell has launched multiple unicorns. Research labs are world-class, especially in CS and Mining." },
      ],
      cutoffs: [
        { examId: jeeAdv.id, courseIndex: 0, category: "General", openingRank: 60, closingRank: 200 },
        { examId: jeeAdv.id, courseIndex: 0, category: "OBC", openingRank: 150, closingRank: 450 },
      ],
    },
    {
      name: "Amity University",
      location: "Noida",
      state: "Uttar Pradesh",
      type: "private",
      fees: 350000,
      rating: 3.8,
      overview: "Amity University is one of India's largest private universities, founded in 2005. With campuses across India and abroad, it offers over 200 programs. Known for its industry-academia interface, corporate-style campus, and strong focus on soft skills and personality development.",
      establishedYear: 2005,
      nirfRanking: 62,
      website: "https://www.amity.edu",
      images: [
        "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800",
        "https://images.unsplash.com/photo-1607013407627-6352b4a67029?w=800",
      ],
      placement: { averagePackage: 650000, highestPackage: 6000000, placementPercentage: 75, topRecruiters: ["TCS", "HCL", "Wipro", "Accenture", "Deloitte"] },
      courses: [
        { name: "B.Tech Computer Science", duration: "4 years", fees: 350000, eligibility: "Amity JEE", seats: 250 },
        { name: "BBA", duration: "3 years", fees: 280000, eligibility: "Amity JEE", seats: 200 },
        { name: "B.Sc. Biotechnology", duration: "3 years", fees: 300000, eligibility: "12th PCB", seats: 100 },
      ],
      reviews: [
        { userId: users[0].id, rating: 3.8, title: "Good for all-round development", comment: "The soft skills training here is excellent. Industry tie-ups bring a lot of corporate exposure. Campus is beautiful and well-maintained. Placements are decent for tier-2 companies." },
      ],
      cutoffs: [
        { examId: jeeMain.id, courseIndex: 0, category: "General", openingRank: 80000, closingRank: 200000 },
      ],
    },
    {
      name: "SRM Institute of Science and Technology",
      location: "Kattankulathur",
      state: "Tamil Nadu",
      type: "private",
      fees: 390000,
      rating: 4.0,
      overview: "SRM IST Kattankulathur is one of the largest private universities in India with over 52,000 students. Established in 1985, it is known for its research infrastructure, international collaborations, and diverse student community. The university offers undergraduate, postgraduate, and doctoral programs across engineering, medicine, management, and science.",
      establishedYear: 1985,
      nirfRanking: 27,
      website: "https://www.srmist.edu.in",
      images: [
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800",
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      ],
      placement: { averagePackage: 780000, highestPackage: 8000000, placementPercentage: 78, topRecruiters: ["TCS", "Wipro", "CTS", "HCL", "Amazon"] },
      courses: [
        { name: "B.Tech Computer Science (AI & ML)", duration: "4 years", fees: 390000, eligibility: "SRMJEEE", seats: 350 },
        { name: "B.Tech Biotechnology", duration: "4 years", fees: 350000, eligibility: "SRMJEEE", seats: 80 },
        { name: "B.Tech Mechanical Engineering", duration: "4 years", fees: 360000, eligibility: "SRMJEEE", seats: 200 },
      ],
      reviews: [
        { userId: users[2].id, rating: 4.0, title: "Good infrastructure, improving placements", comment: "The AI & ML specialization is genuinely excellent. Research labs are well-funded. The Chennai proximity helps with placement. Annual tech fest brings in good companies." },
      ],
      cutoffs: [
        { examId: jeeMain.id, courseIndex: 0, category: "General", openingRank: 40000, closingRank: 120000 },
      ],
    },
    {
      name: "Jadavpur University",
      location: "Kolkata",
      state: "West Bengal",
      type: "government",
      fees: 30000,
      rating: 4.3,
      overview: "Jadavpur University, established in 1955, is one of India's top government universities. Known for its exceptional academic standards, strong research culture, and producing world-class engineers, it offers some of the most affordable quality education in India. Its faculties of Engineering, Science, and Arts are all highly regarded nationally.",
      establishedYear: 1955,
      nirfRanking: 15,
      website: "http://www.jadavpur.edu",
      images: [
        "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
      ],
      placement: { averagePackage: 950000, highestPackage: 9000000, placementPercentage: 82, topRecruiters: ["Tata Steel", "DRDO", "Infosys", "Wipro", "IBM"] },
      courses: [
        { name: "B.E. Computer Science", duration: "4 years", fees: 30000, eligibility: "WBJEE", seats: 80 },
        { name: "B.E. Electronics & Telecom", duration: "4 years", fees: 30000, eligibility: "WBJEE", seats: 70 },
        { name: "B.E. Electrical Engineering", duration: "4 years", fees: 30000, eligibility: "WBJEE", seats: 90 },
      ],
      reviews: [
        { userId: users[1].id, rating: 4.4, title: "Exceptional value for money", comment: "30,000 a year for top-quality education is unbelievable. The student activism culture keeps you aware. Faculty is outstanding, many with international research backgrounds. Kolkata is an amazing city to study in." },
      ],
      cutoffs: [
        { examId: jeeMain.id, courseIndex: 0, category: "General", openingRank: 8000, closingRank: 20000 },
        { examId: jeeMain.id, courseIndex: 0, category: "OBC", openingRank: 15000, closingRank: 35000 },
      ],
    },
    {
      name: "Indian Institute of Technology Roorkee",
      location: "Roorkee",
      state: "Uttarakhand",
      type: "government",
      fees: 210000,
      rating: 4.5,
      overview: "IIT Roorkee is Asia's oldest technical institute, established in 1847 as Thomason College of Civil Engineering. It offers exceptional programs in engineering, applied sciences, and management. Known for its historic campus, strong civil and hydraulic engineering legacy, and excellent research in earthquake engineering and water resources.",
      establishedYear: 1847,
      nirfRanking: 6,
      website: "https://www.iitr.ac.in",
      images: [
        "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
      ],
      placement: { averagePackage: 1850000, highestPackage: 17500000, placementPercentage: 90, topRecruiters: ["Microsoft", "Adobe", "Qualcomm", "ExxonMobil", "Samsung"] },
      courses: [
        { name: "B.Tech Computer Science", duration: "4 years", fees: 210000, eligibility: "JEE Advanced", seats: 95 },
        { name: "B.Tech Civil Engineering", duration: "4 years", fees: 210000, eligibility: "JEE Advanced", seats: 80 },
        { name: "B.Tech Earthquake Engineering", duration: "4 years", fees: 210000, eligibility: "JEE Advanced", seats: 40 },
        { name: "MBA", duration: "2 years", fees: 450000, eligibility: "CAT", seats: 60 },
      ],
      reviews: [
        { userId: users[0].id, rating: 4.5, title: "Historic campus, excellent education", comment: "The heritage campus with buildings from British era is stunning. Being near Haridwar and Rishikesh is a bonus. The civil and environmental engineering programs are among the best in Asia." },
      ],
      cutoffs: [
        { examId: jeeAdv.id, courseIndex: 0, category: "General", openingRank: 150, closingRank: 500 },
        { examId: jeeAdv.id, courseIndex: 0, category: "OBC", openingRank: 400, closingRank: 1200 },
        { examId: jeeAdv.id, courseIndex: 1, category: "General", openingRank: 800, closingRank: 2000 },
      ],
    },
    {
      name: "PSG College of Technology",
      location: "Coimbatore",
      state: "Tamil Nadu",
      type: "private",
      fees: 180000,
      rating: 4.2,
      overview: "PSG College of Technology, established in 1951, is a premier engineering institution affiliated with Anna University. Known for its strong industry linkages, robust placement record for a Tier-2 city college, and emphasis on practical skills. PSG Tech has produced many entrepreneurs and engineers who are leaders in Tamil Nadu's industrial belt.",
      establishedYear: 1951,
      nirfRanking: 58,
      website: "https://www.psgtech.edu",
      images: [
        "https://images.unsplash.com/photo-1607013407627-6352b4a67029?w=800",
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      ],
      placement: { averagePackage: 720000, highestPackage: 7000000, placementPercentage: 88, topRecruiters: ["Bosch", "Robert Bosch", "Cognizant", "L&T", "TVS Motor"] },
      courses: [
        { name: "B.E. Computer Science", duration: "4 years", fees: 180000, eligibility: "TNEA", seats: 150 },
        { name: "B.E. Mechanical Engineering", duration: "4 years", fees: 180000, eligibility: "TNEA", seats: 120 },
        { name: "B.E. Robotics Engineering", duration: "4 years", fees: 195000, eligibility: "TNEA", seats: 60 },
      ],
      reviews: [
        { userId: users[2].id, rating: 4.2, title: "Excellent for core engineering", comment: "PSG Tech is perfect if you want to get into manufacturing and core engineering. The tie-up with Bosch and other German companies is unique. Coimbatore's industrial environment complements the education well." },
      ],
      cutoffs: [
        { examId: jeeMain.id, courseIndex: 0, category: "General", openingRank: 50000, closingRank: 150000 },
      ],
    },
    {
      name: "SASTRA University",
      location: "Thanjavur",
      state: "Tamil Nadu",
      type: "private",
      fees: 195000,
      rating: 4.1,
      overview: "SASTRA (Shanmugha Arts, Science, Technology & Research Academy), established in 1984, is a deemed university in Thanjavur, Tamil Nadu. It is known for its focused academic environment, strong placement record relative to fees, and being the alma mater of Srinivasa Ramanujan — the institute is situated next to his birthplace and celebrates his mathematical legacy.",
      establishedYear: 1984,
      nirfRanking: 72,
      website: "https://www.sastra.edu",
      images: [
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800",
        "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800",
      ],
      placement: { averagePackage: 680000, highestPackage: 6500000, placementPercentage: 85, topRecruiters: ["TCS", "Infosys", "Wipro", "Zoho", "Freshworks"] },
      courses: [
        { name: "B.Tech Computer Science", duration: "4 years", fees: 195000, eligibility: "SASTRA University Entrance", seats: 200 },
        { name: "B.Tech Information Technology", duration: "4 years", fees: 195000, eligibility: "SASTRA University Entrance", seats: 150 },
        { name: "B.Tech EEE", duration: "4 years", fees: 185000, eligibility: "SASTRA University Entrance", seats: 100 },
      ],
      reviews: [
        { userId: users[1].id, rating: 4.1, title: "Hidden gem with good placements", comment: "The Ramanujan connection makes this place special for math lovers. Zoho and Freshworks recruit heavily here — great for product company placements. The peaceful environment in Thanjavur helps focus on studies." },
      ],
      cutoffs: [
        { examId: jeeMain.id, courseIndex: 0, category: "General", openingRank: 60000, closingRank: 180000 },
      ],
    },
  ];

  for (const data of collegesData) {
    const college = await prisma.college.create({
      data: {
        name: data.name,
        location: data.location,
        state: data.state,
        type: data.type,
        fees: data.fees,
        rating: data.rating,
        overview: data.overview,
        establishedYear: data.establishedYear,
        nirfRanking: data.nirfRanking,
        website: data.website,
        images: data.images,
      },
    });

    // Placement
    await prisma.placement.create({
      data: {
        collegeId: college.id,
        averagePackage: data.placement.averagePackage,
        highestPackage: data.placement.highestPackage,
        placementPercentage: data.placement.placementPercentage,
        topRecruiters: data.placement.topRecruiters,
      },
    });

    // Courses
    const createdCourses = [];
    for (const course of data.courses) {
      const c = await prisma.course.create({
        data: { collegeId: college.id, ...course },
      });
      createdCourses.push(c);
    }

    // Reviews
    for (const review of data.reviews) {
      await prisma.review.create({
        data: { collegeId: college.id, ...review },
      });
    }

    // Cutoffs
    for (const cutoff of data.cutoffs) {
      const course = createdCourses[cutoff.courseIndex];
      if (course) {
        await prisma.cutoff.create({
          data: {
            collegeId: college.id,
            courseId: course.id,
            examId: cutoff.examId,
            category: cutoff.category,
            openingRank: cutoff.openingRank,
            closingRank: cutoff.closingRank,
            year: 2024,
          },
        });
      }
    }
  }

  console.log("✅ Seed complete! Created 15 colleges with courses, placements, reviews, and cutoffs.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
