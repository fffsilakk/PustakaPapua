<script setup lang="ts">
// Konten statis – siap dikembangkan ke API / CMS jika dibutuhkan
</script>

<template>
  <div
    class="min-h-screen mt-14 bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300"
  >
    <!-- Background -->
    <div
      class="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-slate-100 via-slate-50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-black"
    ></div>

    <!-- Header -->
    <header
      class="sticky top-0 z-40 border-b border-slate-200/60 bg-white/70 backdrop-blur dark:border-white/5 dark:bg-slate-950/60"
    >
      <div class="mx-auto flex max-w-6xl items-center gap-3 px-4 py-4">
        <div
          class="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/40"
        >
          <span class="text-lg font-semibold text-emerald-400">B</span>
        </div>
        <div>
          <p class="text-sm font-semibold">Cerita Rakyat Papua</p>
          <p class="text-xs text-slate-500 dark:text-slate-400">
            Biwar Sang Penakluk Naga
          </p>
        </div>
      </div>
    </header>

    <!-- Main -->
    <main class="mx-auto max-w-6xl px-4 py-10 lg:py-14">
      <!-- Hero -->
      <section
        class="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center"
      >
        <div>
          <span
            class="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-300"
          >
            Cerita Rakyat Mimika
          </span>

          <h1
            class="mt-4 text-balance text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white"
          >
            Biwar Sang Penakluk Naga
          </h1>

          <p
            class="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300"
          >
            Kisah seorang pemuda berani asal Papua yang pantang menyerah
            menghadapi rintangan demi melindungi ibunya dan kampung halaman dari
            naga penunggu sungai.
          </p>

          <div class="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm">
            <span
              class="rounded-full border border-slate-300 bg-white px-3 py-1 text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
              Lokasi: Mimika, Papua
            </span>
            <span
              class="rounded-full border border-slate-300 bg-white px-3 py-1 text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
              Tema: Keberanian • Keadilan • Ketekunan
            </span>
          </div>
        </div>

        <!-- Highlight -->
        <div
          class="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-white/80 p-6 shadow-lg dark:bg-gradient-to-br dark:from-emerald-500/15 dark:via-slate-900 dark:to-slate-950"
        >
          <p
            class="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-200"
          >
            Cuplikan Cerita
          </p>
          <p
            class="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-100"
          >
            “Keesokan harinya, Biwar berpamitan pada ibunya dengan membawa panah
            dan tombak untuk menyerang makhluk yang telah membunuh keluarganya.”
          </p>

          <div
            class="mt-5 space-y-2 text-xs text-slate-600 dark:text-slate-200"
          >
            <p>• Latar: Sungai besar dan hutan rumbia.</p>
            <p>• Tokoh utama: Biwar dan ibunya.</p>
            <p>• Antagonis: Naga penjaga sungai Mimika.</p>
          </div>
        </div>
      </section>

      <!-- Content -->
      <section
        id="kisah"
        class="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]"
      >
        <!-- Article -->
        <article
          class="prose max-w-none prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline dark:prose-invert dark:prose-headings:text-white dark:prose-p:text-slate-300 dark:prose-a:text-emerald-300"
        >
          <!-- ISI ARTIKEL TIDAK DIUBAH -->
          <!-- (teks panjang kamu tetap sama persis) -->
          <!-- Article -->
          <article
            class="prose prose-invert prose-slate max-w-none prose-headings:scroll-mt-24 prose-headings:text-slate-50 prose-a:text-emerald-300 prose-a:no-underline hover:prose-a:underline"
          >
            <h2>Pesona Papua dan Mimika</h2>
            <p class="py-3">
              selain terkenal akan pesona alamnya, Papua juga memiliki
              cerita-cerita daerah yang mewarnai sastra Nusantara. Bahkan, Raja
              Ampat yang memesona dengan keindahan lautannya pun memiliki
              legenda di balik terbentuknya. Cerita rakyat lainnya berasal dari
              Mimika, kabupaten yang terkenal dengan keragaman kuliner sagu
              sebagai pilihan makanan pokok bertekstur legit dan tinggi serat..
            </p>
            <p class="pb-3">
              Sejak dulu, salah satu kegiatan penduduk Mimika adalah memangkur
              sagu dari pohon rumbia. Bisa dikatakan, seluruh penduduk Mimika
              (baik laki-laki maupun perempuan) memiliki keahlian memangkur sagu
              dari pohon-pohon yang tumbuh di sepanjang aliran sungai. Maka, tak
              heran bila banyak kisah asal Papua yang menggunakan sungai dan
              sagu sebagai latar ceritanya—tak terkecuali cerita rakyat yang
              berjudul
              <i>Biwar Sang Penakluk Naga.</i>
            </p>

            <h2 class="py-3">Awal Mula Kemunculan Naga</h2>
            <p>
              Alkisah, ada sebuah kampung kecil di Mimika. Kehidupan di sana
              berlangsung aman dan tenteram, dengan warga yang hidup rukun dan
              sejahtera. Setiap harinya, penduduk mencari pohon sagu di hutan
              dan mengambil sari patinya untuk dijadikan bahan makanan.
              Biasanya, para lelaki bertugas untuk mencari pohon sagu, sementara
              para wanita bertugas untuk mengolah sagu menjadi hidangan lezat.
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
              hutan untuk mencari pohon sagu. Agar bisa sampai ke hutan, mereka
              harus menyeberangi sungai besar menggunakan 10 perahu kecil.
              <br /><br />
              Dalam perjalanan menyeberangi sungai, muncul seekor naga besar
              yang hendak menghadang perahu mereka. Makhluk ganas itu mengoyak
              dan memorak-porandakan seluruh kapal. Hampir seluruh warga di
              perahu tersebut mati karena naga jahat itu, namun ada satu wanita
              hamil yang berhasil menyelamatkan diri.
            </p>
            <h2 class="py-3">Perjuangan Bertahan Hidup Seorang Diri</h2>

            <p>
              Setelah berhasil menyelamatkan diri dari serangan naga, wanita itu
              memutuskan untuk berlari ke hutan dan bersembunyi di dalam gua.
              Sadar tak bisa kembali ke kampung, ia memilih untuk tinggal dan
              bertahan hidup dengan mencari ubi atau buah-buahan yang tumbuh di
              hutan. <br /><br />
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
              berburu. Ibu Biwar mengizinkan, tetapi ia meminta agar Biwar tidak
              berburu di dekat sungai besar. Biwar pun merasa heran kenapa sang
              ibu selalu melarangnya mendekati sungai besar itu.
              <br /><br />
              Karena sangat penasaran, ia malah mendekati sungai besar yang
              dimaksud ibunya. Ia terkesima karena di sungai itu terdapat
              ikan-ikan yang sangat besar. Tanpa pikir panjang, Biwar lalu
              menangkap beberapa ikan besar dengan cekatan. Meski ada sedikit
              rasa khawatir lantaran teringat pesan sang ibu, ia tetap semangat
              menangkap banyak ikan.
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
              Biwar berpamitan pada ibunya dengan membawa panah dan tombak untuk
              menyerang makhluk yang telah membunuh keluarganya. Sang ibu
              meneteskan air mata sambil berdoa agar anaknya selamat.
            </p>
            <p class="py-3">
              <i
                >" Keesokan harinya, Biwar berpamitan pada ibunya dengan membawa
                panah dan tombak untuk menyerang makhluk yang telah membunuh
                keluarganya. "</i
              >
            </p>

            <h2>Pertarungan Sengit antara Biwar dan Naga</h2>

            <p>
              Dengan gagah berani, Biwar melaju ke kediaman sang naga. Ia
              meneriaki naga tersebut agar keluar dari persembunyiannya.
              Berbekal tombak dan panah, Biwar siap mengadu nasib dengan sang
              raja sungai. Tak lama setelah itu, muncul seekor naga raksasa dari
              danau tempat sungai itu bermuara.
              <br /><br />
              Dengan penuh amarah, Biwar meluncurkan serangannya. Tombak dan
              anak panahnya menghujani tubuh naga. Namun, tak ada satu pun dari
              serangan Biwar yang dapat melukai tubuh lawannya. Naga kemudian
              melawan dengan menyemburkan apinya ke arah Biwar. Dengan cepat,
              Biwar menghindar dari semburan api itu.
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
              Ketika naga itu bersiap-siap menyemburkan api paling besar, Biwar
              mendorong batu besar ke arah kepala naga. Seketika, makhluk besar
              itu mati dan tubuhnya hanyut terbawa arus sungai. Biwar berhasil
              membunuh makhluk jahat itu.
            </p>
            <h2 class="py-3">Biwar Sang Penakluk Naga</h2>
            <p>
              Usai berhasil membunuh naga jahat, Biwar pulang untuk menemui
              ibunya. Sang ibu yang sedari tadi menunggu sambil berdoa pun
              menangis bahagia. Karena sungai sudah aman dari gangguan naga,
              mereka berdua pun memutuskan untuk pulang ke kampung halaman.
              <br /><br />
              Para warga menyambut mereka dengan sukacita. Sang ibu menceritakan
              seluruh kejadian yang menimpanya. Ia juga tak lupa menceritakan
              bahwa anaknya berhasil membunuh naga. Sejak saat itu, para warga
              menyebut Biwar sebagai sang penakluk naga.
            </p>
            <h2 class="py-3">Moral Cerita Biwar Sang Penakluk Naga</h2>
            <p>
              Pesan moral yang dapat diambil dari cerita rakyat Papua: Biwar
              Sang Penakluk Naga ini melibatkan nilai-nilai seperti keberanian,
              keadilan, dan ketekunan. Biwar adalah contoh nyata dari sikap
              seseorang yang berani dan tekun dalam mengatasi rintangan. Dia
              tidak takut untuk menghadapi naga jahat, yang tampak mustahil
              untuk ditaklukkan. Dengan keberanian dan ketekunan seperti yang
              dimiliki Biwar, kita tentu dapat mengatasi segala rintangan yang
              ada di hidup kita.
            </p>
            <p class="py-3">
              <i
                >" Biwar adalah contoh nyata dari sikap seseorang yang berani
                dan tekun dalam mengatasi rintangan. "</i
              >
            </p>
          </article>
          <!-- ⬇️ SEMUA TEKS ASLI KAMU TETAP DI SINI ⬇️ -->
          <!-- (dipotong di sini demi ringkas, tapi di file asli kamu tetap utuh) -->
        </article>

        <!-- Sidebar -->
        <aside class="space-y-6">
          <div
            class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
          >
            <h3 class="text-sm font-semibold">Konteks Budaya</h3>
            <p class="mt-2 text-xs text-slate-600 dark:text-slate-300">
              Cerita ini berkaitan erat dengan tradisi sagu, kehidupan di
              sepanjang sungai, dan relasi masyarakat Mimika dengan alam
              sekitarnya.
            </p>
          </div>

          <div
            class="rounded-2xl border border-emerald-500/30 bg-emerald-50 p-5 dark:bg-emerald-500/10"
          >
            <h3
              class="text-sm font-semibold text-emerald-700 dark:text-emerald-100"
            >
              Nilai yang Ditekankan
            </h3>
            <ul
              class="mt-2 space-y-1 text-xs text-emerald-800 dark:text-emerald-50"
            >
              <li>• Keberanian melawan ketidakadilan.</li>
              <li>• Bakti dan cinta kepada orang tua.</li>
              <li>• Keteguhan hati dalam menghadapi bahaya.</li>
            </ul>
          </div>
        </aside>
      </section>

      <!-- Referensi -->
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
            Indonesiakaya.com – Cerita Rakyat Papua: Biwar Sang Penakluk Naga
          </a>
        </p>
      </section>
    </main>
  </div>
</template>
