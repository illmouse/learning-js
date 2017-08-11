    var FIELD_SIZE_X = 20;
    var FIELD_SIZE_Y = 20;
    var SNAKE_SPEED = 300;
    var gameIsRunning = false;
    var score = 0;
    var snake = [];
    var direction = 'x-';
    var wall_units = [];
    var wall_units_qnt = 4;

    function prepareGameField() {
      var game_table = document.createElement('table');
      game_table.classList.add('game-table');

      for (var i = 0; i < FIELD_SIZE_X; i++) {
        var row = document.createElement('tr');
        row.classList.add('game-table-row', 'row-' + i);

        for (var j = 0; j < FIELD_SIZE_Y; j++) {
          var cell = document.createElement('td');
          cell.classList.add('game-table-cell', 'cell-' + i + '-' + j);
          row.appendChild(cell);
        }
      game_table.appendChild(row);
      }
      document.getElementById('snake-field').appendChild(game_table);
    }

    function startGame() {

      if (gameIsRunning) {
        finishGame();
      }

      score = 0;
      var score_field = document.getElementById('score-field');
      score_field.innerText = ('Score: ' + score);

      snake = [];
      wall_units = [];
      direction = 'x-';
      gameIsRunning = true;
      cells = document.getElementsByTagName('td');

      for (i = 0; i < cells.length; i++) {
        cells[i].classList.remove('snake-unit', 'food-unit', 'wall-unit');
      }

      snakeRender();

      snake_timer = setInterval(snakeMove, SNAKE_SPEED);
      wall_timer = setInterval(createWall, 10000);
      food_timer = setTimeout(createFood, 5000);
    }

    function snakeRender() {
      var start_coord_x = Math.floor(FIELD_SIZE_X / 2);
      var start_coord_y = Math.floor(FIELD_SIZE_Y / 2);

      var snake_head = document.getElementsByClassName('cell-' + start_coord_x + '-' + start_coord_y)[0];
      snake_head.classList.add('snake-unit');
      var snake_tail = document.getElementsByClassName('cell-'+ (start_coord_x + 1) + '-' + start_coord_y)[0];
      snake_tail.classList.add('snake-unit');
      snake.push(snake_head);
      snake.push(snake_tail);
    }

    function snakeMove() {
      var snake_head_classes = snake[0].getAttribute('class').split(' ');
      var snake_coords = snake_head_classes[1].split("-");
      var coord_x = parseInt(snake_coords[1]);
      var coord_y = parseInt(snake_coords[2]);
      var new_unit;

      switch (true) {
        case (coord_x == (FIELD_SIZE_X - FIELD_SIZE_X) && direction == 'x-'):
          coord_x = FIELD_SIZE_X;
          break;
        case (coord_x == (FIELD_SIZE_X - 1) && direction == 'x+'):
          coord_x -= FIELD_SIZE_X;
          break;
        case (coord_y == (FIELD_SIZE_Y - FIELD_SIZE_Y) && direction == 'y-'):
          coord_y = FIELD_SIZE_Y;
          break;
        case (coord_y == (FIELD_SIZE_Y - 1) && direction == 'y+'):
          coord_y -= FIELD_SIZE_Y;
          break;
      }

      switch (direction) {
        case 'x-':
          new_unit = document.getElementsByClassName('cell-' + (coord_x - 1) + '-' + coord_y)[0];
          break;
        case 'x+':
          new_unit = document.getElementsByClassName('cell-' + (coord_x + 1) + '-' + coord_y)[0];
          break;
        case 'y-':
          new_unit = document.getElementsByClassName('cell-' + coord_x + '-' + (coord_y - 1))[0];
          break;
        case 'y+':
          new_unit = document.getElementsByClassName('cell-' + coord_x + '-' + (coord_y + 1))[0];
          break;
      }

      if (!isFree(new_unit)) {
        new_unit.classList.add('snake-unit');
        snake.unshift(new_unit);

        switch (true) {
          case (!haveFood(new_unit)):
            var removed = snake.splice((snake.length - 1), 1)[0];
            removed.classList.remove('snake-unit');
          default:
            new_unit.classList.remove('food-unit');
        }

      } else {
        finishGame();
      }
    }

    function isFree(new_unit) {
      var check = false;

      if (snake.includes(new_unit) || wall_units.includes(new_unit)) {
        check = true;
      }
      return check;
    }

    function changeDirection(e) {
      switch (e.keyCode) {
        case 37:
          if (direction != 'y+') {
            direction = 'y-';
          }
          break;
        case 38:
          if (direction != 'x+') {
            direction = 'x-';
          }
          break;
        case 39:
          if (direction != 'y-') {
            direction = 'y+';
          }
          break;
        case 40:
          if (direction != 'x-') {
            direction = 'x+';
          }
          break;
      }
    }

    function finishGame() {
      gameIsRunning = false;
      clearInterval(snake_timer);
      clearInterval(wall_timer);
      clearTimeout(food_timer);
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
        var food_cell = document.getElementsByClassName('cell-' + food_x + '-' + food_y)[0];

        if (!food_cell.classList.contains('snake-unit')) {
          food_cell.classList.add('food-unit');
          foodCreated = true;
          }
        }
      }

    function createWall() {
      var wallCreated = false;

      for (var i = 0; i < wall_units.length; i++) {
        wall_units[i].classList.remove('wall-unit');
      }
      wall_units.splice(0, wall_units_qnt);

      while (wall_units.length < wall_units_qnt) {
        var wall_x = Math.floor(Math.random() * FIELD_SIZE_X);
        var wall_y = Math.floor(Math.random() * FIELD_SIZE_Y);
        var wall_cell = document.getElementsByClassName('cell-' + wall_x + '-' + wall_y)[0];
        var wall_cell_classes = wall_cell.getAttribute('class').split(' ');

        if (wall_cell_classes.length == 2) {
          wall_cell.classList.add('wall-unit');
          wall_units.push(wall_cell);
        }
      }
      wallCreated = true;
    }

    function haveFood(unit) {
      var check = false;
      var score_field = document.getElementById('score-field');

      if (unit.classList.contains('food-unit')) {
        check = true;
        score++;
        score_field.innerText = ('Score: ' + score);
        createFood();
      }

      return check;
    }

    window.onload = function() {
      prepareGameField();
      document.getElementById('start-game').addEventListener('click', startGame);
      document.getElementById('new-game').addEventListener('click', restartGame);
      addEventListener('keydown', changeDirection);
    }