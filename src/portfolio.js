/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Illustration
const illustration = {
  animated: true
};

// Greeting
const greeting = {
  username: "Jihan Zulfa Nabila",
  title: "Hi, Saya jihan",
  subTitle: emoji("Mahasiswa S1-Teknik Informatika / Adm Kasir - Rs Budi Asih"),
  resumeLink: "https://drive.google.com/file/d/1m_HkqNExtzKs0gOfaIkjA24FnHs_GrWl/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/jihanzull",
  linkedin: "https://www.linkedin.com/in/jihan-zulfa-nabila-990b9324b/",
  gmail: "nabilajihanzulfa@gmail.com",
  instagram: "https://www.instagram.com/jihanzul_/",
  tiktok: "https://www.tiktok.com/@jihanzul_?is_from_webapp=1&sender_device=pc",
  display: true
};

// Skills Section
const skillsSection = {
  title: "Keahlian Saya",
  subTitle: "MAHASISWA TEKNIK INFORMATIKA DENGAN PENGALAMAN DUNIA KERJA DAN PROYEK NYATA",
  skills: [
    emoji("⚡ Membuat aplikasi web sederhana menggunakan HTML, CSS, JavaScript, dan JSP"),
    emoji("⚡ Terbiasa menggunakan sistem informasi rumah sakit untuk transaksi dan pencatatan"),
    emoji("⚡ Dapat membaca resep obat dan diagnosis pasien untuk keperluan administrasi"),
    emoji("⚡ Pengalaman dalam membuat aplikasi mobile sederhana menggunakan Java & Android Studio"),
    emoji("⚡ Mengelola database menggunakan MySQL untuk proyek skala kecil")
  ],
  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
    { skillName: "npm", fontAwesomeClassname: "fab fa-npm" },
    { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "STMIK Mardira Indonesia",
      logo: require("https://www.stmik-mi.ac.id/image/logo.png"),
      subHeader: "Sarjana (S1) Teknik Informatika",
      duration: "September 2022 – Sekarang",
      desc: "Mahasiswa aktif dengan minat di bidang pengembangan aplikasi web dan mobile, serta pengalaman dunia kerja dan proyek nyata.",
      descBullets: [
        "Mengembangkan aplikasi web sederhana menggunakan HTML, CSS, JavaScript, JSP dan MySQL",
        "Aktif mengikuti proyek kelompok dan kegiatan organisasi di luar kampus",
        "Mampu mengelola waktu antara kuliah, kerja sebagai kasir di rumah sakit, dan kegiatan kampus"
      ]
    }
  ]
};

// Tech Stack
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "70%" },
    { Stack: "Backend", progressPercentage: "70%" },
    { Stack: "Programming", progressPercentage: "60%" }
  ],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Kasir",
      company: "Rumah Sakit Budi Asih",
      companylogo: require("https://static.wikia.nocookie.net/logopedia/images/f/f8/Rumah_Sakit_Budi_Asih.png/revision/latest/scale-to-width-down/200?cb=20191020163146"),
      date: "November 2022 – Sekarang",
      desc: "Bertugas menangani transaksi pasien, pencatatan keuangan, dan administrasi pelayanan rumah sakit.",
      descBullets: [
        "Mengoperasikan sistem informasi rumah sakit untuk input tagihan dan pembayaran pasien",
        "Membaca resep obat dan diagnosis untuk validasi data pembayaran",
        "Berkomunikasi dengan pasien dan pihak asuransi untuk proses klaim dan verifikasi data"
      ]
    },
    {
      role: "Panitia Acara Sekolah",
      company: "MA Al-Basyariyah",
      companylogo: require("./assets/images/schoolLogo.png"),
      date: "2019 – 2021",
      desc: "Berperan aktif dalam kepanitiaan kegiatan sekolah, termasuk seminar, bazar, dan bakti sosial.",
      descBullets: [
        "Menjadi ketua divisi Teknik Operasinal dan anggota divisi acara di beberapa kegiatan sekolah",
        "Mengatur logistik dan jadwal acara dengan koordinasi tim",
        "Melatih tanggung jawab, komunikasi, dan manajemen waktu sejak dini"
      ]
    }
  ]
};

// Achievement Section
const achievementSection = {
  achievements: [
    {
      title: "Data Science with AR",
      subtitle: "Sertifikat pelatihan pengenalan Data Science dengan pendekatan Augmented Reality dari DQ Lab.",
      image: require("https://user-images.githubusercontent.com/86232890/124597500-c7df7e80-de8d-11eb-910b-df7d2498ade1.jpg"),
      imageAlt: "Logo DQ Lab",
      footerLink: [
        { name: "Lihat Sertifikat", url: "https://drive.google.com/file/d/1-BoC5glmur34hSntZSIvvnViqlTsOLD-/view?usp=sharing" }
      ]
    },
    {
      title: "R Fundamental for Data Science",
      subtitle: "Pelatihan dasar bahasa pemrograman R untuk keperluan analisis data dan statistik dari DQ Lab.",
      image: require("https://user-images.githubusercontent.com/86232890/124597500-c7df7e80-de8d-11eb-910b-df7d2498ade1.jpg"),
      imageAlt: "Logo DQ Lab",
      footerLink: [
        { name: "Lihat Sertifikat", url: "https://drive.google.com/file/d/1cT8q4WGXaKHf3LCioTM7rz9coHj-q_I8/view?usp=sharing" }
      ]
    },
    {
      title: "Guide to Learn with AI",
      subtitle: "Panduan belajar efisien dengan bantuan kecerdasan buatan untuk mendalami Data Science.",
      image: require("https://user-images.githubusercontent.com/86232890/124597500-c7df7e80-de8d-11eb-910b-df7d2498ade1.jpg"),
      imageAlt: "Logo DQ Lab",
      footerLink: [
        { name: "Lihat Sertifikat", url: "https://drive.google.com/file/d/1m9K5vh35hVFAquVsoaM29zpXLpv_OMde/view?usp=sharing" }
      ]
    }
  ],
  display: true
};

// Blog Section
const blogSection = {
  title: "Konten Saya",
  subtitle: "Beberapa video yang saya buat bersama teman-teman, sebagai dokumentasi proyek dan pengalaman belajar.",
  displayMediumBlogs: false,
  blogs: [
    {
      url: "https://youtu.be/HC72yseH0Tw?si=_it_spCrMfq8q5lY",
      title: "Talk Show Digital",
      description: "Talk Show seputar Cloud Computing Di Indonesia."
    },
    {
      url: "https://youtu.be/Lz78W7oKGao?si=FHFte850caNQm0AJ",
      title: "Tutorial desaign dengan Camtasia",
      description: "Tutorial desaign batik dengan Camtasia."
    }
  ],
  display: true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Silakan unduh CV saya di bawah ini.",
  link: "https://drive.google.com/file/d/1m_HkqNExtzKs0gOfaIkjA24FnHs_GrWl/view?usp=sharing",
  display: true
};

// Contact Info
const contactInfo = {
  title: emoji("Hubungi Saya ☎️"),
  subtitle: "Ingin berdiskusi tentang proyek, kerja sama, atau hanya menyapa? Kotak masuk saya selalu terbuka.",
  email_address: "nabilajihanzulfa@gmail.com"
};

const InstagramDetails = {
  userName: "jihanzul_",
  display: true
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  achievementSection,
  blogSection,
  contactInfo,
  InstagramDetails,
  isHireable,
  resumeSection
};
