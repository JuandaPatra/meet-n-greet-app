type Twoshoot = {
  memberId: number;
  session: number;
  lane: number;
  time: string;
};

export const twoshoots: Twoshoot[] = [
  // sesi 1
  { memberId: 22, session: 1, lane: 1, time: "10:00-11:00" }, // Angelina Christy
  { memberId: 59, session: 1, lane: 2, time: "10:00-11:00" }, // Cornelia Vanisa
  { memberId: 148, session: 1, lane: 3, time: "10:00-11:00" }, // Lulu Salsabila
  { memberId: 64, session: 1, lane: 4, time: "10:00-11:00" }, // Dena Natalia
  { memberId: 143, session: 1, lane: 5, time: "10:00-11:00" }, // Kathrina Irene
  { memberId: 127, session: 1, lane: 6, time: "10:00-11:00" }, // Jessica Chandra
  { memberId: 166, session: 1, lane: 7, time: "10:00-11:00" }, // Mutiara Azzahra
  { memberId: 195, session: 1, lane: 8, time: "10:00-11:00" }, // Raisha Syifa
  { memberId: 28, session: 1, lane: 9, time: "10:00-11:00" }, // Astrella Virgiananda
  { memberId: 30, session: 1, lane: 10, time: "10:00-11:00" }, // Aulia Riza
  { memberId: 108, session: 1, lane: 11, time: "10:00-11:00" }, // Hagia Sopia

  // sesi 2
  { memberId: 22, session: 2, lane: 1, time: "11:00-12:00" }, // Angelina Christy
  { memberId: 59, session: 2, lane: 2, time: "11:00-12:00" }, // Cornelia Vanisa
  { memberId: 148, session: 2, lane: 3, time: "11:00-12:00" }, // Lulu Salsabila
  { memberId: 64, session: 2, lane: 4, time: "11:00-12:00" }, // Dena Natalia
  { memberId: 143, session: 2, lane: 5, time: "11:00-12:00" }, // Kathrina Irene
  { memberId: 127, session: 2, lane: 6, time: "11:00-12:00" }, // Jessica Chandra
  { memberId: 166, session: 2, lane: 7, time: "11:00-12:00" }, // Mutiara Azzahra
  { memberId: 195, session: 2, lane: 8, time: "11:00-12:00" }, // Raisha Syifa
  { memberId: 182, session: 2, lane: 9, time: "11:00-12:00" }, // Nur Intan
  { memberId: 120, session: 2, lane: 10, time: "11:00-12:00" }, // Jacqueline Immanuela
  { memberId: 123, session: 2, lane: 11, time: "11:00-12:00" }, // Jemima Evodie

  //   sesi 3
  { memberId: 67, session: 3, lane: 1, time: "12:00-13:00" }, // Desy Natalia
  { memberId: 1, session: 3, lane: 2, time: "12:00-13:00" }, // Abigail Rachel
  { memberId: 244, session: 3, lane: 3, time: "12:00-13:00" }, // Victoria Kimberly
  { memberId: 44, session: 3, lane: 4, time: "12:00-13:00" }, // Catherina Vallencia
  { memberId: 204, session: 3, lane: 5, time: "12:00-13:00" }, // Ribka Budiman
  { memberId: 161, session: 3, lane: 6, time: "12:00-13:00" }, // Michelle Levia
  { memberId: 116, session: 3, lane: 7, time: "12:00-13:00" }, // Indah Cahya
  { memberId: 33, session: 3, lane: 8, time: "12:00-13:00" }, // Aurhel Alana
  { memberId: 114, session: 3, lane: 9, time: "12:00-13:00" }, // Hillary Abigail
  { memberId: 45, session: 3, lane: 10, time: "12:00-13:00" }, // Cathleen Nixie
  { memberId: 26, session: 3, lane: 11, time: "12:00-13:00" }, // Anindya Ramadhani
  { memberId: 175, session: 3, lane: 12, time: "12:00-13:00" }, // Nayla Suji

  //   sesi 4
  { memberId: 67, session: 4, lane: 1, time: "14:00-15:00" }, // Desy Natalia
  { memberId: 1, session: 4, lane: 2, time: "14:00-15:00" }, // Abigail Rachel
  { memberId: 244, session: 4, lane: 3, time: "14:00-15:00" }, // Victoria Kimberly
  { memberId: 44, session: 4, lane: 4, time: "14:00-15:00" }, // Catherina Vallencia
  { memberId: 204, session: 4, lane: 5, time: "14:00-15:00" }, // Ribka Budiman
  { memberId: 161, session: 4, lane: 6, time: "14:00-15:00" }, // Michelle Levia
  { memberId: 116, session: 4, lane: 7, time: "14:00-15:00" }, // Indah Cahya
  { memberId: 33, session: 4, lane: 8, time: "14:00-15:00" }, // Aurhel Alana
  { memberId: 114, session: 4, lane: 9, time: "14:00-15:00" }, // Hillary Abigail
  { memberId: 45, session: 4, lane: 10, time: "14:00-15:00" }, // Cathleen Nixie
  { memberId: 26, session: 4, lane: 11, time: "14:00-15:00" }, // Anindya Ramadhani
  { memberId: 175, session: 4, lane: 12, time: "14:00-15:00" }, // Nayla Suji

  //   sesi 5
  { memberId: 131, session: 5, lane: 1, time: "15:00-16:00" }, // Jesslyn Elly
  { memberId: 104, session: 5, lane: 2, time: "15:00-16:00" }, // Gita Sekar Andarini
  { memberId: 97, session: 5, lane: 3, time: "15:00-16:00" }, // Gabriela Abigail
  { memberId: 152, session: 5, lane: 4, time: "15:00-16:00" }, // Marsha Lenathea
  { memberId: 221, session: 5, lane: 5, time: "15:00-16:00" }, // Shabilqis Naila
  { memberId: 48, session: 5, lane: 6, time: "15:00-16:00" }, // Chelsea Davina
  { memberId: 91, session: 5, lane: 7, time: "15:00-16:00" }, // Fiony Alveria
  { memberId: 159, session: 5, lane: 8, time: "15:00-16:00" }, // Michelle Alexandra
  { memberId: 105, session: 5, lane: 9, time: "15:00-16:00" }, // Grace Octaviani
  { memberId: 121, session: 5, lane: 10, time: "15:00-16:00" }, // Jazzlyn Trisha
  { memberId: 31, session: 5, lane: 11, time: "15:00-16:00" }, // Aurellia
  { memberId: 96, session: 5, lane: 12, time: "15:00-16:00" }, // Fritzy Rosmerian

  //   sesi 6

  { memberId: 131, session: 6, lane: 1, time: "16:00-17:00" }, // Jesslyn Elly
  { memberId: 104, session: 6, lane: 2, time: "16:00-17:00" }, // Gita Sekar Andarini
  { memberId: 97, session: 6, lane: 3, time: "16:00-17:00" }, // Gabriela Abigail
  { memberId: 152, session: 6, lane: 4, time: "16:00-17:00" }, // Marsha Lenathea
  { memberId: 221, session: 6, lane: 5, time: "16:00-17:00" }, // Shabilqis Naila
  { memberId: 48, session: 6, lane: 6, time: "16:00-17:00" }, // Chelsea Davina
  { memberId: 91, session: 6, lane: 7, time: "16:00-17:00" }, // Fiony Alveria
  { memberId: 159, session: 6, lane: 8, time: "16:00-17:00" }, // Michelle Alexandra
  { memberId: 105, session: 6, lane: 9, time: "16:00-17:00" }, // Grace Octaviani
  { memberId: 121, session: 6, lane: 10, time: "16:00-17:00" }, // Jazzlyn Trisha
  { memberId: 31, session: 6, lane: 11, time: "16:00-17:00" }, // Aurellia
  { memberId: 96, session: 6, lane: 12, time: "16:00-17:00" }, // Fritzy Rosmerian

  //   sesi 7
  { memberId: 86, session: 7, lane: 1, time: "17:00-18:00" }, // Febriola Sinambela
  { memberId: 87, session: 7, lane: 2, time: "17:00-18:00" }, // Freya Jayawardana
  { memberId: 88, session: 7, lane: 3, time: "17:00-18:00" }, // Greesella Adhalia
  { memberId: 89, session: 7, lane: 4, time: "17:00-18:00" }, // Helisma Putri
  { memberId: 2, session: 7, lane: 5, time: "17:00-18:00" }, // Adeline Wijaya
  { memberId: 153, session: 7, lane: 6, time: "17:00-18:00" }, // Nina Tutachia
  { memberId: 169, session: 7, lane: 7, time: "17:00-18:00" }, // Oline Manuel
  { memberId: 41, session: 7, lane: 8, time: "17:00-18:00" }, // Celline Thefani
  { memberId: 49, session: 7, lane: 9, time: "17:00-18:00" }, // Cynthia Yaputera
  { memberId: 20, session: 7, lane: 10, time: "17:00-18:00" }, // Alya Amanda
  { memberId: 32, session: 7, lane: 11, time: "17:00-18:00" }, // Bong Aprilli

  //   sesi 8
  { memberId: 86, session: 8, lane: 1, time: "18:00-19:00" }, // Febriola Sinambela
  { memberId: 87, session: 8, lane: 2, time: "18:00-19:00" }, // Freya Jayawardana
  { memberId: 88, session: 8, lane: 3, time: "18:00-19:00" }, // Greesella Adhalia
  { memberId: 89, session: 8, lane: 4, time: "18:00-19:00" }, // Helisma Putri
  { memberId: 2, session: 8, lane: 5, time: "18:00-19:00" }, // Adeline Wijaya
  { memberId: 153, session: 8, lane: 6, time: "18:00-19:00" }, // Nina Tutachia
  { memberId: 169, session: 8, lane: 7, time: "18:00-19:00" }, // Oline Manuel
  { memberId: 41, session: 8, lane: 8, time: "18:00-19:00" }, // Celline Thefani
  { memberId: 49, session: 8, lane: 9, time: "18:00-19:00" }, // Cynthia Yaputera
  { memberId: 20, session: 8, lane: 10, time: "18:00-19:00" }, // Alya Amanda
  { memberId: 147, session: 8, lane: 11, time: "18:00-19:00" }, // Mikaela Kusjanto
  { memberId: 109, session: 8, lane: 12, time: "18:00-19:00" }, // Humaira Ramadhani
];
