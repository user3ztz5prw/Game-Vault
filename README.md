# Game Vault — site de catálogo gamer

Site estático responsivo em HTML, CSS e JavaScript, pronto para publicar no GitHub Pages.

## Arquivos
- `index.html`: conteúdo e estrutura da página.
- `style.css`: layout responsivo preto e dourado.
- `script.js`: catálogo, busca, filtros e abertura de conversa no WhatsApp.

## Antes de publicar
1. Abra `script.js`.
2. Troque `WHATSAPP_NUMBER` pelo número real da loja, incluindo código do país e DDD, apenas números. Exemplo de formato: `5511999999999`.
3. Edite a lista `products` com anúncios reais, preços e descrições verdadeiras. Os seis produtos que vêm no projeto são apenas exemplos.
4. Confira as regras oficiais de cada jogo sobre transferência ou venda de contas. Algumas plataformas proíbem esse tipo de negociação.
5. Teste os botões do WhatsApp e todos os filtros antes de divulgar.

## Publicar no GitHub Pages
1. Entre em https://github.com e faça login.
2. Crie um repositório novo, por exemplo `game-vault`. Para facilitar, marque-o como **Public**.
3. Envie os três arquivos `index.html`, `style.css` e `script.js` para a raiz do repositório. Você também pode enviar este README.
4. No repositório, abra **Settings** → **Pages**.
5. Em **Build and deployment**, selecione **Deploy from a branch**.
6. Em **Branch**, selecione `main` e a pasta `/(root)`, depois clique em **Save**.
7. Aguarde alguns minutos e atualize a seção Pages. O GitHub mostrará o endereço publicado, normalmente `https://SEU-USUARIO.github.io/game-vault/`.
8. Abra o endereço no celular e no computador para testar.

## Como editar os produtos
No `script.js`, cada objeto da lista `products` representa um cartão. Edite `name`, `game`, `price`, `description`, `tags`, `symbol` e `badge`. `price` deve ser um número, sem `R$`.

## Limitações desta versão
- Não tem checkout nem pagamento automático.
- Não guarda pedidos, senhas ou dados de clientes.
- O botão abre uma conversa no WhatsApp; a compra é combinada diretamente.
- O catálogo inicial é demonstrativo.
