# CodeChallenge
> Started at 12:20 on 04/28 - pauses 14:30 on 04/28
> Resume at 8:48 on 04/28

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
```json
{
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
```

- Tener un endpoint por consulta para ejecutarse.

### Flujo de trabajo
Se toma en cuenta los siguientes requerimientos:
- Se lleva un control de versiones claro y explicito en su avance.
- Se realizan pruebas para asegurar la calidad del proyecto.
- Las pruebas se ejecutan de manera automatica en el repo.

## Readme
### Dependencias utilizadas en el proyecto y su proposito:
- Jest: Ejecutar pruebas unitarias y verificar el correcto funcionamiento del codigo.

 Como apunte, se debe modificar la version de Jest ya que hay un error al trabajar con GitHub actions, esto se realiza ejecutanto el siguiente comando:
 >npm install jest@26.0.0 --save

 - GitHub Actions: El archivo test.yml dentro del directorio ``/.github/workflows/`` automatiza las pruebas que implementamos de manera local con Jest para verificar que funcionen como se espera. Esta implementacion requiere de 
 una modificacion a la version de Jest, vease el punto anterior.

### Componenetes:

- Reader: Dentro de el directorio ``/lib/utils/``, su funcion es la de leer el archivo Json que se utiliza como Data Base. Este archivo tiene su respectiva prueba dentro del directorio ``/test/utils/Reader.test.js``

```javascript
    static readJsonFile(path) {
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata);
    }
```

- ThinkingServices: Ubicado en el directorio ``/lib/services/``, se encarga de implementar la lógica requerida para manejar la información. Las pruebas se realizan en el archivo ``/test/services/ThinkingServices.test.js``

```javascript
    static getAllStudents(dataBase) {
        const allStudents = dataBase;
        return allStudents;
    }
    static getAllCertificate(dataBase) {
        const certifiedStudents = dataBase.filter((thinker) => thinker.haveCertification === true);
        return certifiedStudents.map((thinker) => thinker.email)
    }
    static isItEnough(dataBase) {
        const enoughCredits = dataBase.filter((itsEnough) => itsEnough.credits > 500);
        return enoughCredits
    }
```

- ThinkingController: Ubicado en el directorio ``/lib/controllers/`` es el puerto de enlace entre las funciones del codigo en ``ThinkingServices.js`` y la base de datos que utilizamos, que ene ste caso es ``visualpartners.json``
Las pruebas para este archivo se realizan en ``/test/controllers/ThinkingController.test.js``

```javascript
static getStudents() {
        const thinkers = Reader.readJsonFile("visualpartners.json");
        const students = ThinkingServices.getAllStudents(thinkers);
        return students;
    }
    static getCertified() {
        const thinkers = Reader.readJsonFile("visualpartners.json");
        const certificate = ThinkingServices.getAllCertificate(thinkers);
        return certificate;
    }
    static isEnough(credits) {
        const thinkers = Reader.readJsonFile("visualpartners.json");
        const overIt = ThinkingServices.isItEnough(thinkers, credits);
        return overIt;
    }
```

API, Cómo consultarla, qué formato va a responder, incluye ejemplos etc:
- Agrega aqui


