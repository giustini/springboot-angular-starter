# Spring Boot + Angular starter project

This is a base project to develop Spring Boot + Angular applications.

### Run the application

```bash
mvn spring-boot:run
```

This will run the application on port 9443, and will also execute the following commands

```bash
npm install
ng build
```
on the `/src/main/frontend/` directory. So you can navigate to `http://localhost:9443/` to view the running application.
