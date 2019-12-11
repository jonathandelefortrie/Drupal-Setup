# Drupal Setup

Setup for dev and prod environments, the prod image can be used on AWS elastic beanstalk single container with an AWS RDS database. The themes and modules folders are added to the image volumes and ready to go.

Start the container
```
docker-compose up
```

Exec drupal console command in the container
```
docker-compose exec drupal drupal list
```
