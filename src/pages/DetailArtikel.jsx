import { useParams, Link } from 'react-router-dom';
import artikelData from "../data/artikelData.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import "./css/detailArtikel.css";

const articlesToShow = [1, 2, 3, 4];

export default function DetailArtikel() {
  const { id } = useParams();
  const artikel = artikelData.find((artikel) => artikel.id === parseInt(id));
  
  const filteredArticlesToShow = articlesToShow.filter(articleId => articleId !== parseInt(id));

  return (
    <main id='detailArtikel'>
      <section className="hero-section">
        <div className="container">
        <Link
			to="/artikel"
			className="d-flex align-items-center justify-content-start gap-2 mb-4">
			<FontAwesomeIcon
				icon={faArrowLeft}
				className="height-56"></FontAwesomeIcon>
			Kembali
		</Link>
          <h1>{artikel.judul}</h1>
        </div>
      </section>

      <section className='detail-section'>
        <div className='py-5'>
          <img src={artikel.gambar} className="rounded mx-auto d-block" alt={`Artikel ${artikel.id}`} />
        </div>

        {id === "1" && (
          <div className='id-artikel'>
            <h4 className='pb-3'>Bagaimana strategi untuk mengoptimalkan pengelolaan keuangan UMKM agar dapat mencapai keberhasilan finansial yang berkelanjutan?</h4>
            <ol>
                <li>Pemahaman yang Mendalam tentang Pengeluaran</li>
                <p> Langkah pertama dalam mengoptimalkan pengelolaan keuangan UMKM adalah memiliki pemahaman yang mendalam tentang semua pengeluaran. Identifikasi dengan jelas semua biaya operasional, termasuk biaya produksi, gaji karyawan, biaya pemasaran, dan biaya lainnya. Dengan memahami sumber daya keuangan yang diperlukan untuk menjalankan bisnis, Anda dapat membuat perencanaan keuangan yang lebih efektif.</p>
                <br />
                <li>Menerapkan Anggaran yang Ketat</li>
                <p>Anggaran yang ketat adalah alat penting untuk mengontrol pengeluaran dan mengarahkan dana ke area yang paling kritis. Tetapkan anggaran untuk setiap aspek bisnis, dan pertimbangkan untuk melakukan revisi berkala sesuai dengan kebutuhan dan perubahan kondisi pasar. Disiplin dalam mengikuti anggaran akan membantu mencegah pemborosan dan memastikan keberlanjutan keuangan.</p>
                <br />
                <li>Memanfaatkan Teknologi Keuangan</li>
                <p>Pemanfaatan teknologi keuangan, seperti perangkat lunak akuntansi dan aplikasi keuangan, dapat memberikan kemudahan dalam melacak transaksi, mengelola faktur, dan membuat laporan keuangan. Ini tidak hanya meningkatkan efisiensi tetapi juga memberikan visibilitas yang lebih baik terhadap kesehatan finansial bisnis.</p>
                <br />
                <li>Diversifikasi Sumber Pendapatan</li>
                <p>Untuk mengurangi risiko finansial, UMKM sebaiknya diversifikasi sumber pendapatan. Jangan terlalu bergantung pada satu produk atau layanan. Pertimbangkan untuk mengembangkan produk baru atau menawarkan layanan tambahan yang dapat menjangkau pasar yang lebih luas.</p>
                <br />
                <li>Pemantauan Terus-Menerus dan Evaluasi Kinerja Keuangan</li>
                <p>Lakukan pemantauan keuangan secara terus-menerus dan evaluasi kinerja keuangan secara berkala. Analisis rasio keuangan, profitabilitas, dan arus kas dapat memberikan wawasan yang berharga tentang kesehatan finansial bisnis. Dengan pemantauan yang cermat, Anda dapat mengidentifikasi potensi masalah lebih awal dan mengambil langkah-langkah korektif.</p>
                <br />
                <p className='pb-4'>Dengan menerapkan strategi ini, UMKM dapat mengoptimalkan pengelolaan keuangan mereka dan mencapai pertumbuhan yang berkelanjutan. Keberhasilan finansial bukan hanya tentang menghasilkan pendapatan, tetapi juga tentang bagaimana pendapatan tersebut dikelola dan dialokasikan untuk mencapai tujuan bisnis jangka panjang.</p>
            </ol>
          </div>
        )}

        {id === "2" && (
          <div className='id-artikel'>
            <p className='pb-3'>Usaha kecil adalah tulang punggung perekonomian, namun, mengelola keuangan untuk usaha kecil dapat menjadi tugas yang menantang. Artikel ini akan membahas lima cara efektif untuk mengatur keuangan usaha kecil Anda.</p>
            <ol>
                <h5><li>Pemahaman yang Mendalam tentang Pendapatan dan Pengeluaran</li></h5>
                <p>Langkah pertama dalam mengatur keuangan usaha kecil adalah memiliki pemahaman yang mendalam tentang pendapatan dan pengeluaran. Lacak dengan cermat sumber pendapatan dan identifikasi dengan jelas semua biaya operasional, termasuk gaji karyawan, biaya pemasaran, dan biaya lainnya.</p>
                <br />
                <h5><li>Pembuatan Anggaran yang Realistis</li></h5>
                <p>Buatlah anggaran yang realistis untuk mengontrol pengeluaran. Tetapkan batasan yang masuk akal untuk setiap aspek bisnis dan perbarui anggaran secara berkala. Dengan membuat anggaran yang ketat, Anda dapat menghindari pemborosan dan menjaga kestabilan keuangan usaha Anda.</p>
                <br />
                <h5><li>Pemanfaatan Teknologi Keuangan</li></h5>
                <p>Manfaatkan teknologi keuangan seperti perangkat lunak akuntansi dan aplikasi keuangan. Penggunaan teknologi ini dapat membantu Anda melacak transaksi, membuat laporan keuangan, dan memudahkan proses perpajakan. Dengan menggunakan teknologi, Anda dapat menghemat waktu dan mengurangi risiko kesalahan manusia.</p>
                <br />
                <h5><li>Diversifikasi Sumber Pendapatan</li></h5>
                <p>Diversifikasi sumber pendapatan dapat membantu mengurangi risiko keuangan. Jangan bergantung pada satu produk atau layanan saja. Pertimbangkan untuk mengembangkan produk baru atau menawarkan layanan tambahan. Hal ini dapat membantu menjaga keberlanjutan usaha Anda, terutama dalam menghadapi perubahan pasar.</p>
                <br />
                <h5><li>Pemantauan dan Evaluasi Rutin</li></h5>
                <p>Lakukan pemantauan keuangan secara rutin. Analisis rasio keuangan, profitabilitas, dan arus kas dapat memberikan wawasan yang berharga. Dengan memantau dan mengevaluasi secara berkala, Anda dapat mengidentifikasi masalah potensial lebih awal dan mengambil tindakan korektif sebelum menjadi lebih serius.</p>
                <br />
                <p className='pb-4'>Mengatur keuangan untuk usaha kecil membutuhkan perencanaan dan pengelolaan yang efektif. Dengan menerapkan lima cara di atas, Anda dapat meningkatkan kontrol keuangan dan menciptakan fondasi yang kuat untuk pertumbuhan bisnis Anda.</p>
            </ol>
          </div>
        )}

        {id === "3" && (
          <div className='id-artikel'>
          <h4 className='pb-3'>Strategi Membangun Dana Darurat Bisnis: Menjaga Keberlanjutan Usaha dalam Kondisi Krisis</h4>
          <p className='pb-3'>Dalam dunia bisnis yang penuh dengan ketidakpastian, memiliki dana darurat bisnis menjadi krusial untuk menjaga kelangsungan operasional dan keberlanjutan usaha. Dana darurat bisnis berfungsi sebagai lapisan keamanan yang memberikan perlindungan finansial saat menghadapi situasi darurat atau krisis tak terduga.</p>
          <ol>
              <h5><li>Mengidentifikasi Kebutuhan Dana Darurat</li></h5>
              <p>Langkah pertama dalam membangun dana darurat bisnis adalah mengidentifikasi kebutuhan finansial yang mungkin timbul dalam skenario terburuk. Perhitungkan biaya operasional bulanan, gaji karyawan, pembayaran sewa, dan tagihan rutin lainnya. Proses ini akan membantu menetapkan target jumlah dana darurat yang perlu dikumpulkan.</p>
              <br />
              <h5><li>Mengalokasikan Dana Secara Berkala</li></h5>
              <p>Setelah menetapkan target jumlah dana darurat, langkah selanjutnya adalah mengalokasikan dana secara berkala. Tentukan jumlah yang akan dialokasikan setiap bulan untuk membangun dana darurat. Konsistensi dalam alokasi dana akan membantu mencapai target lebih cepat.</p>
              <br />
              <h5><li>Menentukan Investasi yang Aman</li></h5>
              <p>Dalam memilih tempat penyimpanan dana darurat, fokus pada investasi yang aman dan likuid. Pilihan yang umum termasuk tabungan bisnis, deposito, atau instrumen keuangan dengan risiko rendah. Pastikan dana dapat diakses dengan cepat ketika diperlukan.</p>
              <br />
              <h5><li>Menyusun Rencana Krisis</li></h5>
              <p>Selain dana darurat finansial, penyusunan rencana krisis juga penting. Rencana ini mencakup langkah-langkah yang akan diambil saat menghadapi krisis, termasuk pengelolaan karyawan, restrukturisasi keuangan, dan strategi pemasaran yang tepat.</p>
              <br />
              <h5><li>Memonitor dan Menilai Secara Berkala</li></h5>
              <p>Penting untuk terus memonitor dan menilai keefektifan dana darurat secara berkala. Tinjau kembali rencana krisis, perbarui target dana darurat jika ada perubahan dalam bisnis, dan pastikan bahwa dana tetap sesuai dengan kebutuhan aktual.</p>
              <br />
              <p className='pb-4'>Membangun dana darurat bisnis bukan hanya tugas sekali jalan, melainkan suatu proses yang berkelanjutan. Keberadaan dana darurat akan memberikan ketenangan pikiran kepada pemilik bisnis, memungkinkan mereka fokus pada strategi pertumbuhan jangka panjang tanpa khawatir terhadap ketidakpastian eksternal. Dengan langkah-langkah yang tepat, setiap bisnis dapat membangun fondasi keuangan yang kuat untuk menghadapi masa depan dengan percaya diri.</p>
          </ol>
        </div>
        )}

        {id === "4" && (
          <div className='id-artikel'>
          <h4 className='pb-3'>Mengoptimalkan Keuangan Bisnis dengan Teknologi: Strategi dan Tips</h4>
          <p className='pb-3'>Pada era digital ini, penggunaan teknologi menjadi kunci bagi pebisnis usaha menengah kebawah untuk meningkatkan efisiensi dan ketepatan dalam pengelolaan keuangan. Berikut adalah beberapa cara efektif untuk memanfaatkan teknologi guna meraih keberhasilan finansial bisnis Anda:</p>
          <ol>
              <h5><li>Pilih Aplikasi Keuangan yang Tepat</li></h5>
              <p>Mulailah dengan memilih aplikasi keuangan yang sesuai dengan kebutuhan bisnis Anda. Aplikasi ini dapat membantu dalam pelacakan pengeluaran, pembuatan laporan keuangan, dan manajemen inventaris. Pastikan untuk memilih aplikasi yang mudah digunakan dan dapat diintegrasikan dengan sistem lain yang Anda gunakan.</p>
              <br />
              <h5><li>Otomatisasi Proses Keuangan</li></h5>
              <p>Manfaatkan fitur otomatisasi dalam perangkat lunak akuntansi Anda. Proses pembayaran tagihan, pembukuan, dan pemantauan kas dapat diotomatisasi untuk mengurangi beban kerja manual. Dengan otomatisasi, Anda dapat menghindari kesalahan manusia dan fokus pada kegiatan strategis lainnya.</p>
              <br />
              <h5><li>Implementasikan Cloud Accounting</li></h5>
              <p>Pertimbangkan untuk menggunakan sistem akuntansi berbasis cloud. Ini memungkinkan akses data keuangan dari mana saja, memudahkan kolaborasi tim, dan meningkatkan keamanan data. Sistem berbasis cloud juga sering kali memperbarui diri secara otomatis, memastikan Anda menggunakan versi terbaru tanpa harus melakukan pembaruan manual.</p>
              <br />
              <h5><li>Analisis Data untuk Pengambilan Keputusan</li></h5>
              <p>Teknologi memungkinkan analisis data yang mendalam tentang kinerja keuangan bisnis. Manfaatkan alat analisis untuk melacak tren, mengidentifikasi peluang, dan mengenali area yang memerlukan perhatian khusus. Analisis data dapat menjadi dasar untuk pengambilan keputusan yang lebih baik.</p>
              <br />
              <h5><li>Keamanan Data yang Kuat</li></h5>
              <p>Dengan meningkatnya penggunaan teknologi, keamanan data menjadi kritis. Pastikan untuk mengimplementasikan langkah-langkah keamanan yang kuat untuk melindungi informasi keuangan bisnis Anda. Gunakan enkripsi, atur izin akses, dan lakukan backup data secara teratur.</p>
              <br />
              <h5><li>Pelatihan dan Pemeliharaan</li></h5>
              <p>Agar implementasi teknologi sukses, berikan pelatihan kepada tim Anda untuk menggunakan perangkat lunak atau aplikasi baru. Selain itu, pastikan untuk melakukan pemeliharaan rutin dan pembaruan untuk memastikan bahwa teknologi yang digunakan tetap berjalan dengan optimal.</p>
              <br />
              <h5><li>Konsultasi dengan Profesional IT</li></h5>
              <p>Jika Anda merasa kesulitan atau ingin memastikan penggunaan teknologi yang optimal, pertimbangkan untuk berkonsultasi dengan profesional IT atau konsultan keuangan. Mereka dapat memberikan panduan khusus sesuai dengan kebutuhan bisnis Anda.</p>
              <br />
              <p className='pb-4'>Mengintegrasikan teknologi dalam pengelolaan keuangan bisnis dapat membawa banyak manfaat, mulai dari efisiensi operasional hingga pengambilan keputusan yang lebih baik. Dengan mengikuti langkah-langkah di atas, pebisnis dapat memanfaatkan teknologi secara efektif untuk mencapai keberhasilan keuangan bisnis mereka.</p>
          </ol>
        </div>
        )}
      </section>
      
      <section className="article-cards-section">
        <div className="container">
            <h2 className='pb-1'>Artikel Lainnya</h2>
          <div className="row">
            {filteredArticlesToShow.map((articleId) => {
              const article = artikelData.find((artikel) => artikel.id === articleId);
              return (
                <div key={article.id} className="col-md-4 mb-4">
                  <div className="card ">
                    <img src={article.gambar} className="card-img-top" alt={`Artikel ${article.id}`} />
                    <div className="card-body">
                      <h6>{article.judul}</h6>
                    </div>
                    <div className="card-footer text-center">
                      <Link to={`/detail/${article.id}`} className="btn btn-primary ">
                        Baca 
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="hero2">
        <div className="container text-center ">
          <h3 className="text-white px-5 pb-3">
            Buka Kesuksesan Finansial Anda Sekarang Bersama Bijakcuan
          </h3>
          <Link to={"/program"} className="btn btn-primary">
            Gabung Sekarang
          </Link>
        </div>
      </div>

    </main>
  );
}
