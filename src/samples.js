import { useState, useContext, createContext, useReducer } from 'react';

export const sculptureList = [{
    name: 'Homenaje a la Neurocirugía',
    artist: 'Marta Colvin Andrade',
    description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
    url: 'https://i.imgur.com/Mx7dA2Y.jpg',
    alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'},
    {
    name: 'Floralis Genérica',
    artist: 'Eduardo Catalano',
    description: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
    url: 'https://i.imgur.com/ZF6s192m.jpg',
    alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'},
    {
    name: 'Eternal Presence',
    artist: 'John Woodrow Wilson',
    description: 'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
    url: 'https://i.imgur.com/aTtVpES.jpg',
    alt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.'
    }]


    export const initialTravelPlan = {
        0: {
          id: 0,
          title: '(Root)',
          childIds: [1, 42, 46],
        },
        1: {
          id: 1,
          title: 'Earth',
          childIds: [2, 10, 19, 26, 34]
        },
        2: {
          id: 2,
          title: 'Africa',
          childIds: [3, 4, 5, 6 , 7, 8, 9]
        }, 
        3: {
          id: 3,
          title: 'Botswana',
          childIds: []
        },
        4: {
          id: 4,
          title: 'Egypt',
          childIds: []
        },
        5: {
          id: 5,
          title: 'Kenya',
          childIds: []
        },
        6: {
          id: 6,
          title: 'Madagascar',
          childIds: []
        }, 
        7: {
          id: 7,
          title: 'Morocco',
          childIds: []
        },
        8: {
          id: 8,
          title: 'Nigeria',
          childIds: []
        },
        9: {
          id: 9,
          title: 'South Africa',
          childIds: []
        },
        10: {
          id: 10,
          title: 'Americas',
          childIds: [11, 12, 13, 14, 15, 16, 17, 18],   
        },
        11: {
          id: 11,
          title: 'Argentina',
          childIds: []
        },
        12: {
          id: 12,
          title: 'Brazil',
          childIds: []
        },
        13: {
          id: 13,
          title: 'Barbados',
          childIds: []
        }, 
        14: {
          id: 14,
          title: 'Canada',
          childIds: []
        },
        15: {
          id: 15,
          title: 'Jamaica',
          childIds: []
        },
        16: {
          id: 16,
          title: 'Mexico',
          childIds: []
        },
        17: {
          id: 17,
          title: 'Trinidad and Tobago',
          childIds: []
        },
        18: {
          id: 18,
          title: 'Venezuela',
          childIds: []
        },
        19: {
          id: 19,
          title: 'Asia',
          childIds: [20, 21, 22, 23, 24, 25],   
        },
        20: {
          id: 20,
          title: 'China',
          childIds: []
        },
        21: {
          id: 21,
          title: 'India',
          childIds: []
        },
        22: {
          id: 22,
          title: 'Singapore',
          childIds: []
        },
        23: {
          id: 23,
          title: 'South Korea',
          childIds: []
        },
        24: {
          id: 24,
          title: 'Thailand',
          childIds: []
        },
        25: {
          id: 25,
          title: 'Vietnam',
          childIds: []
        },
        26: {
          id: 26,
          title: 'Europe',
          childIds: [27, 28, 29, 30, 31, 32, 33],   
        },
        27: {
          id: 27,
          title: 'Croatia',
          childIds: []
        },
        28: {
          id: 28,
          title: 'France',
          childIds: []
        },
        29: {
          id: 29,
          title: 'Germany',
          childIds: []
        },
        30: {
          id: 30,
          title: 'Italy',
          childIds: []
        },
        31: {
          id: 31,
          title: 'Portugal',
          childIds: []
        },
        32: {
          id: 32,
          title: 'Spain',
          childIds: []
        },
        33: {
          id: 33,
          title: 'Turkey',
          childIds: []
        },
        34: {
          id: 34,
          title: 'Oceania',
          childIds: [35, 36, 37, 38, 39, 40, 41],   
        },
        35: {
          id: 35,
          title: 'Australia',
          childIds: []
        },
        36: {
          id: 36,
          title: 'Bora Bora (French Polynesia)',
          childIds: []
        },
        37: {
          id: 37,
          title: 'Easter Island (Chile)',
          childIds: []
        },
        38: {
          id: 38,
          title: 'Fiji',
          childIds: []
        },
        39: {
          id: 39,
          title: 'Hawaii (the USA)',
          childIds: []
        },
        40: {
          id: 40,
          title: 'New Zealand',
          childIds: []
        },
        41: {
          id: 41,
          title: 'Vanuatu',
          childIds: []
        },
        42: {
          id: 42,
          title: 'Moon',
          childIds: [43, 44, 45]
        },
        43: {
          id: 43,
          title: 'Rheita',
          childIds: []
        },
        44: {
          id: 44,
          title: 'Piccolomini',
          childIds: []
        },
        45: {
          id: 45,
          title: 'Tycho',
          childIds: []
        },
        46: {
          id: 46,
          title: 'Mars',
          childIds: [47, 48]
        },
        47: {
          id: 47,
          title: 'Corn Town',
          childIds: []
        },
        48: {
          id: 48,
          title: 'Green Hill',
          childIds: []
        }
      };


      export default function Letter({
        letter,
        isHighlighted,
        onHover,
        onToggleStar,
      }) {
        return (
          <li
            style={{borderRadius: "5px", backgroundColor: isHighlighted? "#d2eaff" : ""}}
            //className={
            //  isHighlighted ? 'highlighted' : ''
            //}
            onFocus={() => {
              onHover(letter.id);        
            }}
            onPointerMove={() => {
              onHover(letter.id);
            }}
          >
            <button style={{margin: "5px"}} onClick={() => {
              onToggleStar(letter.id);
            }}>
              {letter.isStarred ? 'Unstar' : 'Star'}
            </button>
            {letter.subject}
          </li>
        )
      }
      
      export function filterItems(items, query) {
        query = query.toLowerCase();
        return items.filter(item =>
          item.name.split(' ').some(word =>
            word.toLowerCase().startsWith(query)
          )
        );
      }
      
      export const foods = [{
        id: 0,
        name: 'Sushi',
        description: 'Sushi is a traditional Japanese dish of prepared vinegared rice'
      }, {
        id: 1,
        name: 'Dal',
        description: 'The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added'
      }, {
        id: 2,
        name: 'Pierogi',
        description: 'Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water'
      }, {
        id: 3,
        name: 'Shish kebab',
        description: 'Shish kebab is a popular meal of skewered and grilled cubes of meat.'
      }, {
        id: 4,
        name: 'Dim sum',
        description: 'Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch'
      }];



export function TaskList() {
  const tasks = useTasks();
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={e => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value
              }
            });
          }} />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}{' '}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          dispatch({
            type: 'changed',
            task: {
              ...task,
              done: e.target.checked
            }
          });
        }}
      />
      {' '}
      {taskContent} {' '}
      <button onClick={() => {
        dispatch({
          type: 'deleted',
          id: task.id
        });
      }}>
        Delete
      </button>
    </label>
  );
}


