        $('article').readmore({speed: 500});

        var blog = {
          'articles': [
            {
              title: 'Coba Instal, 5 Aplikasi yang Bantu Kamu Hidup Lebih Sehat',
              body: "<p>Siapa bilang smartphone cuma bikin kamu kurang sehat? Kalau sedang mencoba mendapatkan tubuh yang lebih sehat dan bugar kamu bisa memanfaatkan ponsel pintar kamu kok untuk membantu. 1. Aplikasi track lari = Kalau kamu suka berlari, Runkeeper adalah aplikasi yang bisa kamu coba untuk membentuk training yang lebih baik. Kamu bisa melacak seberapa rutin kamu melakukan kegiatan olahraga dengan mencek 'running history', 2. Mencegah stres dengan meditasi = Meditasi membantu kamu menjadi lebih tenang dan rileks. Salah satu aplikasi yang pas untuk membantu kamu membentuk kebiasaan itu salah satunya adalah Headspace, 3. Pengingat minum = Apakah kamu sering mengonsumsi air dengan cukup? Atau justru kurang? Dari sini bisa terdata bagaimana kebiasaan kamu mengonsumsi air dan juga mengingatkan kamu agar cukup minum. Water Drink Reminder merupakan salah satu aplikasi favorit banyak orang, 4. Pengingat olahraga = Ketika malas untuk berolahraga, kamu butuh sedikit dorongan dari aplikasi yang bisa mengingatkan kamu berolahraga. Latihan bisa dikhususkan hanya untuk abs atau full body. Ini juga bisa disesuaikan dengan kemampuan tubuh. 30 Days Fitness Challenge adalah aplikasi yang tepat untuk itu, 5. Pemantau kalori= Dari aplikasi sejenis Calorie Counter kamu bisa memantau jumlah kalori bahkan dari sepiring nasi padang yang kamu konsumsi. Kamu bisa menentukan target kalori dan mengetahui nutrisi dan lemak yang masuk.</p>"
            },
            {
              title: 'Penyebab Migrain yang Paling Umum Terjadi ',
              body: "<p>Dilansir dari beberapa situs, pada penderita migrain, serangan sakit kepala sebelah ini biasanya pertama kali muncul saat masa pubertas. Serangan migrain ini biasanya akan terasa lebih berat saat muncul di usia 35 hingga 45 tahun. Migrain biasanya menimbulkan rasa sakit yang luar biasa dan biasanya bertahan hingga beberapa jam bahkan beberapa hari. Gejala utamanya ini adalah sakit kepala yang berlebihan. Gejala lainnya yang mungkin muncul seperti penglihatan terganggu, sensitif pada cahaya, suara, dan bau, hingga merasa mual dan ingin muntah. Setiap orang yang menderita migrain biasanya dipicu oleh gejala yang berbeda-beda. Migrain pun terbagi ke dalam beberapa jenis. Namun secara umum, migrain terbagi atas tiga kategori, yakni migrain dengan aura, migrain tanpa aura, dan migrain dengan aura namun tanpa sakit kepala. Perbedaannya terletak pada aura, yaitu berhubungan dengan visual atau pandangan. Biasanya migrain dengan aura akan menyebabkan pandangan kabur, kehilangan keseimbangan, hingga fenomena visual seolah melihat berbagai bentuk dan cahaya. Adapun migrain tanpa aura biasanya sering terjadi pada kebanyakan orang. Gejala yang dirasakan adalah sakit kepala tiba-tiba tanpa didahului rasa sakit yang berarti. Sementara migrain dengan aura namun tanpa sakit kepala lebih dikenal dengan silent migrain. Kondisi tersebut diawali dengan gejala migrain namun tidak ada sakit pada kepala. Walau belum ditemukan penyebabnya secara pasti, beberapa peneliti mengatakan bahwa migrain disebabkan oleh perubahan substansi pada otak secara abnormal. Ketika substansi di otak meningkat maka dapat menyebabkan inflamasi. Inflamasi inilah yang kemudian menyebabkan pembuluh darah pada saraf bengkak sehingga menimbulkan rasa sakit atau nyeri.</p>"
            },
            {
              title: 'Hati-hati, Keseringan Selfie Sebabkan Cedera Saraf Tangan ',
              body: "<p>Kamera depan tampaknya jadi fitur wajib buat ponsel kekinian. Kebutuhan untuk swafoto alias selfie lekat dengan milenial. Namun hati-hati, jangan terlalu sering selfie karena bisa berbahaya buat kesehatan Anda. Dokter Raj Ragoowansi, konsultan bedah plastik di Harley Street, London memperingatkan keseringan selfie bisa menimbulkan penyakit carpal tunnel syndrome (CTS). Ragoowansi berkata penyakit ini disebabkan oleh penekukan pergelangan saat selfie yang dilakukan berulang-ulang. Tentunya, saat selfie, banyak orang bakal berfoto berulang-ulang demi hasil foto sempurna. Yang berbahaya adalah saat pergelangan tangan harus menopang ponsel dalam posisi tertekuk dan dilakukan berulang-ulang dalam waktu lama. Itu posisi yang paling tidak baik. Lorong karpal (carpal tunnel) adalah ruangan tak kenal ampun di pergelangan tangan. Jika Anda terus mengambil selfie, pasokan darah saraf akan terganggu, jelas dia melansir dari Mirror. Mengapa ini begitu berbahaya? Lorong karpal menyimpan saraf median. Saraf ini berfungsi untuk mengendalikan otot jaringan tangan dan menerima rangsangan dari kulit di daerah tangan. Saat mengalami CTS, timbul beberapa gejala seperti kesemutan, rasa sakit seperti terbakar atau ditusuk-tusuk bahkan mati rasa pada jari dan tangan. Selain mengurangi kebiasaan penyebab CTS termasuk selfie, penanganan tenaga profesional juga diperlukan. Dokter biasanya akan memberikan obat, tangan dibebat, atau operasi untuk menurunkan tekanan pada saraf. </p>"
            }
          ]
        };
      
        $.mockjax({
          url: 'blog.json',
          responseText: blog,
          responseTime: 1500
        });
      
        $.ajax({
          url: 'blog.json',
          dataType: 'json',
          success: function(data) {
            var template = function(article) {
              return $('<article><h2>' + article.title + '</h2>' + article.body + '</article>');
            };
      
            $.each(data.articles, function(index, article) {
              $('#ajax').append(template(article));
            });
      
            $('#ajax').removeClass('loading');
      
            $('#ajax article').readmore({speed: 500});
          }
        });

          $(document).ready(function(){
          $("#hide").click(function(){
              $("#bum").hide(1000);
          });
          $("#show").click(function(){
              $("#bum").show(1000);
          });
          });



          
          $("#modal-btn-yes").on('click', function () {
            window.location.href = 'index.html';
            return false;
            modal.style.display = "none";
        })
        
            $("#modal-btn-no").on('click', function () {
                var modal = document.getElementById("myModal");
                modal.style.display = "none";
            })
  