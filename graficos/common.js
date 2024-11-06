const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
  }
  
  const tickConfig = {
    color: getCSS('--primary-color'),
    size: 16,
    family: getCSS('--font')
  }
  
  function criarGrafico(data, layout) {
    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    const config = {
      responsive: true,
      displayModeBar: false
    }
    Plotly.newPlot(grafico, data, layout, config) 
  }

  function incluirTexto(texto) {
    const container = document.getElementById('graficos-container')
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container_texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span> conectadas.<br>Isso significa que aproximadamente <span>${porcentagemConectada}%</span> de pessoas estão conectadas em alguma rede social.`;
    container.appendChild(paragrafo)
  }

  export { getCSS, tickConfig, criarGrafico, incluirTexto }