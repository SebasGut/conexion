import {
  MYSQLConnection,
  readStudentsFromDB,
} from "../../services/students/service.js";
import mysql from 'mysql';

export const readStudentsFromDB = async () => {
  const resultData = null;
  const resultCallback = (rows) => {
    resultData = rows;
  }
  const connection = mysql.createConnection({
    host: "localhost",
    user: "dbuser",
    password: "s3kreee7",
    database: "my_db",
  });

  connection.connect();

  connection.query('SELECT | INSERT | UPDATE | DELETE', (err, rows, fields) => {
    return resultCallback(rows);
  });

  connection.end();

  const res = await longOperation
    .then((res) => res)
    .catch((err) => {
      console.error(err);
      return null;
    });

  return res;
};

export const getStudents = async (request, response) => {
  // Recibir informacion del request:
  // validar, parsear, mapear
  // obtener la informacion necesaria para resolver la peticion

  // realizar operacion o llamadas o consultas para conseguir la informaicon
  // necesaria
  console.log(request.body)

  // const person = await readStudentsFromDB();

  if (person) {
    // Enviar respuesta positiva o negativa
    response.status(200); // acorde al resultado
    response.send('OK');
  } else {
    response.status(500); // acorde al resultado
    response.send({ error: "Something went wrong" });
  }
};


// SELECT * FROM carreras ORDER BY (name);

// SELECT * FROM alumnos ORDER BY (name);
//  alonso moreno 4 2016


// SELECT alumnos.nombre, carreras.nombre FROM alumnos INNER JOIN carreras on alumnos.carrera = carreras.id ;
// alonso compu