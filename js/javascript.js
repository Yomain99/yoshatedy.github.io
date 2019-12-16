function myFunction() {
          var x = document.getElementById("myTopnav");
          if (x.className === "topnav") {
            x.className += " responsive";
          } else {
            x.className = "topnav";
          }
        }


        function validation() {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            if (username == "yosha" && password == "mantap2") {
                modal(true);
            } else {
                modal(false);
                // alert("Username atau password anda salah");
            }
        }


        
        function modal(status) {
            var modal = document.getElementById("myModal");
            var span = document.getElementsByClassName("close")[0];
            if (status == true) {
                $("#modal-text").text("Login berhasil");
                modal.style.display = "block";
                span.onclick = function () {
                    modal.style.display = "none";
                    window.location.href = 'Antri.html';
                    return false;
                }
            } else {
                $("#modal-text").text("Username atau password anda salah");
                modal.style.display = "block";
                span.onclick = function () {
                    modal.style.display = "none";
                }
            }
        }

// Tambah tabel dan delet tabel
                        var rIndex,
                    table = document.getElementById("table");
                function checkEmptyInput()
                {
                    var isEmpty = false,
                        nama = document.getElementById("nama").value,
                        email = document.getElementById("email").value,
                        alamat = document.getElementById("alamat").value,
                        agama = document.getElementById("agama").value,
                        dokter = document.getElementById("dokter").value,
                        keluhan = document.getElementById("keluhan").value,
                        tanggalpemeriksaan = document.getElementById("tanggalpemeriksaan").value;
                        
                    if(nama === ""){
                        alert("Harap Isi Nama Lengkap Anda");
                        isEmpty = true;
                    }
                    else if(email === ""){
                        alert("Email Tidak Boleh Kosong");
                        isEmpty = true;
                    }
                    else if(alamat === ""){
                        alert("Alamat Tidak Boleh Kosong");
                        isEmpty = true;
                    }
                    else if(agama === ""){
                        alert("Isi Agama Anda");
                        isEmpty = true;
                    }
                    else if(dokter === ""){
                        alert("Pilih Dokter sesuai keluhan Anda, List dokter terdapat diatas");
                        isEmpty = true;
                    }
                    else if(keluhan === ""){
                        alert("Isi Keluhan Anda");
                        isEmpty = true;
                    }
                    else if(tanggalpemeriksaan === ""){
                        alert("Panggal Pemeriksaan Tidak Boleh Kosong");
                        isEmpty = true;
                    }
                    return isEmpty;
                }

                function addHtmlTableRow()
                {
                    if(!checkEmptyInput()){
                    var newRow = table.insertRow(table.length),
                        cell1 = newRow.insertCell(0),
                        cell2 = newRow.insertCell(1),
                        cell3 = newRow.insertCell(2),
                        cell4 = newRow.insertCell(3),
                        cell5 = newRow.insertCell(4),
                        cell6 = newRow.insertCell(5),
                        cell7 = newRow.insertCell(6),
                        nama = document.getElementById("nama").value,
                        email = document.getElementById("email").value,
                        alamat = document.getElementById("alamat").value,
                        agama = document.getElementById("agama").value,
                        dokter = document.getElementById("dokter").value,
                        keluhan = document.getElementById("keluhan").value,
                        tanggalpemeriksaan = document.getElementById("tanggalpemeriksaan").value;
            
                    cell1.innerHTML = nama;
                    cell2.innerHTML = email;
                    cell3.innerHTML = alamat;
                    cell4.innerHTML = agama;
                    cell5.innerHTML = dokter;
                    cell6.innerHTML = keluhan;
                    cell7.innerHTML = tanggalpemeriksaan;
                    selectedRowToInput();
                    }
                }
                
                function selectedRowToInput()
                {
                    
                    for(var i = 1; i < table.rows.length; i++)
                    {
                        table.rows[i].onclick = function()
                        {
                          rIndex = this.rowIndex;
                          document.getElementById("nama").value = this.cells[0].innerHTML;
                          document.getElementById("email").value = this.cells[1].innerHTML;
                          document.getElementById("alamat").value = this.cells[2].innerHTML;
                          document.getElementById("agama").value = this.cells[3].innerHTML;
                          document.getElementById("dokter").value = this.cells[4].innerHTML;
                          document.getElementById("keluhan").value = this.cells[5].innerHTML;
                          document.getElementById("tanggalpemeriksaan").value = this.cells[6].innerHTML;
                        };
                    }
                }
                function removeSelectedRow()
                {
                    table.deleteRow(rIndex);
                    document.getElementById("nama").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("alamat").value = "";
                    document.getElementById("agama").value = "";
                    document.getElementById("dokter").value = "";
                    document.getElementById("keluhan").value = "";
                    document.getElementById("tanggalpemeriksaan").value = "";
                }
            function myFunction() {
                var x = document.getElementById("myTopnav");
                if (x.className === "topnav") {
                    x.className += " responsive";
                } else {
                    x.className = "topnav";
                 }
            }
            $(document).ready(function(){
                $("#hide").click(function(){
                    $("#bum").hide(1000);
                });
            $("#show").click(function(){
                $("#bum").show(1000);
                });
                });
                
        var modal = document.getElementById("myModal");
        var btn = document.getElementById("myBtn");
        var span = document.getElementsByClassName("close")[0];

        btn.onclick = function() {
        modal.style.display = "block";
        }

        span.onclick = function() {
        modal.style.display = "none";
        }

        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        }
        
                    var rIndex,
                table = document.getElementById("table");
            
            // check the empty input
            function checkEmptyInput()
            {
                var isEmpty = false,
                    nama = document.getElementById("nama").value,
                    email = document.getElementById("email").value,
                    TypeKamar = document.getElementById("TypeKamar").value,
                    NoKK = document.getElementById("NoKK").value,
                    NIK = document.getElementById("NIK").value,
                    TanggalPemesanan = document.getElementById("TanggalPemesanan").value;
                    
                if(nama === ""){
                    alert("Harap Isi Nama Lengkap Anda");
                    isEmpty = true;
                }
                else if(email === ""){
                    alert("Email Tidak Boleh Kosong");
                    isEmpty = true;
                }
                else if(TypeKamar === ""){
                    alert("Type Kamar Tidak Boleh Kosong");
                    isEmpty = true;
                }
                else if(NoKK === ""){
                    alert("No Kartu Keluarga Harap Isi Dengan Angka");
                    isEmpty = true;
                }
                else if(NIK === ""){
                    alert("Nomor Induk Kependudukan Harap Isi Dengan Angka");
                    isEmpty = true;
                }
                else if(TanggalPemesanan === ""){
                    alert("Tanggal Pemesanan Tidak Boleh Kosong");
                    isEmpty = true;
                }
                return isEmpty;
            }
            
            // add Row
            function addHtmlTableRow()
            {
                // get the table by id
                // create a new row and cells
                // get value from input text
                // set the values into row cell's
                if(!checkEmptyInput()){
                var newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    cell3 = newRow.insertCell(2),
                    cell4 = newRow.insertCell(3),
                    cell5 = newRow.insertCell(4),
                    cell6 = newRow.insertCell(5),
                    nama = document.getElementById("nama").value,
                    email = document.getElementById("email").value,
                    TypeKamar = document.getElementById("TypeKamar").value,
                    NoKK = document.getElementById("NoKK").value,
                    NIK = document.getElementById("NIK").value,
                    TanggalPemesanan = document.getElementById("TanggalPemesanan").value;

                cell1.innerHTML = nama;
                cell2.innerHTML = email;
                cell3.innerHTML = TypeKamar;
                cell4.innerHTML = NoKK;
                cell5.innerHTML = NIK;
                cell6.innerHTML = TanggalPemesanan;
                // call the function to set the event to the new row
                selectedRowToInput();
                }
            }
            
            // display selected row data into input text
            function selectedRowToInput()
            {
                
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                      // get the seected row index
                      rIndex = this.rowIndex;
                      document.getElementById("nama").value = this.cells[0].innerHTML;
                      document.getElementById("email").value = this.cells[1].innerHTML;
                      document.getElementById("TypeKamar").value = this.cells[2].innerHTML;
                      document.getElementById("NoKK").value = this.cells[3].innerHTML;
                      document.getElementById("NIK").value = this.cells[4].innerHTML;
                      document.getElementById("TanggalPemesanan").value = this.cells[5].innerHTML;
                    };
                }
            }
            function removeSelectedRow()
            {
                table.deleteRow(rIndex);
                // clear input text
                document.getElementById("nama").value = "";
                document.getElementById("email").value = "";
                document.getElementById("TypeKamar").value = "";
                document.getElementById("NoKK").value = "";
                document.getElementById("NIK").value = "";
                document.getElementById("TanggalPemesanan").value = "";
            }
        function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }