// <!-- INTRODUCTION -->

//  <!-- REACT is a js crreated by FB
//  used to create single page applicattion
//  can build websites
 
//  react is a Library not a framework
//  * [library = collection of code , used to write code in much simpler way or to import features into our priject 
//  , project id not dependent on framework]
//  * {Framework = is a complete package of code with its own functiionalities nd libraries ,  has its own rule , dont have much flexibilty and project dependent on framework }
 
//  REact uses REACT VIRTUAL DOM(docu obejcetd model)
//  DOM= representation of html code in a webpage 
//  each time you made a change the dom is updated and rtewritten 

//  # these apporach will make web page more faster thats why react is famous =
//  react first created an exact copy of Dom
//  then figured out wihich ;part is new and only updates that part in vir Dom
//  finally react copies only the new parts of virtual dom to the actual dom , rather than completely rewriting it 
 
 
//  * react's core syntax  =JSX
//  jSx is a syntax ec=xtension to js used by react 
//  used to write html tags inside js 
//  react doesnt have html files , html tags are rendered directly 



//  == RULES ABOUT JSX FTOM JS ==
//  1. can't return more than one html element but we can wrap the elemets inside a parent html tag
//  eg:
//  class test extends react.componeny {
//  render(){
//   return {
//         <div> 
//             <p> hello </p> 
//         </div>
//     };
//  }
//  }

// 2. can use jsx inside for loops,if else cases
// eg:
// render(){
// if(true){
// return <p> hello </p>;
//     }
// else{
// return <p> byee </p>;
// }
// }

// 3. attribues like "class " becomes "className" in jsx 
// eg:
// <div className = "myClass"> </div>

// 4. html tags must always be closed 



// REACT COMPONENT = independent , easy to  read write and debug reusable code which divides the Ui into smaller pieces 
// 1. functional componet = stateless         2. class coponent = statefull



//  FUNCTIONALCOMPPONENT = returns react element 
// function Welcome(props){
//  return <h1> hello</h1> ;
// }
// functio is a valid react component  cos it accepts a sinlge proops obj argument with data and retrur a react element - reactjs.ord
// function example(){
// return (<h1> im a functional component</h1>);
// };
// OR ES6 arrow fxn
// function example() => {
// return (<h1> im a functional component</h1>);
// };

// 
 
 
// CLASS = STATEFULL COMPONENT nore complex than fxnal including constructor
// call acomponent = <ExampleComponent />


































































































