# 1. Usamos una versión ligera de Node.js
FROM node:20-slim

# 2. Creamos el directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiamos los archivos de dependencias primero (optimiza el cache)
COPY package*.json ./

# 4. Instalamos las dependencias de producción
RUN npm install --only=production

# 5. Copiamos el resto del código (incluyendo src y api)
COPY . .

# 6. Exponemos el puerto que usa tu app
EXPOSE 3000

# 7. Comando para arrancar la app
# Nota: Aquí usamos el script "start" de tu package.json
CMD ["npm", "start"]