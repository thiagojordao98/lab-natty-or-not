# 🎨 Natty or Not? 🤖

> **Desafio de Autenticidade com IA** - Projeto desenvolvido para o Lab DIO Natty or Not

## 📋 Sobre o Projeto

Um jogo interativo e educacional que desafia os jogadores a identificarem se imagens foram geradas por Inteligência Artificial ou são fotografias reais. O projeto demonstra como é difícil distinguir entre conteúdo criado por humanos e por IA, explorando conceitos de visão computacional e deep learning.

## 🎯 Objetivo

Testar a capacidade humana de distinguir entre imagens reais e imagens geradas por IA através de duas fases progressivas:

- **Fase 1**: Identificação individual - O jogador vê uma imagem e deve decidir se é IA ou real
- **Fase 2**: Comparação lado a lado - Duas imagens são apresentadas e o jogador deve identificar qual foi gerada por IA

## ✨ Características

### Tecnologias Utilizadas

- **React 18.2.0** - Biblioteca JavaScript para interfaces de usuário
- **TypeScript 5.0.0** - Superset tipado do JavaScript
- **Create React App** - Ferramenta de build e desenvolvimento
- **CSS3** - Estilização com gradientes, animações e design responsivo

### Best Practices Implementadas

Seguindo as **melhores práticas oficiais do React e TypeScript**:

#### React Hooks Optimization
- ✅ **useCallback**: Memoização de funções para evitar re-renderizações desnecessárias
- ✅ **useState**: Gerenciamento de estado com inicialização lazy
- ✅ **Updater Functions**: Uso de `prevState => newState` para updates baseados em estado anterior

#### TypeScript Best Practices
- ✅ **Interfaces explícitas**: Definição clara de tipos para props e dados
- ✅ **Tipagem genérica**: Função `shuffleArray<T>` com types parametrizados
- ✅ **Tipo de retorno explícito**: Funções com retornos tipados
- ✅ **Readonly parameters**: Arrays marcados como readonly quando apropriado

#### Estrutura de Código
- 📁 Separação clara entre componentes, dados e estilos
- 🎨 CSS modularizado por componente
- 🔄 Arquitetura baseada em componentes funcionais
- 🎯 Single Responsibility Principle aplicado

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd lab-natty-or-not/natty-or-not-react
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm start
```

4. Acesse no navegador:
```
http://localhost:3000
```

## 🎮 Como Jogar

1. **Menu Inicial**: Clique em "Iniciar Desafio"
2. **Fase 1**: Observe a imagem e clique em "Sim, é IA" ou "Não, é Real"
3. **Fase 2**: Compare duas imagens e clique na que você acha que é gerada por IA
4. **Resultados**: Veja sua pontuação final e tente novamente!

## 🏗️ Estrutura do Projeto

```
natty-or-not-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Phase1Game.tsx      # Componente da Fase 1
│   │   ├── Phase1Game.css      # Estilos da Fase 1
│   │   ├── Phase2Game.tsx      # Componente da Fase 2
│   │   └── Phase2Game.css      # Estilos da Fase 2
│   ├── gameData.ts             # Dados das imagens e lógica do jogo
│   ├── App.tsx                 # Componente principal
│   ├── App.css                 # Estilos globais
│   └── index.tsx               # Ponto de entrada
├── package.json
├── tsconfig.json
└── README.md
```

## 📸 Fontes das Imagens

- **Imagens Reais**: [Pexels](https://www.pexels.com/) - Fotografias de alta qualidade
- **Imagens de IA**: [Lexica Art](https://lexica.art/) - Imagens geradas por Stable Diffusion

## 🎨 Design

O projeto utiliza uma paleta de cores vibrante com gradientes:
- **Fase 1**: Gradiente roxo (#667eea → #764ba2)
- **Fase 2**: Gradiente rosa (#f093fb → #f5576c)
- **Resultados**: Gradiente azul (#4facfe → #00f2fe)

Animações suaves proporcionam feedback visual imediato ao jogador.

## 📚 Conceitos de IA Explorados

- **Geração de Imagens por IA**: Modelos como Stable Diffusion
- **Deep Learning**: Redes neurais profundas para criação de conteúdo
- **Visão Computacional**: Como IAs "enxergam" e processam imagens
- **Desafios de Autenticidade**: A dificuldade crescente de distinguir conteúdo sintético

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma Branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: Nova feature'`)
4. Push para a Branch (`git push origin feature/NovaFeature`)
5. Abrir um Pull Request

## 📝 Licença

Este projeto foi criado para fins educacionais como parte do Lab DIO Natty or Not.

## 👨‍💻 Autor

Desenvolvido com ❤️ para o desafio #LabDIONattyOrNot

---

**#IA #React #TypeScript #WebDevelopment #MachineLearning**
