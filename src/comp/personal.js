
import Personal from './comp/personal'
const Personal = () => {
 const [user, setUser] = useState( {
    Name: '', Date_Of_Birth: '', Gender: '', Social_Security: '', Phone: '', Email: '', Emergency_Contact: ''
})

let name, value
 const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]: value});
    console
 }

 const getdata = async (e) => {
    const {Name, Date_Of_Birth, Gender, Social_Security, Phone, Email, Emergency_Contact} = user;
    e.preventDefault();
    const options = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            Name, Date_Of_Birth, Gender, Social_Security, Phone, Email, Emergency_Contact
        })
    }
    const res = await fetch('https://golden-link-69f12-default-rtdb.firebaseio.com/UserData.json',
        options
    )
    if(res) {
        alert("Data Stored")
    }
    else {
        alert("Error Occurred")
    }
 }

 return (
    
  <body>
  <main class="container" style="max-width: 600px; margin: 20px auto; padding: 90px; border: 1px solid #426b1f;
  border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
      <h1 style="display: flex; justify-content: center; align-items:center; margin: 10px auto; font: 600 36px/130% Inter, sans-serif;">Patient Information</h1>
      <form method="POST" id="personal-info-id"> <h3 style="display: flex; justify-content: center; align-items:center; margin: 6px auto;">Personal Information</h3>
          <label for="name" class="name-label" ><strong>Patient's Name</strong></label>
          <textarea onChange={data} value={user.Name} name='Name' autoComplete="off" rows="1" id="name" class="name-select"></textarea>

          <label for="dob" class="dob-label"><strong>Data of Birth</strong></label>
          <textarea onChange={data} value={user.Date_of_Birth} name='Date_Of_Birth' autoComplete='off' id="dob" class="dob-select"></textarea>

          <label for="gender" class="gender-label"><strong>Gender</strong></label>
          <select onChange={data} value={user.Gender} name='Gender' autoComplete='off' id="gender" class="gender-select">
              <option value="">Select an option</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer Not To Say">Prefer Not To Say</option>
          </select>
          <label for="social-security" class="social-security-label"><strong>Social Securuty</strong></label>
          <textarea onChange={data} value={user.Social_Security} name='Social_Security' autoComplete='off' id="social-security" class="social-security-label"></textarea>

          <label for="contact" class="contact-label"><strong>Contact</strong></label>
          <textarea onChange={data} value={user.Phone} name='Phone' autoComplete='off' placeholder="XXX-XXX-XXXX" id="contact" class="phone-select"></textarea>
          
          <label for="email" class="email-label"><strong>Email</strong></label>
          <textarea onChange={data} value={user.Email} name='Email' autoComplete='off' placeholder="YourEmail@gmail.com" id="email" class="email-select"></textarea>

          <label for="emergency-contact" class="emergency-contact-label"><strong>Emergency Contact</strong></label>
          <textarea onChange={data} value={user.Emergency_Contact} name='Emergency_Contact' autoComplete='off' placeholder="XXX-XXX-XXXX" id="emergency-contact" class="ephone-select"></textarea>
      </form>

      <div class="two-buttons">
        <a href="medicalInfo.html"><button id="btn1">Next</button></a>
        <button onClick={getdata} id="save-info">Save</button>
      </div>
      
  </main>
  <script src="patientInfo.js"></script>
</body>

 )
}

export default Personal