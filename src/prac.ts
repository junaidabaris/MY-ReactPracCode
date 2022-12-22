// let emp: Iemp = {
//     id: 1,
//     n: "A",
//     brother: {
//         id: 1,
//         name: "B"
//     }
// };

// interface Iemp {
//     id: number;
//     n: string;
//     brother: Ibro;
// }

// interface Ibro {
//     id: number;
//     name: string;
// }
// emp.brother.name = "DD";
// console.log(emp);


// let emps: string[] = ["A", "B", "C"];

// let newEmps: InewEmps[] = [{ id: 1, name: "junaid", age: 20 }];

// interface InewEmps {
//   id: number;
//   name: string;
//   age?: number;
// }
// newEmps.push({ id: 2, name: "junaid" });

// newEmps[0].name = "akhtar";

// console.log(emps);
// console.log(newEmps);




// // date=21-12-22


// let emps: Iemps = {
//     id: "abc",
//     n: "john",
//     address: {
//       name: "parsawa",
//       masjid: {
//         color: "white"
//       }
//     }
//   };
  
//   interface Iemps {
//     id: string;
//     n: string;
//     address: Iadd;
//   }
  
//   interface Iadd {
//     name: string;
//     masjid: Imasjid;
//   }
  
//   interface Imasjid {
//     color: string;
//   }
  
//   console.log(emps);
  
