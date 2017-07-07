    var FIELD_SIZE_X = 20;
    var FIELD_SIZE_Y = 20;
    var SNAKE_SPEED = 300;
    var gameIsRunning = false;
    var score = 0;
    var snake = [];
    var direction = 'x-';

    function init() {
      prepareGameField();
      document.getElementById('start-game').addEventListener("click", startGame);
      document.getElementById('new-game').addEventListener("click", restartGame);
      addEventListener("keydown", changeDirection);
    }

    function prepareGameField() {
      var game_table = document.createElement('table');
      game_table.setAttribute('class', 'game-table');

      for (var i = 0; i < FIELD_SIZE_X; i++) {
        var row = document.createElement('tr');
        row.setAttribute('class', 'game-table-row row-' + i);

        for (var j = 0; j < FIELD_SIZE_Y; j++) {
          var cell = document.createElement('td');
          cell.setAttribute('class', 'game-table-cell cell-' + i + '-' + j);
          row.appendChild(cell);
        }
      game_table.appendChild(row);
      }
      document.getElementById('snake-field').appendChild(game_table);
    }

    function startGame() {
      gameIsRunning = true;
      snakeRender();

      snake_timer = setInterval(snakeMove, SNAKE_SPEED);
      setTimeout(createFood, 5000);
    }

    function snakeRender() {
      var start_coord_x = Math.floor(FIELD_SIZE_X / 2);
      var start_coord_y = Math.floor(FIELD_SIZE_Y / 2);

      var snake_head = document.getElementsByClassName("cell-" + start_coord_x + "-" + start_coord_y)[0];
      snake_head.setAttribute("class", snake_head.getAttribute("class") + " snake-unit");
      var snake_tail = document.getElementsByClassName("cell-"+ (start_coord_x + 1) + "-" + start_coord_y)[0];
      snake_tail.setAttribute("class", snake_tail.getAttribute("class") + " snake-unit");
      snake.push(snake_head);
      snake.push(snake_tail);
    }

    function snakeMove() {
      var snake_head_classes = snake[0].getAttribute("class").split(" ");
      var snake_coords = snake_head_classes[1].split("-");
      var coord_x = parseInt(snake_coords[1]);
      var coord_y = parseInt(snake_coords[2]);
      var coord_x_prev = coord_x;
      var coord_y_prev = coord_y;
      var new_unit;

      switch (true) {
        case (coord_x == (FIELD_SIZE_X - FIELD_SIZE_X) && coord_x_prev == (coord_x + 1)):
          coord_x = FIELD_SIZE_X;
          break;
        case (coord_x == (FIELD_SIZE_X - 1) && coord_x_prev == (coord_x - 1)):
          coord_x -= FIELD_SIZE_X;
          break;
        // case (coord_y == (FIELD_SIZE_Y - FIELD_SIZE_Y)):
        //   coord_y += FIELD_SIZE_Y;
        //   break;
        // case (coord_y == (FIELD_SIZE_Y - 1)):
        //   coord_y -= FIELD_SIZE_Y;
        //   break;
      }

      switch (direction) {
        case 'x-':
          new_unit = document.getElementsByClassName("cell-" + (coord_x - 1) + "-" + coord_y)[0];
          break;
        case 'x+':
          new_unit = document.getElementsByClassName("cell-" + (coord_x + 1) + "-" + coord_y)[0];
          break;
        case 'y-':
          new_unit = document.getElementsByClassName("cell-" + coord_x + "-" + (coord_y - 1))[0];
          break;
        case 'y+':
          new_unit = document.getElementsByClassName("cell-" + coord_x + "-" + (coord_y + 1))[0];
          break;
      }

      // if (!isSnakeUnit(new_unit) && new_unit !== undefined) {
      if (!isSnakeUnit(new_unit)) {
        new_unit.setAttribute("class", new_unit.getAttribute("class") + " snake-unit");
        snake.unshift(new_unit);

        if (!haveFood(new_unit)) {
          var removed = snake.splice((snake.length - 1), 1)[0];
          var removed_classes = removed.getAttribute("class").split(" ");
          // console.log(removed);
          removed.setAttribute("class", removed_classes[0] + " " + removed_classes[1]);
        }
      } else {
        finishGame();
      }
      
    }

    function isSnakeUnit(new_unit) {
      var check = false;
      if (snake.includes(new_unit)) {
        check = true;
      }
      return check;
    }

    function changeDirection(e) {
      switch (e.keyCode) {
        case 37:
          direction = "y-";
          break;
        case 38:
          direction = "x-";
          break;
        case 39:
          direction = "y+";
          break;
        case 40:
          direction = "x+";
          break;
      }

    }

    function finishGame() {
      gameIsRunning = false;
      clearInterval(snake_timer);
      alert('Game over! Score is ' + score);
    }

    function restartGame() {
      location.reload();
    }

    function createFood() {
      var foodCreated = false;
      while (!foodCreated) {
        var food_x = Math.floor(Math.random() * FIELD_SIZE_X);
        var food_y = Math.floor(Math.random() * FIELD_SIZE_Y);
        var food_cell = document.getElementsByClassName("cell-" + food_x + "-" + food_y)[0];
        var food_cell_classes = food_cell.getAttribute("class");

        if (!food_cell_classes.includes("snake-unit")) {
          food_cell.setAttribute("class", food_cell_classes + " food-unit");
          foodCreated = true;
          }
        }
      }

    function haveFood(unit) {
      var check = false;
      var unit_classes = unit.getAttribute("class").split(" ");

      if (unit_classes.includes("food-unit")) {
        check = true;
        score++;
        createFood();
      }

      return check;
    }

    window.onload = init;