import  React, {useRef, useCallback } from "react";
import { Bar} from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import jsPDF from 'jspdf';

const data={
    labels: ["Red", "Pink", "Yellow", "Grey", "Darf Grey"],
    datasets:[
        {
            label:"My Dataset",
            data:[300, 50, 100, 40, 10],
            backgroundColor:["#FF6384","#FFC0CB", "#FFCE56", "#ccc","#ccc"],
            hoverOffset:4,
        },
    ],
};

Chart.register(CategoryScale);
const BarChartToPDF=()=>{
    let ref= useRef(null);
    const downloadImage=useCallback(()=>{
        //download image code
       // const link=document.createElement("a");
       // link.download="chart-blue.pdf";
        //link.href=ref.current.toBase64Image();
        //link.click();

        var doc=new jsPDF("p","pt","a4");
    doc.html(document.querySelector("#content"),{
    callback: function(pdf){
  var pageCount= doc.internal.getNumberOfPages()
      pdf.deletePage(pageCount);    
      pdf.save("download.pdf");
    }});
      
    }, []);
    return(
        <div>
            <button type="button" onClick={downloadImage}>Export PDF</button>
              <div id="content">
         <div style={{height:"690px", width:"580px", margin:"auto"}}>
            <Bar ref={ref} data={data}/>
        </div>
        </div>  
        </div>

    )
}

export default BarChartToPDF;