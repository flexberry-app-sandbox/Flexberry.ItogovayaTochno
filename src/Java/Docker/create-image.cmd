docker build --no-cache -f SQL\Dockerfile.PostgreSql -t itogovaya_tochno-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t itogovaya_tochno-java/app ../../..
