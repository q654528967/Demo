def getList():
  userList=[]
  def login(uname):
    userList.insert(0,uname)
    return userList
  return login
login=getList()
login('jiajia')
login('huahua')
result=login('jaja')
print(result)