import React, { Fragment , useState, useEffect} from "react";
import classes from "./Home.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import DataTable from 'datatables.net-dt';

// import DataTables from "datatables.net";
// import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import "datatables.net-bs5";
import DataTable from "datatables.net-bs5";


// import $ from "jquery";
// const DataTable = DataTables(window, $);
// import 'datatables.net-responsive-dt';

const Table = () => {
    const [ allUsers, setAllUsers ] = useState([])
    const [ imageUrl, setImageUrl] = useState('')
    const [ modalVisible, setModalVisble] = useState(false)

    useEffect(() => {
   
    }, [])




    
    

    async function loadData() {
        let response
        let data
        try{
          response = await fetch(`https://apartment-7e5fd-default-rtdb.firebaseio.com/submissions.json`,{
            method: "GET",     
            headers: {
              'Content-Type': 'application/json',
              },
          })
          data = await response.json()
          const apartment_details = []
          for (const key in data){  
            apartment_details.push({
               email:  data[key].email,
               firstname: data[key].firstname,
               lastname: data[key].lastname,
               phone: data[key].phone,
            //    proof: data[key].proof,
            // proof: `<a onclick={openImage} target='_blank' href= '${data[key].proof}'>Open Image</a>`
              //  proof: `<p class="openimage" data-link='${data[key].proof}' href= '${data[key].proof}' >Open Image</p>`,
                      proof: `<p class="openimage"  link=${data[key].proof} data-toggle="modal" data-target="#myModal" >Open Image</p>`,

              //  proof: `<p class="openimage" onClick={()=>{setwithCard(true)}}  data-toggle="modal" data-target="#myModal"  href= '${data[key].proof}' >Open Image</p>`,
               date: data[key].date
            })
        }

   

    // setDetails(data)
          setAllUsers(apartment_details)
    
          let table = $("#datah").DataTable({
            responsive: true,
            fixedHeader: true,
            rowReorder: {
              selector: 'td:nth-child(2)'
          },
              data: apartment_details,
              columns: [
                  { "data": "date" },
                  { "data": "firstname" },
                  { "data": "lastname" },
                  { "data": "email" },
                  { "data": "phone" },
                  { "data": 'proof' },
              ],
  
            });

          
            $('#datah tbody').on('click', 'tr', function () {
              var data = table.row( this ).data();
              var element = data.proof
              var linkValue = /link=(\S+)/.exec(element);
              var linkValue1 = linkValue[1]
              const regex = />Open$/; 
              const result = linkValue1.replace(regex, ''); 
              setImageUrl(result)
              // console.log(result);
          } );
       
        } catch (error){
          return
        }
    
      }

    
      useEffect(() => {
        loadData()
        // loadTable()
    }, [])


    return (
        <>
          <div>
          <div class="modal fade" id="myModal" role="dialog"  data-backdrop="static">
          <div class="modal-dialog modal-lg">
             <div class="modal-content">
                <div class="modal-header">
                   <button type="button" class="close" data-dismiss="modal"></button>
                </div>
    
                <div class="modal-body">
                      <img class="img-fluid" src={imageUrl} alt="" />
                    </div>
    
                <div class="modal-footer">
                   <button type="button"  class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
             </div>
          </div>
       </div> 
       <FontAwesomeIcon icon="fa-solid fa-left-long" />
       <table id="datah" className={classes.table} style={{width:"100%"}} >
            <thead>
                <tr>
                  <th>Date Recorded</th>
                  <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Proof</th>     
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th className={classes.tabletd}>Date Recorded</th>
                    <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>            
                      <th>Proof</th>
                </tr>
            </tfoot>
          </table>
          </div>

        
        </>
       
    )
}

export default Table