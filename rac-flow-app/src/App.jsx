import AboutUs from "./AboutUs";
import Apples from "./Apples";
//import AnotherGreeting from "./AnotherGreeting";
import Contactus from "./ContactUs";
import CourseGoalone from "./CourseGoalone";
import CourseGoaltwo from "./CourseGoaltwo";
//import DirectProps from "./DirectProps";
//import DefaultProps from "./DirectProps";
import Directname from "./Directname";
import Discount from "./Discount";
import Employee from "./Employee";
import Greeting from "./Greeting";
import GreetingProps from "./GreetingProps";

import Increment from "./Increment";
import Score from "./score";

function App()
{
  return(

    <>
      {/* <h1>This is App.jsx file.....n</h1> */}
       <AboutUs /> 
      <Contactus /> 
        <Increment/> 
       <Score />
       <Greeting  name='venkata'/>
        <Greeting name='naga' />
       <Greeting name='vamsi' /> 
       <GreetingProps name ='ratan sir'/>
       <Directname/>
       <Employee employeeobj='employee' />
       <CourseGoalone />
       <CourseGoaltwo/>
       <Apples/>
       <MovieGrid movieobj='movies'/>
       <Discount/>
      

    </>
  )

}
export default App; 