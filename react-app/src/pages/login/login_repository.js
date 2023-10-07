
const users = [
    { username: 'Mairu', password: '1150' },
    { username: 'Hell', password: '123' },
  ];
  
  export default function check(username, password) {
    const user = users.find((u) => u.username === username && u.password === password);
    return user;
  }
  

