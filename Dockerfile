FROM php:8.2-apache

# Active les variables d'environnement dans PHP
RUN docker-php-ext-install mysqli

COPY . /var/www/html/

EXPOSE 80
