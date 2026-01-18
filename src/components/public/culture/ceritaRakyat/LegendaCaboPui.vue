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
              Cerita Rakyat di daerah Jayapura Utara
            </span>
            <span>•</span>
            <span>8 menit baca</span>
            <span>•</span>
            <span>42x dibaca</span>
          </div>

          <h1
            class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white"
          >
            Legenda Cabo Pui dan Batu Ajaib
          </h1>

          <p
            class="mt-4 max-w-2xl text-sm text-slate-600 sm:text-base dark:text-slate-300"
          >
            Legenda Cabo Pui, pemuda Papua yang rela mengorbankan segalanya demi
            menyelamatkan kampungnya dari kelaparan.
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
              <span>Legenda</span>
            </div>
            <span
              class="hidden h-4 w-px bg-slate-200 dark:bg-slate-700 sm:inline-block"
            ></span>
            <div class="flex gap-1">
              <span
                class="rounded-full bg-slate-100 px-2 py-0.5 dark:bg-slate-800"
                >#Jayapura Utara</span
              >
              <span
                class="rounded-full bg-slate-100 px-2 py-0.5 dark:bg-slate-800"
                >#Cabo Pui</span
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
              src="https://indonesiakaya.com/wp-content/uploads/2025/07/download.jpeg"
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
              <p class="py-3">
                Di Papua, tepatnya di daerah Jayapura Utara, terdapat sebuah
                kampung bernama Kayo Batu yang terkenal dengan kerajinan
                gerabahnya. Gerabah tersebut disebut sempe dalam bahasa
                setempat. Pada zaman prasejarah, sempe buatan masyarakat Kayo
                Batu biasa ditukar dengan kapak dan batu manik-manik.
              </p>
              <p>
                <i>" Gerabah tersebut disebut sempe dalam bahasa setempat. "</i>
              </p>
              <p class="py-3">
                Sempe terbuat dari tanah liat sebagai bahan baku utama. Tanah
                liat ini diperoleh dari kebun-kebun di sekitar Tanjung Suaja,
                Papua. Pasir halusnya dicampurkan dengan tanah liat, dan
                diperoleh dari pantai Tanjung Suaja.
              </p>
              <p>
                Sempe buatan Kampung Kayo Batu terkenal dengan bentuknya yang
                khas, mengikuti kebiasaan masing-masing suku pembuatnya. Suku
                Pui menghias sempe mereka dengan gambar kadal dan buaya.
                Sementara itu, suku Makanuai Satu menggunakan gambar kerang laut
                bermotif gelombang, dan suku Makanuai Dua memakai motif ikan.
              </p>
              <p class="pt-3">
                Namun, kini hanya tersisa satu suku, yaitu suku Pui, yang masih
                meneruskan warisan leluhur mereka dalam membuat sempe. Menurut
                legenda, leluhur suku Pui berasal dari tanah liat. Inilah kisah
                leluhur suku Pui dan tanah liat, salah satu kekayaan budaya yang
                terus dijaga oleh masyarakat Kampung Kayo Batu.
              </p>
              <h2 class="py-3">Kampung Kayo Batu yang Malang</h2>
              <p>
                Berabad-abad silam, penduduk di berbagai kampung di tanah Papua,
                termasuk Kampung Kayo Batu di Teluk Imbi, Jayapura, telah
                membuat berbagai peralatan dapur dari tanah liat. Saat itu,
                populasi di kampung tersebut terdiri dari 16 keluarga besar,
                dengan jumlah penduduk sekitar 60 hingga 80 jiwa. Kehidupan
                mereka bergantung pada kegiatan bertani serta menangkap ikan di
                lereng gunung dan di sekitar teluk.
              </p>
              <p class="py-3">
                <i
                  >" Kehidupan mereka bergantung pada kegiatan bertani serta
                  menangkap ikan di lereng gunung dan di sekitar teluk. "</i
                >
              </p>
              <p>
                Sayangnya, tanah subur di kampung ini berangsur-angsur menjadi
                gersang, mengakibatkan hasil pertanian dan tangkapan ikan yang
                kian berkurang. Untuk memenuhi kebutuhan pangan, warga terpaksa
                mencari ladang baru yang jauh dari kampung, bahkan hingga ke
                wilayah kampung lain.
              </p>
              <p class="py-3">
                Berupaya mengatasi masalah ini, warga Kayo Batu menggelar aneka
                persembahan dan tarian. Dengan perlengkapan sederhana akibat
                kurangnya penghasilan, beberapa ritual persembahan untuk dewa
                tetap dilakukan. Namun, keadaan tak kunjung membaik. Keadaan
                mengenaskan ini bahkan membuat penduduk kampung sering tidur
                dalam keadaan lapar.
              </p>
              <h2>Cabo Pui dan Mimpi Batu Ajaibnya</h2>

              <p class="py-3">
                Di Kampung Kayo Batu, tinggallah seorang pemuda bernama Cabo
                Pui. Kegelisahan melanda hatinya kala melihat kemalangan yang
                menimpa kampungnya. Kepeduliannya yang besar terhadap nasib
                kampungnya membawanya pada mimpi tentang sebuah batu pipih yang
                indah.
              </p>

              <p>
                <i
                  >" Kepeduliannya yang besar terhadap nasib kampungnya
                  membawanya pada mimpi tentang sebuah batu pipih yang indah.
                  "</i
                >
              </p>

              <p class="py-3">
                Dalam mimpinya, dia bertemu dengan perempuan yang juga memiliki
                batu serupa. Bersama-sama, mereka membuat gerabah dari tanah
                merah dengan batu itu. Kampung mereka pun berubah menjadi indah
                dan warganya hidup bahagia.
              </p>
              <p>
                Ketika Cabo terbangun, ia tergerak untuk mencari batu ajaib itu.
                Mimpi tersebut ia yakini sebagai petunjuk untuk mengembalikan
                kemakmuran kampungnya. Ia pun menceritakan mimpi tersebut kepada
                saudaranya, Tiaghe, yang kemudian ingin menemaninya mencari batu
                ajaib. Namun, karena Cabo hanya sendirian dalam mimpi tersebut,
                ia menahan keinginan Tiaghe untuk menemaninya.
              </p>
              <p class="py-3">
                Cabo Pui berpesan kepada Tiaghe agar memperhatikan tanda-tanda
                alam saat ia pergi nanti. Jika ada pertanda dari alam semesta,
                Cabo meminta Tiaghe untuk pergi ke Tanjung Suaja. Tiaghe pun
                mendoakan Cabo agar berhasil membawa kemakmuran untuk kampung
                mereka.
              </p>
              <p>
                Cabo, ditemani anjingnya yang setia, Abu, pergi berlayar ke
                muara Sungai Numbai menggunakan perahu. Setelah turun, mereka
                berjalan melewati sungai dan mendaki bukit-bukit dengan hutan
                yang lebat. Di puncak bukit, Cabo melihat teluk indah yang
                diapit dua tanjung. Di sana, terdapat rumah-rumah di atas air
                yang dimiliki oleh orang dari Kampung Injiros dan Kampung
                Tobati. Mereka kemudian turun dari bukit dan menemukan gubuk
                untuk menginap.
              </p>
              <p class="py-3">
                Keesokan harinya, mereka mencapai puncak gunung dan melihat
                kampung-kampung di sekitar danau. Cabo turun dari gunung dan
                mendekati Kampung Abar. Di sebuah kebun, Cabo bertemu dengan
                Abo, warga Kampung Abar.
              </p>
              <p>
                Meski berbeda kampung, Abo bisa mengerti dan berbicara dalam
                dalam bahasa Cabo. Abo memperkenalkan Cabo kepada istrinya dan
                menjamunya dengan makanan. Abo mengatakan bahwa malam itu mereka
                akan membicarakan pembuatan sempe atau gerabah bersama-sama
                warga kampung.
              </p>
              <p class="py-3">
                <i
                  >" Meski berbeda kampung, Abo bisa mengerti dan berbicara
                  dalam dalam bahasa Cabo. "</i
                >
              </p>
              <p>
                Ketika Cabo Pui dan Abo tiba di tempat pembuatan sempe di
                Kampung Abar, orang-orang memandang mereka dengan raut wajah
                penuh tanya. Cabo kemudian menceritakan kisahnya dengan bahasa
                yang dia kuasai, dan Abo membantu menerjemahkannya kepada
                penduduk Kampung Abar. Para warga kampung mendengarkan dengan
                penuh perhatian.
              </p>
              <p class="py-3">
                Di luar tempat pembuatan gerabah, Cabo dan Abo
                berbincang-bincang dengan beberapa warga Kampung Abar. Warga
                Kampung Abar menanyakan kepada Cabo apakah warga dari desa lain
                diizinkan menangkap ikan di teluk Kampung Kayo Batu. Cabo
                menjawab dengan sopan bahwa mereka tidak diperbolehkan.
              </p>
              <p>
                Cabo kemudian menanyakan kepada Abo apakah dia boleh ikut
                membuat sempe. Abo, yang bukan pemimpin adat, menyerahkan
                keputusan kepada para tetua adat. Cabo pun tidak diizinkan
                membuat sempe di Kampung Abar. Namun, hal ini tidak menunjukkan
                adanya permusuhan di antara mereka. Warga Kampung Abar tetap
                ingin menjalin hubungan baik dengan warga Kayo Batu.
              </p>
              <p class="py-3">
                Cabo yang berusaha lapang dada menerima jawaban tetua adat,
                segera meninggalkan Kampung Abar. Cabo dan Abu pun terus
                melanjutkan perjalanan ke arah gunung di sebelah utara. Mereka
                melewati kebun dan padang ilalang. Setelah beristirahat dan
                makan ubi, mereka meneruskan perjalanan melewati bukit yang
                terjal dan sempit.
              </p>
              <p>
                Saat mendaki, Cabo beberapa kali berhenti untuk menikmati
                pemandangan danau yang indah dengan panorama kampung-kampung dan
                pulau-pulau kecil di kejauhan. Namun, semakin tinggi ia mendaki,
                kabut kian tebal dan membatasi pandangannya. Meski begitu, ia
                tetap berjalan dengan hati-hati.
              </p>
              <h2 class="py-3">Cabo Pui Berhasil Menemukan Batu Ajaib</h2>
              <p>
                Ketika kabut mulai menipis, Cabo menengadah dan melihat luasnya
                langit biru yang cerah. Sinar matahari yang hangat juga terasa
                di kulitnya. Ia merasa bersemangat dan tidak lagi peduli pada
                batu-batu curam yang ada di sekitarnya. Cabo yakin bahwa dia
                akan segera menemukan sebuah kampung tak lama lagi.
              </p>
              <p class="py-3">
                Benar saja, Cabo mendapati seorang pria sedang memakan pinang di
                atas batu saat itu. Di kejauhan, terlihat pula beberapa warga
                sedang bekerja di dalam gua menggunakan kapak batu. Rupanya,
                Cabo telah sampai di Kampung Ormu.
              </p>
              <p>
                Setibanya di sana, ia melihat pemimpin Ormu sedang berbicara
                dengan sekelompok pekerja batu. Salah satu pekerja juga tampak
                memberikan sebuah batu indah kepada pemimpin Ormu. Setelah
                mengamati batu itu, sang pemimpin mengembalikannya kepada
                pekerja tersebut dan pergi ke tempat tinggalnya yang terletak di
                dekat gua.
              </p>
              <p class="py-3">
                Cabo yang melihat dari kejauhan, langsung teringat akan
                mimpinya. Ia ingin memiliki batu itu. Ia pun segera keluar dari
                semak-semak persembunyiannya untuk berbicara dengan pemimpin
                Ormu. Pemimpin Kampung Ormu itu bernama Sirwai. Ia pun mengenali
                bahasa Cabo dan langsung bertanya mengenai tujuan kedatangan
                Cabo ke Kampung Ormu.
              </p>
              <p>
                Kepada Sirwai, Cabo menceritakan rencana dan perjalanannya.
                Sirwai menyimak dengan cermat dan bertanya tentang batu yang
                Cabo mimpikan. Cabo menjelaskan bahwa batu itu adalah batu
                terakhir yang dikerjakan oleh pekerja yang ia lihat sebelumnya.
              </p>
              <p class="py-3">
                Sirwai mengangguk dan berpikir sejenak tanpa berkata apa-apa.
                Setelah itu, ia mengajak Cabo untuk mengikutinya. Mereka
                menyusuri jalan yang dilalui orang-orang sebelumnya. Sirwai lalu
                menyuruh Cabo untuk bersembunyi di dalam hutan kecil dan
                memberitahukan bahwa pada malam hari, putranya akan datang dan
                membawa Cabo ke rumah para lelaki di kampung itu. Sirwai
                meyakinkan Cabo bahwa semua orang Ormu akan menganggapnya
                sebagai saudara mereka sendiri. Sesudah Sirwai pergi, Cabo
                menanti dengan penuh harap.
              </p>
              <p>
                Beberapa saat kemudian, Cabo mendengar namanya dipanggil. Ia
                mengira itu adalah putra Sirwai yang akan menjemputnya. Namun,
                Sirwai sendirilah yang datang untuk memberitahukan suatu hal
                penting. Sirwai mengatakan bahwa ketika Cabo tiba di rumah para
                lelaki, ia hanya boleh meminta perahu dan dayung tanpa
                menyebutkan hal lain.
              </p>
              <p class="py-3">
                Kabar tentang kedatangan Cabo telah terdengar di rumah para
                lelaki, dan seluruh orang menyambutnya dengan ramah. Cabo
                diperkenalkan kepada para lelaki Ormu dan diajak makan bersama.
              </p>
              <p>
                Setelah selesai makan, Sirwai menanyakan kepada orang-orang di
                sekitarnya apakah mereka bersedia membantu Cabo. Cabo kemudian
                mengungkapkan keinginannya untuk segera kembali ke kampung
                halamannya melalui jalur laut. Orang-orang Ormu itu pun bersedia
                membantu, dan Sirwai menawarkan perahu serta dayung untuk
                digunakan Cabo.
              </p>
              <h2 class="py-3">Cabo Pui Hilang Ditelan Bumi</h2>
              <p>
                Cabo meninggalkan rumah kaum laki-laki Ormu, ditemani Abu yang
                setia mengikutinya. Sirwai mengantarkannya ke pantai yang sepi,
                di mana perahu dan dayung telah disiapkan. Saat itulah Sirwai
                memberitahukan Cabo bahwa batu yang diimpikannya sudah ada di
                dalam noken miliknya.
              </p>
              <p class="py-3">
                Menurut Sirwai, batu itu memiliki kekuatan gaib dan akan
                membantu Kampung Kayo Batu dalam pembuatan gerabah. Namun, Cabo
                harus mengorbankan diri demi mendapatkan batu itu. Cabo merasa
                bingung dan tidak mengerti. Tetapi, Sirwai meyakinkannya bahwa
                batu dan Abu akan membimbingnya lebih lanjut.
              </p>
              <p>
                <i
                  >" Menurut Sirwai, batu itu memiliki kekuatan gaib dan akan
                  membantu Kampung Kayo Batu dalam pembuatan gerabah. "</i
                >
              </p>
              <p class="py-3">
                Sejak saat itu, Cabo merasakan aliran kekuatan gaib di dalam
                tubuhnya. Cabo teringat mimpinya dan bersedia berkorban demi
                kebahagiaan dan kemakmuran semua orang di kampung halamannya.
                Cabo berterima kasih kepada Sirwai atas bantuannya.
              </p>
              <p>
                Perjalanan Cabo menyusuri pantai dalam gelapnya malam terganggu
                oleh ombak, tetapi dia tidak gentar. Cabo bersabar dan merasa
                yakin bahwa ia akan sampai di kampung halamannya. Setelah
                beberapa saat, Cabo akhirnya tiba di Tanjung Suaja dan memasuki
                daratan. Dia menyalakan api di perahunya dan membiarkannya
                terbakar sementara dia pergi mandi di laut.
              </p>
              <p class="py-3">
                Setelah membersihkan diri di laut, Cabo merasakan dorongan kuat
                untuk pergi ke puncak Tanjung Suaja. Abu mengikutinya dari
                belakang. Ketika Cabo tiba di puncak bukit Tanjung Suaja, dia
                merasakan energi luar biasa yang mengalir di dalam dirinya.
              </p>
              <p>
                Tak lama kemudian, terdengar gemuruh angin yang kian mendekat.
                Abu ingin melarikan diri saat itu, namun Cabo menahannya.
                Tiba-tiba, tubuh Cabo dan Abu terjatuh ke dalam sebuah celah
                yang seketika menutup kembali dengan cepat. Celah itu menelan
                mereka berdua.
              </p>
              <h2 class="py-3">Moral Cerita</h2>
              <p>
                Cerita tentang Cabo Pui dan batu ajaib dari Kampung Kayo Batu
                mengandung beberapa pesan moral yang penting. Kadang kala, kita
                harus berani berkorban demi kebaikan dan kebahagiaan orang lain.
                Seperti Cabo yang rela mengorbankan dirinya demi kesejahteraan
                kampungnya. Perjalanan penuh tantangan yang dilalui Cabo dan
                Abu, menunjukkan pentingnya kesetiaan dan keberanian dalam
                menghadapi rintangan hidup.
              </p>
              <p class="py-3">
                Bantuan dari masyarakat Ormu, dukungan dari saudara, serta warga
                Kampung Abar dan Kayo Batu menekankan pentingnya kerja sama dan
                solidaritas untuk mencapai tujuan bersama.
              </p>
              <p>
                Selain itu, kita semua juga patut menghargai tanda-tanda dari
                alam. Kepercayaan Cabo terhadap mimpinya sebagai petunjuk dari
                alam, diperhatikan secara saksama oleh Tiaghe. Hal ini
                mengajarkan kita bahwa dalam beberapa keadaan, mengikuti intuisi
                dan tanda-tanda dari alam dapat membantu kita untuk menemukan
                jalan yang tepat.
              </p>
              <p class="py-3">
                Saat melewati masa-masa sulit, kita tetap harus memiliki
                pengharapan yang baik dan tekun berdoa, serta berusaha. Ini sama
                seperti harapan dan doa yang tulus dari Tiaghe dan masyarakat
                Kampung Kayo Batu pada masa penantian akan datangnya keajaiban.
              </p>
              <section
                id="referensi"
                class="mt-14 border-t border-slate-200 pt-6 dark:border-slate-800"
              >
                <p class="text-xs text-slate-500 dark:text-slate-400">
                  Referensi cerita:
                  <a
                    href="https://indonesiakaya.com/pustaka-indonesia/cerita-rakyat-papua-legenda-cabo-pui/"
                    target="_blank"
                    rel="noreferrer"
                    class="text-emerald-600 hover:underline dark:text-emerald-300"
                  >
                    Indonesiakaya.com – Cerita Rakyat Papua: cerita rakyat papua
                    legenda cabo pui Naga
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
