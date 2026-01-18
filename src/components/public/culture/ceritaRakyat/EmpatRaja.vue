<template>
  <main class="bg-slate-50 dark:bg-slate-950 min-h-screen">
    <!-- Hero / header artikel -->
    <section
      class="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white px-4 py-10 sm:py-14 dark:border-slate-800 dark:from-slate-950 dark:to-slate-900"
    >
      <!-- Glow background -->
      <div class="pointer-events-none absolute inset-0 opacity-60">
        <div
          class="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-500/20"
        ></div>
        <div
          class="absolute right-[-4rem] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-500/15"
        ></div>
      </div>

      <div
        class="relative mx-auto flex max-w-5xl flex-col gap-6 lg:flex-row lg:items-center"
      >
        <!-- Info utama -->
        <div class="flex-1">
          <div
            class="mb-4 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400"
          >
            <span
              class="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-medium text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-200"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Cerita Rakyat di Daerah Raja Empat
            </span>
            <span>•</span>
            <span>8 menit baca</span>
            <span>•</span>
            <span>42x dibaca</span>
          </div>

          <h1
            class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white"
          >
            Empat Raja
          </h1>

          <p
            class="mt-4 max-w-2xl text-sm text-slate-600 sm:text-base dark:text-slate-300"
          >
            Berawal dari penemuan enam butir telur yang berkembang menjadi empat
            pulau tersohor di tanah Papua, Raja Ampat.
          </p>

          <!-- Meta kecil -->
          <div
            class="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400"
          >
            <div class="inline-flex items-center gap-2">
              <span
                class="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-[11px] font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                CR
              </span>
              <span>Cerita Rakyat</span>
            </div>
            <span
              class="hidden h-4 w-px bg-slate-200 dark:bg-slate-700 sm:inline-block"
            ></span>
            <div class="flex gap-1">
              <span
                class="rounded-full bg-slate-100 px-2 py-0.5 dark:bg-slate-800"
                >#Raja Ampat</span
              >
              <span
                class="rounded-full bg-slate-100 px-2 py-0.5 dark:bg-slate-800"
                >#Cerita Rakyat</span
              >
            </div>
          </div>
        </div>

        <!-- Sisi kanan: gambar ilustrasi -->
        <div class="mt-4 w-full max-w-sm self-stretch lg:mt-0 lg:w-80">
          <div
            class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900"
          >
            <img
              src="https://indonesiakaya.com/wp-content/uploads/2023/09/IK_Papua_Header.jpeg"
              alt="Penakluk Naga"
              class="h-56 w-full object-cover sm:h-64"
            />
            <div
              class="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent"
            ></div>
            <div class="absolute inset-x-0 bottom-0 p-3 text-xs text-slate-100">
              <!-- <p class="font-bold text-emerald-600">Biwar Sang Penakluk Naga</p> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <main class="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div class="mx-auto max-w-7xl lg:flex gap-6 px-4 py-6">
        <!-- Sidebar Kiri -->
        <LeftSidebar />
        <!-- Konten utama artikel -->
        <section class="bg-slate-50 px-4 py-10 dark:bg-slate-950">
          <div class="mx-auto max-w-4xl">
            <!-- Outline / TOC kecil -->
            <Iam />
            <!-- Isi artikel dengan gambar -->
            <article
              class="prose prose-slate max-w-none prose-headings:scroll-mt-24 dark:prose-invert text-justify rounded-2xl border border-slate-200 bg-white/90 p-4 text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 sm:text-sm"
            >
              <h2>Pesona Raja Empat</h2>
              <p class="py-3">
                Empat Raja merupakan cerita dari Provinsi Papua Barat dengan
                latar gugusan pulau yang kini menjadi salah satu surga
                petualangan dunia. Dikenal sebagai Raja Ampat, situs ini terdiri
                dari empat pulau yang dikelilingi oleh wilayah perairan dan
                daratan seluas 4,6 juta hektar. Dengan ragam biodiversitas yang
                mencakup 540 jenis karang dan 1.511 spesies ikan, tak ayal, Raja
                Ampat disebut sebagai surga kekayaan biota laut.
              </p>
              <p class="py-3">
                Tak sekadar muncul begitu saja, Raja Ampat pun memiliki legenda
                asal-usulnya sendiri, yaitu empat bersaudara yang menjadi raja
                atas masing-masing pulau. Dikisahkan, kakak-beradik ini berasal
                dari enam butir telur yang ditemukan di hutan. Lima telur
                kemudian menetas menjadi anak manusia, lalu sisanya mengeras
                menjadi batu.
              </p>
              <p class="py-3">
                <i
                  >" Raja Ampat pun memiliki cerita asal-usulnya sendiri, yaitu
                  empat bersaudara yang menjadi raja atas masing-masing pulau.
                  "</i
                >
              </p>
              <p>
                Kisah Empat Raja terdiri dari sejumlah tokoh yang berandil besar
                dalam alur cerita. Pertama adalah kedua orangtua dari empat anak
                tersebut yang bersikap adil dan bijaksana. Selanjutnya, tentu
                saja empat anak lelaki bernama War, Betani, Dohar, dan Mohamad
                yang menjadi tokoh utama dari cerita ini. Tak kalah penting,
                sang anak perempuan yang bernama Pintolee juga disoroti kendati
                keputusan untuk menikahi lelaki pilihannya sehingga harus
                meninggalkan keluarganya. Terlepas dari konflik tersebut, bisa
                dibilang, seluruh karakter merupakan protagonis.
              </p>
              <p class="py-3">
                Berikut cerita lengkap tentang bagaimana enam butir telur itu
                ditemukan, hingga kelahiran para raja yang membangun pulau-pulau
                nan masyhur di Papua.
              </p>
              <h2 class="py-3">Penemuan Enam Butir Telur</h2>
              <p>
                Dahulu, ada cerita tentang sepasang suami istri di tanah Papua
                yang menanti-nantikan kehadiran anak. Meski tak kunjung diberi,
                keduanya tetap berdoa pada Tuhan setiap siang dan malam.
              </p>
              <p class="py-3">
                Suatu hari, suami istri tersebut pergi ke hutan untuk mencari
                kayu dan menjadikannya kayu bakar. Keduanya harus bergegas
                mencari sebelum musim hujan datang karena kayu-kayu di hutan
                akan menjadi basah dan tidak bisa dibakar. Namun sayang,
                persediaan kayu yang mereka dapatkan di hari itu masih sangat
                sedikit untuk menghadapi musim hujan.
              </p>
              <p>
                Diterpa kelelahan, suami dan istri ini kemudian beristirahat
                sejenak di tepi sungai yang bernama Sungai Waikeo. Ketika tengah
                beristirahat, mata sang suami tertuju pada sebuah lubang besar
                di sisi lain tepi sungai. Sang suami pun mendekati lubang
                tersebut dan terkejut ketika menemukan enam butir telur besar.
              </p>
              <p class="py-3">
                <i
                  >" Sang suami pun mendekati lubang tersebut dan terkejut
                  ketika menemukan enam butir telur besar. "</i
                >
              </p>

              <p>
                Sang suami memanggil istrinya yang tidak kalah terkejut.
                Keduanya lantas sepakat membawa pulang telur-telur tersebut.
                Mereka berpikir bahwa telur-telur ini mungkin bisa dijadikan
                persediaan makanan untuk dimasak di kemudian hari. Setibanya di
                rumah, telur-telur tersebut pun disimpan dengan baik.
              </p>
              <h2 class="pt-3">
                Enam Orang Anak Manusia Lahir dari Lima Butir Telur
              </h2>
              <p class="py-3">
                Keesokan harinya, kejutan lain menyambut suami istri tersebut.
                Ketika hendak menyiapkan hidangan, telur-telur tersebut justru
                menetas. Bukannya menetas menjadi unggas atau hewan lain,
                melainkan menjadi anak manusia. Dari enam butir telur, empat
                menetas menjadi anak laki-laki, satu orang anak perempuan, dan
                yang satu lagi mengeras menjadi sebuah batu. Lima orang anak
                muncul dalam balutan kain putih yang bersinar. Tatkala, inilah
                pertanda bahwa mereka diturunkan dari kayangan. Suami istri ini
                amat senang mendapati anak-anak tersebut dan merasa doanya telah
                dikabulkan Tuhan. Mereka pun berjanji kepada Tuhan untuk merawat
                dan membesarkan anak-anak mereka dengan baik. Keempat anak
                laki-laki diberi nama War, Betani, Dohar, dan Mohamad.
                Sementara, sang anak perempuan diberi nama Pintolee.
              </p>

              <p class="pb-3">
                <i
                  >" Dari enam butir telur, empat menetas menjadi anak
                  laki-laki, satu orang anak perempuan, dan yang satu lagi
                  mengeras menjadi sebuah batu. "</i
                >
              </p>
              <p>
                Waktu berlalu, kelima anak tersebut semakin beranjak besar. War,
                Betani, Dohar, Mohamad, dan Pintolee dikenal sebagai anak-anak
                yang rajin bekerja dan berbakti. Semakin dewasa, kelimanya
                semakin giat membantu kedua orang tuanya agar tidak perlu
                bekerja dengan susah payah. Lahan pertanian yang mereka kerjakan
                menjadi makmur dan berkembang sampai ke empat pulau besar di
                sekitar Teluk Kabui. Oleh karena itu, bukan hanya kedua orang
                tuanya, masyarakat desa dan sekitarnya turut mengagumi kebaikan
                anak-anak ini.
              </p>

              <h2 class="py-3">Perginya Sang Saudara Perempuan</h2>
              <p>
                Tanggung jawab apapun yang diberikan orang tua pada anak-anak
                selalu dijalankan dengan baik. Kepatuhan pada orang tua dan
                berguna bagi lingkungan membuat ayah dan ibu kelima anak-anak
                tersebut sangat bangga. Rasa sayang yang begitu besar pada
                kelima anaknya membuat sang ayah ingin meninggalkan warisan
                sebelum ajal menjemputnya. Kemudian, sang ayah mulai menyiapkan
                sebuah rencana besar untuk War, Betani, Dohar, Mohamad, dan
                Pintolee.
              </p>
              <p class="py-3">
                Di tengah kebahagiaan mereka, terjadi sesuatu yang membuat satu
                keluarga kecewa. Pintolee jatuh hati dengan seorang pemuda yang
                tidak disenangi oleh keluarganya. Meski pemuda pilihannya tidak
                direstui, Pintolee tetap bersikeras untuk melanjutkan
                hubungannya. Memilih untuk memegang teguh pilihan hidupnya,
                Pintolee dengan berat hati harus melepas hadiah yang sudah
                disiapkan ayahnya. Pintolee akhirnya pergi meninggalkan
                saudara-saudara dan kedua orangtuanya. Pintolee berlayar menaiki
                cangkang kerang besar yang terdampar hingga membawanya dan
                pemuda pilihannya di Pulau Numfor.
              </p>
              <h2>Hadiah dari Sang Ayah</h2>

              <p class="py-3">
                Meski kabar mengenai Pintolee sudah tersiar ke segala penjuru
                pulau, masyarakat desa dan sekitar tetap menaruh rasa simpati
                pada sang ayah dan ibu. Tentu saja, hal ini karena War, Betani,
                Dohar, dan Mohamad setia menjaga nama baik keluarga dengan
                mematuhi nasihat kedua orang tua mereka.
              </p>
              <p>
                Tahun silih berganti, sang ayah semakin beranjak renta. Tibalah
                hari yang sudah dinantikan sang ayah untuk keempat putranya.
                Sang ayah memanggil keempat anak laki-lakinya untuk membagikan
                warisan. Ternyata, masing-masing anak dihadiahkan satu pulau.
                War diberi Pulau Waigeo, Betani diberi Pulau Salawati, Dohar
                diberi Pulau Lilinta, dan Mohamad mendapatkan Pulau Waiga. Sang
                ayah berpesan agar mereka selalu menjaga pulau-pulau tersebut
                dan segala isinya dengan baik.
              </p>

              <p class="py-3">
                <i
                  >" War diberi Pulau Waigeo, Betani diberi Pulau Salawati,
                  Dohar diberi Pulau Lilinta, dan Mohamad mendapatkan Pulau
                  Waiga. "</i
                >
              </p>
              <h2>Empat Orang Raja Memimpin Empat Pulau</h2>
              <p class="py-3">
                Keempat anak-anak tersebut kemudian pergi dan menetap di
                masing-masing pulau yang telah dipercayakan oleh sang ayah.
                Semakin hari War, Betani, Dohar, dan Mohamad semakin dikenal
                sebagai sosok yang tekun dan bijaksana. Hingga sang ayah
                akhirnya meninggal dunia, keempatnya mampu menaati janji mereka.
                Bukan hanya nasihat orang tua, warisannya pun mereka jaga.
                Masing-masing anak tersebut berkuasa, bahkan menjadi raja atas
                pulaunya masing-masing. Pulau-pulau tersebut tumbuh subur dan
                makmur. Penduduk di sekitarnya juga hidup bahagia dan sejahtera.
                Dari sinilah kemudian lahir nama Raja Ampat. Empat orang raja
                yang berkuasa atas gugusan pulau yang subur dan sejahtera.
              </p>

              <p>
                <i
                  >" Empat orang raja yang berkuasa atas gugusan pulau yang
                  subur dan sejahtera. "</i
                >
              </p>

              <h2 class="py-3">Telur Istimewa</h2>
              <p>
                Sementara itu, sebutir telur yang menjadi batu, sampai hari ini
                masih dirawat dan dijaga oleh penduduk setempat. Batu itu juga
                diperlakukan oleh masyarakat sekitar layaknya seorang raja.
                Penduduk memberikan ruangan tempat bersemayam, lengkap dengan
                dewa penjaga berwujud dua batu tegak atau menhir yang diberi
                nama Man Moro dan Man Metem di sisi kanan dan kiri pintu masuk.
                Batu yang hingga kini masih di simpan di Situs Kali Raja itu
                diberi nama Batu Telur Raja. Untuk menjaga kesuciannya, batu
                bernama Kapatnai ini hanya dapat dilihat setahun sekali pada
                saat upacara penggantian kelambu dan pemandian yang hanya boleh
                dilakukan oleh keturunan raja.
              </p>

              <p class="py-3">
                <i
                  >"Batu yang hingga kini masih di simpan di Situs Kali Raja itu
                  diberi nama Batu Telur Raja. "</i
                >
              </p>
              <h2>Pesan Moral Cerita Empat Raja</h2>
              <p class="pt-3">
                Dari cerita Empat Raja, kita bisa belajar untuk menjadi anak
                yang berbakti, tekun, dan hormat pada orang tua. Tidak hanya
                itu, kita juga dapat melihat pentingnya kesetiaan menjaga
                kepercayaan orang lain, sebagaimana ditunjukkan oleh keempat
                anak di cerita ini. Buah ketaatan dan kesabaran tidaklah instan.
                Tetapi jika dijalankan dengan tekun, bukan hanya kita yang
                merasakan manfaatnya melainkan orang lain, lingkungan sekitar,
                bahkan masyarakat luas.
              </p>
              <section
                id="referensi"
                class="mt-14 border-t border-slate-200 pt-6 dark:border-slate-800"
              >
                <p class="text-xs text-slate-500 dark:text-slate-400">
                  Referensi cerita:
                  <a
                    href="https://indonesiakaya.com/pustaka-indonesia/cerita-rakyat-papua-empat-raja/"
                    target="_blank"
                    rel="noreferrer"
                    class="text-emerald-600 hover:underline dark:text-emerald-300"
                  >
                    Indonesiakaya.com – Cerita Rakyat Papua: Empat Raja
                  </a>
                </p>
              </section>
            </article>
          </div>
        </section>
        <RightSidebar />
      </div>
    </main>
  </main>
</template>

<script setup lang="ts">
import LeftSidebar from "../ceritaRakyat/LeftSidebar.vue";
// @ts-ignore
import RightSidebar from "../ceritaRakyat/RightSidebar.vue";
import Iam from "../../../../services/Iam.vue";
</script>
