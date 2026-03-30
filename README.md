# TaskSphere

Sistema de gerenciamento de tarefas para equipes acadêmicas, desenvolvido com arquitetura de **microfrontends**.

## Site Publicado

> **Azure Web Static Apps:** [inserir URL aqui]

---

## Arquitetura

O projeto utiliza **Module Federation** para integrar microfrontends independentes em um shell (host) principal.

```
┌─────────────────────────────────────────────────┐
│              HOST / SHELL (:5100)                │
│   Layout (Sidebar + Header) + React Router      │
├─────────────┬───────────────┬───────────────────┤
│  Tarefas    │  Dashboard    │  Equipe           │
│  (:5001)    │  (:5002)      │  (:5003)          │
└─────────────┴───────┬───────┴───────────────────┘
                      │
            ┌─────────▼─────────┐
            │ @tasksphere/shared │
            └───────────────────┘
```

### Microfrontends

| MFE | Porta | Responsabilidade |
|-----|-------|------------------|
| **Host** | 5100 | Shell principal com layout e roteamento |
| **Tarefas** | 5001 | CRUD de tarefas (cadastrar, listar, editar status, excluir) |
| **Dashboard** | 5002 | Resumo por status, progresso geral, tarefas recentes |
| **Equipe** | 5003 | Exibição dos integrantes do grupo |

### Comunicação entre MFEs

Os microfrontends se comunicam via **localStorage** + **CustomEvents**. O MFE de Tarefas salva dados no localStorage e dispara um evento personalizado. O MFE de Dashboard escuta esse evento e atualiza automaticamente.

---

## Tecnologias

- **React 19** — UI framework
- **Vite 8** — Build tool
- **TypeScript 5.9** — Tipagem estática
- **Tailwind CSS 4** — Estilização utilitária
- **Module Federation** (`@originjs/vite-plugin-federation`) — Integração dos microfrontends
- **React Router 7** — Roteamento (no host)
- **Bun** — Package manager

---

## Estrutura do Projeto

```
microfrontend/
├── apps/
│   ├── host/           # Shell principal
│   ├── tarefas/        # MFE de Gestão de Tarefas
│   ├── dashboard/      # MFE de Dashboard
│   └── equipe/         # MFE de Equipe
├── packages/
│   └── shared/         # Tipos, utilitários e constantes compartilhadas
├── GRUPO.md
├── README.md
└── package.json
```

---

## Como Executar Localmente

### Pré-requisitos

- [Bun](https://bun.sh/) instalado
- Node.js 18+ (recomendado)

### Instalação

```bash
bun install
```

### Desenvolvimento

```bash
bun run dev
```

Isso inicia os 4 servidores simultaneamente:
- Host: http://localhost:5100
- Tarefas: http://localhost:5001
- Dashboard: http://localhost:5002
- Equipe: http://localhost:5003

Acesse **http://localhost:5100** no navegador.

### Build

```bash
bun run build
```

---

## Deploy no Azure Web Static Apps

1. Crie um recurso **Azure Static Web Apps** no portal Azure
2. Conecte ao repositório GitHub
3. Configure o token `AZURE_STATIC_WEB_APPS_API_TOKEN` como secret no repositório
4. O workflow em `.github/workflows/azure-static-web-apps.yml` realiza o deploy automático a cada push na branch `main`

---

## Grupo

- Bernardo
- Emmanuel
- Misael
- Otávio
