# Usando TypeScript

#### Criando um projeto node
- npm init -y => Cria arquivo => package.json

#### Instala o TS localmente para Dev ( Não vai para o deploy )
- npm install typescript -D => Cria arquivo => package-lock.json

#### Para transpilar um arquivo TS para JS:
- npx tsc ./arquivo => ( ou configurar o arquivo tsconfig para deixar um diretório de transpilação de origem e destino salvos)

### Criando um arquivo de configuração para o TS:
 - npx tsc --init => Cria arquivo => tsconfig.json

Linha 29 => Specify the root folder within your source files: "./src"

Linha 58 => Specify an output folder for all emitted files: "./build"


### Para ver as configurações:
- https://www.typescriptlang.org/tsconfig