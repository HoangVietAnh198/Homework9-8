// Bài 1

// function tong() {
//     let a = Number(prompt(`Hay nhap so a`));
//     let b = Number(prompt(`Hay nhap so b`));
//     let v=a+b;
//     console.log(v);
// return;
// } 
// tong()

// Bài 2
// function tong (){
//     let array=[1,2,3,4,5,6]
// let a = 0;
// for (i=0;i<array.length;i++) {
//     a = a + array[i]
// }
// console.log(a);
// }
// tong()

// Bai 1
// function binhPhuong() {
//     let a = Number(prompt(`Nhap so muon binh phuong`));
//     console.log(a*a);
// }
// binhPhuong()

// Bai 2
// function ac() {
//     let a = Number(prompt(`Nhap ban kinh hinh tron`));
//     console.log(`dien tich hinh tron la ${3.14 * a * a}`);
//     console.log(`chu vi hinh tron la ${3.14 * a * 2}`);
// }
// ac()

// bai 3
//  function ac() {
//     let a = Number(prompt(`nhap so can tim giai thua`));
//     let c = 1;
//     for (i=a;i>0;i=i-1){
//         c = c*i
//     }
//     console.log(c);
// }
// ac()

// Baif 4
// function so(a) {
//     if (typeof a == "number") {
//       console.log("true");
//     } else {
//       console.log("false");
//     }
//   }
//   so();

// Bai 5
// let a = prompt(`nhap so a`)
// let b = prompt(`nhap so b`)
// let c = prompt(`nhap so c`)
// function min(a,b,c){
    //     if (a<b && a<c) {
    //         alert(`${a} la so nho nhat`)
    //     } else if (b<a && b<c) {
    //         alert(`${b} la so nho nhat`)
    //     } else {
    //         alert(`${c} la so nho nhat`)
    //     }
    // }
    // min(a,b,c)

// bai 6
// function name1() {
//     let a = Number(prompt(`Nhap so vao day`));
//     if (a>0){
//         console.log(`so ${a} la so nguyen duong`);
//     } else {
//         console.log(`so ${a} khong phai la so nguyen duong`);
//     }
// }
// name1()

// bai 7
// function ab() {
//     let a = Number(prompt(`Nhap so a`))
//     let b = Number(prompt(`Nhap so b`))
//     let tmp = a
//     a = b 
//     b = tmp

// console.log(`so a sau khi duoc doi la ${a}`);
// console.log(`so b sau khi duoc doi la ${b}`);
// }
// ab()

// bai 8
// function ab() {
//     let array = prompt(`Nhap so array`).split("");
//     let tmp = '';
//     for (i = array.length - 1; i >= 0; i--) {
//         tmp = tmp + "  " + array[i]
//     }
//     console.log(tmp);
// }
// ab()

// bai 9
// function sdsa() {
//     let array = prompt(`Hay nhap thu gi cung duoc`).split("");
//     let inPut = prompt(`Nhập một kí tự bất kì`);
//     let bienAo = 0;
//     for (i = 0; i < array.length; i++) {
//        if (array[i] === inPut) {
//           bienAo = bienAo + 1;
//        }
//     }
//     if (bienAo > 0) {
//        alert(`Kí tự xuất hiện ${bienAo} lần trong những thứ linh tinh đã nhập`)
//     } else {
//        alert(`Kí tự không có trong những thứ kia`)
//     }
//  }
//  sdsa()