import styled from 'styled-components';

import "../css/Project.css";
import Icare from '../image/icares.png';
import PS from '../image/ps.png';
import ID from '../image/id.png';
function Project() {
      return (
      <section className="Skills" id="Skills">
      <h1 className="heading"> <span className="span">My</span> Project</h1>
      <div className='container_card'>
         <div className='cards'>
            <div className='imgbx'>
            <img src={ID}/>
            </div>
              <div className='contents'>
                <h3>Assignment Tracking Performance Evaluation And Information System</h3>
                <p>This system aims to create an easy-to-use 
                    tracking system with performance evaluation, a 
                    LAN-based information system where NEDA XI 
                    staff can check and track incoming and outgoing 
                    documents and perform staff evaluations to 
                    determine whether they are being processed or 
                    completed. This study is to develop a LAN-based 
                    information system that will help the NEDA-XI 
                    employees be more productive and able to work 
                    efficiently within the organization.
                  </p>
                  <div className='technology'>
                 <p><span>Technology: </span>Php, Mysql</p>
                 </div>
              </div>
         </div>
         <div className='cards'>
            <div className='imgbx'>
            <img src={PS}/>
            </div>
              <div className='contents'>
              <h3>Design and Development of the Barcode Daily Time Record System for RHU - Nabunturan Health Center Employees</h3>
                <p>The main purpose of the project is to design 
                  and develop a Barcode Daily Time Record 
                  RHU - Nabunturan Health Center Employees.
                   The Study is to provide quality and genuine 
                  service involving the employee's personal 
                  information to create a system that design and develop
                  barcode Daily Time Record. It may solve 
                  related issues according to the data gathered from the establishment.
                 </p>
                
                 <div className='technology'>
                 <p><span>Technology: </span>Php, Mysql</p>
                 </div>
              </div>
         </div>
         <div className='cards'>
            <div className='imgbx'>
            <img src={Icare}/>
            </div>
              <div className='contents'>
              <h3>iCare</h3>
                <p>The main purpose of the project is to design 
                  and develop a Barcode Daily Time Record 
                  RHU - Nabunturan Health Center Employees.
                   The Study is to provide quality and genuine 
                  service involving the employee's personal 
                  information to create a system that design and develop
                  barcode Daily Time Record. It may solve 
                  related issues according to the data gathered from the establishment.
                 </p>
                
                 <div className='technology'>
                 <p><span>Technology: </span>Figma</p>
                 <a href='https://www.figma.com/file/HdnsVxaEmHaVkhEE3MZBQz/Icare?type=design&node-id=0-1&mode=design&t=TfUDI7fUVBEO0R3x-0'>View</a>
                 </div>
              </div>
         </div>
      </div>
        </section>
          );
    }
    
    export default Project;