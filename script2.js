const todoElem =document.getElementById('todo');
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((data) => data.json())
  .then(function (objectReturned) {
      const todoList = objectReturned;
      for(var i=0; i<todoList.length ;i++){
          const divElem =document.createElement('div');
          divElem.textContent= todoList[i].title;
          todoElem.appendChild(divElem);
      }

  });
