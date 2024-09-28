// import FocusInput from './FocusInput';

// function App() {
    //   return (
//     <div className="App">
//       <h1>Fill kon ino!!</h1>
//       <FocusInput />
//     </div>
//   );
// }


// *****EXAMPLE OF USING useREF AND useEffect*****

//(1)
//import { forwardRef, useRef ,useState, useEffect } from 'react';
// function Timer() {
    //   const [count, setCount] = useState(0);
    //   useEffect(() => {
        //   setTimeout(() => {
            //     setCount((count) => count + 1);
            //   }, 1000);
            
            // });
            // return <h1>I've rendered {count} times!</h1>;
            // }
            
            // const App = () => {
                //     // const myArr = [1, 2, 3, 4, 5, 6];
                //     // const newArr = myArr.flatMap(x => [x, x * 10]);
                //     //console.log("NEW ARRAY : ",newArr)
                //       return (
//         <div className='App'>
//           <Timer />
//         </div>
//       )
//     }

//(2)
// function App(){
//   const [timeCount, setTimeCount] = useState(0)
//   useEffect(() =>{
//    const interval = setInterval(() => setTimeCount(prevCount => prevCount + 1) ,1000)
//    //return () => clearInterval(interval)
//   },[timeCount])
//   return(
//     <div className='App'>
//       <h1>Hi with timer : {timeCount}</h1>
//     </div>
//   )
// }


// *****REACT RANDOM SAMPLES => Ln( 57 - 372 )*****


// ---FeedBack Form---

// function FeedbackForm() {
//   const [text, setText] = useState('');
//   const [status, setStatus] = useState('typing');

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setStatus('sending');
//     await sendMessage(text);
//     setStatus('sent');
//   }

//   const isSending = status === 'sending';
//   const isSent = status === 'sent';

//   if (isSent) {
//     return <h1>Thanks for feedback!</h1>
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <p>How was your stay at The Prancing Pony?</p>
//       <textarea
//         disabled={isSending}
//         value={text}
//         onChange={e => setText(e.target.value)}
//       />
//       <br />
//       <button disabled={isSending} type="submit">Send</button>
//       {isSending && <p>Sending...</p>}
//     </form>
//   );
// }

// // Pretend to send a message.
// function sendMessage(text) {
//   return new Promise(resolve => {
//     setTimeout(resolve, 2000);
//   });
// }

// function App(){
//   return(
//     <div className='App'>
//       <FeedbackForm />
//     </div>
//   )
// }



// ---Menu---

// const initialItems = [
//   { title: 'pretzels', id: 0 },
//   { title: 'crispy seaweed', id: 1 },
//   { title: 'granola bar', id: 2 }
// ]

// function Menu() {
//   const [items, setItems] = useState(initialItems)
//   const [selectedId, setSelectedId] = useState(0)

//   const selectedItem = items.find(item =>
//       item.id === selectedId
//   )

//   function handleItemChange(id, e) {
//     setItems(items.map(item => {
//       if (item.id === id) {
//         return {
//           ...item,
//           title: e.target.value
//         }
//       } else {
//         return item
//       }
//     }))
//   }
//   return (
//     <>
//       <h2>What's your travel snack?</h2>
//       <ul>
//         {items.map((item, index) => (
//           <li key={item.id}>
//             <input 
//               value={item.title}
//               onChange={e => handleItemChange(item.id, e)}
//               disabled={true}
//             />
//             {''}
//             <button onClick={() => setSelectedId(item.id)}>Choose</button>
//           </li>
//         ))}
//       </ul>
//       <p>You picked {selectedItem.title}.</p>
//     </>
//   );
// }

// function App(){
//   return(
//     <div className='App'>
//       <Menu />
//     </div>
//   )
// }



// ---Travel Plan---

// function TravelPlan() {
//   const [plan, setPlan] = useState(initialTravelPlan);

//   function handleComplete(parentId, childId) {
//     const parent = plan[parentId];
//     // Create a new version of the parent place
//     // that doesn't include this child ID.
//     const nextParent = {
//       ...parent,
//       childIds: parent.childIds
//         .filter(id => id !== childId)
//     };
//     // Update the root state object...
//     setPlan({
//       ...plan,
//       // ...so that it has the updated parent.
//       [parentId]: nextParent
//     });
//   }

//   const root = plan[0];
//   const planetIds = root.childIds;
//   return (
//     <>
//       <h2>Places to visit</h2>
//       <ol>
//         {planetIds.map(id => (
//           <PlaceTree
//             key={id}
//             id={id}
//             parentId={0}
//             placesById={plan}
//             onComplete={handleComplete}
//           />
//         ))}
//       </ol>
//     </>
//   );
// }

// function PlaceTree({ id, parentId, placesById, onComplete }) {
//   const place = placesById[id];
//   const childIds = place.childIds;
//   return (
//     <li>
//       {place.title}
//       <button onClick={() => {
//         onComplete(parentId, id);
//       }}>
//         Complete
//       </button>
//       {childIds.length > 0 &&
//         <ol>
//           {childIds.map(childId => (
//             <PlaceTree
//               key={childId}
//               id={childId}
//               parentId={id}
//               placesById={placesById}
//               onComplete={onComplete}
//             />
//           ))}
//         </ol>
//       }
//     </li>
//   );
// }

// function App(){
//   return(
//     <div className='App'>
//       <TravelPlan />
//     </div>
//   )
// }



// ---createContext & useContext---

