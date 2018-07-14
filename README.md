# Task-5-NodeJS
here i had to make backend for chat

#### Запуск проекта

1. Проверить, что инстанс MongoDB запущен
2. Установить зависимости npm install
3. Запустить сервер npm start
4. Производить запросы через Postman

Поскольку база пустая - будет возвращен пустой массив, можете заполнить своими данными.

#### Роут пользователей:
http://localhost:1428/api/user/

##### Метод get для получения всех юзеров:
http://localhost:1428/api/user/

##### Метод get для получение юзера по id: 
http://localhost:1428/api/user/:id
###### Пример:
http://localhost:1428/api/user/5b48d35ce37590c5badd1e3f

##### Метод post для добавления юзера:
http://localhost:1428/api/user/
###### Пример body:
{
  "name": "Elvis",
  "email": "elvis@gmail.com"
}

##### Метод put для update данных юзера по id:
http://localhost:1428/api/user/:id
###### Пример:
http://localhost:1428/api/user/5b48d35ce37590c5badd1e3f
###### Нужен body:
{
  "name": "Super Elvis",
  "email": "superelvis@gmail.com"
}

##### Метод delete для удаления данных юзера по id:
http://localhost:1428/api/user/:id
###### Пример:
http://localhost:1428/api/user/5b48d35ce37590c5badd1e3f;


#### Роут сообщений:
http://localhost:1428/api/message/


##### Метод get для получения всех сообщений:
http://localhost:1428/api/message/

##### Метод get для получения сообщения по его id: 
http://localhost:1428/api/message/:id
###### Пример:
http://localhost:1428/api/message/5b4a001748a4c03dd86a796f


##### Метод post для добавления сообщения:
http://localhost:1428/api/message/
###### Пример body:
{
  "senderId": "5b4a77635c1795c5142b1f77",
  "bodyMes": "Hi, how r u?",
  "receiverId": "5b4a432f377c1b857c1dec5f"
}

##### Метод put для обновления данных сообщения по id:
http://localhost:1428/api/message/:id
###### Пример:
http://localhost:1428/api/message/5b4a77635c1795c5142b1f77
###### Нужен body:
{
  "senderId": "5b4a77635c1795c5142b1f77",
  "bodyMes": "Hi, how r u? what did happen yesterday?",
  "receiverId": "5b4a432f377c1b857c1dec5f"
}

##### Метод delete для удаления сообщения по id:
http://localhost:1428/api/message/:id
###### Пример:
http://localhost:1428/api/message/5b4a77635c1795c5142b1f77


#### Роут localhost:1428/api/message/getUsers/:id
##### Выводит пользователей, недублированных с которыми общался пользователь с данным id, имеет лимит в 5 единиц
##### Пример:
localhost:1428/api/message/getUsers/5b4a77635c1795c5142b1f77
