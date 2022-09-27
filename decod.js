function criptografar() {
    var input = document.getElementById("textoCriptografia");
    var textoCriptografado = input.value.replace("e", "enter");
        textoCriptografado = textoCriptografado.replace("i", "imes");
        textoCriptografado = textoCriptografado.replace("a", "ai");
        textoCriptografado = textoCriptografado.replace("o", "ober");
        textoCriptografado = textoCriptografado.replace("u", "ufat");
    mostrarTexto(textoCriptografado);
    
}

function descriptografar() {
    var input = document.getElementById("textoCriptografia");
    var textoDescriptografado = input.value.replace("enter", "e");
        textoDescriptografado = textoDescriptografado.replace("imes", "i");
        textoDescriptografado = textoDescriptografado.replace("ai", "a");
        textoDescriptografado = textoDescriptografado.replace("ober", "o");
        textoDescriptografado = textoDescriptografado.replace("ufat", "u");
    mostrarTexto(textoDescriptografado);
}

function mostrarTexto(texto) {
   var textoBox = document.getElementById("textoCripto");
   textoBox.value = texto;
   textoBox.style.display = 'block';

   var limpaTexto = document.getElementById("textoCriptografia");
   limpaTexto.value = '';

   var limpaImagem = document.getElementById("textoNenhumaMensagem");
   limpaImagem.style.display = 'none';

   var botaoCopiar = document.getElementById("copiar");
   botaoCopiar.style.display = 'block';
    
}

function copiarTexto() {
    var elementoTexto = document.getElementById("textoCripto");
    elementoTexto.select();
    elementoTexto.setSelectionRange(0,99999);
    document.execCommand('copy');
}
