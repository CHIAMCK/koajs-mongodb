# microservice-template
A template to create microservice using Koa framework

log in as DB, mongo -u root -p example
create a new user,     
db.createUser(
      {
        user: "testUser",
        pwd: "xyz123",
        roles: [ { role: "readWrite", db: "my_db" } ] # change the db name
      }
)
update mongodb://testUser:xyz123@localhost:27017/my_db

container - Docker \
routing - koa-router \
session - koa-session, koa-redis
