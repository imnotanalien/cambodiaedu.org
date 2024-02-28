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
$ git remote add origin https://github.com/thisisdensok/cambodiaedu.git

- Clone from server
$ git clone git@github.com:thisisdensok/cambodiaedu.git

- Clone from local machine
$ https://github.com/thisisdensok/cambodiaedu.git
```

- To push the current branch and set the remote as upstream, use:
```
$ git push --set-upstream origin main
```

- Commit backdate in GitHub.
```
$ git commit --amend
$ git add . && git commit --date="YYYY-MM-DD HH:MM:SS" -am "Update" && git push --force-with-lease
```
