.PHONY: up, detached, build, down, nuke

up:
	docker-compose up --no-recreate 

detached:
	docker-compose up --no-recreate -d

build:
	docker-compose build --no-cache

down:
	docker-compose down --remove-orphans

nuke:
	docker compose down && docker-compose rm -f -s -v 
