// Login function
function login(event) {
  event.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  // Hardcoded credentials (change as needed)
  if (username === 'admin' && password === '1234') {
    window.location.href = 'form.html';
  } else {
    document.getElementById('login-error').textContent = 'Invalid credentials!';
  }
}

// Form Submission & Display
function submitStudent(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value.trim();

  if (!name || !age || !email) return;

  const student = { name, age, email };
  let students = JSON.parse(localStorage.getItem('students')) || [];
  students.push(student);
  localStorage.setItem('students', JSON.stringify(students));

  document.getElementById('studentForm').reset();
  displayStudents();
}

function displayStudents() {
  const studentList = document.getElementById('studentList');
  if (!studentList) return;
  studentList.innerHTML = '';

  const students = JSON.parse(localStorage.getItem('students')) || [];
  students.forEach((student, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${student.name} - ${student.age} - ${student.email}`;
    studentList.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', displayStudents);
// Register new user
function register(event) {
  event.preventDefault();
  const username = document.getElementById('register-username').value.trim();
  const password = document.getElementById('register-password').value;

  if (!username || !password) return;

  let users = JSON.parse(localStorage.getItem('users')) || {};
  if (users[username]) {
    document.getElementById('register-message').textContent = 'Username already exists.';
    document.getElementById('register-message').style.color = 'red';
    return;
  }

  users[username] = password;
  localStorage.setItem('users', JSON.stringify(users));

  document.getElementById('register-message').textContent = 'Registration successful! You can now log in.';
  document.getElementById('register-message').style.color = 'green';
  document.getElementById('register-username').value = '';
  document.getElementById('register-password').value = '';
}

// Login existing user
function login(event) {
  event.preventDefault();
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value;

  let users = JSON.parse(localStorage.getItem('users')) || {};
  if (users[username] === password) {
    window.location.href = 'form.html';
  } else {
    document.getElementById('login-error').textContent = 'Invalid username or password!';
  }
}
