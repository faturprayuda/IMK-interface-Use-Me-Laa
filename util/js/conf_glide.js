let config = {
    type: 'carousel',
    perView: 1, //jumlah tampilan gambar
    autoplay: 1000, //waktu untuk mengganti gambar
    hoverpause: true, //saat kursor diarahkan ke gambar, maka autoplay berhenti

};

let glide = new Glide('.glide', config).mount()