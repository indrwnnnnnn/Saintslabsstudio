import React from 'react';
import './App.css';
import { FiShare } from 'react-icons/fi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';
import { TbAsterisk } from 'react-icons/tb';
import logoSls from './assets/logo-sls.png';

function App() {
  // Data tombol-tombol link
  const links = [
    { id: 1, title: 'SHOPEE', subtitle: '', url: 'https://id.shp.ee/ykGnFRN' },
    { id: 2, title: 'WHATSAPP', subtitle: '', url: 'https://wa.me/081252573288' },
    {
      id: 3,
      title: 'LOCATION',
      subtitle: 'Kambu,Kec. Kambu, Kota Kendari, Sulawesi Tenggara',
      url: 'https://maps.app.goo.gl/6yPJ1U3bzip3BTqv7?g_st=ic'
    },
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Saints Labs Studio',
        text: 'Cek link Saints Labs Studio di sini!',
        url: window.location.href,
      }).catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link berhasil disalin ke clipboard!');
    }
  };

  return (
    <div className="container">

      {/* Header Atas (Ikon Bintang & Ikon Share) */}
      <header className="header">
        <div className="icon-circle">
          <TbAsterisk size={22} />
        </div>
        <div className="icon-circle" onClick={handleShare}>
          <FiShare size={20} />
        </div>
      </header>

      {/* Bagian Profil */}
      <section className="profile-section">
        <div className="profile-pic">
          <img src={logoSls} alt="Saint Labs Logo" className="logo-img" />
        </div>
        <h1 className="username">@Saintslabsstudio</h1>
      </section>

      {/* Bagian Tombol Link */}
      <section className="links-section">
        {links.map((link) => (
          <a key={link.id} href={link.url} className="link-card" target="_blank" rel="noopener noreferrer">
            <div className="link-content">
              <p className="link-title">{link.title}</p>
              {link.subtitle && (
                <p className="link-subtitle">
                  <IoLocationSharp className="location-icon" /> {link.subtitle}
                </p>
              )}
            </div>
            <BsThreeDotsVertical className="dots-icon" size={20} />
          </a>
        ))}
      </section>



      {/* Bagian Footer */}
      <footer className="footer">
        <p>T-Shirt Preferences • Report • Privacy</p>
        <p>Explore</p>
      </footer>

    </div>
  );
}

export default App;