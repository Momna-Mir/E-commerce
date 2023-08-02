import  React, {useRef, useCallback } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
const data={
    labels: ["Red", "Green", "Yellow", "Grey", "Darf Grey"],
    datasets:[
        {
            label:"My Dataset",
            data:[300, 50, 100, 40, 10],
            backgroundColor:["#FF6384","#36AEB", "#FFCE56", "#ccc","#ccc"],
            hoverOffset:4,
        },
    ],
};

Chart.register(CategoryScale);
const DoughnutChartToPDF=()=>{
    let inputRef= useRef(null);
    const printDocument = () => {
        html2canvas(inputRef.current).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF();
          pdf.addImage(imgData, "JPEG", 0, 0);
          let imgWidth = 208;
          let imgHeight = (canvas.height * imgWidth) / canvas.width;
          const ImgData = canvas.toDataURL("chart-blue/png");
          const Pdf = new jsPDF("p", "mm", "a4");
          Pdf.addImage(ImgData, "PNG", 0, 0, imgWidth, imgHeight);
          Pdf.save("download.pdf");
    });};
  
    return(
      <div >
            <button onClick={printDocument}>Export PDF</button>
        <div id="divToPrint" ref={inputRef}>
          <div style={{ height: "690px", width: "690px", margin: "auto" }}>
            <Doughnut data={data} />
          </div>
              </div> 
                 </div>

    )}    
        

export default DoughnutChartToPDF;