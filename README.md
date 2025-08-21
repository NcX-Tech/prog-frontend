# Portfolio - Programação Front-End

Portfolio pessoal de Brenno Souza, desenvolvido com Next.js 14.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React para produção
- **React 18** - Biblioteca para interfaces de usuário
- **CSS Modules** - Estilização modular e escopada
- **Fontes Google** - Inter para tipografia moderna

## 📁 Estrutura do Projeto

```
prog-frontend-1/
├── app/                    # App Router do Next.js 14
│   ├── globals.css        # Estilos globais
│   ├── layout.js          # Layout principal
│   ├── page.js            # Página inicial
│   └── page.module.css    # Estilos da página
├── components/             # Componentes reutilizáveis
│   ├── Profile.js         # Componente de perfil
│   └── Profile.module.css # Estilos do perfil
├── public/                 # Arquivos estáticos
│   └── profile-photo.jpeg # Foto de perfil
└── vercel.json            # Configuração do Vercel
```

## 🛠️ Como Executar Localmente

1. **Instalar dependências:**

   ```bash
   npm install
   ```

2. **Executar em modo desenvolvimento:**

   ```bash
   npm run dev
   ```

3. **Abrir no navegador:**
   ```
   http://localhost:3000
   ```

## 🏗️ Build de Produção

```bash
npm run build
npm start
```

## 🚀 Deploy no Vercel

### Configurações Aplicadas:

- ✅ **Versões compatíveis** de React e Next.js
- ✅ **Configuração otimizada** para produção
- ✅ **Fontes web** carregadas corretamente
- ✅ **CSS Modules** funcionando
- ✅ **Build estático** otimizado

### Arquivos de Configuração:

- `vercel.json` - Configurações específicas do Vercel
- `.vercelignore` - Arquivos excluídos do deploy
- `next.config.mjs` - Configurações do Next.js

### Comandos para Deploy:

1. **Instalar Vercel CLI:**

   ```bash
   npm i -g vercel
   ```

2. **Fazer login:**

   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel --prod
   ```

## 🔧 Solução de Problemas

### Erro 404 NOT FOUND:

- ✅ Verificar se o build está funcionando: `npm run build`
- ✅ Confirmar que não há erros de compilação
- ✅ Verificar se o arquivo `vercel.json` está presente
- ✅ Garantir que as dependências estão instaladas

### Problemas de Fontes:

- ✅ Fonte Inter configurada corretamente
- ✅ Fallbacks para compatibilidade
- ✅ CSS Modules funcionando

## 📱 Responsividade

O projeto é totalmente responsivo e funciona em:

- ✅ Desktop
- ✅ Tablet
- ✅ Mobile

## 🎨 Design

- **Gradiente moderno** no fundo
- **Cards com sombras** e efeitos hover
- **Tipografia limpa** com fonte Inter
- **Cores harmoniosas** e contrastes adequados

## 📄 Licença

Este projeto está sob a licença MIT.
