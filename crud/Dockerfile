FROM node:18

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos necesarios
COPY package.json package-lock.json ./
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Exponer el puerto
EXPOSE 80

# Comando para ejecutar el servidor
CMD ["node", "server.js"]
