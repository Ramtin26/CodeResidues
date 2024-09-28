import './App.css'

import { useState, useEffect } from 'react'


function App(){
  return(
    <div className='App'>
      <h1>Hi!</h1>
      <ul >
        <li style={{listStyle: "disc"}}><a href='' >Home1</a></li>
        <li><a href='' >Home2</a></li>
        <li><a href='' >Home3</a></li>
        <li><a href='' >Home4</a></li>
      </ul>
    </div>
  )
}


export default App


//sectionFarayand from sections in orgpm  =>  CORRECT
//A4uknSc9sxcYSJw

//------------------------------------------------------------------------------


// {
//     "id": "lznv6igejtehbe",
//     "items": [
//         {
//             "id": "lztorb27ytzbgi",
//             "form": [
//                 [
//                     {
//                         "id": "lznusum6ij2iiy",
//                         "dir": "rtl",
//                         "name": "name",
//                         "size": "s12 m12 l12",
//                         "type": "input-string",
//                         "error": "نام خود را وارد کنید",
//                         "label": "نام",
//                         "style": {
//                             "max-width": "125px",
//                             "min-width": "100px"
//                         },
//                         "caption": "نام",
//                         "required": true
//                     }
//                 ],
//                 [
//                     {
//                         "id": "lznuwxyequh1as",
//                         "dir": "rtl",
//                         "name": "lname",
//                         "size": "s12 m12 l12",
//                         "type": "input-string",
//                         "label": "نام خانوادگی",
//                         "style": {
//                             "max-width": "150px",
//                             "min-width": "120px"
//                         },
//                         "caption": "نام خانوادگی",
//                         "required": true
//                     }
//                 ],
//                 [
//                     {
//                         "id": "lznv0qf2yf0vyt",
//                         "dir": "rtl",
//                         "name": "age",
//                         "size": "s12 m12 l12",
//                         "type": "input-number",
//                         "label": "سن",
//                         "style": {
//                             "max-width": "75px",
//                             "min-width": "50px"
//                         },
//                         "caption": "سن",
//                         "required": true
//                     }
//                 ],
//                 [
//                     {
//                         "id": "lznv2tcl41jib5",
//                         "dir": "rtl",
//                         "name": "sex",
//                         "size": "s12 m12 l12",
//                         "type": "input-select",
//                         "label": "جنسیت",
//                         "style": {
//                             "max-width": "100px",
//                             "min-width": "75px"
//                         },
//                         "caption": "جنسیت",
//                         "options": [
//                             {
//                                 "key": "مرد",
//                                 "value": "مرد"
//                             },
//                             {
//                                 "key": "زن",
//                                 "value": "زن"
//                             },
//                             {
//                                 "key": "غیره",
//                                 "value": "غیره"
//                             }
//                         ],
//                         "maxWidth": "",
//                         "minWidth": "",
//                         "required": true
//                     }
//                 ],
//                 [
//                     {
//                         "id": "lztom5yv7et2xw",
//                         "name": "organShahri",
//                         "size": "s12 m12 l12",
//                         "type": "Input/Select/IranMedu4",
//                         "style": {
//                             "max-width": "190px",
//                             "min-width": "175px"
//                         }
//                     }
//                 ],
//                 [
//                     {
//                         "id": "lztom6qnpen1uu",
//                         "name": "organDate",
//                         "size": "s12 m12 l12",
//                         "type": "input-day-picker",
//                         "label": "تاریخ",
//                         "style": {
//                             "max-width": "190px",
//                             "min-width": "175px"
//                         }
//                     }
//                 ],
//                 [
//                     {
//                         "id": "lznv4knhhc1mp4",
//                         "dir": "rtl",
//                         "max": "9",
//                         "min": "0",
//                         "name": "natcode",
//                         "size": "s12 m12 l12",
//                         "type": "input-number",
//                         "label": "کد ملی",
//                         "style": {
//                             "max-width": "125px",
//                             "min-width": "100px"
//                         },
//                         "caption": "کد ملی",
//                         "required": false
//                     }
//                 ],
//                 [
//                     {
//                         "id": "lznw4uwmu6u9bt",
//                         "type": "Apps/ChosenTeacher/sum Table",
//                         "content": "..."
//                     }
//                 ],
//                 [
//                     {
//                         "id": "lztom5yv7et2xw",
//                         "type": "desc-TEXT",
//                         "content": "..."
//                     }
//                 ],
//                 [
//                     {
//                         "id": "lztom6qnpen1uu",
//                         "type": "desc-TEXT",
//                         "content": "..."
//                     }
//                 ]
//             ],
//             "itemIndex": 0
//         }
//     ],
//     "level": 1,
//     "stageIndex": 0
// }



// const Test = ({ appFeatures, pageFeatures }) => {
//   const users = DC.app.getValue("users") ? DC.app.getValue("users") : [];
//   let [data, reload] = useDataProvider({
//       provider: 'ds/hamkari-medu/test/adnan',
//       params: {
//           basePath: 'IR2O2'
//       },
//       onSuccess: (res) => {
//           DC.app.setValue('users', res?.["data-provider"]?.courses || [])
//           $data.dataProvider = {
//               ...$data.dataProvider || {}
//           }
//       }
//   })
//   console.log(DC.app.getValue('users'))
//   const header = [
//       {
//           title: "نام",
//           value: (users) => users.fname,
//       },
//       {
//           title: "نام خانوادگی",
//           value: (users) => users.lname,
//       },
//       {
//           title: "شماره شناسنامه",
//           value: (users) => users.natcode,
//       },
//   ];
//   return (
//       <>
//           <GTable header={header} items={users} />
//       </>
//   );
// }


//09382234656
//norman

//(تقریبی)ورود و خروج از 13 مرداد تا 28 مرداد
// از بین حدود ساعت (7 تا 7:20) تا (16:15 تا 16:30)

