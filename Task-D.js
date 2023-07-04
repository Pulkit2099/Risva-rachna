class Fruit {
    constructor(id, name, color) {
      this.id = id;
      this.name = name;
      this.color = color;
    }
  }
  
  const fruits = [
    new Fruit(1, "Apple", "Red"),
    new Fruit(2, "Banana", "Yellow"),
    new Fruit(3, "Orange", "Orange"),
    new Fruit(4, "Grape", "Purple"),
    new Fruit(5, "Lemon", "Yellow"),
  ];
  
  const express = require("express");
  const app = express();
  const port = 3000;
  
  app.get("/fruits", (req, res) => {
    const sortedFruits = fruits.sort((a, b) => a.color.localeCompare(b.color));
    res.json(sortedFruits);
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
  
  