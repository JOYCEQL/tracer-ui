rm -rf docs &&
pnpm build:all &&
cd docs &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:JOYCEQL/web-doc.git &&
git push -f -u origin master &&
cd -
echo https://joyceql.github.io/web-doc/
