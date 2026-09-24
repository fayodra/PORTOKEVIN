import { Phone, Camera, Video, Mail } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import React from 'react';
import './App.css';
// 1. Impor gambar dari folder assets
import profilePhoto from "./assets/hero-bg.jpeg";

function App() {
  const projectsData = [
    {
      id: '01',
      title: 'Penghitung Barang Otomatis',
      category: 'IoT & Embedded System',
      desc: 'Merancang sistem penghitung barang otomatis berbasis ESP32 menggunakan sensor untuk mendeteksi dan menghitung jumlah objek.',
      tech: ['ESP32', 'Sensor IR/Ultrasonik', 'C++']
    },
    {
      id: '02',
      title: 'Pemberi Pakan Ikan Otomatis & Pendeteksi',
      category: 'Otomasi & Sistem Kontrol',
      desc: 'Membuat alat pakan ikan otomatis terjadwal yang dilengkapi dengan sensor pendeteksi ketersediaan pakan.',
      tech: ['Mikrokontroler', 'Motor Servo', 'Sensor Proximity']
    },
    {
      id: '03',
      title: 'Robot ARM Terintegrasi Website',
      category: 'Robotika & Web Control',
      desc: 'Merancang dan mengendalikan pergerakan lengan robot (Robot ARM) secara antarmuka berbasis website.',
      tech: ['Robot ARM', 'Web Server', 'HTML/JS']
    },
    {
      id: '04',
      title: 'Robot Self-Balancing',
      category: 'Robotika & Kontrol PID',
      desc: 'Membuat robot dua roda yang dapat menyeimbangkan diri secara otomatis menggunakan masukan sensor gyro/accelerometer.',
      tech: ['Gyro Sensor (MPU6050)', 'PID Control', 'DC Motor']
    },
    {
      id: '05',
      title: 'Rangkaian Digital: Up/Down Counter & Flip-Flop',
      category: 'Sistem Digital',
      desc: 'Membuat rangkaian pencacah naik-turun (Up/Down Counter), Flip-Flop, dan generator sinyal detak (Clock Generator).',
      tech: ['IC Logika', 'Clock Generator', 'Breadboard']
    },
    {
      id: '06',
      title: 'Perancangan Power Supply DC',
      category: 'Elektronika Daya',
      desc: 'Merancang dan merakit catu daya (Power Supply DC) teregulasi dari tegangan AC ke DC untuk kebutuhan praktikum.',
      tech: ['Trafo', 'Diode Bridge', 'Kapasitor', 'Regulator IC']
    }
  ];
  const servicesData = [
    {
      id: '01',
      title: 'Mikrokontroler & Hardware ',
      desc: 'ESP32,Seri Arduino(Uno,Nano)dan pengujian rangkaian dengan menggunakan alat ukur seperti osiloskop dan multimeter '
    },
    {
      id: '02',
      title: 'Konektivitas Iot',
      desc: 'WI-FI,integrasi platform Iot seperti Bylink.'
    },
    {
      id: '03',
      title: 'Komponen',
      desc: '-Sensor:sensor jarak(ultrasonik dan IR),sensor gerakan(PIR).-Output & aktuator:Motor servo,relay,LCD,LED dan audio'
      
    },
    {
      id: '04',
      title: 'Software & Simulasi',
      desc: 'Arduino ide,Proteus,,EasyEDA untuk simulasi dan perancangan skematik.'
    }
  ];

  return (
    <div className="portfolio-container">
      {/* Header / Navbar */}
      <nav className="navbar">
        <div className="logo">ELECTRO.LAB</div>
        <ul className="nav-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">Tentang</a></li>
          <li><a href="#services">Keahlian</a></li>
          <li><a href="#portfolio">Proyek</a></li>
          <li><a href="#contact">Kontak</a></li>
        </ul>
        <button className="btn-orange">Kontak Saya</button>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-text">
          <p className="greeting">HELLO,I AM</p>
          <h2 className="name">
            <Typewriter
              options={{
                strings: ['KEVIN SULTAN FAYODRA'],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <h1 className="role">Electronics Engineering Departement</h1>
          
    <div className="social-icons" style={{ display: 'flex', gap: '12px', marginTop: '15px' }}>
<div className="social-links">
  {/* WhatsApp */}
  <a 
    href="https://wa.me/6283806565407" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="icon-box"
  >
    <Phone size={20} />
  </a>

  {/* Instagram */}
  <a 
    href="https://instagram.com/fayodra15" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="icon-box"
  >
    <Camera size={20} />
  </a>

  {/* Email */}
  <a 
    href="mailto:fayodra15@gmail.com" 
    className="icon-box"
  >
    <Mail size={20} />
  </a>
</div>
</div>
 <div className="cta-buttons">
  <button className="btn-orange">Hire Me</button>
  <a 
    href="/cv.pdf" 
    download="CV_KEVIN_SULTAN_FAYODRA.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-outline"
    style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
  >
    DOWNLOAD CV
  </a>
</div>

          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">2+ Thn</span>
              <span className="stat-label">Pengalaman Kuliah</span>
            </div>
           
            <div className="stat-item">
              <span className="stat-number">70%</span>
              <span className="stat-label">Siap Industri</span>
            </div>
          </div>
        </div>

        {/* Gambar Profil */}
        <div className="hero-image-container">
          <div className="circle-bg">
            <img 
              src={profilePhoto} 
              alt="Foto Profil Kevin Sultan Fayodra" 
              className="profile-img" 
            />
          </div>
        </div>
      </section>

      {/* SECTION TENTANG SAYA & PENDIDIKAN (POSISI PERTAMA) */}
      <section className="about-section" id="about">
        <div className="about-container">
        

          <div className="about-content">
            <h3 className="about-subtitle">TENTANG SAYA</h3>
            <h2 className="about-title">Mahasiswa Teknik Elektronika</h2>
            
            <p className="about-desc">
               Saya Praktisi Teknik Elektronika yang mendalami perancangan embedded systems dan integrasi perangkat IoT. Memiliki pengalaman teknis dalam pemrograman mikrokontroler (ESP32 & Arduino), otomasi sensorik, komunikasi data nirkabel (Wi-Fi), serta pengujian rangkaian secara terstruktur.Menangani alur pengembangan hardware dari tahap simulasi, breadboarding, hingga validasi fungsi sistem akhir.Saya selalu antusias mempelajari teknologi baru dan siap berkontribusi dalam proyek-proyek inovasi berbasis teknologi pintar."
            </p>

<div className="education-box">
  <h3 className="education-heading">🎓 RIWAYAT PENDIDIKAN</h3>
  
  {/* Perguruan Tinggi */}
<div className="education-item" style={{ marginBottom: '20px' }}>
        <div className="edu-header">
          <h4 className="edu-degree">D3 Teknik Elektronika</h4>
          <span className="edu-years">2024 – Sekarang</span>
        </div>
        <div className="institution-container" style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '8px 0' }}>
          <img 
            src="/logo-pnp.png" 
            alt="Logo PNP" 
            style={{ width: '24px', height: 'auto', objectFit: 'contain' }} 
          />
          <p className="edu-institution" style={{ margin: 0 }}>POLITEKNIK NEGERI PADANG</p>
        </div>
        <ul className="edu-highlights">
          <li><strong>IPK Sementara:</strong> 3.20</li>
          <li>
            Fokus pada perancangan rangkaian elektronik, hardware prototyping, dan pemrograman mikrokontroler.
          </li>
          <li>
            Menguasai integrasi sensor, aktuator, dan komunikasi data untuk sistem otomasi serta IoT.
          </li>
        </ul>
      </div>
  {/* SMA */}
  <div className="education-item">
    <div className="edu-header">
      <h4 className="edu-degree">Jurusan IPA (MIPA)</h4>
      <span className="edu-years">2020-2023</span>
    </div>
    <div className="institution-container" style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '8px 0' }}>
      <img 
        src="/logo-sman4.png" 
        alt="Logo SMAN 4 Padang" 
        style={{ width: '24px', height: 'auto', objectFit: 'contain' }} 
      />
      <p className="edu-institution" style={{ margin: 0, fontWeight: 'bold' }}>SMAN 4 PADANG</p>
    </div>
    <ul className="edu-highlights">
      <li><strong>Fokus Studi:</strong> Matematika dan Ilmu Pengetahuan Alam (Fisika, Kimia, Matematika).</li>
    </ul>
  </div>
