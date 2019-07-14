function insert(num) {
  if (isClearNeed){
    document.form.textview.value = '';
    isClearNeed = false;
  }
  document.form.textview.value = document.form.textview.value + num;
}

function clean() {
  document.form.textview.value = '';
}

function back() {
  var exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0,exp.length - 1)
}

function equal() {
  var exp = document.form.textview.value;
  if (exp){
    document.form.textview.value = eval(exp);
    isClearNeed = true;
  }

};

var isClearNeed = false;



