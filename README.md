## Welcome to the official open source code of cambodiaedu.org!

- Local push code to GitHub.
```
git status
git add . && git commit -am "Update" && git push
```

- Access the GitHub to clone/pull origin.
```
ssh root@165.22.53.242

eval "$(ssh-agent -s)" && ssh-add ~/.ssh/github_id_ed25519 && cd cambodiaedu && git pull && source .venv/bin/activate && cd app && python3 manage.py collectstatic

eval "$(ssh-agent -s)" && ssh-add ~/.ssh/github_id_ed25519 && cd cambodiaedu && git pull && source .venv/bin/activate && cd app && python3 manage.py makemigrations && python3 manage.py migrate && python3 manage.py collectstatic

deactivate && cd ~ && sudo systemctl restart gunicorn && sudo nginx -t && sudo systemctl restart nginx

python3 manage.py test

sudo tail -F /var/log/nginx/error.log
```

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