</div>

            <div className="experience-box">
              <h3 className="experience-heading">💼 Pengalaman Magang</h3>
              <div className="experience-item">
                <div className="exp-header">
                  <h4 className="exp-role">OJT Facility Maintenance Technician</h4>
                  <span className="exp-years">10 Agustus-Sekarang</span>
                </div>
                <p className="exp-company">PT Angkasa Pura II — Bandara Halim Perdanakusuma</p>
                <ul className="exp-highlights">
                  <li>Melakukan preventive & corrective maintenance pada X-RAY,WTMD,HHMD di bandra HALIM P.</li>
                  <li>Mendiagnosis serta memperbaiki gangguan teknis pada instrumen pendukung operasional penerbangan.</li>
                  <li>Melakukan pengecekan & konfigurasi resolusi CCTV di area Bandara HALIM Perdanakusuma.</li>
                  <li>Perbaikan tampilan FIDS untuk keberangkatan dan kedatangan penerbangan.</li>
                </ul>
              </div>
            </div>

<a 
  href="/cv.pdf" 
  download="cv.pdf"
  className="btn-orange"
  style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}
>
  Unduh Transkrip & CV
</a>
          </div>
        </div>
      </section>

      {/* SECTION KEAHLIAN / SERVICES (POSISI KEDUAN) */}
      <section className="services-section" id="services">
        <div className="section-title">
          <h2>Keahlian Utama</h2>
          <p>Dalam mengerjakan  proyek-proyek otomasi dan hardware prototyping di kampus , saya didukung oleh keahlian teknis serta tools berikut:".</p>
        </div>

        <div className="services-grid">
          {servicesData.map((item) => (
            <div className="service-card" key={item.id}>
              <div className="service-number">{item.id}</div>
              <h3 className="service-title">{item.title}</h3>
              <p className="service-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* SECTION PROYEK / PORTFOLIO */}
      <section className="portfolio-section" id="portfolio" style={{ padding: '60px 20px' }}>
        <div className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2>Proyek Terbaru</h2>
          <p>Beberapa proyek teknis dan eksperimen yang telah saya kerjakan.</p>
        </div>

        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {projectsData.map((project) => (
            <div key={project.id} className="project-card" style={{ background: '#1e1e1e', padding: '24px', borderRadius: '12px', border: '1px solid #333' }}>
              <span style={{ color: '#ff6b00', fontSize: '14px', fontWeight: 'bold' }}>{project.category}</span>
              <h3 style={{ margin: '10px 0', fontSize: '20px' }}>{project.title}</h3>
              <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.6' }}>{project.desc}</p>
              
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '15px' }}>
                {project.tech.map((item, index) => (
                  <span key={index} style={{ background: '#2a2a2a', color: '#fff', padding: '4px 10px', borderRadius: '6px', fontSize: '12px' }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default App;