function doubleNumber(num) {
  return new Promise((resolve, reject) => {
    if (typeof num !== "number") {
      reject("Input harus berupa angka!");
    } else {
      resolve(num * 2);
    }
  });
}


doubleNumber(5)
  .then((result) => console.log(result)) 
  .catch((error) => console.error(error));



function validateNumberData(data) {
  return new Promise((resolve, reject) => {
    if (typeof data == Number) {
      resolve("Data valid!");
    } else {
      reject("Data tidak merupakan Number");
    }
  });
}


validateNumberData("JavaScript")
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
