<template>
  <footer>
    <div class="container mt-5">
      <div class="row justify-content-between" >
        <div class="col-md-4">
          <h3>About Us </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis mauris tincidunt, semper elit non, congue dolor. Etiam vel est sit amet dolor eleifend molestie.</p>
        </div>
        <div class="col-md-4">
          <h3>Contact</h3>
          <ul class="list-unstyled">
            <li><i class="fa fa-phone"></i> Number: 555-555-5555</li>
            <li><i class="fa fa-envelope"></i> Email: info@example.com</li>
            <li><i class="fa fa-map-marker"></i> Adress: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
        <div class="col-md-4">
          <h3>Follow Us</h3>
          <ul class="list-unstyled list-inline social-links">
            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center bg-dark text-light py-2">
      <p>All Rights Reserved &copy; 2023</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.social-links {
  display: flex;
  flex-direction: row;
}
.social-links li {
  padding-right: 20px;
}
</style>