//Português
$(function() {
    $(".br").click(function() {
        //cabeçalho
        $(".nav-menu").children().eq(0).text("CARTEIRA");
        $(".nav-menu").children().eq(1).text("SIMULADOR");
        $(".nav-menu").children().eq(2).text("NOTÍCIAS");
        $(".nav-menu").children().eq(3).text("DOAÇÕES");
        $(".language-selected").text("pt-BR");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").addClass("change-br");
        //seção
        $("#title").text("Uma Webpage simples com opção de Milti-language");
        

    });
});

//English
$(function() {
    $(".en").click(function() {
        //header
        $(".nav-menu").children().eq(0).text("WALLET");
        $(".nav-menu").children().eq(1).text("SIMULATOR");
        $(".nav-menu").children().eq(2).text("NEWS");
        $(".nav-menu").children().eq(3).text("DONATIONS");
        $(".language-selected").text("en-US");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").addClass("change-en");
        //section
        $("#title").text("A simple webpage with Milti-language option");
        
    });
});

//Espanõl
$(function() {
    $(".es").click(function() {
        //encabezamiento
        $(".nav-menu").children().eq(0).text("CARTERA");
        $(".nav-menu").children().eq(1).text("SIMULADOR");
        $(".nav-menu").children().eq(2).text("NOTICIAS");
        $(".nav-menu").children().eq(3).text("DONACIONES");
        $(".language-selected").text("es");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").addClass("change-es");
        //sección
        $("#title").text("Una página web sencilla con la opción de Multi-language");
        
    });
});