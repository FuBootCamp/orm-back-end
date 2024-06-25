
#
# Object-Relational Mapping (ORM) E-commerce Back
######
![Static Badge](https://img.shields.io/badge/license_by-MIT-blue.svg)
###
## Table of contents
* [Description of the project](#description-section)
* [Installation instructions](#installation-section)
* [Usage information](#usage-section)
* [Contribution guidelines](#contribution-section)
* [Test instructions](#test-section)
* [Questions](#questions-section)
* [License information](#license-section)
<a id="description-section"></a>
## Description of the project
The challenge was to implement the CRUD routines for a basic e-commerce database, using express to build the server, postgres (relational database) and the ORM sequelize to manage the database.

It seems that using an ORM has many advantages, the main one being to make the interaction with the database easier. Personally, I have no problems with direct SQL handling, and the challenge allowed me to test the functionality of sequelize. When sequelize allows you to handle database entities and relationships as objects, the integration with object oriented programming makes more sense.

Also, this challenge allowed me to test the functionality of INSOMNIA, which offers a lot of flexibility for handling server requests. Using INSOMNIA to build the challenge deliverable was motivating.I consider that this challenge left me several great learnings:

a) To finish understanding the "scripts" that are incorporated to the package file, from where the seeds.sql file is executed to fill the database of the application.
b) Use of the NPM RUN command to execute the file.
c) In relation to the database, understand how to build a many-to-many relationship through a table that points to the identifiers of the tables that are related in this way. Being the case of the Products_Tags table.
d) To deepen in the management of the requisitions to the server using INSOMNIA since before this challenge, I was using the one from vs code (thunder). Insomnia is quite flexible and user friendly, I will continue to use it from now on. 
e) I was stuck with a bug in the PUT routes, since the command returns an array unlike the other calls (GET, POST, DELETE). The time spent to solve this bug was a bit long but in the end, learning is very important.

From this last point, I conclude that reading the documentation is super important, as the instructor reminds us in each class, but sometimes due to lack of time I don't do it. The cloud queries have also been very valuable, in this case StackOverflow and GitHub to solve the issue of how to feed an array through INSOMNIA, and the AI tools of the TEC (bootcampspot.instructure.com) Xpert Learning Assistant, with which I could land the issues of the value that responds to the PUT call of sequelize.

Finally, a challenging and motivating project, database (postgres and SEQUELIZE) and server (EXPRESS) management to get me on the road to real-world application development.

<a id="installation-section"></a>
## Installation instructions

Create data base


![Create DB](/assets/create_squema.png)

Seed date base


![Seed DB](/assets/database-seeded.png)

Initializins the Server


![Server](/assets/starting_server.png)

![Server](/assets/server_listening.png)



<a id="usage-section"></a>
## Usage information
For a demostration of the project: Walkthrough video https://app.screencastify.com/v2/manage/videos/Sdb8QpeYfwtT4Dr58VCP
<a id="contribution-section"></a>
## Contribution guidelines
Does not apply
<a id="test-section"></a>
## Test instructions
GitHub Repo https://github.com/FuBootCamp/orm-back-end

Walkthrough video https://app.screencastify.com/v2/manage/videos/Sdb8QpeYfwtT4Dr58VCP
<a id="questions-section"></a>
## Questions
If you have any doubts, please contact me...
######
This is my GitHub profile
######
[GitHub](https://github.com/FuBootCamp)
######
This is my email address
######
buzonplataforma12@gmail.com
####
<a id="license-section"></a>
#### License information
The MIT License
                                THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
                                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
                                OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
                                IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
                                DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
                                A RISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
                                DEALINGS IN THE SOFTWARE
