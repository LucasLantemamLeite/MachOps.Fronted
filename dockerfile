# 1. Usa node pra buildar a aplicação
FROM node:18-alpine as build-stage

WORKDIR /app

# Copia package.json e package-lock.json/yarn.lock
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código
COPY . .

# Roda o build de produção
RUN npm run build

# 2. Usa nginx pra servir a build
FROM nginx:alpine as production-stage

# Copia build do estágio anterior pro diretório padrão do nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Roda o nginx
CMD ["nginx", "-g", "daemon off;"]
