## Nestjs computer DI api

App goal: Quick project to understand modules and Dependency Injection (DI). Also includes how to share services between different modules.

Command for generating modules:
````
nest g module module-name-here
````

Command for generating services (with service test files):
````
nest g service service-name-here
````

Command for generating controller (with controller test files):
````
nest g controller controller-name-here
````

## Diagram showing connection between all 4 modules
<img width="936" alt="conneection between api moodules" src="https://user-images.githubusercontent.com/45185388/154807344-13175b2d-da87-49ac-a68b-ea979a89af93.png">

## Setting up Dependency Injection between modules
- The first module: Add the service to the module's list of exports.
- Import the above first module into the new module (i.e. add it to the import list of the new module).
- Define the constructor method in the service of the new module and add (inject) the first module's service into it.
