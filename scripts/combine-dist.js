import { cpSync, mkdirSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const output = resolve(root, 'combined-dist')

// Limpar e criar diretório de saída
if (existsSync(output)) {
  cpSync(output, output, { recursive: true })
}
mkdirSync(output, { recursive: true })

// Copiar host (base)
cpSync(resolve(root, 'apps/host/dist'), output, { recursive: true })

// Copiar remotes
const remotes = ['tarefas', 'dashboard', 'equipe']
for (const remote of remotes) {
  const src = resolve(root, `apps/${remote}/dist`)
  const dest = resolve(output, remote)
  mkdirSync(dest, { recursive: true })
  cpSync(src, dest, { recursive: true })
}

// Copiar staticwebapp.config.json
cpSync(resolve(root, 'staticwebapp.config.json'), resolve(output, 'staticwebapp.config.json'))

console.log('Build combinado criado em: combined-dist/')