// import { createContext, useContext, useState } from 'react';
// const ThemeContext = createContext(null);

// function MyApp() {
//   const [theme, setTheme] = useState("dark")
//   function handleClick(){
//     return(
//       setTheme(theme === 'dark' ? 'light' : 'dark')
//     )
//   }
//   return (
//     <ThemeContext.Provider value={{theme, handleClick}}>
//       <Form />
//     </ThemeContext.Provider>
//   )
// }

// function Form() {
//   return (
//     <Panel title="Welcome">
//       <Button>Sign up</Button>
//       <Button>Log in</Button>
//     </Panel>
//   );
// }

// function Panel({ title, children }) {
//   //const theme = useContext(ThemeContext);
//   //const className = 'panel-' + theme;
//   const {theme, handleClick} = useContext(ThemeContext)
//   const className = 'panel-' + theme
//   return (
//     <section className={className}>
//       <h1>{title}</h1>
//       {children}
//       <button className={`button-${theme}`} onClick={handleClick}>Change Theme</button>
//     </section>
//   )
// }

// function Button({ children }) {
//   //const theme = useContext(ThemeContext);
//   //const className = 'button-' + theme;
//   const {theme} = useContext(ThemeContext)
//   const className = 'button-' + theme
//   return (
//     <>
//       <button className={className}>
//         {children}
//       </button>
//     </>
//   );
// }

// function App(){
//   return(
//     <div className='App'>
//       <MyApp />
//     </div>
//   )
// }


// ---Using A Single Event Handler For Multiple Fields (Computed Property Names)---

// function Form() {
//   const [person, setPerson] = useState({
//     firstName: 'Barbara',
//     lastName: 'Hepworth',
//     email: 'bhepworth@sculpture.com'
//   });

//   function handleChange(e) {
//     setPerson({
//       ...person,
//       [e.target.name]: e.target.value
//     });
//   }

//   return (
//     <>
//       <label>
//         First name:
//         <input
//           name="firstName"
//           value={person.firstName}
//           onChange={handleChange}
//         />
//       </label>
//       <br/>
//       <label>
//         Last name:
//         <input
//           name="lastName"
//           value={person.lastName}
//           onChange={handleChange}
//         />
//       </label>
//       <br/>
//       <label>
//         Email:
//         <input
//           name="email"
//           value={person.email}
//           onChange={handleChange}
//         />
//       </label>
//       <p>
//         {person.firstName}{' '}
//         {person.lastName}{' '}
//         ({person.email})
//       </p>
//     </>
//   );
// }

// function App(){
//   return(
//     <div className='App'>
//       <Form />
//     </div>
//   )
// }



//State: A Component's Memory - REACT  => Ln( 381 - 542 )

// *****ONE OF THE REACT CHALLENGES (1)*****


// import { sculptureList } from './samples'

// const Gallery = () => {
//   const [index, setIndex] = useState(0)
//   const [showMore, setShowMore] = useState(false)

//   let hasPrev = 0 < index
//   let hasNext = index < sculptureList.length -1

//   function handleNextClick(){
//     if(hasNext){
//       setIndex((prevState) => prevState + 1)
//     }
//     //setIndex((prevState) => (prevState + 1) % sculptureList.length) => CYCLE FORWARD
//   }
//   function handlePrevClick(){
//     if(hasPrev){
//       setIndex((prevState) => prevState - 1)
//     }
//     //setIndex((prevState) => (prevState - 1 + sculptureList.length) % sculptureList.length ) => CYCLE BACKWARD
//   }
//   function handleShowClick(){
//     setShowMore(!showMore)
//   }
//   let sculpture = sculptureList[index]
//   return(
//     <>
//       <button onClick={handleNextClick} disabled={!hasNext}>Next</button>
//       <button onClick={handlePrevClick} disabled={!hasPrev}>Previous</button>
//       <h2><i>{sculpture.name} By {sculpture.artist}</i></h2>
//       <h3>({index + 1} of {sculptureList.length})</h3>
//       <img src={sculpture.url} alt={sculpture.alt} />
//       <button onClick={handleShowClick}>
//         {showMore ? "Hide" : "Show"} details
//       </button>

//       {showMore && <p>{sculpture.description}</p>}
//     </>
//   )
// }

// const App = () =>{
//   return(
//     <div className='App'>
//       <Gallery />
//     </div>
//   )
// }



// *****ONE OF THE REACT CHANLLENGES (2)*****


// const Form = () => {
//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')

//   function handleFirstNameChange(e) {
//     setFirstName(e.target.value)
//   }

//   function handleLastNameChange(e) {
//     setLastName(e.target.value)
//   }

//   function handleReset() {
//     setFirstName('')
//     setLastName('')
//   }

//   return (
//     <>
//       <form onSubmit={e => e.preventDefault()}>
//         <input
//           placeholder="First name"
//           value={firstName}
//           onChange={handleFirstNameChange}
//         />
//         <input
//           placeholder="Last name"
//           value={lastName}
//           onChange={handleLastNameChange}
//         />
//         <h1>Hi, {firstName} {lastName}</h1>
//         <button onClick={handleReset}>Reset</button>
//       </form>
//     </>
//   )
// }

// function App(){
//   return(
//     <div className='App'>
//       <Form />
//     </div>
//   )
// }



// *****ONE OF REACR CHALLENGES (3)*****


