package main

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
)

//Book type is to store book details
type Book struct {
	BookName string  `json:"bookname"`
	Isbn     string  `json:"isbn"`
	Quantity int     `json:"quantity"`
	Price    float64 `json:"price"`
	Author   string  `json:"author"`
}

//Data stores the book detail from the json file
var Data = make(map[string]Book)

//readJSONData reads data from the json file and return data and error(if any).
func readJSONData() (map[string]Book, error) {

	data := make(map[string]Book)

	file, err := os.Open("./data/data.json")
	defer file.Close()

	if err != nil {
		log.Println("Can't open the file", err)
		return data, err
	}

	byteJSON, err := ioutil.ReadAll(file)
	if err != nil {
		log.Println("Can't convert to json on line 35: ", err)
		return data, err
	}

	err = json.Unmarshal(byteJSON, &data)
	return data, err
}

//saveJSONData save data to the json file and returns error(if any).
func saveJSONData(d map[string]Book) error {
	byteJSON, err := json.Marshal(d)
	if err != nil {
		log.Println("Can't convert data to json byte")
		return err
	}
	err = ioutil.WriteFile("./data/data.json", byteJSON, 0644)
	return err
}

func getBooks(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	json.NewEncoder(w).Encode(Data)
}

func searchBooks(w http.ResponseWriter, r *http.Request) {

	query := mux.Vars(r)["query"]

	//searchResult is used to store search result
	searchResult := make(map[string]Book)

	if i, ok := Data[query]; ok {
		searchResult[query] = i
	}

	for k, v := range Data {
		if v.BookName == query || v.Author == query {
			searchResult[k] = v
		}
	}
	w.Header().Set("Content-type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	json.NewEncoder(w).Encode(searchResult)
}

func addUpdateBooks(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000/")
	w.Header().Set("Content-type", "application/json")
	var b Book
	err := json.NewDecoder(r.Body).Decode(&b)
	if err != nil {
		log.Fatal(err)
	}
	if _, ok := Data[b.Isbn]; ok {
		//Add the number of new books and book already in inventory
		b.Quantity += Data[b.Isbn].Quantity
		Data[b.Isbn] = b
	} else {
		Data[b.Isbn] = b
	}
	saveJSONData(Data)
	json.NewEncoder(w).Encode(b)
}

func sellBooks(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000/")
	w.Header().Set("Content-type", "application/json")
	var b Book
	err := json.NewDecoder(r.Body).Decode(&b)
	if err != nil {
		log.Fatal(err)
	}
	if _, ok := Data[b.Isbn]; ok {
		//Add the number of new books and book already in inventory
		b.Quantity = Data[b.Isbn].Quantity - b.Quantity
		if b.Quantity < 0 {
			b.Quantity = 0
		}
		Data[b.Isbn] = b
	}
	saveJSONData(Data)
	json.NewEncoder(w).Encode(b)
}

func main() {
	//Initialize gorilla router
	mux := mux.NewRouter()

	//variable to catch the errors
	var err error

	//load data
	Data, err = readJSONData()
	if err != nil {
		log.Fatal(err)
	}

	//Handers
	mux.HandleFunc("/api/books", getBooks).Methods("GET")
	mux.HandleFunc("/api/books/{query}", searchBooks).Methods("GET")
	mux.HandleFunc("/api/books", addUpdateBooks).Methods("POST")

	err = http.ListenAndServe("localhost:8080", mux)

	if err != nil {
		log.Fatal(err)
	}

}
