import './App.css';
import ReadyToGo from "./components/ReadyToGo";
import PdfGenerator from './components/PdfGenerator';
//import jsPDF from 'jspdf';


// jspdf generator function

// jsPdfGenerator=()=>{
//   //neww documnet in jpdf
//   var doc=new jsPDF('p','pt');

// //add some tet to pdf document
//   doc.text(20,20,'This is default text')

//   // set the font of pdf
//   doc.setFont('courier','normal');

//   //et the font type
//   doc.setFontType('normal')

//   doc.text(20,30,'This is text with courier font')
// // ssave the pdf documnet
//   doc.save("generated.pdf");
// }


function App() {
  return (
    <div className="App">

      <ReadyToGo/>
      <PdfGenerator/>
    </div>
  );
}

export default App;
