import type { Lang } from "~/i18n/ui";

type Localized = Record<Lang, string>;

export type Testimonial = {
  /**
   * One entry per locale. The speaker's own language is verbatim — never
   * cleaned up. The other locale is a faithful translation of it: same claims,
   * same register, nothing added or polished. `/work` renders `en`,
   * `/id/work` renders `id`.
   *
   * `**...**` renders as <strong>. Presentation only: wrap words that are
   * already there, never reword a phrase to make it worth bolding. Bold spans
   * match across locales.
   */
  quote: Localized;
  name: string;
  role: Localized;
  company?: string;
  /** Where a reader can verify it, e.g. "LinkedIn · June 2025". */
  source?: string;
  sourceUrl?: string;
};

// Only real, given-with-permission quotes go here. An empty array renders nothing.
export const testimonials: Testimonial[] = [
  {
    // Original: en
    quote: {
      en: "I worked with Jordan for four years at Adgorithmics as his CTO. Jordan brought not only technical knowledge and a can-do attitude to the team, but also **a genuine desire to help others**. I watched him grow from a great Flutter developer into a skilled Python developer. Never one to say \"no\" to a challenge, Jordan’s journey is just beginning, and if you make him part of yours, you won’t regret it.",
      id: "Saya bekerja dengan Jordan selama empat tahun di Adgorithmics sebagai CTO-nya. Jordan tidak cuma membawa pengetahuan teknis dan sikap can-do ke tim, tapi juga **keinginan tulus untuk membantu orang lain**. Saya melihat dia tumbuh dari Flutter developer yang hebat jadi Python developer yang cakap. Tidak pernah bilang \"tidak\" pada tantangan, perjalanan Jordan baru saja dimulai, dan kalau kamu menjadikan dia bagian dari perjalananmu, kamu tidak akan menyesal.",
    },
    name: "Brian de Heus",
    role: { en: "CTO", id: "CTO" },
    company: "Adgorithmics",
  },
  {
    // Original: id
    quote: {
      en: "I want to say a big thank you for pak Jordan's help, because with that app I can easily find stock differences, price differences, and quantity differences for the items in my warehouse. And **pak Jordan's response is also very fast**, so when I wanted to add a few extra menus **it could be worked on right away**. Thank you so much pak, I hope it can be useful for many more people 🙏",
      id: "Sy ingin mengucapkan terimakasih banyak atas bantuan dari pak Jordan, karena dgn aplikasi tsb sy bisa dgn mudah menemukan selisih stok, selisih harga, dan selisih quantity utk item yg ada di gudang sy Serta **respon dari Pak Jordan juga sangat cepat**, jadi pd saat sy mau menambahkan beberapa menu tambahan **bisa langsung di kerjakan**. Terimakasih banyak pak, semoga bisa lebih bermanfaat bagi banyak orang 🙏",
    },
    name: "Venanda Putri",
    role: { en: "Business Owner", id: "Pemilik Usaha" },
  },
  {
    // Original: id
    quote: {
      en: "Working alongside Jordan, in my opinion he has **good ownership**. He **doesn't only do the ticket as the requirement says**, but usually also **thinks about problems that could come up** and tries to sort them out early, before they turn into problems. What I like is that once he's holding a piece of work, Jordan doesn't just make sure the ticket is finished, but really **makes sure the end result is done properly and can be used well.**",
      id: "Selama kerja bareng Jordan, menurut saya dia punya **ownership yang bagus**. Dia nggak cuma ngerjain ticket sesuai requirement, tapi biasanya juga **ikut mikirin kemungkinan masalah yang bisa muncul** dan berusaha beresin dari awal sebelum jadi masalah. Yang saya suka, kalau sudah pegang suatu pekerjaan, Jordan nggak sekadar memastikan ticket- nya selesai, tapi benar - benar berusaha memastikan hasil akhirnya juga beres dan bisa dipakai dengan baik.",
    },
    name: "Cong Fandi",
    role: { en: "COO", id: "COO" },
  },
  {
    // Original: id
    quote: {
      en: "Working together with Jordan, I experienced **very good, effective, and open communication.** That helped a lot in making sure task handovers, work coordination, and the results delivered ran in line with the expectations and targets that had been set. Facing various obstacles or issues while the work was running, Jordan was also **able to respond and handle things well** so problems could be resolved effectively without causing any meaningful delay to the process. What I appreciate most is Jordan's **discipline and commitment** to deadlines and to the responsibilities given to him. Jordan showed **consistency in meeting targets, keeping the quality of the work, and finishing tasks within the agreed time.** Overall, Jordan is a colleague who is **professional, dependable, and has good commitment in carrying out his responsibilities.**",
      id: "Selama bekerja bersama Jordan, saya merasakan **komunikasi yang sangat baik, efektif, dan terbuka.** Hal tersebut sangat membantu dalam memastikan penyampaian tugas, koordinasi pekerjaan, maupun hasil yang diberikan dapat berjalan sesuai dengan ekspektasi dan target yang telah ditetapkan. Dalam menghadapi berbagai kendala atau issue selama pekerjaan berlangsung, Jordan juga **mampu memberikan respons dan penanganan yang baik** sehingga permasalahan dapat diselesaikan secara efektif tanpa menimbulkan hambatan yang berarti terhadap proses pekerjaan. Hal yang paling saya apresiasi adalah **kedisiplinan dan komitmen** Jordan terhadap waktu serta tanggung jawab yang diberikan. Jordan menunjukkan **konsistensi dalam memenuhi target, menjaga kualitas pekerjaan, dan menyelesaikan tugas sesuai dengan waktu yang telah disepakati.** Secara keseluruhan, Jordan merupakan rekan kerja yang **profesional, dapat diandalkan, dan memiliki komitmen yang baik dalam menjalankan tanggung jawabnya.**",
    },
    name: "Ahmad Haris",
    role: {
      en: "Commissioner, PT. Nenggala Kreatif Indonesia",
      id: "Komisaris PT. Nenggala Kreatif Indonesia",
    },
  },
];
