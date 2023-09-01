# FormTestSodexo
crear formulario de registro de usuarios 

# levantar Proyecto

# backend : 
Como estamos utilizando H2 en memoria al momento de darle arranque al proyecto esta se levantara automaticamente y para visualizarla es lo siguiente 
http://localhost:8080/h2-ui/ ( abrira de forma local la BD la cual debes dejar todo como esta y solo modificar lo siguiente...)
jdbc = jdbc:h2:mem:testdb 
aqui podras ver los cambios que se realizaron en bd mediante el crud implementado 

las API O URI junto a sus protocolos son para ser probados en postman o con curl son las siguientes : 
GET http://localhost:8070/registros/comunas  
POST http://localhost:8070/registros
GET http://localhost:8070/registros/listregistros
PUT http://localhost:8070/registros/1
DELETE http://localhost:8070/registros/1

Cabe señalar que para post y put debes utilizar el siguiente request : 
{
  "nombre": "ejemplo nombre",
  "apellido": "ejemplo apellido",
  "telefono": "ejemplo telefono",
  "comuna": "ejemplo comuna"
}

# frontend :


para levantar el front necesitas primero 

1.-" npm install" ( creara la carpeta node_modules con las dependencias necesarias segun el package.json)
2.-" ng serve" ( se ejecutara a nivel local angular , colocar en browser la siguiente URL : http://localhost:4200/ )
