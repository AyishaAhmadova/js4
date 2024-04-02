// let birthday = new Date("07-08-1997");
// let index=0
//  setInterval(() => {
//    let now = new Date();
//    let between =  birthday-now;
//    let il = Math.trunc(between / (1000 * 60 * 60 * 24 * 365));
//    let gun = Math.trunc(between / (1000 * 60 * 60 * 24));
//    let saat = Math.trunc((between / (1000 * 60 * 60)) % 24);
//    let deqiqe = Math.trunc((between / (1000 * 60)) % 60);
//    let saniye = Math.trunc(between / 1000) % 60;
//    console.clear();

//    console.log(%c ${il} il ${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye,color:${colors[index]};);
//     index++
//  },1000)

// let colors=["green","red","grey","blue","aqua"];
// console.log(colors);

// let students = [
//       {
//         name: "Cavid",
//         surname: "Memmedov",
//         cost:70,
//         hobbies:[
//             "valeyball" , "programming","chess"
//         ]
//       },
//       {
//         name: "Cavid",
//         surname: "Memeedli",
//         mark:96,
//         hobbies:[
//             "reading book" , "writer code","swimming"
//         ]
//       },
//       {
//         name: "Rza",
//         surname: "Memmedov",
//         mark:100,
//         hobbies:[
//             "reda book" , "walking","driver"
//         ]
//       },
//       {
//         name: "Nihat",
//         surname: "Axundov",
//         mark:95,
//         hobbies:[
//             "football" , "play game","listen music"
//         ]
//       },
//     ];
//     let search = prompt("enter :");
//     console.log(students.filter(student => student.name===search));
let data = prompt("Hello");
let length = data.length;

for (let i = 0; i < length * 2 - 1; i++) {
  let soz = "";
  if (i < length) {
    soz = data.substring(0, i + 1);
  } else {
    soz = data.substring(0, length - (i - length + 1));
  }
  console.log(soz);
}

