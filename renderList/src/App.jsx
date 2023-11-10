
import List from "./List.jsx"

function App() {

  const fruits = [{id: 1, name: "apple", calories: "apple"},
                  {id: 2, name: "orange", calories: 45},
                  {id: 3, name: "banana", calories: 105},
                  {id: 4, name: "coconut", calories: 159},
                  {id: 5, name: "pineapple", calories: 37}];

  const vegetables = [{id: 6, name: "potato", calories: 90},
                      {id: 7, name: "carrots", calories: 46},
                      {id: 8, name: "celery", calories: 23},
                      {id: 9, name: "corn", calories: 19},
                      {id: 10, name: "brocoli", calories: 38}];  
        
  
  return (
    <>
     {fruits.length > 0 && <List items = {fruits} category="Fruits"/>}
     {vegetables.length > 0 && <List items = {vegetables} category = "Vegetables"/>} 
    </>
  )
}

export default App
