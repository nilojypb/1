body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(to bottom right, #4caf50, #1e88e5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.container {
  display: none;
  background: white;
  color: black;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  width: 300px;
  text-align: center;
}
.container.active {
  display: block;
}
input, button {
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
}
input {
  border: 1px solid #ccc;
}
button {
  background-color: #1e88e5;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}
button:hover {
  background-color: #4caf50;
}
.balance, .admin-section, .links {
  margin: 20px 0;
}
.links {
  max-height: 150px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
    }
  
