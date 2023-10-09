<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>B: `ReferenceError: greetign is not defined`</b></summary>
<p>

#### Answer: ?

<i>In youthisr code, i've declared a variable called "greeting" with the statement let greeting;. However, i've also inadvertently created a variable called "greetign" without declaring it explicitly with let. This is why encountering an error where "greeting is not defined" because i never declared "greetign" as a variable.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b> A: `NaN`</b></summary>
<p>

#### Answer: ?

<i>Here, 1 is a number, and "2" is a string. So, the result of calling sum(1, "2"); in this code is actually 3, but it's treated as a string because JavaScript automatically converted the string "2" to a number during the addition. If you want to ensure that the result is treated as a number, you can explicitly convert a and b to numbers within the sum function, as shown in the modified code in my previous response.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b> B: `['🍝', '🍫', '🥑', '🍔']`</b></summary>
<p>

#### Answer: ?

<i>You have an array food containing four emoji elements: ["🍕", "🍫", "🥑", "🍔"]. the food array using console.log(food);, which will display ['🍝', '🍫', '🥑', '🍔'] because the array itself was not modified; only the favoriteFood property in the info object was updated.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>B: `Hi there, undefined`</b></summary>
<p>

#### Answer: ?


<i>In the code you provided, you have a function sayHi that expects a name parameter, but when you call it with sayHi(), you haven't provided any argument. This will result in a TypeError because the function expects a value for name.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b> C: 3</b></summary>
<p>

#### Answer: ?

<i>Inside the forEach callback function, you check if the current num is truthy (i.e., not equal to 0 which is falsy). For the numbers 1, 2, and 3, this condition evaluates to true, so the count variable is incremented by 1 for each of these numbers.</i>

</p>
</details>
