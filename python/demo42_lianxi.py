import mysql.connector as conn
myConnection=conn.connect(host="localhost",user="root",passwd="",database="xz")
myCursor=myConnection.cursor(dictionary=True)
uname=input('用户名')
upwd=input('密码')
sql="insert into xz_user (uname,upwd) values (%s,%s)"

myCursor.execute(sql,(uname,upwd))
myConnection.commit()




