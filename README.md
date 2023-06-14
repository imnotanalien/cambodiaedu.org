# cambodiaedu.org

## Production deployed in Ubuntu should:
- cp /var/www/cambodiaedu/.env_backup /var/www/cambodiaedu/.env

## Create or refresh new database:
- python manage.py makemigrations # create new models
- python manage.py migrate # apply models to database

## Remove or add git origin:
- git remote -v
- git remote remove origin
- git remote add origin https://github.com/sokdenofficial/cambodiaedu.org.git

## To push the current branch and set the remote as upstream, use:
- git push --set-upstream origin main
