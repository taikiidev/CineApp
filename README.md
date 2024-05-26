- Vinicius Taiki 554226
- Rafael Nascimento 553117
- Iago Diniz 553776

- Ola professor, eu sei que o codigo nao está dos melhores mas vou resumir aqui as principais alteracoes que eu fiz
pra facilitar sua correção.

- Arrumei a página do blog, centralizando os items da página.
- Em Movie.jsx eu criei um novo fetch pra arrumar os detalhes dos filmes que não estavam funcionando(antes so funcionava o das séries)
- No mesmo arquivo Movie.jsx , eu modifiquei um pouco do HTML, e peguei novas informações da API
do the movie database, adicionando total de votos em cada filme e colocando a data de lançamento do filme e séries. Como as
variáveis para acessar a data de lançamento eram diferentes, utilizei (movie.release_date || serie.first_air_date) no arquivo.

- Também arrumei a sintaxe das consts do Movie.jsx , pois 'movie' estava se referindo a aba de series. 
- Criei uma nova const para armazenar os filmes :     const [movie, setMovie] = useState({});
- No código inteiro, voce verá o operador lógico '||' para se referir a filme ou a serie e acessar a API correta, de acordo com o id.
- Também busquei na API a linguagem nativa do filme e coloquei na aba de detalhes dos filmes apenas.
- Verificando os filmes, percebi que o filme 'Un Pere Ideal' nao tinha sinopse. Entao criei uma condicional no arquivo Movie.jsx que verifica se 
o filme ou serie possui ou nao sinopse, e caso nao possuisse printasse um paragrafo dizendo 'Nao ha sinopse.'

- Coloquei um titulo de filmes na pagina Filmes.
- Tentei fazer o máximo de responsividade usando o tailwind.

- Bom professor, ta longe dos requisitos totais, mas foi oq deu pra fazer.. abraços!

