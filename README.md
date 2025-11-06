# 📚 Educa+ 

> Portal educacional que conecta estudantes a cursos gratuitos oferecidos por instituições públicas

## Sobre o Projeto

O **Educa+** nasceu da ideia de facilitar o acesso à educação de qualidade. Sabemos que existem diversos cursos técnicos e profissionalizantes gratuitos oferecidos por instituições como SENAI, ETEC e SENAC, mas muitas vezes as pessoas não sabem como encontrá-los ou não têm informações completas sobre eles.

Este app resolve esse problema reunindo tudo em um só lugar: informações detalhadas sobre cursos, carga horária, modalidade, conteúdo programático e até a possibilidade de se inscrever diretamente pelo WhatsApp.

### O que você encontra no app:

- **6 cursos diferentes** de instituições públicas reconhecidas
- **Informações completas** sobre cada curso (duração, modalidade, requisitos)
- **Cadastro simples** com apenas nome e e-mail
- **Design limpo e intuitivo** para facilitar a navegação
- **Inscrição rápida** via WhatsApp

## 🎓 Contexto Acadêmico

**Disciplina:** Mobile Application Development  
**Professor:** Fernando  
**Instituição:** FIAP  
**Semestre:** 2025

### Equipe de Desenvolvimento

| RM | Nome | GitHub | LinkedIn |
|---|---|---|---|
| RM560967 | Gabriel Rossi | [@GabrielRossi01](https://github.com/GabrielRossi01) | [Perfil](https://www.linkedin.com/in/gabriel-oliveira-rossi-155baa324/) |
| RM559271 | Patrick Castro Quintana | [@castropatrick](https://github.com/castropatrick) | [Perfil](https://www.linkedin.com/in/patrick-castro-839aa2273/) |
| RM560759 | Rodrigo Naoki Yamasaki | [@RodrygoYamasaki](https://github.com/RodrygoYamasaki) | [Perfil](https://www.linkedin.com/in/rodrigo-yamasaki-74a3b1324/) |

## 🚀 Como Rodar o Projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado na sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo Go](https://expo.dev/client) instalado no seu celular (disponível na Play Store e App Store)

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/castropatrick/CP3-Mobile.git
```

2. **Entre na pasta do projeto**
```bash
cd CP3-Mobile
```

3. **Instale as dependências**
```bash
npm install
```
ou, se preferir yarn:
```bash
yarn install
```

4. **Inicie o projeto**
```bash
npx expo start
```

5. **Abra no seu celular**
   - Abra o aplicativo **Expo Go** no seu celular
   - Escaneie o QR Code que apareceu no terminal
   - Pronto! O app vai abrir no seu celular

### Dicas para rodar

- Se o QR Code não aparecer, pressione `r` no terminal para recarregar
- Para limpar o cache: `npx expo start -c`
- Certifique-se de que seu celular e computador estão na mesma rede Wi-Fi

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma que facilita o desenvolvimento React Native
- **Expo Router** - Sistema de navegação baseado em arquivos
- **Ionicons** - Biblioteca de ícones

## 📱 Funcionalidades

- ✅ Cadastro de usuário (validação de e-mail incluída)
- ✅ Listagem de cursos com filtros visuais
- ✅ Detalhes completos de cada curso
- ✅ Navegação por abas (Início, Cursos, Sobre)
- ✅ Integração com WhatsApp para inscrição
- ✅ Design responsivo e moderno

## 📂 Estrutura do Projeto

```
CP3-Mobile/
├── app/
│   ├── _layout.jsx          # Configuração de navegação
│   ├── index.jsx            # Tela inicial (cadastro)
│   ├── cursos.jsx           # Lista de cursos
│   ├── sobre.jsx            # Sobre o app e equipe
│   └── detalhes/
│       └── [id].jsx         # Detalhes dinâmicos do curso
├── assets/                   # Imagens e recursos
└── package.json             # Dependências do projeto
```

## 🎯 Desafios e Aprendizados

Durante o desenvolvimento, enfrentamos alguns desafios interessantes:

1. **Navegação Dinâmica:** Implementar rotas dinâmicas com Expo Router foi um aprendizado valioso
2. **Validação de Dados:** Criar validações de e-mail que realmente funcionam
3. **Design Responsivo:** Garantir que o app ficasse bonito em diferentes tamanhos de tela
4. **Passagem de Parâmetros:** Entender como passar dados entre telas de forma eficiente


---

**Desenvolvido com dedicação pela equipe Educa+ 🚀**

🦤
