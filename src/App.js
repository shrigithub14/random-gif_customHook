import Random from "./components/Random";
import Tag from "./components/Tag";


function App() {
  return ( 
  
    <div  className='flex  w-full  flex-col background relative overflow-hidden px-10 py-2'>
       <h1 className=  '  text-black bg-white rounded-md w-11/12 text-center mt-[40px] ml-[25px] mr-[25px] text-3xl font-bold'> RANDOM GIFS</h1>
          <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
           <Random/>
           <Tag/>
         </div>
    </div>
   
    
  );
}

export default App;
