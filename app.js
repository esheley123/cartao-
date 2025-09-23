function criaCartao(categoria,pergunta,resposta) {
let container = document.getElementyById('container'
let cartao = document.createrElement('article')
cartao.className = 'cartao'

cartao.innerHTML =  '
<div class="cartao_conteudo">
<h3>${categoria}</h3>
<div class="cartao__conteudo__pergunta">
<p> ${pergunta}</p>
  </div>
  <div class="cartao__conteudo__resposta">
<p> ${resposta}</p>
  </div>
  </div>
  '

  let respostaEstaVisivel = false

  functin viraCartao(){
    respostaEstaVisivel = !respostaEstaVisivel
    cartao.clasList.toggle('active', respostaEstaVisivel)
  }
  cartao.addEventListener('click', viraCartao)



  container.appendChild(cartao)
  {
