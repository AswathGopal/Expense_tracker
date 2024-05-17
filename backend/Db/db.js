const mysql =require('mysql')

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root@123",
    database:"expense_management"
}
)

connection.connect((err)=>{
  if(err){
    console.log('err',err)
  }
  else{
    console.log('connection successfull !!!')
  }
})

module.exports=connection;