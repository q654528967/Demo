import mysql.connector as conn
myConnection= conn.connect(host="localhost",user="root",passwd="",database="xz")

myCursor=myConnection.cursor(dictionary=True)

""" sql="select * from xz_user"
myCursor.execute(sql) """

sql="insert into xz_user (uname,upwd) values ('zhangsan','123456')"
myCursor.execute(sql)
myConnection.commit()

sql="select * from xz_user"
myCursor.execute(sql)
result=myCursor.fetchall()
print("%d %d"%(myCursor.rowcount,myCursor.lastrowid))