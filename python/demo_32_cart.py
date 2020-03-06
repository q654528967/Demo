""" import demo31_user
def addToCart():
  print(demo31_user.isLogin)
  if(not demo31_user.isLogin):

addToCart() """

""" import demo31_user as user
def addToCart():
  print(user.isLogin)
   """

#from demo31_user import *
from demo31_user import isLogin
def addToCart():
  print(isLogin)
addToCart()
