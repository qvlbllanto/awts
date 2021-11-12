import React, { useState } from 'react';
import axios from "axios";
function SignUp(props) {
  const [wait, setWait] = useState(false);
  const [val, setVal] = useState({
    lastname: '',
    firstname: '',
    address: '',
    age: '',
    birthday: '',
    email: '',
    program: '',
    appform: null,
    grade: null,
    regform: null,
    ncaeform: null,
    ebill: null,
    wbill:null,
    birthcert:null,
    brgycert:null,
    abiog:null,
    pantawid:null,
    sketchhome:null
  })

  const sub = () =>{
    setWait(true);
    if(val.firstname!=="" 
    && val.lastname!=="" 
    && val.age!==''
    && val.birthday!==''
    && val.email!== ''
    && val.appform!==null
    && val.grade!== null
    && val.regform!== null
    && val.ncaeform!==null
    && val.ebill!==null
    && val.wbill!==null
    && val.birthcert!==null
    && val.brgycert!==null
    && val.abiog!==null
    && val.pantawid!==null
    && val.sketchhome!==null){
      axios({
        method: 'post',
        url: 'http://localhost/backend/scholar/',
        data:val
      }).then((d)=>{
        setWait(false);
        console.log(d);
      })
    }else{
      setWait(false);
      alert("Please fill up");
    }
  }
  
  React.useEffect(()=>{
    props.p('SignUp');
    setVal(val);
  })

  const filechange = (e, x) => {
    if (e.target.files[0]){
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = function () {
        val[x] = {
          name: e.target.files[0].name,
          data:  reader.result.substr(reader.result.indexOf(',') + 1)};
      };

    }else{
      val[x]=null;
    }
  };
  return (
    <div class = "body">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-9">
              <h1 class="text-white mb-4" style={{textAlign: 'center'}}>Apply for a Scholarship</h1>
              <div class="card" style={{borderRadius: "15px"}}>
                <div class="card-body">
                  <div class="row align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">First Name</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input type="text" class="form-control form-control-lg" onChange={(e)=>{val.lastname=e.target.value}}/>
                    </div>
                  </div>
                  <hr class="mx-n3"/>
                  <div class="row align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">Last Name</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input type="text" class="form-control form-control-lg" onChange={(e)=>{val.firstname=e.target.value}}/>
                    </div>
                  </div>
                  <hr class="mx-n3"/>
                  <div class="row align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input type="email" class="form-control form-control-lg" onChange={(e)=>{val.email=e.target.value}}/>
                    </div>
                  </div>
                  <hr class="mx-n3"/>
                  <div class="row align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">Age</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input type="number" class="form-control form-control-lg" onChange={(e)=>{val.age=e.target.value}} />
                    </div>
                  </div>
                  <hr class="mx-n3"/>
                  <div class="row align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">Birthday</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input type="date" class="form-control form-control-lg" onChange={(e)=>{val.birthday=e.target.value}} />
                    </div>
                  </div>
                  <hr class="mx-n3"/>
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">Application Form</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input class="form-control form-control-lg" id="formFileLg" type="file" onChange={(e)=>filechange(e , "appform")}/>
                      <div class="small text-muted mt-2">Upload your Application Form in JPEG, PNG or PDF format only</div>
                    </div>
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">Complete Grades</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input class="form-control form-control-lg" id="formFileLg" type="file" onChange={(e)=>filechange(e , "grade")}/>
                      <div class="small text-muted mt-2">Upload you complete Record of Grades in JPEG, PNG or PDF format only</div>
                    </div>
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">University Registration Form</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input class="form-control form-control-lg" id="formFileLg" type="file" onChange={(e)=>filechange(e , "regform")}/>
                      <div class="small text-muted mt-2">Upload your School Registration Form in JPEG, PNG or PDF format only</div>
                    </div>
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">NCAE Results</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input class="form-control form-control-lg" id="formFileLg" type="file" onChange={(e)=>filechange(e , "ncaeform")}/>
                      <div class="small text-muted mt-2">Upload your NCAE results in JPEG, PNG or PDF format only</div>
                    </div>
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">Electric Bill</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input class="form-control form-control-lg" id="formFileLg" type="file" onChange={(e)=>filechange(e , "ebill")}/>
                      <div class="small text-muted mt-2">Upload a photocopy of your Electric Bill in JPEG, PNG or PDF format only</div>
                    </div>
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">Water Bill</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input class="form-control form-control-lg" id="formFileLg" type="file" onChange={(e)=>filechange(e , "wbill")}/>
                      <div class="small text-muted mt-2">Upload a photocopy of your Water Bill in JPEG, PNG or PDF format only</div>
                    </div>
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">PSA Birth Certificate</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input class="form-control form-control-lg" id="formFileLg" type="file" onChange={(e)=>filechange(e , "birthcert")}/>
                      <div class="small text-muted mt-2">Upload a photocopy of your PSA Birth Certificate in JPEG, PNG or PDF format only</div>
                    </div>
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">Barangay Certificate/Cerificate of Indigency</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input class="form-control form-control-lg" id="formFileLg" type="file" onChange={(e)=>filechange(e , "brgycert")}/>
                      <div class="small text-muted mt-2">Upload your file in JPEG, PNG or PDF format only</div>
                    </div>
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">Autobiography</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input class="form-control form-control-lg" id="formFileLg" type="file" onChange={(e)=>filechange(e , "abiog")}/>
                      <div class="small text-muted mt-2">Upload your Autobiography in JPEG, PNG or PDF format only</div>
                    </div>
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">Pantawid ID</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input class="form-control form-control-lg" id="formFileLg" type="file" onChange={(e)=>filechange(e , "pantawid")}/>
                      <div class="small text-muted mt-2">Upload ID in JPEG, PNG or PDF format only</div>
                    </div>
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">Skectch of Home Address</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input class="form-control form-control-lg" id="formFileLg" type="file" onChange={(e)=>filechange(e , "sketchhome")}/>
                      <div class="small text-muted mt-2">Upload the Sketch of Your Home Address in JPEG, PNG or PDF format only</div>
                    </div>
                  </div>
                  <hr class="mx-n3"/>
                  <div class="px-5 py-4">
                    {!wait 
                    ?<button type="submit" class="btn btn-primary btn-lg" onClick={()=>sub()}>Submit</button>:null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default SignUp;
