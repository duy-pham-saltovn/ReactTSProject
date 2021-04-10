FROM php:8.0.3-fpm

# Set working directory
WORKDIR /var/www/rn

# Install dependencies
RUN apt-get update && apt-get install -y \
  libzip-dev \
  libonig-dev \
  build-essential \
  default-mysql-client \
  libpng-dev \
  libjpeg62-turbo-dev \
  libfreetype6-dev \
  locales \
  zip \
  jpegoptim optipng pngquant gifsicle \
  vim \
  unzip \
  git \
  curl \
  openssl

# Install extensions
RUN docker-php-ext-install gd pdo_mysql

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Add user for laravel application
RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www

# Copy existing application directory contents
COPY api /var/www/rn

# Copy existing application directory permissions
COPY --chown=www:www . /var/www/rn
RUN chmod 775 api/storage api/bootstrap -R

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]
