//Bài 1: Tổng các số dương trong mảng.

function ex1() {
    var number = document.getElementById("array").value;
    var arr = number.split(",");
    document.getElementById("result1").innerHTML = arr;

    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] * 1 > 0) {
            sum += arr[i] * 1;
        }
    }
    document.getElementById("resultBT1").innerHTML = sum;
}
// Bài 2: Đếm có bao nhiêu số dương trong mảng.
function ex2() {
    var number = document.getElementById("num2").value;
    var arr = number.split(",");

    document.getElementById("result2").innerHTML = arr;
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] * 1 > 0) {
            count++;
        }
    }
    document.getElementById("resultBT2").innerHTML = count;
}
// Bài 3: Tìm số nhỏ nhất trong mảng 
function ex3() {
    var number = document.getElementById("num3").value;
    var arr = number.split(",");
    document.getElementById("result3").innerHTML = arr;
    var minNum = arr[0] * 1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] * 1 < minNum) {
            minNum = arr[i] * 1;
        }
    }
    document.getElementById("resultBT3").innerHTML = minNum;
}

// Bài 4: Tìm số dương nhỏ nhất trong mảng
function ex4() {
    var number = document.getElementById("num4").value;
    var arr = number.split(",");
    document.getElementById("result4").innerHTML = arr;
    var minNum = arr[0] * 1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] * 1 > 0 && arr[i] * 1 < minNum) {
            minNum = arr[i] * 1;
        }
    }
    document.getElementById("resultBT4").innerHTML = minNum;

}

// Bài 5: Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
function ex5() {
    var number = document.getElementById("num6").value;
    var arr = number.split(",");
    document.getElementById("result4").innerHTML = arr;
    var temp;
    var i;
    var j;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    document.getElementById("resultBT4").innerHTML = arr;

}

// bài 6: Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
function inputNum() {
    var number = document.getElementById("num6").value;
    var arr = number.split(",");
    document.getElementById("result6").innerHTML = arr;
    return arr;

}

function ex6() {
    var arr = inputNum();
    var temp;
    var i = document.getElementById("numSwap1").value * 1;
    var j = document.getElementById("numSwap2").value * 1;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    document.getElementById("resultBT6").innerHTML = arr;
}
// Bài 7: Sắp xếp mảng theo thứ tự tăng dần.
function ex7() {
    var number = document.getElementById("num7").value;
    var arr = number.split(",");
    document.getElementById("result7").innerHTML = arr;
    var arr = [1, 4, 3, 5, 2, 6, 9, 7];
    var temp;
    if (a[i] * 1 > a[i + 1] * 1) {
        temp = a[i] * 1;
        (arr[i] * 1) = (arr[i + 1] * 1);
        (arr[i + 1] * 1) = temp;

    }
    document.getElementById("resultBT7").innerHTML = arr;

}