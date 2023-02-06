import React from "react";
import { Link } from "react";
const Urlvalue = () => {
  let obj = {
    param1: "dsfsf",
    param2: "somethingelse",
    param3: "another",
    ik: {
      id: "1",
      name: "ikram",
    },
  };
  

  const getData = () => {
    const str=[];
    for(let [key,value] of Object.entries(obj)){
      console.log("key:",key,"Value:",value)
      const instance =`${key}=${typeof value==='object'?value.id:value}`
      if(value){
        str.push(instance)
      }

console.log(str.join('&'))
        }
    // console.log(obj.ik.id);
    // const filtered = Object.keys(obj)

    //   .filter((key) => obj[key] !== "")
    //   .reduce((objs, key) => {
    //     objs[key] = obj[key];
    //     return objs;
    //   }, {});
    // console.log("new", filtered);
    // const url = new URL("http://localhost:3001/");
    // url.search = new URLSearchParams(filtered);
    // console.log(url.search);
//     let getPairs = (obj, keys = []) =>
//   Object.entries(obj).reduce((pairs, [key, value]) => {
//     console.log("pairs:",pairs);
//     if (typeof value === 'object')
//       pairs.push(...getPairs(value, [...keys, key]));
//     else
//       pairs.push([[...keys, key], value]);
//     return pairs;
//   }, []);

// let x = getPairs(obj)
//   .map(([[key0, ...keysRest], value]) =>
//     `${key0}${keysRest.map(a => `[${a}]`).join('')}=${value}`)
//   .join('&');
// console.log(x);
  };
  return (
    <div>
      <button onClick={getData}>Click</button>
    </div>
  );
};

export default Urlvalue;
