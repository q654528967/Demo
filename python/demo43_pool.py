import mysql.connector.pooling as pooling
pool = pooling.MySQLConnectionPool(pool_size=5,host="localhost",user="root",passwd="",database="xz")
myConnection=pool.get_connection()

myCursor=myConnection.cursor(dictionary=True)
myCursor.execute("select * from xz_user")
print(myCursor.fetchall())