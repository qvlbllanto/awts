import React, {useState} from "react";
import { Link, useHistory} from "react-router-dom";
import logo from './logo.png';
function openAlert(v){
  if(v){
    document.getElementById('id01').style.display='block';
  }else{
    document.getElementById('id01').style.display='none';
  }
}

function Nav(props) {
  const [login, setl] = useState(localStorage.getItem('login'));
  const [btn, setBtn] = useState(true);

  const history = useHistory();

  function setLogin(v){
      localStorage.setItem('login', v);
      setl(v);
  }

 

  function check(e){
    if(e.target.checked){
      setBtn(false);
    }else{
      setBtn(true);
    }
  }

  function goToSignUp(){
    openAlert(false);
    props.setsign(true);
    history.push("/SignUp");
  }

  return (
    <div>
   <nav class = "topnav">
     
      <img src={logo} height= "100%" width="30%"  className="logo" alt="logo" float="left"/>
    
       {
         !props.sign?
         <>
          <Link to = "/">Home</Link>
          {
            localStorage.getItem('login')!==null
              ?
                localStorage.getItem('login')==='true'
                ?
                  <Link to = "/Login" onClick={()=>{setLogin(false); props.setN('Login')}}>Logout ({props.name})</Link>
                :
                  <Link to = "/Login">{props.name}</Link>
              :
            <Link to = "/Login" >{props.name}</Link>
          }
          <a href="#" onClick={()=>{openAlert(true)}}>Sign Up</a>
          </>
          :
        <Link to = "/Chat">Chat</Link>
      }
    </nav>
    <div class="w3-container">
        <div id="id01" class="w3-modal">
          <div class="w3-modal-content">
            <div class="w3-container" style={{backgroundColor:'#3b7a57'}}>
              <br/>
              <p style={{color:'white'}}><h1>Rules and Condition of Lao Foundation</h1></p>
            </div>
            <br/>
            <div class="w3-container">
              <center>
                <br/>
                <div class = "textc"><h6>PROCESS OF SCHOLAR SELECTION</h6></div>
                <br/>
                <p>
                1. The Lao Foundation will send out guidelines for the 
                application of scholarships. Forms will be given for 
                applicants to fill out, as well as, a checklist of 
                necessary documents that are needed for their 
                application. </p>
                <p>2. Upon submission, applications will be accepted 
                and screened for eligibility and completeness of 
                documents. </p>
                <p>3. If documents are eligible and complete, both 
                student and parent will undergo an initial interview 
                conducted by members of the Lao Foundation. 
                After which, they will be scheduled for a more 
                formal interview. </p>
                <p>4. After the interview, a home visit will also be 
                conducted to provide a more in-depth perspective 
                of the living situation/conditions of the applicants.</p>
                <p>5. Upon conclusion of the screening/data gathering 
                processes, applicants will then be ranked in terms 
                of who is in most need. The 
                shortlisted/recommended beneficiaries will then 
                be presented to the board for approval. </p>
                <p>6. Scholarship grants will be awarded to the selected 
                applicants at the start of the school year. </p> 
                <br/>
                <br/>
                <div class = "textc"><p>GENERAL QUALIFICATIONS FOR APPLICANT:</p></div>
                <p> • Must be in financial need </p>
                <p> • Must not be a recipient of other scholarship or 
                  educational assistance programs, whether full or in 
                  partial </p>
                <p> • Must be an incoming/current SENIOR HIGH 
                  SCHOOL OR COLLEGE/TECHVOC STUDENT </p>
                <p> • For college students, any 4 or 5-year course </p>
                <p>  • Must be a REGULAR STUDENT </p>
                <p>  • For new applicants: Must have no grade below 75 
                  in any subject in any grading period and A 
                  GENERAL WEIGHTED AVERAGE OF 80% OR 
                  BETTER </p>
                <p>  • For re-application of current scholars: no grade 
                  below 80 in any grading period. </p>
                <p>  o If scholar is placed on probation: scholar 
                  will be allowed to re-apply if scholar has no 
                  grade below 80 in the remainder of the 
                  academic year. </p>
                <p>  • For re-application of students with previous 
                  scholarship with LFI: scholar must have no grade 
                  below 80 in any subject in any grading period in 
                  one full academic year. </p>
                  <div class = 'par'><b><p>Note:</p>
                  <p>• Grading period for scholars will be 
                  SEMESTRAL/TRIMESTRAL </p>
                   <p> • Grades for MAPEH will be assessed individually</p></b></div>
                  <br/>
                  <br/>
                  <div class = "textc"><h6>GUIDELINES</h6></div>
                  <br/>
                  <p>1. One (1) child per family – until child has graduated
                        a. If a child was removed from scholarship, the 
                        family will only be allowed to apply after 
                        one year </p>
                  <p>2. Re-application for renewal of scholarship for 
                    students in Grade 12 and are about to enter college</p>
                  <p>3. Must submit grades every grading period
                      a. Senior High School/College/TechVoc: 
                      Semestral 
                      (For those that are trimestral, the scholar is 
                      required to submit their grades every trimester.)
                      </p>
                  <p> No failing grades during the course of the 
                    scholarship</p>
                  <p>5. Must attend monthly values formation sessions</p>
                  <p>6. A minimum of four (4) hours community service per 
                    year</p>
                  <p>7. For the parents, required attendance to Parent’s 
                      Meetings, Workshops and Seminars
                      </p>
                      <br/>
                      <br/>
                  <div class = "textc"><h6>REQUIREMENTS FOR BAGUMBAYAN, CANLUBANG AND TANAUAN APPLICANTS</h6></div>
                  <br/>
                  <p>1. Fully accomplished application form with 2x2 ID picture</p>
                  <p>2. Certified true photocopy of COMPLETE grades 
                  (Last school attended/previous grading period)</p>
                  <p> 3. Photocopy and Original copy of LATEST 
                  University/School Registration (if enrolled)</p>
                  <p> 4. For incoming Grade 11, a photocopy of the 
                  National Career Assessment Examination (once 
                  available)</p>
                  <p>5. Photocopy and Original copy of LATEST Electric 
                  and Water Bills or Telephone Bill</p>
                  <p>6. Photocopy and Original copy of PSA Birth 
                  Certificate</p>
                  <p> 7. Original Copy of Barangay Certificate/Certificate 
                  of Indigency (if applicable)</p>
                  <p> 8. Autobiography (minimum of two pages, 
                  Handwritten or Typewritten, include personal life 
                  experiences, turning points, crises, beliefs, 
                  ideology, future plans, talents, assets, strengths 
                  and weaknesses)</p>
                  <p> 9. Photocopy and Original copy of Pantawid ID (IF 
                  DSWD Pantawid Beneficiary)</p>
                  <p>10. Sketch of Home Address: Start from a major 
                  landmark or street going to your home address; 
                  indicate Barangay No. and street names on the 
                  map for easy identification. Identify directions on 
                  how to commute to your house. (Print out of 
                  Google Forms will not be allowed.)</p>
                  <br/>
                  <br/>
                <input type="checkbox" onClick={(e)=>check(e)}/><b> I have read and accept the rules and conditions of Lao Foundation Inc. </b>
              </center>
              <div style={{textAlign:'right'}}>
                <input type="button" value="Cancel" onClick={()=>openAlert(false)}/>&nbsp;&nbsp;
                <input type="button" disabled={btn} value="Accept" onClick={()=>goToSignUp()}/>
              </div>
              <br/>
            </div>
          </div>
            </div>
    </div>
       
    </div>
  );
}

export {openAlert, Nav as default};
