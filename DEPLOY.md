# 🚀 Guia de Deploy - GitHub Pages

## Deploy Automático (Recomendado)

O projeto está configurado com **GitHub Actions** para deploy automático.

### Como funciona:
1. Faça commit e push para a branch `main`
2. O GitHub Actions automaticamente:
   - Instala as dependências
   - Faz o build da aplicação
   - Publica na branch `gh-pages`
3. Aguarde 2-3 minutos
4. Acesse: https://thiagojordao98.github.io/lab-natty-or-not

### Primeira vez? Configure o GitHub Pages:
1. Vá em **Settings** > **Pages**
2. Em **Source**, selecione:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
3. Clique em **Save**
4. Aguarde alguns minutos até o deploy completar

---

## Deploy Manual (Alternativo)

Se preferir fazer deploy manual:

```bash
# 1. Entre na pasta do projeto
cd natty-or-not-react

# 2. Instale as dependências (se ainda não instalou)
npm install

# 3. Execute o deploy
npm run deploy
```

Isso irá:
- Criar build de produção (`npm run build`)
- Publicar na branch `gh-pages` automaticamente

---

## Verificar Status do Deploy

### Via GitHub:
- Acesse: https://github.com/thiagojordao98/lab-natty-or-not/actions
- Veja o status do workflow "Deploy React App to GitHub Pages"

### Via Badge:
O badge no README mostra o status atual:
- ✅ Verde = Deploy bem-sucedido
- ❌ Vermelho = Erro no deploy
- 🟡 Amarelo = Em andamento

---

## Troubleshooting

### Página 404 após deploy:
1. Verifique se o GitHub Pages está configurado para branch `gh-pages`
2. Aguarde 5-10 minutos (pode demorar na primeira vez)
3. Limpe cache do navegador (Ctrl+Shift+Del)

### Build falha:
1. Teste localmente: `npm run build`
2. Verifique erros no terminal
3. Corrija os erros e faça novo push

### Deploy manual não funciona:
```bash
# Certifique-se de ter gh-pages instalado
npm install --save-dev gh-pages

# Tente novamente
npm run deploy
```

---

## URLs Importantes

- **Aplicação Live**: https://thiagojordao98.github.io/lab-natty-or-not
- **Repositório**: https://github.com/thiagojordao98/lab-natty-or-not
- **Actions**: https://github.com/thiagojordao98/lab-natty-or-not/actions

---

## Arquivos de Configuração

- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `natty-or-not-react/package.json` - Scripts e homepage configurados
- Branch `gh-pages` - Arquivos estáticos publicados
