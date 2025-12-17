'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Package, Truck, Shield, Clock } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <img src="/logo.png" alt="PT TRIAS MEDIKA TANGERANG" className="h-12 w-auto" />
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-slate-800">PT TRIAS MEDIKA TANGERANG</h1>
                <p className="text-sm text-slate-600 hidden md:block">Perdagangan Eceran Alat Tulis Menulis dan Gambar</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#products" className="text-slate-700 hover:text-blue-600 transition-colors">Produk</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">Kontak</a>
              <a href="/privacy" className="text-slate-700 hover:text-blue-600 transition-colors">Privasi</a>
              <a href="/terms" className="text-slate-700 hover:text-blue-600 transition-colors">Syarat & Ketentuan</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-slate-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-2">
                <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors py-2">Beranda</a>
                <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors py-2">Tentang</a>
                <a href="#products" className="text-slate-700 hover:text-blue-600 transition-colors py-2">Produk</a>
                <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors py-2">Kontak</a>
                <a href="/privacy" className="text-slate-700 hover:text-blue-600 transition-colors py-2">Privasi</a>
                <a href="/terms" className="text-slate-700 hover:text-blue-600 transition-colors py-2">Syarat & Ketentuan</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
            Selamat Datang di <span className="text-blue-600">PT TRIAS MEDIKA TANGERANG</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Solusi Terpercaya untuk Kebutuhan Alat Tulis, Menulis, dan Gambar Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#products" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Lihat Produk Kami
            </a>
            <a 
              href="#contact" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="text-blue-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Produk Lengkap</h3>
              <p className="text-slate-600">Berbagai macam alat tulis dan gambar berkualitas</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-green-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Pengiriman Cepat</h3>
              <p className="text-slate-600">Pengantaran produk tepat waktu dan aman</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-purple-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Kualitas Terjamin</h3>
              <p className="text-slate-600">Produk berkualitas dengan harga terjangkau</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-orange-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Layanan 24/7</h3>
              <p className="text-slate-600">Siap melayani kebutuhan Anda kapan saja</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Tentang <span className="text-blue-600">PT TRIAS MEDIKA TANGERANG</span>
              </h2>
              <p className="text-slate-600 mb-4">
                PT TRIAS MEDIKA TANGERANG adalah perusahaan yang bergerak di bidang perdagangan eceran alat tulis, menulis, dan gambar. 
                Kami telah berpengalaman dalam menyediakan berbagai kebutuhan stationery untuk pelanggan di wilayah Tangerang dan sekitarnya.
              </p>
              <p className="text-slate-600 mb-4">
                Dengan komitmen terhadap kualitas dan kepuasan pelanggan, kami menjadi mitra terpercaya untuk kebutuhan alat tulis 
                dan perlengkapan kantor maupun sekolah.
              </p>
              <div className="space-y-2">
                <p className="text-slate-700 font-semibold">Lokasi Strategis:</p>
                <p className="text-slate-600">
                  Jalan Raya Pasarkemis, Kampung Picung, Kel. Pasar Kemis, Kec. Pasar Kemis, Kab. Tangerang, Prov. Banten
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-green-100 p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100+</div>
                  <p className="text-slate-600">Jenis Produk</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">1000+</div>
                  <p className="text-slate-600">Pelanggan Puas</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">5+</div>
                  <p className="text-slate-600">Tahun Pengalaman</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">24/7</div>
                  <p className="text-slate-600">Layanan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">
            Produk <span className="text-blue-600">Unggulan Kami</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-blue-200 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Package className="text-blue-700" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Alat Tulis Kantor</h3>
              <p className="text-slate-600">Pulpen, pensil, spidol, stabilo, dan berbagai alat tulis kantor lainnya.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-green-200 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Package className="text-green-700" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Kertas & Buku</h3>
              <p className="text-slate-600">Berbagai jenis kertas, buku tulis, buku gambar, dan perlengkapan kertas lainnya.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-purple-200 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Package className="text-purple-700" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Alat Gambar</h3>
              <p className="text-slate-600">Pensil gambar, penggaris, jangka, dan berbagai alat gambar profesional.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-orange-200 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Package className="text-orange-700" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Perlengkapan Sekolah</h3>
              <p className="text-slate-600">Tas, tempat pensil, penghapus, dan perlengkapan sekolah lengkap lainnya.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-red-200 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Package className="text-red-700" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Peralatan Kantor</h3>
              <p className="text-slate-600">Stapler, hole punch, cutter, dan berbagai peralatan kantor lainnya.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-indigo-200 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Package className="text-indigo-700" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Aksesoris Stationery</h3>
              <p className="text-slate-600">Berbagai aksesoris dan perlengkapan tambahan untuk kebutuhan stationery Anda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">
            Hubungi <span className="text-blue-600">Kami</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <Phone className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Telepon</p>
                    <p className="text-slate-600">0823-1059-8347</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <Mail className="text-green-600" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Email</p>
                    <p className="text-slate-600">info@triasmedikatangerang.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <MapPin className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Alamat</p>
                    <p className="text-slate-600">
                      Jalan Raya Pasarkemis, Kampung Picung, Kel. Pasar Kemis, Kec. Pasar Kemis, Kab. Tangerang, Prov. Banten
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Jam Operasional</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Senin - Jumat</span>
                  <span className="font-semibold text-slate-800">08:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Sabtu</span>
                  <span className="font-semibold text-slate-800">08:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Minggu</span>
                  <span className="font-semibold text-slate-800">Tutup</span>
                </div>
              </div>
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-slate-700">
                  <span className="font-semibold">Catatan:</span> Kami juga melayani pesanan khusus di luar jam operasional untuk kebutuhan mendesak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <img src="/logo.png" alt="PT TRIAS MEDIKA TANGERANG" className="h-10 w-auto" />
                <h3 className="text-xl font-bold">PT TRIAS MEDIKA TANGERANG</h3>
              </div>
              <p className="text-slate-300">
                Perdagangan Eceran Alat Tulis Menulis dan Gambar
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-slate-300 hover:text-white transition-colors">Beranda</a></li>
                <li><a href="#about" className="text-slate-300 hover:text-white transition-colors">Tentang</a></li>
                <li><a href="#products" className="text-slate-300 hover:text-white transition-colors">Produk</a></li>
                <li><a href="#contact" className="text-slate-300 hover:text-white transition-colors">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-slate-300 hover:text-white transition-colors">Kebijakan Privasi</a></li>
                <li><a href="/terms" className="text-slate-300 hover:text-white transition-colors">Syarat & Ketentuan</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-300">
              © 2024 PT TRIAS MEDIKA TANGERANG. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}