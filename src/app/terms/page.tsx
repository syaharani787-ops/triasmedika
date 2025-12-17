'use client'

import { ArrowLeft, FileText, ShoppingCart, AlertCircle, CheckCircle, Clock, Shield, Truck } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-4">
                <img src="/logo.png" alt="PT TRIAS MEDIKA TANGERANG" className="h-10 w-auto" />
                <div>
                  <h1 className="text-lg md:text-xl font-bold text-slate-800">PT TRIAS MEDIKA TANGERANG</h1>
                  <p className="text-xs text-slate-600 hidden md:block">Perdagangan Eceran Alat Tulis Menulis dan Gambar</p>
                </div>
              </Link>
            </div>
            
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-slate-700 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="hidden md:inline">Kembali ke Beranda</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="text-green-600" size={40} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Syarat & Ketentuan <span className="text-blue-600">PT TRIAS MEDIKA TANGERANG</span>
            </h1>
            <p className="text-slate-600 text-lg">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
                <FileText className="text-blue-600 mr-3" size={24} />
                Pendahuluan
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Selamat datang di PT TRIAS MEDIKA TANGERANG. Syarat dan Ketentuan ini mengatur penggunaan layanan kami, 
                pembelian produk, dan interaksi Anda dengan perusahaan kami. Dengan menggunakan layanan kami, Anda setuju 
                untuk mematuhi syarat dan ketentuan ini.
              </p>
            </section>

            {/* General Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
                <Shield className="text-blue-600 mr-3" size={24} />
                Ketentuan Umum
              </h2>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Usia minimum untuk menggunakan layanan kami adalah 18 tahun atau dengan persetujuan orang tua/wali</li>
                <li>Anda bertanggung jawab untuk menjaga kerahasiaan informasi akun Anda</li>
                <li>Anda setuju untuk tidak menggunakan layanan kami untuk tujuan ilegal atau tidak sah</li>
                <li>Kami berhak menolak layanan kepada siapa pun dengan alasan apa pun</li>
                <li>Harga produk dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya</li>
              </ul>
            </section>

            {/* Products and Services */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
                <ShoppingCart className="text-blue-600 mr-3" size={24} />
                Produk dan Layanan
              </h2>
              <p className="text-slate-600 mb-4">Kami menyediakan berbagai produk alat tulis, menulis, dan gambar dengan ketentuan:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Semua produk yang dijual adalah asli dan berkualitas</li>
                <li>Stok produk dapat berubah sewaktu-waktu</li>
                <li>Kami berusaha untuk menyajikan informasi produk yang akurat, namun tidak menjamin 100% akurasi</li>
                <li>Warna produk mungkin sedikit berbeda karena faktor pencahayaan dan monitor</li>
                <li>Beberapa produk mungkin memiliki batasan pembelian</li>
              </ul>
            </section>

            {/* Ordering and Payment */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
                <CheckCircle className="text-blue-600 mr-3" size={24} />
                Pemesanan dan Pembayaran
              </h2>
              <p className="text-slate-600 mb-4">Prosedur pemesanan dan pembayaran:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Pemesanan dapat dilakukan melalui telepon, email, atau langsung ke toko</li>
                <li>Pembayaran dapat dilakukan tunai, transfer bank, atau metode lain yang disetujui</li>
                <li>Harga belum termasuk biaya pengiriman (jika ada)</li>
                <li>Pembayaran harus diselesaikan sebelum produk dikirim</li>
                <li>Kami berhak membatalkan pesanan jika pembayaran tidak diterima dalam waktu yang ditentukan</li>
              </ul>
            </section>

            {/* Shipping and Delivery */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
                <Truck className="text-blue-600 mr-3" size={24} />
                Pengiriman dan Pengantaran
              </h2>
              <p className="text-slate-600 mb-4">Kebijakan pengiriman dan pengantaran:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Pengiriman hanya tersedia untuk wilayah tertentu</li>
                <li>Biaya pengiriman dihitung berdasarkan jarak dan berat produk</li>
                <li>Waktu pengiriman perkiraan 1-3 hari kerja tergantung lokasi</li>
                <li>Kami tidak bertanggung jawab atas keterlambatan pengiriman yang disebabkan oleh pihak ketiga</li>
                <li>Penerima harus memeriksa kondisi produk saat menerima pengiriman</li>
              </ul>
            </section>

            {/* Returns and Refunds */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
                <AlertCircle className="text-blue-600 mr-3" size={24} />
                Pengembalian dan Pengembalian Dana
              </h2>
              <p className="text-slate-600 mb-4">Kebijakan pengembalian dan pengembalian dana:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Pengembalian dapat dilakukan dalam waktu 7 hari sejak pembelian</li>
                <li>Produk harus dalam kondisi asli dan belum digunakan</li>
                <li>Produk yang dikembalikan karena cacat produksi akan diganti atau uang dikembalikan penuh</li>
                <li>Biaya pengiriman untuk pengembalian ditanggung oleh pembeli (kecuali produk cacat)</li>
                <li>Pengembalian dana akan diproses dalam waktu 3-5 hari kerja</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Hak Kekayaan Intelektual</h2>
              <p className="text-slate-600 leading-relaxed">
                Semua konten di website kami, termasuk teks, gambar, logo, dan desain, dilindungi oleh hak kekayaan intelektual. 
                Anda tidak diperbolehkan menyalin, mendistribusikan, atau menggunakan konten kami tanpa izin tertulis dari PT TRIAS MEDIKA TANGERANG.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Batasan Tanggung Jawab</h2>
              <p className="text-slate-600 leading-relaxed">
                PT TRIAS MEDIKA TANGERANG tidak bertanggung jawab atas kerugian langsung atau tidak langsung yang timbul dari 
                penggunaan layanan kami, kecuali yang disebabkan oleh kelalaian berat atau kesengajaan dari pihak kami.
              </p>
            </section>

            {/* Force Majeure */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
                <AlertCircle className="text-blue-600 mr-3" size={24} />
                Force Majeure
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Kami tidak bertanggung jawab atas keterlambatan atau kegagalan dalam melaksanakan kewajiban kami jika disebabkan 
                oleh kejadian di luar kendali kami, termasuk tetapi tidak terbatas pada bencana alam, perang, pemogokan, atau gangguan pemerintah.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
                <Clock className="text-blue-600 mr-3" size={24} />
                Perubahan Syarat dan Ketentuan
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Kami berhak mengubah Syarat dan Ketentuan ini kapan saja. Perubahan akan berlaku efektif segera setelah dipublikasikan 
                di website kami. Penggunaan layanan kami yang berkelanjutan berarti Anda menerima perubahan tersebut.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Hukum yang Berlaku</h2>
              <p className="text-slate-600 leading-relaxed">
                Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. 
                Setiap sengketa akan diselesaikan melalui perundingan atau melalui pengadilan yang berwenang di wilayah Tangerang.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Informasi Kontak</h2>
              <p className="text-slate-600 mb-4">Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:</p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-slate-700"><strong>PT TRIAS MEDIKA TANGERANG</strong></p>
                <p className="text-slate-600">Email: info@triasmedikatangerang.com</p>
                <p className="text-slate-600">Telepon: 0823-1059-8347</p>
                <p className="text-slate-600">
                  Alamat: Jalan Raya Pasarkemis, Kampung Picung, Kel. Pasar Kemis, Kec. Pasar Kemis, Kab. Tangerang, Prov. Banten
                </p>
              </div>
            </section>
          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-8">
            <Link 
              href="/" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center space-x-2"
            >
              <ArrowLeft size={20} />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-4 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-slate-300">
            © 2024 PT TRIAS MEDIKA TANGERANG. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}