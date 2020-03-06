#py自带的标准库

#json
import json 
myDict={"age":10,"score":80,'name':'jack'}
#json序列化
result=json.dumps(myDict)
print(result,type(result))
result=json.loads('{"id":10}')
print(result,type(result))
import random 
num=random.choice(range(1,100))
print('num is %d'%num)
print(random.choice(['mike','michale','lucy']))
import math
print(math.ceil(0.8))
print(math.floor(0.9))
import time
print(time.localtime())
# %y %m %d %H %M %S
print(time.strftime('%Y-%m-%d %H:%M'))
import os.path
print(os.path.exists('./user'))
print(os.path.isfile('./user'))