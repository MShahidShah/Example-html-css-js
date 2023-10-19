var backgroundImage;

function addPost() {
  var title = document.getElementById("title");
  var description = document.getElementById("description");
  console.log("backgroundImage", backgroundImage);

  // console.log(title.value, description.value);

  if (title.value.trim() && description.value.trim()) {
  var posts = document.getElementById("posts");

    // var p = document.createElement('p')
    //Tempelate Strings
    posts.innerHTML += `
        <div class="card mb-2">
        <div class="card-header">
        @Post
        </div>
        <div style="background-image: url(${backgroundImage})" class="card-body">
                            <blockquote class="post-content blockquote mb-0">
                                <p>${title.value}</p>
                                <footer class=" blockquote-footer">${description.value}</cite></footer>
                            </blockquote>
                            <div class="overley">

                            </div>
                            </div>
     </div>
     `
     title.value = "";
     description.value = "";

  }else{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter title and description!',
        // footer: '<a href="">Why do I have this issue?</a>'
      })
  }
}

function selectImage(src){
    // console.log(src);
    backgroundImage = src;
    var bgimage = document.getElementsByClassName('bg-image');
    // console.log(bgimage);

    for(var i=0; i<bgimage.length; i++){
        // console.log(bgimage[i]);
        bgimage[i].className = "bg-image"
        
    }
    event.target.className += " images-list-selected"
}