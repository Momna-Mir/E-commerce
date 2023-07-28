import React from 'react';
import jsPDF from 'jspdf';
class TextToPDF extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  };
generatePDF=()=>{
  var doc=new jsPDF("p","pt","a4");
    doc.html(document.querySelector("#content"),{
    callback: function(pdf){
  var pageCount= doc.internal.getNumberOfPages()
      pdf.deletePage(pageCount);    
      pdf.save("download.pdf");
  }
 });
};
render(){
  return(
<div class="ap">
        <button onClick={this.generatePDF} >Generate PDF</button>

<div id="content">

       <h1>Ready To Go</h1>
  <hr></hr>
       <h1>Welcome to React</h1>
       <h3>Task: Component convert into PDF</h3>
           <img src="logo192.png" alt="Mountain"></img>
      <h2>What is React?</h2>
           <p>React is the tool of choice for many web developers who build front-end web interfaces.</p>
  <hr></hr>
      <h2>Task Done! converted into PDF :) :)</h2>
</div>  
</div>    
  );
}
}
export default TextToPDF;