// function FeedbackForm() {
//   const [isSent, setIsSent] = useState(false);
//   const [message, setMessage] = useState('');
//   if (isSent) {
//     return <h1>Thank you!</h1>;
//   }
//     // eslint-disable-next-line
//     return (
//       <form onSubmit={e => {
//         e.preventDefault();
//         alert(`Sending: "${message}"`);
//         setIsSent(true);
//       }}>
//         <textarea
//           placeholder="Message"
//           value={message}
//           onChange={e => setMessage(e.target.value)}
//         />
//         <br />
//         <button type="submit">Send</button>
//       </form>
//     )
// }
// function App(){
//   return(
//     <div className='App'>
//       <FeedbackForm />
//     </div>
//   )
// }


// *****ONE OF THE REACT CHALLENGES (4)*****


// function FeedbackForm() {
//   //const [name, setName] = useState('');  //NOT CORRECT

//   function handleClick() {
//     //setName(prompt('What is your name?'))  //NOT CORRECT
//     const name = prompt('What is your name?');
//     alert(`Hello, ${name}!`);
//   }

//   return (
//     <button onClick={handleClick}>
//       Greet
//     </button>
//   );
// }

// function App(){
//   return(
//     <div className='App'>
//       <FeedbackForm />
//     </div>
//   )
// }



//Choosing The State Structure - REACT => Ln( 551 - 876 )

// *****ONE OF THE REACT CHALLENGES (1)*****


// function Clock(props) {
//   //const [color, setColor] = useState(props.color);  //Instead of state, use color props dircectly (line 8)
//   return (
//     <h1 style={{ color: props.color }}>
//       {props.time}
//     </h1>
//   );
// }
// function useTime() {
//   const [time, setTime] = useState(() => new Date());
//   useEffect(() => {
//     const id = setInterval(() => {
//       setTime(new Date());
//     }, 1000);
//     return () => clearInterval(id);
//   }, []);
//   return time;
// }

// function App() {
//   const time = useTime();
//   const [color, setColor] = useState('lightcoral');
//   return (
//     <div className='App'>
//       <p>
//         Pick a color:{' '}
//         <select value={color} onChange={e => setColor(e.target.value)}>
//           <option value="lightcoral">lightcoral</option>
//           <option value="midnightblue">midnightblue</option>
//           <option value="rebeccapurple">rebeccapurple</option>
//           <option value="green">green</option>
//         </select>
//       </p>
//       <Clock color={color} time={time.toLocaleTimeString()} />
//     </div>
//   );
// }



// *****ONE OF THE REACT CHALLENGES (2)*****


// function AddItem({ onAddItem }) {
//   const [title, setTitle] = useState('');
//   return (
//     <>
//       <input
//         placeholder="Add item"
//         value={title}
//         onChange={e => setTitle(e.target.value)}
//       />
//       <button onClick={() => {
//         setTitle('');
//         onAddItem(title);
//       }}>Add</button>
//     </>
//   )
// }

// function PackingList({
//   items,
//   onChangeItem,
//   onDeleteItem
// }) {
//   return (
//     <ul>
//       {items.map(item => (
//         <li key={item.id}>
//           <label>
//             <input
//               type="checkbox"
//               checked={item.packed}
//               onChange={e => {
//                 onChangeItem({
//                   ...item,
//                   packed: e.target.checked
//                 });
//               }}
//             />
//             {' '}
//             {item.title}
//           </label>
//           <button onClick={() => onDeleteItem(item.id)}>
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }


// let nextId = 3;
// const initialItems = [
//   { id: 0, title: 'Warm socks', packed: true },
//   { id: 1, title: 'Travel journal', packed: false },
//   { id: 2, title: 'Watercolors', packed: false },
// ];

// function TravelPlan() {
//   const [items, setItems] = useState(initialItems);

//   const total = items.length
//   const packed = items.filter(item => item.packed).length

//   function handleAddItem(title) {
//     setItems([
//       ...items,
//       {
//         id: nextId++,
//         title: title,
//         packed: false
//       }
//     ]);
//   }

//   function handleChangeItem(nextItem) {

//     setItems(items.map(item => {
//       if (item.id === nextItem.id) {
//         return nextItem;
//       } else {
//         return item;
//       }
//     }));
//   }

//   function handleDeleteItem(itemId) {
//     setItems(
//       items.filter(item => item.id !== itemId)
//     );
//   }

//   return (
//     <>  
//       <AddItem
//         onAddItem={handleAddItem}
//       />
//       <PackingList
//         items={items}
//         onChangeItem={handleChangeItem}
//         onDeleteItem={handleDeleteItem}
//       />
//       <hr />
//       <b>{packed} out of {total} packed!</b>
//     </>
//   );
// }


// function App(){
//   return(
//     <div className='App'>
//       <TravelPlan />
//     </div>
//   )
// }



// *****ONE OF THE REACT CHALLENGES (3)*****


// const initialLetters = [{
//   id: 0,
//   subject: 'Ready for adventure?',
//   isStarred: true,
// }, {
//   id: 1,
//   subject: 'Time to check in!',
//   isStarred: false,
// }, {
//   id: 2,
//   subject: 'Festival Begins in Just SEVEN Days!',
//   isStarred: false,
// }];


// function MailClient() {
//   const [letters, setLetters] = useState(initialLetters);
//   const [highlightedId, setHighlightedId] = useState(null);

//   function handleHover(letterId) {
//     setHighlightedId(letterId);
//   }

//   function handleStar(starredId) {
//     setLetters(letters.map(letter => {
//       if (letter.id === starredId) {
//         return {
//           ...letter,
//           isStarred: !letter.isStarred
//         };
//       } else {
//         return letter;
//       }
//     }));
//   }

