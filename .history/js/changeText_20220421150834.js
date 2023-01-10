function mudarTexto() {

  var label = document.getElementsByClassName('lbl1');

  var texto1 = 'texto1';
  var texto2 = 'texto2';
  var texto3 = 'texto3';
  var texto4 = 'texto4';
  var texto5 = 'texto5';

  alert(label.id == 'lbl2')

  if(label.id == 'lbl1') {
    document.getElementById('descricao').textContent = texto1;
  }  
  else if(label.id == 'lbl2') {
    document.getElementById('descricao').textContent = texto2;
  } 
  if(label.id == 'lbl3') {
    document.getElementById('descricao').textContent = texto3;
  } 
  if(label.id == 'lbl4') {
    document.getElementById('descricao').textContent = texto4;
  } 
  if(label.id == 'lbl5') {
    document.getElementById('descricao').textContent = texto5;
  } 
  
  








}