## Welcome to the official open source code of cambodiaedu.org!

- Production deployed in Ubuntu should:
```
cp /var/www/cambodiaedu/.env.sample /var/www/cambodiaedu/.env

```

- Create or refresh new database:
```
$ python manage.py makemigrations
$ python manage.py migrate
```

- Remove or add git origin:
```
$ git remote -v
$ git remote remove origin
$ git remote add origin https://github.com/sokdenofficial/cambodiaedu.org.git

- Clone from server
$ git clone git@github.com:thisisdensok/cambodiaedu.org.git

- Clone from local machine
$ https://github.com/thisisdensok/cambodiaedu.org.git
```

- To push the current branch and set the remote as upstream, use:
```
$ git push --set-upstream origin main
```

