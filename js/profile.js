
function edit_details() {
 console.log("Inside update profile page ")


 document.getElementById('profileDetails').style.display = 'none';
 document.getElementById('profileForm').style.display = 'block';
}

function update_details() {

    $.ajax({
        type: "POST",
        url: "php/profile.php",
        data: formData + "&action=editProfile", 
        dataType: "json", 
        success: function (response) {
          if (response.error) {
            console.log("Error submitting edit profile form: " + response.error);
          } else {
            // Reload the profile information after editing
            loadProfile();
            $("#editProfileForm").hide();
            $("#profileInfo").show();
            alert(response.success); 
          }
        },
        error: function (error) {
          console.log("Error submitting edit profile form.");
        },
      });
    
}

$(document).ready(function () {

    

    $.ajax({
      type: "POST",
      url: "php/profile.php",
      data: {
        action: "getProfile",
        userid: localStorage.getItem("user_id"),
      },
      dataType: "json", 
      success: function (response) {
        if (response.error) {
          console.log("Error loading profile information: " + response.error);
        } else {
          displayProfile(response);
        }
      },
      error: function (error) {
        console.log("Error loading profile information.");
      },
    });
  
    function displayProfile(profileData) {
      $("#profileInfo").html(`
              <h2>Welcome, ${profileData.full_name}!</h2>
              <p>Email: ${profileData.email}</p>
              <p>Age: ${profileData.age}</p>
              <p>Contact: ${profileData.contact}</p>
              <p>Address: ${profileData.address}</p>
              <button id='editProfileBtn'>Edit Profile</button>
          `);
    }
});
