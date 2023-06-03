function mahasiswa(nama, nim, jurusan) {
  const data = {};

  data.nama = nama;
  data.nim = nim;
  data.jurusan = jurusan;

  return {
    nama: data.nama,
    nim: data.nim,
    jurusan: data.jurusan,
  };
}

const david = mahasiswa("david", "1234", "Fisika");
