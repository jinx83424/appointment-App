let form=document.getElementById('myForm')
form.addEventListener('submit', save);
function save(e){
    e.preventDefault();
    let name=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    let phone=document.querySelector("#phone").value;
    let time=document.querySelector("#time").value;
    let para=document.querySelector("#created");
    const userDetails = {
        "name": name,
        "email": email,
        "phone": phone,
        "time": time
      };
      axios.post("https://crudcrud.com/api/68eb4ca867df4a00831fc94cc7ab7c81/appointment",{
        userDetails
      }).then((res)=>{
        para.InnerText="Appointment is Scheduled.Our Executive will connect with you over call."
      })
      .catch((err)=>{console.error(err)});
    document.querySelector("#name").value="";
    document.querySelector("#email").value="";
    document.querySelector("#phone").value="";
    document.querySelector("#time").value="";
    }