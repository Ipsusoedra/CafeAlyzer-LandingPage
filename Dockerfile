# Gunakan Node versi yang diinginkan sebagai base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Salin package.json dan package-lock.json ke dalam container
COPY package.json .
COPY yarn.lock .

# Install dependencies
RUN yarn install

# Salin seluruh proyek ke dalam container
COPY . .

# Bangun aplikasi Vite untuk produksi
RUN yarn build

# Port yang akan digunakan oleh aplikasi (sesuaikan dengan konfigurasi Vite Anda)
EXPOSE 8080
CMD ["yarn", "preview"]
