# Usando TypeScript

#### Criando um projeto node
- npm init -y => Cria arquivo => package.json

#### Instala o TS localmente para Dev ( Não vai para o deploy )
- npm install typescript -D => Cria arquivo => package-lock.json

#### Para transpilar um arquivo TS para JS:
- npx tsc ./arquivo => ( ou configurar o arquivo tsconfig para deixar um diretório de transpilação de origem e destino salvos)

Linha 7 package.json dentro de "scripts"=> "start": "npx tsc && node build/index.js", => coloca no script para executar o comando npx tsc e node ( mostrar na tela ) ao mesmo tempo usando o comando => npm run start

### Para transpilar um arquivo TS sem precisar criar uma build usando um servidor local:
- npm install ts-node-dev -D => Linha 7 package.json dentro de "scripts"=> "start:dev": "ts-node-dev --respawn --transpile-only src/index.ts", => npm run start:dev

### Criando um arquivo de configuração para o TS:
 - npx tsc --init => Cria arquivo => tsconfig.json

Linha 29 => Specify the root folder within your source files: "./src"

Linha 58 => Specify an output folder for all emitted files: "./build"

Linha 59 => Disable emitting comments.


### Para ver as configurações:
- https://www.typescriptlang.org/tsconfig
