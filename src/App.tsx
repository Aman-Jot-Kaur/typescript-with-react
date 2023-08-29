
import './App.css';
import { Mutable } from './components/ref/MutableRef';
// import { Box } from './components/context/Box';
// import { ThemeContextProvider } from './components/context/ThemeContext';
// import Greet from './components/Greet';
// import Person from './components/Person';
// import PersonList from './components/PersonList';
// import Status from './components/Status';
// import Parent from './components/Parent';
// import Childrenprop from './components/Childrenprop';
// import Button from './components/Button';
// import Input from './components/Input';
// import Logged from './components/state/Usestatecomponent.tsx';
// import Stylecontainer from './components/Stylecontainer';
function App() {
  // const personName={
  //   first:"aman",last:"jot"
  // }
  // const nameList=[
  //   {
  //     first:"aman",last:"jot"
  //   },
  //   {
  //     first:"an",last:"jot"
  //   },
  //   {
  //     first:"amrita",last:"n"
  //   }
  // ]
  return (
    <div className="App">
      <Mutable/>
      {/* <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider> */}
   {/* <Logged/> */}
      {/* <Greet name="aman" message="message"/>
      <Person name={personName}/>
      <PersonList name={nameList}/>
      <Status status="loading"/>
      <Parent>
      <Childrenprop>child prop</Childrenprop>
      </Parent>
      <Button handleClick={
        (event,id)=>{
          console.log("clicked ",event,id)
        }}/>
        <Input value='' handleChange={(event)=> console.log(event)} />
    <Stylecontainer styles={{border:"1px solid black"}}/> */}
    </div>
  );
}

export default App;