//   return (
//     <>
//       <h2>Inbox</h2>
//       <ul style={{paddingInlineStart: "20px"}}>
//         {letters.map(letter => (
//           <Letter
//             key={letter.id}
//             letter={letter}
//             isHighlighted={
//               letter.id === highlightedId
//             }
//             onHover={handleHover}
//             onToggleStar={handleStar}
//           />
//         ))}
//       </ul>
//     </>
//   );
// }


// function App(){
//   return(
//     <div className='App'>
//       <MailClient />
//     </div>
//   )
// }



// *****ONE OF THE REACT CHALLENGES (4)*****


// const letters = [{
//   id: 0,
//   subject: 'Ready for adventure?',
//   isStarred: true,
// }, {
//   id: 1,
//   subject: 'Time to check in!',
//   isStarred: false,
// }, {
//   id: 2,
//   subject: 'Festival Begins in Just SEVEN Days!',
//   isStarred: false,
// }];

// function Letter({
//   letter,
//   onToggle,
//   isSelected,
// })  {
//   return (
//     <li style={{borderRadius: "5px" , backgroundColor: isSelected ? "#d2eaff" : ""}}
//     //    className={
//     //      isSelected ? 'selected' : ''
//     //}
//     >
//       <label style={{width: "100%",padding: "5px", display: "inline-block"}}>
//         <input
//           style={{margin: "5px"}}
//           type="checkbox"
//           checked={isSelected}
//           onChange={() => {
//             onToggle(letter.id);
//           }}
//         />
//         {letter.subject}
//       </label>
//     </li>
//   )
// }

// function MailClient() {
//   const [selectedIds, setSelectedIds] = useState([]);

//   // TODO: allow multiple selection
//   const selectedCount = selectedIds.length;

//   function handleToggle(toggledId) {
//     if(selectedIds.includes(toggledId)){
//       setSelectedIds(selectedIds.filter(id => id !== toggledId));
//     } else {
//       setSelectedIds([
//         ...selectedIds,
//         toggledId
//       ])
//     }
//     // TODO: allow multiple selection
//   }

//   return (
//     <>
//       <h2>Inbox</h2>
//       <ul style={{paddingInlineStart: "20px"}}>
//         {letters.map(letter => (
//           <Letter
//             key={letter.id}
//             letter={letter}
//             isSelected={
//               // TODO: allow multiple selection
//               selectedIds.includes(letter.id)
//             }
//             onToggle={handleToggle}
//           />
//         ))}
//         <hr />
//         <p>
//           <b>
//             You selected {selectedCount} letters
//           </b>
//         </p>
//       </ul>
//     </>
//   );
// }


// function App(){
//   return(
//     <div className='App'>
//       <MailClient />
//     </div>
//   )
// }



//Sharing State Between Components - REACT => Ln( 885 - 989 )

// *****ONE OF THE REACT CHALLENGES (1)******


// function SyncedInputs() {
//   const [text, setText] = useState('');
  
//   function handleChange(e) {
//     setText(e.target.value) ;
//   }
//   return (
//     <>
//       <Input 
//         label="First input"
//         value={text}
//         onChange={handleChange}
//         />
//       <Input 
//         label="Second input" 
//         value={text}
//         onChange={handleChange}
//         />
//     </>
//   );
// }

// function Input({label, value, onChange}) {
  
//   return (
//     <label style={{display: "block"}}>
//       {label}
//       {' : '}
//       <input
//         style={{margin: "7px"}}
//         value={value}
//         onChange={onChange}
//         />
//     </label>
//   );
// }

// function App(){
//   return(
//     <div className='App'>
//       <SyncedInputs />
//     </div>
//   )
// }


// *****ONE OF THE REACT CHALLENGES (2)******


// import {filterItems, foods} from './samples'
// function FilterableList() {
//   const [query, setQuery] = useState('')
//   const result = filterItems(foods, query)

//   function handleChange(e){
//     setQuery(e.target.value)
//   }
//   return (
//     <>
//       <SearchBar 
//       search={filterItems}
//       query={query}
//       onChange={handleChange} 
//       />
//       <hr />
//       <List items={result} />
//     </>
//   );
// }

// function SearchBar({query, onChange}) {
 
//   return (
//     <label>
//       Search :{' '}
//       <input
//         value={query}
//         onChange={onChange}
//       />
//     </label>
//   );
// }

// function List({ items }) {
//   return (
//     <table>
//       <tbody>
//         {items.map(food => (
//           <tr key={food.id}>
//             <td>{food.name}</td>
//             <td>{food.description}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// function App(){
//   return(
//     <div className='App'>
//       <FilterableList />
//     </div>
//   )
// }



//Rendering Lists - REACT => Ln( 998 , 1221 )

// *****ONE OF THE REACT CHALLENGES (1)*****


// export const people = [{
//   id: 0,
//   name: 'Creola Katherine Johnson',
//   profession: 'mathematician',
//   accomplishment: 'spaceflight calculations',
//   imageId: 'MK3eW3A'
// }, {
//   id: 1,
//   name: 'Mario José Molina-Pasquel Henríquez',
//   profession: 'chemist',
//   accomplishment: 'discovery of Arctic ozone hole',
//   imageId: 'mynHUSa'
// }, {
//   id: 2,
//   name: 'Mohammad Abdus Salam',
//   profession: 'physicist',
//   accomplishment: 'electromagnetism theory',
//   imageId: 'bE7W1ji'
// }, {
//   id: 3,
//   name: 'Percy Lavon Julian',
//   profession: 'chemist',
//   accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
//   imageId: 'IOjWm71'
// }, {
//   id: 4,
//   name: 'Subrahmanyan Chandrasekhar',
//   profession: 'astrophysicist',
//   accomplishment: 'white dwarf star mass calculations',
//   imageId: 'lrWQx8l'
// }];

