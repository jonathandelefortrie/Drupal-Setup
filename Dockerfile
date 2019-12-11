### BASE ###
FROM drupal:8-apache

### BACK END ###
VOLUME ["/modules", "/var/www/html/modules"]

### FRONT END ###
VOLUME ["/themes", "/var/www/html/themes"]

### PORT ###
EXPOSE 80
