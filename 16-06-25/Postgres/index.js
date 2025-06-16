const {Client} = require ('pg');

const conn = new Client({
		server: "localhost",
        port: 5432,
		database: "test",
        user: "postgres",
        password: "Yash2003@"
})

conn.connect().then(()=>console.log("Database is Connected Successfully"));

// conn.query('select * from employee',(err,res)=>{
// 	if(err){
// 		console.log(err.message);
// 	}
// 	else{
// 		console.log(res.rows);
// 	}
// 	conn.end()
// });

async function runQuery() {
    try {
        const res = await conn.query('SELECT * FROM employee');
        console.log(res.rows);
    } catch (err) {
        console.error(err.message);
    } finally {
        conn.end();
    }
}
runQuery();
