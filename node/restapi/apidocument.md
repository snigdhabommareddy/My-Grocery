////page1
1.api for categories
http://localhost:8900/category
https://groceryintern.herokuapp.com/category

///page2
1.products
http://localhost:8900/products
https://groceryintern.herokuapp.com/products

2.products wrt categories
http://localhost:8900/products?category_id=2
https://groceryintern.herokuapp.com/products?category_id=2

filters

3.api for cost filer
http://localhost:8900/filter/1?lcost=200&hcost=500
https://groceryintern.herokuapp.com/filter/1?lcost=200&hcost=500

4.pagination
http://localhost:8900/filter/1?lcost=100&hcost=1000&skip=0&limit=2
https://groceryintern.herokuapp.com/filter/1?lcost=100&hcost=1000&skip=0&limit=2

5.sort
    sort low to high 
    http://localhost:8900/filter/2?lcost=100&hcost=1000&sort=1
    https://groceryintern.herokuapp.com/filter/2?lcost=100&hcost=1000&sort=1

    sort high to low 
    http://localhost:8900/filter/2?lcost=100&hcost=1000&sort=-1
    https://groceryintern.herokuapp.com/filter/2?lcost=100&hcost=1000&sort=-1

///page3

1.details about products
http://localhost:8900/productDetails/1
https://groceryintern.herokuapp.com/productDetails/1

2.menu of categories
http://localhost:8900/menu/1
https://groceryintern.herokuapp.com/menu/1


///page4(post)
1.menu items on user selection
localhost:8900/menuItem
https://groceryintern.herokuapp.com/menuItem
 body[5,8,12]

2.api to place order
localhost:8900/placeorder
https://groceryintern.herokuapp.com/placeorder

3.delete order
localhost:8900/deleteorder
https://groceryintern.herokuapp.com/deleteorder

4.update order
localhost:8900/updateorder/6203c2fb48aa24fa0dc3cfee?status=success
https://groceryintern.herokuapp.com/updateorder/6203cd084a4ee097f3dd4944?status=success

///page5

1.list orders
http://localhost:8900/orders
https://groceryintern.herokuapp.com/orders

http://localhost:8900/orders?email="snigdhabommareddy@gmail.com"
https://groceryintern.herokuapp.com/orders?email=%22snigdhabommareddy@gmail.com%22