// export function getImageUrl(person) {
//   return (
//     'https://i.imgur.com/' +
//     person.imageId +
//     's.jpg'
//   );
// }

// function List() {
//   const separateChemist = people.filter(person => person.profession === 'chemist').map(person => 
//     <li key={person.id}>
//       <img
//         style={{borderRadius: "50%"}}
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <strong>{person.name}:</strong>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   )
//   const listItems = people.filter(person => person.profession !== 'chemist').map(person =>
//     <li key={person.id}>
//       <img
//         style={{borderRadius: '50%'}}
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   );
//   return (
//     <article>
//       <h1>Scientist</h1>
//       <h2>Chemists</h2>
//       <ul>{separateChemist}</ul>
//       <br />
//       <h1>Everyone else</h1>
//       <ul>{listItems}</ul>
//     </article>
//   );
// }

// function App(){
//   return(
//   <div className='App'>
//     <List />
//   </div>
//   )
// }


// *****ONE OF THE REACT CHALLENGES (2)*****


// export const recipes = [{
//   id: 'greek-salad',
//   name: 'Greek Salad',
//   ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
// }, {
//   id: 'hawaiian-pizza',
//   name: 'Hawaiian Pizza',
//   ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
// }, {
//   id: 'hummus',
//   name: 'Hummus',
//   ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
// }];

// function RecipeList() {
//   return (
//     <div>
//       <h1 style={{margin: "20px 0"}}>Recipes</h1>
//       {recipes.map(recipe =>
//         <div key={recipe.id}>
//           <h2>{recipe.name}</h2>
//           <ul style={{paddingInlineStart: "20px"}}>
//             {recipe.ingredients.map(ingredient =>
//               <li key={ingredient}>{ingredient}</li>
//             )}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// function App(){
//   return(
//     <div className='App'>
//       <RecipeList />
//     </div>
//   )
// }


// *****ONE OF THE REACT CHALLENGES (3)*****


// export const recipes = [{
//   id: 'greek-salad',
//   name: 'Greek Salad',
//   ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
// }, {
//   id: 'hawaiian-pizza',
//   name: 'Hawaiian Pizza',
//   ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
// }, {
//   id: 'hummus',
//   name: 'Hummus',
//   ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
// }];

// function Recipe({id, name, ingredients}){
//   return(
//     <div>
//       <h2>{name}</h2>
//       <ul>
//         {ingredients.map(ingredient =>
//           <li key={ingredient}>
//             {ingredient}
//           </li>
//         )}
//       </ul>
//     </div>
//   )
// }

// function RecipeList() {
//   return (
//     <div>
//       <h1 style={{margin: "20px 0"}}>Recipes</h1>
//       {recipes.map(recipe =>
//         <Recipe {...recipe} key={recipe.id} />  // {...recipe} = id={recipe.id} name={recipe.name} ingredients={recipe.ingredients}
//       )}
//     </div>
//   );
// }

// function App(){
//   return(
//     <div className='App'>
//       <RecipeList />
//     </div>
//   )
// }


// *****ONE OF THE REACT CHALLENGES (4)*****


// const poem = {
//   lines: [
//     'I write, erase, rewrite',
//     'Erase again, and then',
//     'A poppy blooms.'
//   ]
// };

// function Poem() {
//   let output = []

//   poem.lines.forEach((line, i) =>{
//     output.push(
//       <hr key={i + '-separator'} />
//     )
//     output.push(
//       <p key={i + '-text'}>{line}</p>
//     )
//   })
//   output.shift()

//   return (
//     <article>
//       {output}
//     </article>
//   );
// }

// function App(){
//   return(
//     <div className='App'>
//       <Poem />
//     </div>
//   )
// }



// useContext - REACT => Ln( 1231 - 1659 )


// *****Examples Of Updating Context (1)*****


// import { createContext, useContext, useState } from 'react';
// const ThemeContext = createContext(null);

// function MyApp() {
//   const [theme, setTheme] = useState('light');
//   return (
//     <ThemeContext.Provider value={theme}>
//       <Form />
//       <label>        
//         <input
//           type="checkbox"
//           checked={theme === 'dark'}
//           onChange={(e) => {
//             setTheme(e.target.checked ? 'dark' : 'light')
//           }}
//         />
//         {' '}
//         Use dark mode
//       </label>
//     </ThemeContext.Provider>
//   )
// }

// function Form({ children }) {
//   return (
//     <Panel title="Welcome">
//       <Button>Sign up</Button>
//       <Button>Log in</Button>
//     </Panel>
//   );
// }

// function Panel({ title, children }) {
//   const theme = useContext(ThemeContext);
//   const className = 'panel-' + theme;
//   return (
//     <section className={className}>
//       <h1>{title}</h1>
//       {children}
//     </section>
//   )
// }

// function Button({ children }) {
//   const theme = useContext(ThemeContext);
//   const className = 'button-' + theme;
//   return (
//     <button className={className}>
//       {children}
//     </button>
//   );
// }

