<template>
  <main class="bg-slate-50 dark:bg-slate-950 min-h-screen mt-5">
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
              Cerita Rakyat Mimika
            </span>
            <span>•</span>
            <span>8 menit baca</span>
            <span>•</span>
            <span>42x dibaca</span>
          </div>

          <h1
            class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white"
          >
            Biwar Sang Penakluk Naga
          </h1>

          <p
            class="mt-4 max-w-2xl text-sm text-slate-600 sm:text-base dark:text-slate-300"
          >
            Kisah seorang pemuda berani asal Papua yang pantang menyerah
            menghadapi rintangan demi melindungi ibunya dan kampung halaman dari
            naga penunggu sungai.
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
                >#Mimika</span
              >
              <span
                class="rounded-full bg-slate-100 px-2 py-0.5 dark:bg-slate-800"
                >#Biwar</span
              >
              <span
                class="rounded-full bg-slate-100 px-2 py-0.5 dark:bg-slate-800"
                >#Penakluk Naga</span
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
              src="https://indonesiakaya.com/wp-content/uploads/2024/11/IK_Papua_Header.jpeg"
              alt="Penakluk Naga"
              class="h-56 w-full object-cover sm:h-64"
            />
            <div
              class="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent"
            ></div>
            <div class="absolute inset-x-0 bottom-0 p-3 text-xs text-slate-100">
              <p class="font-bold text-emerald-600">Biwar Sang Penakluk Naga</p>
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
              <h2>Pesona Papua dan Mimika</h2>
              <p class="py-3">
                selain terkenal akan pesona alamnya, Papua juga memiliki
                cerita-cerita daerah yang mewarnai sastra Nusantara. Bahkan,
                Raja Ampat yang memesona dengan keindahan lautannya pun memiliki
                legenda di balik terbentuknya. Cerita rakyat lainnya berasal
                dari Mimika, kabupaten yang terkenal dengan keragaman kuliner
                sagu sebagai pilihan makanan pokok bertekstur legit dan tinggi
                serat..
              </p>
              <p class="pb-3">
                Sejak dulu, salah satu kegiatan penduduk Mimika adalah memangkur
                sagu dari pohon rumbia. Bisa dikatakan, seluruh penduduk Mimika
                (baik laki-laki maupun perempuan) memiliki keahlian memangkur
                sagu dari pohon-pohon yang tumbuh di sepanjang aliran sungai.
                Maka, tak heran bila banyak kisah asal Papua yang menggunakan
                sungai dan sagu sebagai latar ceritanya—tak terkecuali cerita
                rakyat yang berjudul
                <i>Biwar Sang Penakluk Naga.</i>
              </p>

              <h2 class="py-3">Awal Mula Kemunculan Naga</h2>
              <p>
                Alkisah, ada sebuah kampung kecil di Mimika. Kehidupan di sana
                berlangsung aman dan tenteram, dengan warga yang hidup rukun dan
                sejahtera. Setiap harinya, penduduk mencari pohon sagu di hutan
                dan mengambil sari patinya untuk dijadikan bahan makanan.
                Biasanya, para lelaki bertugas untuk mencari pohon sagu,
                sementara para wanita bertugas untuk mengolah sagu menjadi
                hidangan lezat.
              </p>
              <p class="py-3">
                <i
                  >" Biasanya, para lelaki bertugas untuk mencari pohon sagu,
                  sementara para wanita bertugas untuk mengolah sagu menjadi
                  hidangan lezat. "</i
                >
              </p>
              <p>
                Pada suatu hari, persediaan sagu di kampung itu semakin menipis.
                Karena itu, para lelaki dan beberapa wanitanya bergegas pergi ke
                hutan untuk mencari pohon sagu. Agar bisa sampai ke hutan,
                mereka harus menyeberangi sungai besar menggunakan 10 perahu
                kecil.
                <br /><br />
                Dalam perjalanan menyeberangi sungai, muncul seekor naga besar
                yang hendak menghadang perahu mereka. Makhluk ganas itu mengoyak
                dan memorak-porandakan seluruh kapal. Hampir seluruh warga di
                perahu tersebut mati karena naga jahat itu, namun ada satu
                wanita hamil yang berhasil menyelamatkan diri.
              </p>
              <h2 class="py-3">Perjuangan Bertahan Hidup Seorang Diri</h2>

              <p>
                Setelah berhasil menyelamatkan diri dari serangan naga, wanita
                itu memutuskan untuk berlari ke hutan dan bersembunyi di dalam
                gua. Sadar tak bisa kembali ke kampung, ia memilih untuk tinggal
                dan bertahan hidup dengan mencari ubi atau buah-buahan yang
                tumbuh di hutan.
                <br /><br />
                Beberapa bulan kemudian, wanita itu melahirkan seorang bayi
                laki-laki tampan yang kemudian diberi nama Biwar. Biwar diajari
                cara menanam ubi, memanah, hingga berburu oleh ibunya. Mereka
                berdua juga membuat rumah honai (rumah adat Papua yang berbentuk
                seperti jamur) sehingga tak lagi tinggal di dalam gua.
              </p>

              <p class="py-3">
                <i
                  >" Beberapa bulan kemudian, wanita itu melahirkan seorang bayi
                  laki-laki tampan yang kemudian diberi nama Biwar. "</i
                >
              </p>
              <p>
                Pada suatu pagi, Biwar meminta izin kepada ibunya untuk pergi
                berburu. Ibu Biwar mengizinkan, tetapi ia meminta agar Biwar
                tidak berburu di dekat sungai besar. Biwar pun merasa heran
                kenapa sang ibu selalu melarangnya mendekati sungai besar itu.
                <br /><br />
                Karena sangat penasaran, ia malah mendekati sungai besar yang
                dimaksud ibunya. Ia terkesima karena di sungai itu terdapat
                ikan-ikan yang sangat besar. Tanpa pikir panjang, Biwar lalu
                menangkap beberapa ikan besar dengan cekatan. Meski ada sedikit
                rasa khawatir lantaran teringat pesan sang ibu, ia tetap
                semangat menangkap banyak ikan.
              </p>
              <h2 class="py-3">Cerita Pilu di Sungai Besar</h2>
              <p>
                Setibanya di rumah, Biwar memamerkan hasil tangkapannya kepada
                ibu. Ikan-ikannya begitu besar, berbeda dari tangkapan Biwar
                biasanya. Bukannya senang, sang ibu justru merasa curiga. Biwar
                akhirnya mengaku bahwa ia pergi ke sungai besar yang dilarang.
                Walau sempat ada perdebatan, sang ibu akhirnya menceritakan
                tragedi yang ia alami di sungai itu.
                <br /><br />
                Mendengar cerita pilu ibunya, Biwar murka. Amarahnya semakin
                memuncak saat ia tahu bahwa naga itu telah membunuh ayahnya dan
                membuat ibunya terlantar di hutan. Ia memeluk sang ibu sambil
                menangis.
              </p>
              <p class="py-3">
                <i
                  >" Biwar adalah contoh nyata dari sikap seseorang yang berani
                  dan tekun dalam mengatasi rintangan. "</i
                >
              </p>
              <h2 class="py-3">Tekad Besar Biwar untuk Membinasakan Naga</h2>
              <p>
                Biwar tak tinggal diam. Ia membujuk ibunya untuk mengizinkannya
                pergi berburu naga. Awalnya, sang ibu melarangnya, karena tak
                ingin makhluk penunggu sungai itu melukai anaknya. Namun, Biwar
                tak mudah menyerah. Setiap hari, ia membujuk ibunya agar diberi
                izin.
                <br /><br />
                Seiring berjalannya waktu, ibu sudah tak bisa lagi mencegah
                keinginan Biwar. Meski berat, sang ibu akhirnya mengizinkan
                anaknya pergi ke sungai untuk melawan naga. Keesokan harinya,
                Biwar berpamitan pada ibunya dengan membawa panah dan tombak
                untuk menyerang makhluk yang telah membunuh keluarganya. Sang
                ibu meneteskan air mata sambil berdoa agar anaknya selamat.
              </p>
              <p class="py-3">
                <i
                  >" Keesokan harinya, Biwar berpamitan pada ibunya dengan
                  membawa panah dan tombak untuk menyerang makhluk yang telah
                  membunuh keluarganya. "</i
                >
              </p>

              <h2>Pertarungan Sengit antara Biwar dan Naga</h2>

              <p>
                Dengan gagah berani, Biwar melaju ke kediaman sang naga. Ia
                meneriaki naga tersebut agar keluar dari persembunyiannya.
                Berbekal tombak dan panah, Biwar siap mengadu nasib dengan sang
                raja sungai. Tak lama setelah itu, muncul seekor naga raksasa
                dari danau tempat sungai itu bermuara.
                <br /><br />
                Dengan penuh amarah, Biwar meluncurkan serangannya. Tombak dan
                anak panahnya menghujani tubuh naga. Namun, tak ada satu pun
                dari serangan Biwar yang dapat melukai tubuh lawannya. Naga
                kemudian melawan dengan menyemburkan apinya ke arah Biwar.
                Dengan cepat, Biwar menghindar dari semburan api itu.
                <br /><br />
                Sadar senjatanya tak mempan untuk melawan sang naga, Biwar
                akhirnya mencari cara lain untuk membunuh naga tersebut. Sambil
                menghindari semburan api, Biwar berlari menuju sebuah tebing di
                tepi sungai.
              </p>
              <p class="py-3">
                <i
                  >" Sadar senjatanya tak mempan untuk melawan sang naga, Biwar
                  akhirnya mencari cara lain untuk membunuh naga tersebut. "</i
                >
              </p>
              <p>
                Ketika naga itu bersiap-siap menyemburkan api paling besar,
                Biwar mendorong batu besar ke arah kepala naga. Seketika,
                makhluk besar itu mati dan tubuhnya hanyut terbawa arus sungai.
                Biwar berhasil membunuh makhluk jahat itu.
              </p>
              <h2 class="py-3">Biwar Sang Penakluk Naga</h2>
              <p>
                Usai berhasil membunuh naga jahat, Biwar pulang untuk menemui
                ibunya. Sang ibu yang sedari tadi menunggu sambil berdoa pun
                menangis bahagia. Karena sungai sudah aman dari gangguan naga,
                mereka berdua pun memutuskan untuk pulang ke kampung halaman.
                <br /><br />
                Para warga menyambut mereka dengan sukacita. Sang ibu
                menceritakan seluruh kejadian yang menimpanya. Ia juga tak lupa
                menceritakan bahwa anaknya berhasil membunuh naga. Sejak saat
                itu, para warga menyebut Biwar sebagai sang penakluk naga.
              </p>
              <h2 class="py-3">Moral Cerita Biwar Sang Penakluk Naga</h2>
              <p>
                Pesan moral yang dapat diambil dari cerita rakyat Papua: Biwar
                Sang Penakluk Naga ini melibatkan nilai-nilai seperti
                keberanian, keadilan, dan ketekunan. Biwar adalah contoh nyata
                dari sikap seseorang yang berani dan tekun dalam mengatasi
                rintangan. Dia tidak takut untuk menghadapi naga jahat, yang
                tampak mustahil untuk ditaklukkan. Dengan keberanian dan
                ketekunan seperti yang dimiliki Biwar, kita tentu dapat
                mengatasi segala rintangan yang ada di hidup kita.
              </p>
              <p class="py-3">
                <i
                  >" Biwar adalah contoh nyata dari sikap seseorang yang berani
                  dan tekun dalam mengatasi rintangan. "</i
                >
              </p>

              <section
                id="referensi"
                class="mt-14 border-t border-slate-200 pt-6 dark:border-slate-800"
              >
                <p class="text-xs text-slate-500 dark:text-slate-400">
                  Referensi cerita:
                  <a
                    href="https://indonesiakaya.com/pustaka-indonesia/cerita-rakyat-papua-biwar-sang-penakluk-naga/"
                    target="_blank"
                    rel="noreferrer"
                    class="text-emerald-600 hover:underline dark:text-emerald-300"
                  >
                    Indonesiakaya.com – Cerita Rakyat Papua: Biwar Sang Penakluk
                    Naga
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
