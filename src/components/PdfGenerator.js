
import React, {PureComponent} from 'react';
import jsPDF from "jspdf";
export  default class PdfGenerator extends PureComponent{
    constructor(props){
      super(props)
      this.state={
          }
    }
jsPdfGenerator=()=>{
    //neww documnet in jpdf
    var doc=new jsPDF('p','pt');
  
  //add some text to pdf document
    doc.text(20,20,'This is default text')
  
    // set the font of pdf
    doc.setFont('courier','normal');
  
       doc.text(20,30,'This is text with courier font')
  // save the pdf documnet
    doc.save("generated.pdf");
  }
  render(){
    return(
      
      <div>
        <button onClick={this.jsPdfGenerator}>Generate PDF</button>
      </div>
    );
  }
  }