// function App(){
//   return(
//     <div className='App'>
//       <MyApp />
//     </div>
//   )
// }


// *****Examples Of Updating Context (2)*****


// import { createContext, useContext, useState } from 'react';
// const CurrentUserContext = createContext(null);

// function MyApp() {
//   const [currentUser, setCurrentUser] = useState(null);
//   return (
//     <CurrentUserContext.Provider value={{currentUser,setCurrentUser}}>
//       <Form />
//     </CurrentUserContext.Provider>
//   );
// }

// function Form({ children }) {
//   return (
//     <Panel title="Welcome">
//       <LoginButton />
//     </Panel>
//   );
// }

// function LoginButton() {
//   const {currentUser,setCurrentUser} = useContext(CurrentUserContext);

//   if (currentUser !== null) {
//     return <p>You logged in as {currentUser.name}.</p>;
//   }
//   return (
//     <Button onClick={() => {
//       setCurrentUser({ name: 'Ramtin' })
//     }}>Log in as Ramtin
//     </Button>
//   );
// }

// function Panel({ title, children }) {
//   return (
//     <section style={{border: "1px solid black", borderRadius: "4px", padding: "20px", marginBottom: "10px"}}>
//       <h1>{title}</h1>
//       {children}
//     </section>
//   )
// }

// function Button({ children, onClick }) {
//   return (
//     <button style={{border: "1px solid #777", padding: "5px", marginTop: "10px", marginRight: "10px"}} onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// function App(){
//   return(
//     <div className='App'>
//       <MyApp />
//     </div>
//   )
// }


// *****Examples Of Updating Context (3)*****


// import { createContext, useContext, useState } from 'react';
// const ThemeContext = createContext(null);
// const CurrentUserContext = createContext(null);

// function MyApp() {
//   const [theme, setTheme] = useState('light');
//   const [currentUser, setCurrentUser] = useState(null);
//   return (
//     <ThemeContext.Provider value={theme}>
//       <CurrentUserContext.Provider value={{currentUser,setCurrentUser}}>
//         <WelcomePanel />
//         <label style={{display: "block"}}>
//           <input
//             type="checkbox"
//             checked={theme === 'dark'}
//             onChange={(e) => {
//               setTheme(e.target.checked ? 'dark' : 'light')
//             }}
//           />
//           {' '}
//           Use dark mode
//         </label>
//       </CurrentUserContext.Provider>
//     </ThemeContext.Provider>
//   )
// }

// function WelcomePanel({ children }) {
//   const {currentUser} = useContext(CurrentUserContext);
//   return (
//     <Panel title="Welcome">
//       {currentUser !== null ?
//         <Greeting /> :
//         <LoginForm />
//       }
//     </Panel>
//   );
// }

// function Greeting() {
//   const {currentUser} = useContext(CurrentUserContext);
//   return (
//     <p>You logged in as {currentUser.name}.</p>
//   )
// }

// function LoginForm() {
//   const {setCurrentUser} = useContext(CurrentUserContext);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const canLogin = firstName.trim() !== '' && lastName.trim() !== '';
//   return (
//     <>
//       <label>
//         First name{': '}
//         <input
//           required
//           value={firstName}
//           onChange={e => setFirstName(e.target.value)}
//         />
//       </label>
//       <label>
//         <br/>
//         Last name{': '}
//         <input
//           required
//           value={lastName}
//           onChange={e => setLastName(e.target.value)}
//         />
//       </label>
//       <br/>
//       <Button
//         disabled={!canLogin}
//         onClick={() => {
//           setCurrentUser({
//             name: firstName + ' ' + lastName
//           });
//         }}
//       >
//         Log in
//       </Button>
//       {!canLogin && <i style={{color: "#777"}}>Fill in both fields.</i>}
//     </>
//   );
// }

// function Panel({ title, children }) {
//   const theme = useContext(ThemeContext);
//   const className = 'panel-' + theme;
//   return (
//     <section className={className}>
//       <h1 style={{marginTop: "0", fontSize:"22px"}}>{title}</h1>
//       {children}
//     </section>
//   )
// }

// function Button({ children, disabled, onClick }) {
//   const theme = useContext(ThemeContext);
//   const className = 'button-' + theme;
//   return (
//     <button
//       className={className}
//       disabled={disabled}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// }

// function App(){
//   return(
//     <div className='App'>
//       <MyApp />
//     </div>
//   )
// }


// *****Examples Of Updating Context (4)*****


// import { createContext, useContext, useState } from 'react';
// const ThemeContext = createContext(null);
// const CurrentUserContext = createContext(null);

// function MyApp() {
//   const [theme, setTheme] = useState('light');
//   return (
//     <MyProviders theme={theme} setTheme={setTheme}>
//       <WelcomePanel />
//       <label>
//         <input
//           type="checkbox"
//           checked={theme === 'dark'}
//           onChange={(e) => {
//             setTheme(e.target.checked ? 'dark' : 'light')
//           }}
//         />
//         {' '}
//         Use dark mode
//       </label>
//     </MyProviders>
//   );
// }

// function MyProviders({ children, theme, setTheme }) {
//   const [currentUser, setCurrentUser] = useState(null);
//   return (
//     <ThemeContext.Provider value={theme}>
//       <CurrentUserContext.Provider value={{currentUser,setCurrentUser}}>
//         {children}
//       </CurrentUserContext.Provider>
//     </ThemeContext.Provider>
//   );
// }

