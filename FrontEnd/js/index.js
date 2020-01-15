$(document).ready(function(){
    $('.Iphone').mask('(00) 0000-0000'); //formatação da mascara
});

$( "#btnRegistrar" ).click(function(event) {
  event.preventDefault();
    var senha = $('#password').val();
    var confirm = $('#password2').val();
    var name = $('#name').val();
    var tel = $('#phone').val();
    var emaill = $('#email').val();
      if(name == "" || tel == "" || email == "" || confirm == "" || senha == ""){
        alertify.error('Preencha todos os campos!');
        return true;
      }  
      else if(senha!=confirm){
        alertify.error('Senhas Diferentes!');
        return false;
      }
      else{
          $('#password').val('');
          $('#password2').val('');
          $('#name').val('');
          $('#phone').val('');
          $('#email').val('');
          alertify.alert('Nome = ' + name + '\nTelefone = ' + tel + '\nEmail = ' + emaill + '\nSenha = ' + senha, function(){
            alertify.success('Cadastrado com Sucesso!');
          });
      }
  });

