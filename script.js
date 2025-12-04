function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById('nome');
    const mensagem = document.getElementById('mensagem');
    const telefone = '5519995773577';

    const texto = `Ola, meu nome é ${nome.value}.\n${mensagem.value}`

    const mensagemFormatada = encodeURIComponent(texto);

    const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${mensagemFormatada}`;

    window.open(url, '_blank');
}