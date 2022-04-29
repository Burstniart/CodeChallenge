# CodeChallenge
> Started at 12:20 on 04/28- pauses 14:30 on 04/28

## Objetivos al finalizar el proyecto:
- Repo en GitHub para el proyecto
- Pruebas automatizadas en GitHub Actions
- README.md

## Componentes del proyecto
###  Repo de GitHub
Este proyecto debera:
- Consultar todos los estudiantes con todos sus campos.
- Consultar los emails de todos los estudiantes que tengan certificación haveCertification.
- Consultar todos los estudiantes que tengan credits mayor a 500.

`` La estructura del objeto estudiante es la siguiente (se tiene un archivo json con una lista de estos objetos): ``

> {
    "id": "6264d5d89f1df827eb84bb23",
    "name": "Warren",
    "email": "Todd@visualpartnership.xyz",
    "credits": 508,
    "enrollments": [
      "Visual Thinking Intermedio",
      "Visual Thinking Avanzado"
    ],
    "previousCourses": 1,
    "haveCertification": true
  }

- Tener un endpoint por consulta para ejecutarse.

### Flujo de trabajo
Se toma en cuenta los siguientes requerimientos:
- Se lleva un control de versiones claro y explicito en su avance.
- Se realizan pruebas para asegurar la calidad del proyecto.
- Las pruebas se ejecutan de manera automatica en el repo.

### Readme
Dependencias utilizadas en el proyecto y su proposito:
- Jest: Ejecutar pruebas unitarias y verificar el correcto funcionamiento del codigo.

 Como apunte, se debe modificar la version de Jest ya que hay un error al trabajar con GitHub actions, esto se realiza ejecutanto el siguiente comando:
 >npm install jest@26.0.0 --save

 - GitHub Actions: El archivo test.yml dentro del directorio ``/.github/workflows/`` automatiza las pruebas que implementamos de manera local con Jest para verificar que funcionen como se espera. Esta implementacion requiere de 
 una modificacion a la version de Jest, vease el punto anterior.

Componenetes:

- Reader: Dentro de el directorio ``/lib/utils/``, su funcion es la de leer el archivo Json que se utiliza como Data Base. Este archivo tiene su respectiva prueba dentro del directorio ``/test/utils/Reader.test.js`` la cual llama al archivo ``testRun.json`` en la raiz del proyecto.

API, Cómo consultarla, qué formato va a responder, incluye ejemplos etc:
- Agrega aqui


