class Queue:  
  
  def __init__(self):  
      self.queue = list()  
  
  def add_element(self,val):  
# Insert method to add element  
      if val not in self.queue:  
          self.queue.insert(0,val)  
          return True  
      return False  
# Pop method to remove element  
  def remove_element(self):  
      if len(self.queue)>0:  
          return self.queue.pop()  
      return ("Queue is Empty")  
  
que = Queue()  
que.add_element("January")  
que.add_element("February")  
que.add_element("March")  
que.add_element("April")  
  
print(que)  
print(que.remove_element())  
print(que.remove_element())  