# kschallenge
### How to Run the Code

#### Prerequisites
Ensure that you have Node.js and Docker installed on your system.

#### Running Challenge A

**Clone the Repository:**
```bash
git clone https://github.com/klb-aalidin/kasagi-labo-challenge.git
cd kasagi-labo-challenge
```

**Generate the Random Objects File:**
```bash
node challengeA.js
```
This command will generate a `random_objects.txt` file in the project directory.

#### Running Challenge B

**Process the Random Objects File:**
```bash
node challengeB.js
```
This command will read the `random_objects.txt` file and print each object along with its type to the console.

#### Running Challenge C (Dockerized Solution)

**Build the Docker Image:**
```bash
docker build -t kasagi-challenge .
```

**Run the Docker Container:**
```bash
docker run --rm -v $(pwd):/usr/src/app kasagi-challenge
```
The container will execute the `challengeB.js` script, process the `random_objects.txt` file, and print the output to the terminal.
