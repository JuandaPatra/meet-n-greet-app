export type Schedule = {
  memberId: number;
  session: number;
  lane: number;
  time: string;
};

export const schedules: Schedule[] = [
  // === SESI 1 (10:00-11:00) ===
  { memberId: 91, session: 1, lane: 1, time: "10:00-11:00" }, // Fiony
  { memberId: 159, session: 1, lane: 2, time: "10:00-11:00" }, // Michie
  { memberId: 105, session: 1, lane: 3, time: "10:00-11:00" }, // Gracie
  { memberId: 121, session: 1, lane: 4, time: "10:00-11:00" }, // Trisha
  { memberId: 116, session: 1, lane: 5, time: "10:00-11:00" }, // Indah
  { memberId: 33, session: 1, lane: 6, time: "10:00-11:00" }, // Lana
  { memberId: 114, session: 1, lane: 7, time: "10:00-11:00" }, // Hillary
  { memberId: 45, session: 1, lane: 8, time: "10:00-11:00" }, // Cathy
  { memberId: 31, session: 1, lane: 9, time: "10:00-11:00" }, // Lia
  { memberId: 96, session: 1, lane: 10, time: "10:00-11:00" }, // Fritzy
  { memberId: 26, session: 1, lane: 11, time: "10:00-11:00" }, // Anindya
  { memberId: 175, session: 1, lane: 12, time: "10:00-11:00" }, // Nayla
  { memberId: 67, session: 1, lane: 13, time: "10:00-11:00" }, // Daisy
  { memberId: 1, session: 1, lane: 14, time: "10:00-11:00" }, // Aralie
  { memberId: 244, session: 1, lane: 15, time: "10:00-11:00" }, // Kimmy
  { memberId: 44, session: 1, lane: 16, time: "10:00-11:00" }, // Erine
  { memberId: 39, session: 1, lane: 17, time: "10:00-11:00" }, // Rilly
  { memberId: 162, session: 1, lane: 18, time: "10:00-11:00" }, // Mikaela
  { memberId: 115, session: 1, lane: 19, time: "10:00-11:00" }, // Maira
  { memberId: 204, session: 1, lane: 20, time: "10:00-11:00" }, // Ribka
  { memberId: 161, session: 1, lane: 21, time: "10:00-11:00" }, // Levi
  { memberId: 46, session: 1, lane: 22, time: "10:00-11:00" }, // Elin
  { memberId: 60, session: 1, lane: 23, time: "10:00-11:00" }, // Cynthia
  { memberId: 13, session: 1, lane: 24, time: "10:00-11:00" }, // Alya

  // === SESI 2 (11:00-12:00) ===
  { memberId: 91, session: 2, lane: 1, time: "11:00-12:00" },
  { memberId: 159, session: 2, lane: 2, time: "11:00-12:00" },
  { memberId: 105, session: 2, lane: 3, time: "11:00-12:00" },
  { memberId: 121, session: 2, lane: 4, time: "11:00-12:00" },
  { memberId: 116, session: 2, lane: 5, time: "11:00-12:00" },
  { memberId: 33, session: 2, lane: 6, time: "11:00-12:00" },
  { memberId: 114, session: 2, lane: 7, time: "11:00-12:00" },
  { memberId: 45, session: 2, lane: 8, time: "11:00-12:00" },
  { memberId: 31, session: 2, lane: 9, time: "11:00-12:00" },
  { memberId: 96, session: 2, lane: 10, time: "11:00-12:00" },
  { memberId: 26, session: 2, lane: 11, time: "11:00-12:00" },
  { memberId: 175, session: 2, lane: 12, time: "11:00-12:00" },
  { memberId: 67, session: 2, lane: 13, time: "11:00-12:00" },
  { memberId: 1, session: 2, lane: 14, time: "11:00-12:00" },
  { memberId: 244, session: 2, lane: 15, time: "11:00-12:00" },
  { memberId: 44, session: 2, lane: 16, time: "11:00-12:00" },
  { memberId: 39, session: 2, lane: 17, time: "11:00-12:00" },
  { memberId: 162, session: 2, lane: 18, time: "11:00-12:00" },
  { memberId: 115, session: 2, lane: 19, time: "11:00-12:00" },
  { memberId: 204, session: 2, lane: 20, time: "11:00-12:00" },
  { memberId: 161, session: 2, lane: 21, time: "11:00-12:00" },
  { memberId: 46, session: 2, lane: 22, time: "11:00-12:00" },
  { memberId: 60, session: 2, lane: 23, time: "11:00-12:00" },
  { memberId: 13, session: 2, lane: 24, time: "11:00-12:00" },

  //   === SESI 3 (12:00-13:00) ===
  { memberId: 22, session: 3, lane: 1, time: "12:00-13:00" }, // Christy
  { memberId: 59, session: 3, lane: 2, time: "12:00-13:00" }, // Oniel
  { memberId: 148, session: 3, lane: 3, time: "12:00-13:00" }, // Lulu
  { memberId: 64, session: 3, lane: 4, time: "12:00-13:00" }, // Danella
  { memberId: 88, session: 3, lane: 5, time: "12:00-13:00" }, // Olla
  { memberId: 94, session: 3, lane: 6, time: "12:00-13:00" }, // Freya
  { memberId: 107, session: 3, lane: 7, time: "12:00-13:00" }, // Greesel
  { memberId: 112, session: 3, lane: 8, time: "12:00-13:00" }, // Eli
  { memberId: 143, session: 3, lane: 9, time: "12:00-13:00" }, // Kathrina
  { memberId: 127, session: 3, lane: 10, time: "12:00-13:00" }, // Jessi
  { memberId: 166, session: 3, lane: 11, time: "12:00-13:00" }, // Muthe
  { memberId: 195, session: 3, lane: 12, time: "12:00-13:00" }, // Raisha
  { memberId: 131, session: 3, lane: 13, time: "12:00-13:00" }, // Lyn
  { memberId: 104, session: 3, lane: 14, time: "12:00-13:00" }, // Gita
  { memberId: 97, session: 3, lane: 15, time: "12:00-13:00" }, // Ella
  { memberId: 152, session: 3, lane: 16, time: "12:00-13:00" }, // Marsha
  { memberId: 2, session: 3, lane: 17, time: "12:00-13:00" }, // Delynn
  { memberId: 178, session: 3, lane: 18, time: "12:00-13:00" }, // Nachia
  { memberId: 185, session: 3, lane: 19, time: "12:00-13:00" }, // Oline
  { memberId: 221, session: 3, lane: 20, time: "12:00-13:00" }, // Nala
  { memberId: 48, session: 3, lane: 21, time: "12:00-13:00" }, // Chelsea
  { memberId: 46, session: 3, lane: 22, time: "12:00-13:00" }, // Elin
  { memberId: 60, session: 3, lane: 23, time: "12:00-13:00" }, // Cynthia
  { memberId: 13, session: 3, lane: 24, time: "12:00-13:00" }, // Alya
  { memberId: 28, session: 3, lane: 25, time: "12:00-13:00" }, // Virgi

  //   === SESI 4 (14:00-15:00) ===
  { memberId: 22, session: 4, lane: 1, time: "14:00-15:00" },
  { memberId: 59, session: 4, lane: 2, time: "14:00-15:00" },
  { memberId: 148, session: 4, lane: 3, time: "14:00-15:00" },
  { memberId: 64, session: 4, lane: 4, time: "14:00-15:00" },
  { memberId: 88, session: 4, lane: 5, time: "14:00-15:00" },
  { memberId: 94, session: 4, lane: 6, time: "14:00-15:00" },
  { memberId: 107, session: 4, lane: 7, time: "14:00-15:00" },
  { memberId: 112, session: 4, lane: 8, time: "14:00-15:00" },
  { memberId: 143, session: 4, lane: 9, time: "14:00-15:00" },
  { memberId: 127, session: 4, lane: 10, time: "14:00-15:00" },
  { memberId: 166, session: 4, lane: 11, time: "14:00-15:00" },
  { memberId: 195, session: 4, lane: 12, time: "14:00-15:00" },
  { memberId: 131, session: 4, lane: 13, time: "14:00-15:00" },
  { memberId: 104, session: 4, lane: 14, time: "14:00-15:00" },
  { memberId: 97, session: 4, lane: 15, time: "14:00-15:00" },
  { memberId: 152, session: 4, lane: 16, time: "14:00-15:00" },
  { memberId: 2, session: 4, lane: 17, time: "14:00-15:00" },
  { memberId: 178, session: 4, lane: 18, time: "14:00-15:00" },
  { memberId: 185, session: 4, lane: 19, time: "14:00-15:00" },
  { memberId: 221, session: 4, lane: 20, time: "14:00-15:00" },
  { memberId: 48, session: 4, lane: 21, time: "14:00-15:00" },

  //   SESI 5 (15:00-16:00)
  { memberId: 22, session: 5, lane: 1, time: "15:00-16:00" }, // Christy
  { memberId: 59, session: 5, lane: 2, time: "15:00-16:00" }, // Oniel
  { memberId: 148, session: 5, lane: 3, time: "15:00-16:00" }, // Lulu
  { memberId: 64, session: 5, lane: 4, time: "15:00-16:00" }, // Danella
  { memberId: 88, session: 5, lane: 5, time: "15:00-16:00" }, // Olla
  { memberId: 94, session: 5, lane: 6, time: "15:00-16:00" }, // Freya
  { memberId: 107, session: 5, lane: 7, time: "15:00-16:00" }, // Greesel
  { memberId: 112, session: 5, lane: 8, time: "15:00-16:00" }, // Eli
  { memberId: 143, session: 5, lane: 9, time: "15:00-16:00" }, // Kathrina
  { memberId: 127, session: 5, lane: 10, time: "15:00-16:00" }, // Jessi
  { memberId: 166, session: 5, lane: 11, time: "15:00-16:00" }, // Muthe
  { memberId: 195, session: 5, lane: 12, time: "15:00-16:00" }, // Raisha
  { memberId: 67, session: 5, lane: 13, time: "15:00-16:00" }, // Daisy
  { memberId: 1, session: 5, lane: 14, time: "15:00-16:00" }, // Aralie
  { memberId: 244, session: 5, lane: 15, time: "15:00-16:00" }, // Kimmy
  { memberId: 44, session: 5, lane: 16, time: "15:00-16:00" }, // Erine
  { memberId: 2, session: 5, lane: 17, time: "15:00-16:00" }, // Delynn
  { memberId: 178, session: 5, lane: 18, time: "15:00-16:00" }, // Nachia
  { memberId: 185, session: 5, lane: 19, time: "15:00-16:00" }, // Oline
  { memberId: 204, session: 5, lane: 20, time: "15:00-16:00" }, // Ribka
  { memberId: 161, session: 5, lane: 21, time: "15:00-16:00" }, // Levi
  { memberId: 182, session: 5, lane: 22, time: "15:00-16:00" }, // Intan
  { memberId: 120, session: 5, lane: 23, time: "15:00-16:00" }, // Ekin
  { memberId: 123, session: 5, lane: 24, time: "15:00-16:00" }, // Jemima

  //   === SESI 6 (16:00-17:00) ===
  { memberId: 22, session: 6, lane: 1, time: "16:00-17:00" },
  { memberId: 59, session: 6, lane: 2, time: "16:00-17:00" },
  { memberId: 148, session: 6, lane: 3, time: "16:00-17:00" },
  { memberId: 94, session: 6, lane: 6, time: "16:00-17:00" },
  { memberId: 107, session: 6, lane: 7, time: "16:00-17:00" },
  { memberId: 143, session: 6, lane: 9, time: "16:00-17:00" },
  { memberId: 127, session: 6, lane: 10, time: "16:00-17:00" },
  { memberId: 166, session: 6, lane: 11, time: "16:00-17:00" },
  { memberId: 1, session: 6, lane: 14, time: "16:00-17:00" },
  { memberId: 244, session: 6, lane: 15, time: "16:00-17:00" },
  { memberId: 44, session: 6, lane: 16, time: "16:00-17:00" },
  { memberId: 2, session: 6, lane: 17, time: "16:00-17:00" },
  { memberId: 178, session: 6, lane: 18, time: "16:00-17:00" },
  { memberId: 185, session: 6, lane: 19, time: "16:00-17:00" },
  { memberId: 161, session: 6, lane: 21, time: "16:00-17:00" },
  { memberId: 182, session: 6, lane: 22, time: "16:00-17:00" },
  { memberId: 120, session: 6, lane: 23, time: "16:00-17:00" },
  { memberId: 123, session: 6, lane: 24, time: "16:00-17:00" },
  { memberId: 162, session: 6, lane: 25, time: "16:00-17:00" },

  //   === SESI 7 (17:00-18:00) ===
  { memberId: 91, session: 7, lane: 1, time: "17:00-18:00" }, // Fiony
  { memberId: 159, session: 7, lane: 2, time: "17:00-18:00" }, // Michie
  { memberId: 105, session: 7, lane: 3, time: "17:00-18:00" }, // Gracie
  { memberId: 121, session: 7, lane: 4, time: "17:00-18:00" }, // Trisha
  { memberId: 116, session: 7, lane: 5, time: "17:00-18:00" }, // Indah
  { memberId: 33, session: 7, lane: 6, time: "17:00-18:00" }, // Lana
  { memberId: 114, session: 7, lane: 7, time: "17:00-18:00" }, // Hillary
  { memberId: 45, session: 7, lane: 8, time: "17:00-18:00" }, // Cathy
  { memberId: 31, session: 7, lane: 9, time: "17:00-18:00" }, // Lia
  { memberId: 96, session: 7, lane: 10, time: "17:00-18:00" }, // Fritzy
  { memberId: 26, session: 7, lane: 11, time: "17:00-18:00" }, // Anindya
  { memberId: 175, session: 7, lane: 12, time: "17:00-18:00" }, // Nayla
  { memberId: 131, session: 7, lane: 13, time: "17:00-18:00" }, // Lyn
  { memberId: 104, session: 7, lane: 14, time: "17:00-18:00" }, // Gita
  { memberId: 97, session: 7, lane: 15, time: "17:00-18:00" }, // Ella
  { memberId: 152, session: 7, lane: 16, time: "17:00-18:00" }, // Marsha
  { memberId: 28, session: 7, lane: 17, time: "17:00-18:00" }, // Virgi
  { memberId: 30, session: 7, lane: 18, time: "17:00-18:00" }, // Auwia
  { memberId: 108, session: 7, lane: 19, time: "17:00-18:00" }, // Giaa
  { memberId: 221, session: 7, lane: 20, time: "17:00-18:00" }, // Nala
  { memberId: 48, session: 7, lane: 21, time: "17:00-18:00" }, // Chelsea
  { memberId: 182, session: 7, lane: 22, time: "17:00-18:00" }, // Intan
  { memberId: 120, session: 7, lane: 23, time: "17:00-18:00" }, // Ekin
  { memberId: 123, session: 7, lane: 24, time: "17:00-18:00" }, // Jemima
  { memberId: 162, session: 7, lane: 25, time: "17:00-18:00" }, // Mikaela

  //   === SESI 8 (18:00-19:00) ===  
  { memberId: 91, session: 8, lane: 1, time: "18:00-19:00" },
  { memberId: 159, session: 8, lane: 2, time: "18:00-19:00" },
  { memberId: 105, session: 8, lane: 3, time: "18:00-19:00" },
  { memberId: 121, session: 8, lane: 4, time: "18:00-19:00" },
  { memberId: 116, session: 8, lane: 5, time: "18:00-19:00" },
  { memberId: 33, session: 8, lane: 6, time: "18:00-19:00" },
  { memberId: 114, session: 8, lane: 7, time: "18:00-19:00" },
  { memberId: 31, session: 8, lane: 9, time: "18:00-19:00" },
  { memberId: 96, session: 8, lane: 10, time: "18:00-19:00" },
  { memberId: 26, session: 8, lane: 11, time: "18:00-19:00" },
  { memberId: 104, session: 8, lane: 14, time: "18:00-19:00" },
  { memberId: 97, session: 8, lane: 15, time: "18:00-19:00" },
  { memberId: 152, session: 8, lane: 16, time: "18:00-19:00" },
  { memberId: 28, session: 8, lane: 17, time: "18:00-19:00" },
  { memberId: 30, session: 8, lane: 18, time: "18:00-19:00" },
  { memberId: 108, session: 8, lane: 19, time: "18:00-19:00" },
  { memberId: 221, session: 8, lane: 20, time: "18:00-19:00" },
  { memberId: 182, session: 8, lane: 22, time: "18:00-19:00" },
  { memberId: 120, session: 8, lane: 23, time: "18:00-19:00" },
  { memberId: 123, session: 8, lane: 24, time: "18:00-19:00" },
];
