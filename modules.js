// when we put the name of the object into '{}' , it is called 'named export'

//Default object -> import ... from '';
//Named object -> import {...} from '';
import  Teacher , {promote} from "./teacher.js";


//remember few things
//1- you need to add '.js' to the file name ,when you are importing it
//2- you need to add type="module" in your html file. 
// if you don't do these two, you have an error in js engine

const teacher = new Teacher('Gavin' ,'BS');
teacher.walk("Teacher"); 