const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

export function TasksProvider({ children, onAction }) {
  const [tasks, dispatch] = useReducer( tasksReducer, initialTasks );
  //const [tasks, dispatch] = useReducer ((tasks, action) =>{    //=> For Logging
  //  if(onAction){
  //    onAction(action)
  //  }
  //  return tasksReducer(tasks,action)
  //},initialTasks)

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialTasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];


export function Box({
  children,
  color,
  position,
  onMove
}) {
  const [lastCoordinates, setLastCoordinates] = useState(null);

  function handlePointerDown(e) {
    e.target.setPointerCapture(e.pointerId);
    setLastCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  }

  function handlePointerMove(e) {
    //console.log(lastCoordinates)
    if (lastCoordinates) {
      setLastCoordinates({
        x: e.clientX,
        y: e.clientY,
      });
      const dx = e.clientX - lastCoordinates.x;
      const dy = e.clientY - lastCoordinates.y;
      onMove(dx, dy);
    }
  }

  function handlePointerUp(e) {
    setLastCoordinates(null);
  }

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        width: 100,
        height: 100,
        cursor: 'grab',
        backgroundColor: color,
        position: 'absolute',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: `translate(
          ${position.x}px,
          ${position.y}px
        )`,
      }}
    >{children}</div>
  );
}


export const places = [{
  id: 0,
  name: 'Bo-Kaap in Cape Town, South Africa',
  description: 'The tradition of choosing bright colors for houses began in the late 20th century.',
  imageId: 'K9HVAGH'
}, {
  id: 1, 
  name: 'Rainbow Village in Taichung, Taiwan',
  description: 'To save the houses from demolition, Huang Yung-Fu, a local resident, painted all 1,200 of them in 1924.',
  imageId: '9EAYZrt'
}, {
  id: 2, 
  name: 'Macromural de Pachuca, Mexico',
  description: 'One of the largest murals in the world covering homes in a hillside neighborhood.',
  imageId: 'DgXHVwu'
}, {
  id: 3, 
  name: 'Selarón Staircase in Rio de Janeiro, Brazil',
  description: 'This landmark was created by Jorge Selarón, a Chilean-born artist, as a "tribute to the Brazilian people."',
  imageId: 'aeO3rpI'
}, {
  id: 4, 
  name: 'Burano, Italy',
  description: 'The houses are painted following a specific color system dating back to 16th century.',
  imageId: 'kxsph5C'
}, {
  id: 5, 
  name: 'Chefchaouen, Marocco',
  description: 'There are a few theories on why the houses are painted blue, including that the color repels mosquitos or that it symbolizes sky and heaven.',
  imageId: 'rTqKo46'
}, {
  id: 6,
  name: 'Gamcheon Culture Village in Busan, South Korea',
  description: 'In 2009, the village was converted into a cultural hub by painting the houses and featuring exhibitions and art installations.',
  imageId: 'ZfQOOzf'
}];
