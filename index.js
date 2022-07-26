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
    var number = document.getElementById("num5").value;
    var arr = number.split(",");
    document.getElementById("result5").innerHTML = arr;

    var endEven;
    for (var i = arr.length - 1; i >= 0; i--) {
        if ((arr[i] * 1) % 2 === 0) {
            endEven = arr[i] * 1;
            break;
        }
        return -1;
    }
    document.getElementById("resultBT5").innerHTML = endEven;

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
    var temp = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if ((arr[i] * 1) > (arr[j] * 1)) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    document.getElementById("resultBT7").innerHTML = arr;

}

// Bài 8: Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.

function checkPrime(n) {
    if (n < 2)
        return 0;
    for (var i = 2; i < n; i++)
        if (n % i == 0)
            return 0;
    return 1;
}

function ex8() { //chưa xong
    var number = document.getElementById("num8").value;
    var arr = number.split(",");
    document.getElementById("result8").innerHTML = arr;
    var firstPrime;
    for (var i = 0; i < arr.length; i++) {
        if (checkPrime(arr[i] * 1) === 1) {
            firstPrime = (arr[i] * 1);
            break;
        }
        return -1;
    }

    document.getElementById("resultBT8").innerHTML = firstPrime;
}
// Bài 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?.

function ex9() {
    var number = document.getElementById("num9").value;
    var arr = number.split(",");
    document.getElementById("result9").innerHTML = arr;
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i] * 1) === true) {
            count++;
        }
    }
    document.getElementById("resultBT9").innerHTML = count;
}

// Bài 10: So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
function ex10() {
    var number = document.getElementById("num10").value;
    var arr = number.split(",");
    document.getElementById("result10").innerHTML = arr;
    var count1 = 0;
    var count2 = 0;
    result = " ";
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] * 1) > 0) {
            count1++;
        } else {
            count2++;
        }
    }
    if (count1 > count2) {
        result = "Số dương nhiều hơn";
    } else if (count1 < count2) {
        result = "Số âm nhiều hơn";
    } else {
        result = "Bằng nhau";
    }
    document.getElementById("resultBT10").innerHTML = result;
}

// Có cách nào lấy giá trị mảng số luôn không ạ? Em dùng split n ra mảng chuỗi nên lấy gtri phải x1.Nếu có, phiền anh note vào file index.js trong github e với ạ . Em cảm ơn rất nhiều ạ!