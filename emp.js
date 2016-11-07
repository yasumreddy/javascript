(
  function()
{
   var ctrl={};
    ctrl.table=document.getElementById("empTableId");
    var employees=[
        {empId:1001,empFname:"vijaya",empLname:"yasum"},
         {empId:1002,empFname:"mishita",empLname:"yasum"}];
    function employee()
    {
       for(i=0;i<=employees.length;i++)
           {
               var emp=employees[i];
               console.log(emp);
               
               buildTrTag(emp);
             }
    }
  /* function buildTrTag(emp1)
    {   
        var trEmployee=document.createElement("tr");
       
        var tdForEmpId=document.createElement("td");
        tdForEmpId.textContent=emp1.empId;
        
        var tdForEmpFname=document.createElement("td");
        tdForEmpFname.textContent=emp1.empFname;
        
        var tdForEmpLname=document.createElement("td");
        tdForEmpLname.textContent=emp1.empLname;
      /* ctrl.table.appendChild(tdForEmpId);
        ctrl.table.appendChild(tdForEmpFname);
        ctrl.table.appendChild(tdForEmpLname);
        
        trEmployee.appendChild(tdForEmpId);
        trEmployee.appendChild(tdForEmpFname);
        trEmployee.appendChild(tdForEmpLname);
        console.log(trEmployee);
        ctrl.table.appendChild(trEmployee);
        
    }*/
    
    function buildTrTag(emp1)
    {   
          var tdCreate=document.createElement("td");

        var trEmployee=document.createElement("tr");
       
        var tdForEmpId=tdCreate;
        tdForEmpId.textContent=emp1.empId;
        trEmployee.appendChild(tdForEmpId);

        var tdForEmpFname=tdCreate;
        tdForEmpFname.textContent=emp1.empFname;
        trEmployee.appendChild(tdForEmpFname);
        
        var tdForEmpLname=tdCreate;
        tdForEmpLname.textContent=emp1.empLname;
        trEmployee.appendChild(tdForEmpLname);
      /* ctrl.table.appendChild(tdForEmpId);
        ctrl.table.appendChild(tdForEmpFname);
        ctrl.table.appendChild(tdForEmpLname);*/
        
        //trEmployee.appendChild(tdForEmpId);
        //trEmployee.appendChild(tdForEmpFname);
       // trEmployee.appendChild(tdForEmpLname);
        console.log(trEmployee);
        ctrl.table.appendChild(trEmployee);
        
    }
    
   /* function createTd()
    {
        var tdCreate=document.getElementById("td");
        buildTrTag(tdCreate);
    }*/
    //function init()
   // {
        employee();
    //}
   // init();
})();