// function WelcomePanel({ children }) {
//   const {currentUser} = useContext(CurrentUserContext);
//   return (
//     <Panel title="Welcome">
//       {currentUser !== null ?
//         <Greeting /> :
//         <LoginForm />
//       }
//     </Panel>
//   );
// }

// function Greeting() {
//   const {currentUser} = useContext(CurrentUserContext);
//   return (
//     <p>You logged in as {currentUser.name}.</p>
//   )
// }

// function LoginForm() {
//   const {setCurrentUser} = useContext(CurrentUserContext);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const canLogin = firstName !== '' && lastName !== '';
//   return (
//     <>
//       <label>
//         First name{': '}
//         <input
//           required
//           value={firstName}
//           onChange={e => setFirstName(e.target.value)}
//         />
//       </label>
//       <br/>
//       <label>
//         Last name{': '}
//         <input
//           required
//           value={lastName}
//           onChange={e => setLastName(e.target.value)}
//         />
//       </label>
//       <br/>
//       <Button
//         disabled={!canLogin}
//         onClick={() => {
//           setCurrentUser({
//             name: firstName + ' ' + lastName
//           });
//         }}
//       >
//         Log in
//       </Button>
//       {!canLogin && <i style={{color: '#777'}}>Fill in both fields.</i>}
//     </>
//   );
// }

// function Panel({ title, children }) {
//   const theme = useContext(ThemeContext);
//   const className = 'panel-' + theme;
//   return (
//     <section className={className}>
//       <h1>{title}</h1>
//       {children}
//     </section>
//   )
// }

// function Button({ children, disabled, onClick }) {
//   const theme = useContext(ThemeContext);
//   const className = 'button-' + theme;
//   return (
//     <button
//       className={className}
//       disabled={disabled}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// }

// function App(){
//   return(
//     <div className='App'>
//       <MyApp />
//     </div>
//   )
// }


// *****Examples Of Updating Context (5)*****


// import { useTasksDispatch } from './samples.js';
// import { TasksProvider, TaskList } from './samples.js';

// function AddTask() {
//   const [text, setText] = useState('');
//   const dispatch = useTasksDispatch();
//   return (
//     <>
//       <input
//         placeholder="Add task"
//         value={text}
//         onChange={e => setText(e.target.value)}
//       />
//       {' '}
//       <button onClick={() => {
//         setText('');
//         dispatch({
//           type: 'added',
//           id: nextId++,
//           text: text,
//         }); 
//       }}>Add</button>
//     </>
//   );
// }
// let nextId = 3;

// function TaskApp() {
//   const handleAction = (action) =>{
//     console.log('ACTION : ',action)
//   }
//   return (
//     <TasksProvider onAction={handleAction}>
//       <h1>Day off in Kyoto</h1>
//       <AddTask />
//       <TaskList />
//     </TasksProvider>
//   );
// }

// function App(){
//   return(
//     <div className='App'>
//       <TaskApp />
//     </div>
//   )
// }



// useContext - REACT => Ln( 1669 , 1800 )


// *****Examples Of Overriding Context (1)*****


// import { useContext, createContext} from 'react'
// const ThemeContext = createContext(null)

// function MyApp(){
//   return(
//     <ThemeContext.Provider value='dark'>
//       <Form />
//     </ThemeContext.Provider>
//   )
// }

// function Form(){
//   return(
//     <Panel title='Welcome'>
//       <Button>Sign Up</Button>
//       <Button>Log In</Button>
//       <ThemeContext.Provider value='light'>
//       <Footer />
//       </ThemeContext.Provider>
//     </Panel>
//   )
// }

// function Footer(){
//   return(
//     <footer style={{marginTop: "20px", borderTop: '2px solid #aaa'}}>
//       <Button>Settings</Button>
//     </footer>
//   )
// }

// function Panel({title, children}){
//   const theme = useContext(ThemeContext)
//   const className = 'panel-' + theme
//   return(
//     <section className={className}>
//       <h1>{title}</h1>
//       {children}
//     </section>
//   )
// }

// function Button({children}){
//   const theme = useContext(ThemeContext)
//   const className = 'button-' + theme
//   return(
//     <>
//       <button className={className}>
//         {children}
//       </button>
//     </>
//   )
// }

// function App(){
//   return(
//     <div className='App'>
//       <MyApp />
//     </div>
//   )
// }


// *****Examples Of Overriding Context (2)*****


// import { createContext, useContext } from 'react';
// const LevelContext = createContext(0)

// function Heading({ children }) {
//   const level = useContext(LevelContext);
//   switch (level) {
//     case 0:
//       throw Error('Heading must be inside a Section!');
//     case 1:
//       return <h1>{children}</h1>;
//     case 2:
//       return <h2>{children}</h2>;
//     case 3:
//       return <h3>{children}</h3>;
//     case 4:
//       return <h4>{children}</h4>;
//     case 5:
//       return <h5>{children}</h5>;
//     case 6:
//       return <h6>{children}</h6>;
//     default:
//       throw Error('Unknown level: ' + level);
//   }
// }

// function Section({ children }) {
//   const level = useContext(LevelContext);
//   return (
//     <section style={{padding: "10px", margin: "5px", borderRadius: "5px", border: "1px solid #aaa"}}>
//       <LevelContext.Provider value={level + 1}>
//         {children}
//       </LevelContext.Provider>
//     </section>
//   );
// }

