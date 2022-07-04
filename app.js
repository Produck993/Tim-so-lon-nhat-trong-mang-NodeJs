let  array = [2, 5, 6, 456, 2, 76, 1000, 123, 888];
let  max  = array[0];
for ( let number of array) {
    if (number > max ) {
        max = number
    }
}
console.log(`Giá trị lớn nhất trong mảng là : ${max}`)