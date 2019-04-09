let version = 2

let arquivos = [
"/",
"css/estilos.css",
"css/opcoesDaPagina.css",
"css/opcoesDoCartao.css",
"css/cabecalho.css",
"css/login.css",
"css/loginForm.css",
"css/loginStatus.css",
"css/cartao.css",
"css/novoCartao.css",
"css/mural.css",
"js/lib/jquery.js",
"js/lib/eventemitter2.js",
"js/lib/KeyBoardNavigation.js",
"js/tags/Tags.js",
"js/cabecalho/mudaLayout.js",
"js/cabecalho/busca.js",
"js/filtro/Filtro.js",
"js/tipos/TiposCartao.js",
"js/cartao/render/Cartao_renderHelpers.js",
"js/cartao/render/CartaoOpcoes_render.js",
"js/cartao/render/CartaoConteudo_render.js",
"js/cartao/render/Cartao_render.js",
"js/cartao/Cartao.js",
"js/login/LoginUsuario_render.js",
"js/login/LoginUsuario.js",
"js/mural/render/Mural_render.js",
"js/mural/Mural.js",
"js/cabecalho/novoCartao.js",
"img/bin2.svg",
"img/edit.svg"];

console.log("Registra aaa")

self.addEventListener("install", function() {
  console.log("Install"); 
})

self.addEventListener("activate", function() {
  console.log("Activate");
  caches.open("ceep-arquivos-" + version).then(cache => {
    cache.addAll(arquivos)
      .then(function() {
        caches.delete("ceep-arquivos-" + (version -1));
        caches.delete("ceep-arquivos");        
      });
  })  
})

self.addEventListener("fetch", function (event) {
  let pedido = event.request;
  let promiseResposta = caches.match(pedido)
    .then(respostaCache => {
      //console.log(respostaCache);
      return respostaCache || fetch(pedido)
    });

  event.respondWith(promiseResposta);
});