import mysql from "mysql2";

export default async function handler(req, res) {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "werebats",
    password: "password",
  });

  try {
    connection.query(
      "SELECT user_id,user_name,last_name FROM user_information",
      function (err, results, fields) {
        // console.log(results);
        // console.log("its connected");
        connection.end();

        res.status(200).json({ data: results });
      }
    );
  } catch {
    res.status(500).json({ error: error.message });
  }

  // res.status(200).json({ name: "John Doe" });
}
