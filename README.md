# contacts-task-yehuda

Sever side creating users dB MongoDB Atlas and in node post add/delete/edit get ...

1. To display all documents of users as json in DB use this link:
	https://ideodigital-contacts-task.herokuapp.com/users or
	http://localhost:3000/users 
2. To get the amount of users all in the dB use this link:
	https://ideodigital-contacts-task.herokuapp.com/users/countContacts
	Or
	http://localhost:3000/users/countContacts
3. To get a single user use domain/users/single/<id>
    e.g. https://ideodigital-contacts-task.herokuapp.com/users/single/5f456466e8c69336fc36002b
    To add or to edit or to delete users to/in/from the you need to used post method by use postman tool.
4. The add user to DB use this the template you in the postman body->row->json
   Insert in the post field this url:
   https://ideodigital-contacts-task.herokuapp.com/users/add
   Or
   http://localhost:3000/users/add
   in body:
    {
      "first_name":"Bruce",
      "last_name": "Lee",
      "email": "bruce.lee@gmail.com",
      "area_code": "+972",
      "phone": "589090999"
    }
5. To edit a user in the DB use this the template you in the postman body->row->json
   Insert in the post field this url:
      https://ideodigital-contacts-task.herokuapp.com/users/edit
      Or
      http://localhost:3000/users/add
     In body:
    	{
     	  "id":"5f45ee34e997422fac61e297",
      	  "first_name": "Jackie",
      	  "last_name": "Chan",
      	  "email": "backie.chan@gmail.com",
      	  "area_code": "+972",
       	 "phone": ""
 	}
6.  To delete user from the DB use this the template you in the postman body->row->json
      Insert in the post field this URL:
      https://ideodigital-contacts-task.herokuapp.com/users/del
      Or
      http://localhost:3000/users/del
     In body:
       {
      	 "del":"5f4652e57a639700175f99b3"
       }
     
Client Side (Front end) contact registration app task for ideodigital.

1.	The first page is a contact registration 
    The page is structure  :
    a.	Nav Bar at the top to allow navigation between the pages
    b.	Registration from the fields are:
        1.	First name
        2.	Last name
        3.	Email
        4.	Phone + Area code (select box)
        5.	Two button at the bottom the left one to add the contact to the dB and then is show the contacts table new added at the end of the contact list and the right button (show contacts let you go the contact list table ).
        c.	The second pages is the contact list table here you show all the contacts that registered and in the dB you edit or delete contact in this page.
        d.	The third display the total amount the contacts in the dB.
