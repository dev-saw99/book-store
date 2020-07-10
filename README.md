# Pick-a-Book

Pick-a-Book is a dashboard application for a book shop. It offers following features:

* Sell books 
* Add new books to Inventory
* Search for books in Inventory
* Generate bill of each sale

## Dependencies

* ReactJS (Client)
* Golang   (Web-Services)

Install ReactJS using node-package-manager (npm)

    npm  install -g create-react-app

Install Golang from [here](http://golang.org)

## Buil this project

Clone this repository using follwing command

    git clone https://github.com/dev-saw99/book-store

Navigate to **services** directory in the book-store, run following command:

    go run main.go

This will start the go web-services.

Open a new terminal, navigate back to the book-store folder and run:

    npm install

    npm start

This will start react client.

---
## Todo
- [x] Add Search Feature
- [x] Create API for search
- [ ] Integrate API of Search with client
- [x] Add Selling form
- [x] Create API for selling books
- [ ] Integrate API for selling books with client 
- [x] Add Inventory Form
- [x] Create API for Inventory operations
- [x] Integrate API for Inverntory operations to inventory form
- [x] API to fetch all books from inventory
- [x] Integrate API to display all available books in inventory
- [ ] Integrate bill printing system
- [ ] MongoDB database<br> 
 *Currently project is using JSON file to store all the data*


---
> If you like this project, please give a star.
> Your valuable suggestions and feedback are welcomed [here](mailto:sonukumarsaw66@gmail.com)



    










