
/*************** Làm Bài Tập***************/


/*************** NGUYỄN THANH TIẾN***************/

// To Dom Id Function //
function getMyId(id) {
  return document.getElementById(id)
}

/********************* Nav-Tab ****************/

function changeTab(event) {
var action1 = getMyId('homeWork1');
var action2 = getMyId('homeWork2');
var action3 = getMyId('homeWork3');
var action4 = getMyId('homeWork4');
var action5 = getMyId('homeWork5');

action1.classList.remove('active');
action2.classList.remove('active');
action3.classList.remove('active');
action4.classList.remove('active');
action5.classList.remove('active');

event.target.classList.add('active');
var dataTab = event.target.getAttribute('data-tab');

var tabDiv1 = getMyId('Project1');
var tabDiv2 = getMyId('Project2');
var tabDiv3 = getMyId('Project3');
var tabDiv4 = getMyId('Project4');
var tabDiv5 = getMyId('Project5');

tabDiv1.classList.remove('show');
tabDiv2.classList.remove('show');
tabDiv3.classList.remove('show');
tabDiv4.classList.remove('show');
tabDiv5.classList.remove('show');

getMyId(dataTab).classList.add('show');

};


/**
 Tính Tiền lương nhân viên
 */

 /**
  input: lương 1 ngày, số ngày làm;

  process:
  lấy value lương 1 ngày * value số ngày làm;

  output:
  tổng tiền lương
  */

getMyId('btnSalary').addEventListener('click', function () {
  // INPUT:
  var salaryOnDay = parseFloat(getMyId('salary').value);
  var dayWork = parseFloat(getMyId('day').value);
  //OUTPUT:
  var totalSalary = 0;
  // PROCESS:
  totalSalary = salaryOnDay * dayWork;

  var resultSalary = getMyId('tagSalary');
  resultSalary.style.display = 'block';
  resultSalary.innerHTML = 'Tổng Tiền lương ' + dayWork + ' ngày làm: ' + totalSalary.toLocaleString() + ' VND';

});

// BÀI TẬP 2: TÍNH GIÁ TRỊ TRUNG BÌNH

/**
 input: lấy giá trị 5 số người dùng nhập vào
 num1, num2, num3, num4, num5
  process:
  tính giá trị trung bình bằng tổng 5 số người dùng nhập vào và / cho 5
  output:
  tính giá trị trung bình của 5 số nguoi dùng nhập vào
*/

document.getElementById('btnAverage').onclick = function () {
  //INPUT:
  var num1 = parseFloat(getMyId('num1').value);
  var num2 = parseFloat(getMyId('num2').value);
  var num3 = parseFloat(getMyId('num3').value);
  var num4 = parseFloat(getMyId('num4').value);
  var num5 = parseFloat(getMyId('num5').value);
  
  //OUTPUT:
  var averageNum = 0;
  
  //PROCESS:
  averageNum = (num1 + num2 + num3 + num4 + num5) / 5;

  //Dom result

  var averageResult = getMyId('tagAverage');
  averageResult.style.display = 'block';
  averageResult.innerHTML = 'Giá Trị Trung Bình Của 5 Số Trên Là: ' + averageNum;

};

// BÀI 3: QUY ĐỔI TIỀN:

/**
input: lấy sô tiền người dùng nhập vào

process: giá tiền 1 USD = 23,500 VND
lấy số tiền người dùng nhập vào * 23,500 vnd

output: số tiền đổi qua VND
 */

document.getElementById('btnExchange').onclick = function () {
  //INPUT:
  var USD = parseFloat(getMyId('USD').value);
  //OUTPUT:
  var exchange = 0;

  //PROCESS:
  var VND = 23500;
  exchange = USD * VND;

  var tagCurrency = getMyId('tagCurrency');
  tagCurrency.style.display = 'block';
  tagCurrency.innerHTML = exchange.toLocaleString() + ' VND';

};

// BÀI TẬP 4: Tính Diện Tích, Chu Vi Hình Chữ Nhật;

/**
input: lấy giá trị người dùng nhập vào
chiều dài ; chiều rộng

process:
tính chu vi: (dài + rộng) * 2
tính diện tích: dài * rộng;

output:
kết quả tính chu vi;
kết quả tính diện tích
 */

// tính Diện tich
function tinhsDienTich(dai,rong) {
  var result = dai * rong;
  return result
}

// tính Chu Vi:
function tinhChuVi(dai,rong) {
  var chuVi = (dai + rong) * 2;
  return chuVi
}


//diện tích
document.getElementById('btnDienTich').onclick = function () {
  //INPUT:
  var chieuDai = parseFloat(getMyId('chieuDai').value);
  var chieuRong = parseFloat(getMyId('chieuRong').value);
  // OUTPUT:
  var tinhDT = tinhsDienTich(chieuDai,chieuRong);

  var resutlDT = getMyId('tagHCN');
  resutlDT.style.display = 'block';
  resutlDT.innerHTML = 'Diện Tích Hình Chữ Nhật: ' + tinhDT;

};

//Chu vi

document.getElementById('btnChuVi').onclick = function () {
   //INPUT:
  var chieuDai = parseFloat(getMyId('chieuDai').value);
  var chieuRong = parseFloat(getMyId('chieuRong').value);
  //OUTPUT:
  var tinhCV = tinhChuVi(chieuDai,chieuRong);
  var resutlCV = getMyId('tagHCN');
  resutlCV.style.display = 'block';
  resutlCV.innerHTML = 'Chu Vi Hình Chữ Nhật: ' + tinhCV;
};

// BÀI 5: Tính tổng 2 ký số

/**
INPUT: lấy giá trị input nhập vào 1 số có 2 chữ số

process: tính tổng 2 ký số của số người dùng nhập vào:
số 1 + số 2;

output: tổng ký số:
 */

getMyId('btnNumber').onclick = function () {
  //input:
  var iSo = parseFloat(getMyId('iSo').value);

  // output:
  var totalNum = 0;

  //process: tính được tối đa tổng 4 ký số;
  totalNum = Math.floor(iSo / 1000) + Math.floor(iSo % 1000 / 100) + Math.floor(iSo % 100 / 10) +  iSo % 10;
  
  var resultNumber = getMyId('tagIso');
  resultNumber.style.display = 'block';
  resultNumber.innerHTML = 'Tổng Ký Sô: ' + totalNum;
};