export type Testimonial = {
  /**
   * Verbatim, in the person's own language and spelling. Never translate, never
   * clean up — the same text renders on /work and /id/work.
   *
   * `**...**` renders as <strong>. Presentation only: wrap words that are
   * already there, never reword a phrase to make it worth bolding.
   */
  quote: string;
  name: string;
  role: string;
  company?: string;
  /** Where a reader can verify it, e.g. "LinkedIn · June 2025". */
  source?: string;
  sourceUrl?: string;
};

// Only real, given-with-permission quotes go here. An empty array renders nothing.
export const testimonials: Testimonial[] = [
  {
    quote:
      "I worked with Jordan for four years at Adgorithmics as his CTO. Jordan brought not only **technical knowledge and a can-do attitude** to the team, but also **a genuine desire to help others**. I watched him grow from a great Flutter developer into a skilled Python developer. Never one to say \"no\" to a challenge, Jordan’s journey is just beginning, and if you make him part of yours, you won’t regret it.",
    name: "Brian de Heus",
    role: "CTO",
    company: "Adgorithmics",
  },
  {
    quote:
      "Sy ingin mengucapkan terimakasih banyak atas bantuan dari pak Jordan, karena dgn aplikasi tsb sy bisa dgn mudah menemukan selisih stok, selisih harga, dan selisih quantity utk item yg ada di gudang sy Serta **respon dari Pak Jordan juga sangat cepat**, jadi pd saat sy mau menambahkan beberapa menu tambahan **bisa langsung di kerjakan**. Terimakasih banyak pak, semoga bisa lebih bermanfaat bagi banyak orang 🙏",
    name: "Venanda Putri",
    role: "Business Owner",
  },
  {
    quote: "Selama kerja bareng Jordan, menurut saya dia punya **ownership yang bagus**. Dia nggak cuma ngerjain ticket sesuai requirement, tapi biasanya juga **ikut mikirin kemungkinan masalah yang bisa muncul** dan berusaha beresin dari awal sebelum jadi masalah. Yang saya suka, kalau sudah pegang suatu pekerjaan, Jordan nggak sekadar memastikan ticket- nya selesai, tapi benar - benar berusaha memastikan hasil akhirnya juga beres dan bisa dipakai dengan baik.",
    name: "Cong Fandi",
    role: "COO"
  },
  {
    quote: "Selama bekerja bersama Jordan, saya merasakan **komunikasi yang sangat baik, efektif, dan terbuka.** Hal tersebut sangat membantu dalam memastikan penyampaian tugas, koordinasi pekerjaan, maupun hasil yang diberikan dapat berjalan sesuai dengan ekspektasi dan target yang telah ditetapkan. Dalam menghadapi berbagai kendala atau issue selama pekerjaan berlangsung, Jordan juga **mampu memberikan respons dan penanganan yang baik** sehingga permasalahan dapat diselesaikan secara efektif tanpa menimbulkan hambatan yang berarti terhadap proses pekerjaan. Hal yang paling saya apresiasi adalah **kedisiplinan dan komitmen** Jordan terhadap waktu serta tanggung jawab yang diberikan. Jordan menunjukkan **konsistensi dalam memenuhi target, menjaga kualitas pekerjaan, dan menyelesaikan tugas sesuai dengan waktu yang telah disepakati.** Secara keseluruhan, Jordan merupakan rekan kerja yang **profesional, dapat diandalkan, dan memiliki komitmen yang baik dalam menjalankan tanggung jawabnya.**",
    name: "Ahmad Haris",
    role: "Komisaris PT. Nenggala Kreatif Indonesia"
  }
];