// function Page() {
//   return (
//     <Section>
//       <Heading>Title</Heading>
//       <Section>
//         <Heading>Heading</Heading>
//         <Heading>Heading</Heading>
//         <Heading>Heading</Heading>
//         <Section>
//           <Heading>Sub-heading</Heading>
//           <Heading>Sub-heading</Heading>
//           <Heading>Sub-heading</Heading>
//           <Section>
//             <Heading>Sub-sub-heading</Heading>
//             <Heading>Sub-sub-heading</Heading>
//             <Heading>Sub-sub-heading</Heading>
//           </Section>
//         </Section>
//       </Section>
//     </Section>
//   );
// }

// function App(){
//   return(
//     <div className='App'>
//       <Page />
//     </div>
//   )
// }


// Updating Objects In State - REACT => Ln( 1808 , 1951 )

// *****ONE OF THE REACT CHALLENGES (1)*****


// function Scoreboard() {
//   const [player, setPlayer] = useState({
//     firstName: 'Ranjani',
//     lastName: 'Shettar',
//     score: 10,
//   });

//   function handlePlusClick() {
//     setPlayer({
//       ...player,
//       score: player.score + 1
//     })
//   }

//    function handleFirstNameChange(e) {
//      setPlayer({
//        ...player,
//        firstName: e.target.value,
//      });
//     }
//    function handleLastNameChange(e) {
//      setPlayer({
//        ...player,
//        lastName: e.target.value
//      });
//     }

//   return (
//     <>
//       <label>
//         Score: <b>{player.score}</b>
//         {' '}
//         <button onClick={handlePlusClick}>
//           +1
//         </button>
//       </label>
//       <br/>
//       <label>
//         First name:
//         <input
//           value={player.firstName}
//           onChange={handleFirstNameChange}
//         />
//       </label>
//       <br/>
//       <label>
//         Last name:
//         <input
//           value={player.lastName}
//           onChange={handleLastNameChange}
//         />
//       </label>
//     </>
//   );
// }

// function App(){
//   return(
//     <div className='App'>
//       <Scoreboard />
//     </div>
//   )
// }


// *****ONE OF THE REACT CHALLENEGS (2)*****


// import {Box} from  './samples'
// function Background({position}) {
//   return (
//     <div style={{
//       position: 'absolute',
//       transform: `translate(
//         ${position.x}px,
//         ${position.y}px
//       )`,
//       width: 250,
//       height: 250,
//       backgroundColor: 'rgba(200, 200, 0, 0.2)',
//     }} />
//   );
// };

// const initialPosition = {
//   x: 0,
//   y: 0
// };

// function Canvas() {
//   const [shape, setShape] = useState({
//     color: 'orange',
//     position: initialPosition
//   });

//   function handleMove(dx, dy) {
//     //console.log('DX : ',dx, "DY : ",dy)
//     setShape({
//       ...shape,
//       position:{
//         x: shape.position.x + dx,
//         y: shape.position.y + dy
//       }
//     })
//   }

//   function handleColorChange(e) {
//     setShape({
//       ...shape,
//       color: e.target.value
//     });
//   }

//   return (
//     <>
//       <select
//         value={shape.color}
//         onChange={handleColorChange}
//       >
//         <option value="orange">orange</option>
//         <option value="lightpink">lightpink</option>
//         <option value="aliceblue">aliceblue</option>
//       </select>
//       <Background
//         position={initialPosition}
//       />
//       <Box
//         color={shape.color}
//         position={shape.position}
//         onMove={handleMove}
//       >
//         Drag me!
//       </Box>
//     </>
//   );
// }

// function App(){
//   return(
//     <div className='App'>
//       <Canvas />
//     </div>
//   )
// }



// Passing Data Deeply With Context - REACT => Ln( 1961 , 2041 )


// *****ONE OF THE REACT CHALLENGES (1)*****


// import { places } from './samples';
// const ImageSizeContext = createContext(null)

// function getImageUrl(place) {
//   return (
//     'https://i.imgur.com/' +
//     place.imageId +
//     'l.jpg'
//   );
// }

// function Apps() {
//   const [isLarge, setIsLarge] = useState(false);
//   const imageSize = isLarge ? 150 : 100;
//   return (
//     <>
//       <label>
//         <input
//           type="checkbox"
//           checked={isLarge}
//           onChange={e => {
//             setIsLarge(e.target.checked);
//           }}
//         />
//         {' '}
//         Use large images
//       </label>
//       <hr />
//       <ImageSizeContext.Provider value={imageSize}>
//         <List />
//       </ImageSizeContext.Provider>
//     </>
//   )
// }

// function List() {
//   const listItems = places.map(place =>
//     <li style={{marginBottom: "10px", display: "grid", gridTemplateColumns: "auto 1fr", gap: "20px",alignItems: "center"}}
//         key={place.id}
//     >
//       <Place
//         place={place}
//       />
//     </li>
//   );
//   return <ul style={{paddingInlineStart: "20px", listStyleType: "none", padding: "0 10px"}}>{listItems}</ul>;
// }

// function Place({ place }) {
//   return (
//     <>
//       <PlaceImage
//         place={place}
//       />
//       <p>
//         <b>{place.name}</b>
//         {': ' + place.description}
//       </p>
//     </>
//   );
// }

// function PlaceImage({ place }) {
//   const imageSize = useContext(ImageSizeContext)
//   return (
//     <img
//       src={getImageUrl(place)}
//       alt={place.name}
//       width={imageSize}
//       height={imageSize}
//     />
//   );
// }

// function App(){
//   return(
//     <div className='App'>
//       <Apps />
//     </div>
//   )
// }