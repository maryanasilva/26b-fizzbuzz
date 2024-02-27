# 👩‍💻 26B Exercise
This is a code challenge consisting of 3 steps, each step corresponds to a branch.

## Step-1
In this first step, I had to write a program that produces the following for any range of integer numbers:

  - "<i>fizz</i>" for numbers that are multiples of 3;
  - "<i>buzz</i>" for numbers that are multiples of 5;
  - "<i>fizzbuzz</i>" for numbers that are multiples of 15;
  - the number, if none of the above apply; 

Running the program with a range between 1-20 should produce the following result: <br>
"1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16 17 fizz 19 buzz"

<br>

## Step-2
In this step, I had to improve the previous solution to produce a report at the end of the output showing how many times the following were printed:

  - "<i>fizz</i>"
  - "<i>buzz</i>"
  - "<i>fizzbuzz</i>"
  - "<i>an integer</i>"

Running the program with a range between 1-20 should produce the following result: <br>
"1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16 17 fizz 19 buzz fizz: 5 buzz: 3 fizzbuzz: 1 integer: 11"

<br>

## Step-3
In this last step I had to build the visual interface (desktop and mobile) for the previous solution, following the design specifications provided.

As practice, trial and error, seeking a solution and correcting the error are the best way to learn, **I built a complete app using HTML, CSS and JavaScript**.

<br>

## Final branch commit (sha-1 code):
Main: <b>7de44784a94e1f5c15f9bdfa4383b7f0f6e3de0e</b> <br>
Step-1: <b>6017c1cd524a8045d26989dd2ce302a133d84c06</b> <br>
Step-2: <b>096a2cdf93c311d02708c32f79c3d5ef81e36ba0</b> <br>
Step-3: <b>e02c533c9352c60be96dec441d1e1810584e9042</b> <br>

<br>

## ⚙ How to build and test it

Before you begin, you'll need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### 1. Clone the repository

You can clone this repository using the following command:

```bash
git clone https://github.com/maryanasilva/26b-fizzbuzz.git
```

### 2. Install dependencies

After cloning the repository, navigate to the project directory and install the dependencies by running:

```bash
cd 26b-fizzbuzz
npm install
```

### 3. Build the project (using Parcel)

After choosing the branch you want to build, navigate to that branch and build it by running:

```bash
git checkout [step-1] or [step-2] or [step-3]
npm run build
```

### 4. Test the project (using Jest)

After choosing the branch you want to test, navigate to that branch and test it by running:

```bash
git checkout [step-1] or [step-2]
npm test
```

