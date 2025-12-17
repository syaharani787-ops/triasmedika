'use client'

import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
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
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-blue-600" size={40} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Kebijakan Privasi <span className="text-blue-600">PT TRIAS MEDIKA TANGERANG</span>
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
                <Eye className="text-blue-600 mr-3" size={24} />
                Pendahuluan
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Selamat datang di PT TRIAS MEDIKA TANGERANG. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat Anda menggunakan layanan kami.
              </p>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
                <Database className="text-blue-600 mr-3" size={24} />
                Pengumpulan Data
              </h2>
              <p className="text-slate-600 mb-4">Kami dapat mengumpulkan jenis informasi berikut:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li><strong>Informasi Pribadi:</strong> Nama, alamat email, nomor telepon, alamat pengiriman</li>
                <li><strong>Informasi Transaksi:</strong> Riwayat pembelian, produk yang dipesan, metode pembayaran</li>
                <li><strong>Informasi Teknis:</strong> Alamat IP, jenis browser, waktu akses, informasi perangkat</li>
                <li><strong>Informasi Kontak:</strong> Data yang Anda berikan saat menghubungi kami</li>
              </ul>
            </section>

            {/* Data Usage */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
                <UserCheck className="text-blue-600 mr-3" size={24} />
                Penggunaan Data
              </h2>
              <p className="text-slate-600 mb-4">Kami menggunakan informasi yang dikumpulkan untuk:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Memproses dan menyelesaikan transaksi pembelian</li>
                <li>Menyediakan layanan pelanggan dan dukungan teknis</li>
                <li>Mengirimkan informasi produk dan penawaran khusus</li>
                <li>Meningkatkan kualitas produk dan layanan kami</li>
                <li>Memenuhi kewajiban hukum dan peraturan yang berlaku</li>
                <li>Mencegah aktivitas penipuan dan keamanan sistem</li>
              </ul>
            </section>

            {/* Data Protection */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
                <Lock className="text-blue-600 mr-3" size={24} />
                Perlindungan Data
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Kami menerapkan berbagai langkah keamanan untuk melindungi informasi pribadi Anda, termasuk enkripsi data, 
                akses terbatas ke informasi pribadi, dan pemantauan keamanan berkelanjutan. Namun, kami tidak dapat menjamin 
                keamanan absolut transmisi data melalui internet.
              </p>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Berbagi Data</h2>
              <p className="text-slate-600 mb-4">Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga, kecuali:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Dengan persetujuan eksplisit dari Anda</li>
                <li>Untuk memenuhi persyaratan hukum atau perintah pengadilan</li>
                <li>Dengan mitra layanan yang membantu kami mengoperasikan bisnis (misalnya jasa pengiriman)</li>
                <li>Untuk melindungi hak, properti, atau keselamatan kami atau pihak lain</li>
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Kebijakan Cookie</h2>
              <p className="text-slate-600 leading-relaxed">
                Website kami dapat menggunakan cookie untuk meningkatkan pengalaman pengguna. Cookie adalah file kecil yang disimpan 
                di browser Anda. Anda dapat menonaktifkan cookie melalui pengaturan browser Anda.
              </p>
            </section>

            {/* User Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Hak Pengguna</h2>
              <p className="text-slate-600 mb-4">Sebagai pengguna, Anda memiliki hak untuk:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Mengakses dan memperbarui informasi pribadi Anda</li>
                <li>Minta penghapusan data pribadi Anda</li>
                <li>Menolak pemasaran langsung dari kami</li>
                <li>Meminta salinan data pribadi yang kami simpan</li>
              </ul>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Perubahan Kebijakan</h2>
              <p className="text-slate-600 leading-relaxed">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui website kami 
                atau email. Penggunaan layanan kami yang berkelanjutan setelah perubahan berarti Anda menerima kebijakan yang diperbarui.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Informasi Kontak</h2>
              <p className="text-slate-600 mb-4">Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami:</p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-slate-700"><strong>PT TRIAS MEDIKA TANGERANG</strong></p>
                <p className="text-slate-600">Email: privacy@triasmedikatangerang.com</p>
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