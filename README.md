# Site Institucional - Projeto Integrador SENAI

## Descrição
Site institucional responsivo desenvolvido em HTML5, CSS3 e JavaScript para apoiar estudantes no desenvolvimento de Projetos Integradores do SENAI. O site oferece informações, documentos, formulários e recursos essenciais para o sucesso dos projetos.

## Características Principais

### Design e Layout
- **Design Moderno**: Interface limpa e profissional
- **Responsivo**: Adaptado para desktop, tablet e mobile
- **Identidade Visual SENAI**: Cores azul, branco e cinza
- **Tipografia**: Roboto e Open Sans para legibilidade
- **Acessibilidade**: Estrutura semântica e navegação intuitiva

### Tecnologias Utilizadas
- **HTML5**: Estrutura semântica com tags apropriadas
- **CSS3**: Estilos modernos com variáveis CSS e flexbox/grid
- **JavaScript**: Interatividade e validação de formulários
- **Responsive Design**: Media queries para diferentes dispositivos

## Estrutura do Site

### 1. Página Principal (index.html)
- **Hero Section**: Título principal e slogan
- **Sobre o Projeto**: Explicação do que é o Projeto Integrador
- **Competências**: Cards explicando competências técnicas e socioemocionais
- **Conexão com Indústria**: Benefícios e aplicações práticas
- **Vídeo-aula**: Link para conteúdo educacional
- **Acesso Rápido**: Cards de navegação para outras seções

### 2. Página de Documentos (documentos.html)
- **Materiais de Apoio**: Lista de documentos essenciais
- **Guias e Modelos**: Templates para relatórios, banners e apresentações
- **Normas ABNT**: Informações sobre NBR 6023 e NBR 6028
- **Links Externos**: Sebrae Canvas e outros recursos
- **Downloads**: Botões para baixar materiais (simulados)

### 3. Página de Briefing (briefing.html)
- **Formulário Completo**: Coleta de informações do projeto
- **Dados do Projeto**: Nome, desafio, objetivos
- **Informações da Equipe**: Até 5 integrantes
- **Desenvolvimento**: Justificativa, ferramentas, cronograma
- **Contato**: E-mail e telefone do responsável
- **Validação**: JavaScript para validação de campos

### 4. Página de FAQ (faq.html)
- **Perguntas Frequentes**: 10 perguntas com respostas detalhadas
- **Accordion Interface**: Clique para expandir/recolher respostas
- **Formulário de Dúvidas**: Envio de novas perguntas
- **Perguntas Recentes**: Lista de dúvidas enviadas por outros usuários
- **Status de Resposta**: Indicadores visuais de perguntas respondidas

## Funcionalidades JavaScript

### Navegação
- Menu fixo com efeito de scroll
- Navegação suave entre seções
- Indicador de página ativa
- Menu mobile responsivo

### Formulários
- Validação em tempo real
- Mensagens de erro personalizadas
- Validação de e-mail
- Campos obrigatórios destacados
- Mensagens de sucesso

### Interatividade
- Animações de entrada (fade-in-up)
- Hover effects em cards e botões
- Accordion para FAQ
- Efeitos de scroll

### Responsividade
- Breakpoints para diferentes dispositivos
- Layout adaptativo
- Menu mobile
- Imagens responsivas

## Estrutura de Arquivos

```
senai_projeto_integrador/
├── index.html              # Página principal
├── documentos.html         # Página de documentos
├── briefing.html          # Página de briefing
├── faq.html               # Página de FAQ
├── css/
│   └── style.css          # Estilos principais
├── js/
│   └── script.js          # JavaScript principal
├── images/
│   ├── logo_senai.png     # Logo oficial
│   ├── alunos_projeto.png # Imagem de estudantes
│   ├── icons/             # Ícones diversos
│   └── backgrounds/       # Imagens de fundo
├── README.md              # Documentação
├── planejamento.md        # Planejamento do projeto
├── conteudo.md           # Conteúdo detalhado
├── todo.md               # Lista de tarefas
└── teste_resultados.md   # Resultados dos testes
```

## Como Usar

### Visualização Local
1. Abra o arquivo `index.html` em um navegador web
2. Navegue pelas páginas usando o menu superior
3. Teste os formulários e funcionalidades

### Personalização
1. **Cores**: Modifique as variáveis CSS em `:root`
2. **Conteúdo**: Edite os textos diretamente nos arquivos HTML
3. **Imagens**: Substitua as imagens na pasta `images/`
4. **Funcionalidades**: Adicione JavaScript em `js/script.js`

### Deploy
- O site é estático e pode ser hospedado em qualquer servidor web
- Compatível com GitHub Pages, Netlify, Vercel, etc.
- Não requer backend para funcionar

## Recursos Implementados

### ✅ Concluído
- [x] Design responsivo completo
- [x] 4 páginas funcionais
- [x] Formulários com validação
- [x] Menu de navegação
- [x] Animações e efeitos
- [x] Estrutura semântica HTML5
- [x] CSS3 moderno com variáveis
- [x] JavaScript interativo
- [x] Imagens otimizadas
- [x] Documentação completa

### 🔄 Para Implementação Futura
- [ ] Backend para processamento de formulários
- [ ] Sistema de autenticação
- [ ] Dashboard administrativo
- [ ] Integração com banco de dados
- [ ] Sistema de notificações
- [ ] Upload de arquivos
- [ ] Relatórios e analytics

## Compatibilidade
- **Navegadores**: Chrome, Firefox, Safari, Edge (versões modernas)
- **Dispositivos**: Desktop, tablet, smartphone
- **Resoluções**: 320px a 1920px+
- **Acessibilidade**: WCAG 2.1 básico

## Suporte e Manutenção
- Código bem documentado e organizado
- Estrutura modular para fácil manutenção
- CSS com variáveis para personalização rápida
- JavaScript com funções separadas por funcionalidade

## Licença
Desenvolvido para o SENAI - Serviço Nacional de Aprendizagem Industrial.
Todos os direitos reservados © 2024 SENAI.

---

**Desenvolvido com ❤️ para apoiar estudantes no desenvolvimento de Projetos Integradores**

