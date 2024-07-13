<!--Header Component-->
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand logo" href="#">
        <img src="@/assets/logo.png" alt="Logo">
      </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">Text</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Practice</a>
            </li>
          </ul>
        </div>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-secondary" type="submit">Search</button>
        </form>
      </div>
  </nav>
</template>

<script>
  //参考: https://getbootstrap.jp/docs/5.3/components/navbar/

  export default {
    name: 'PageHeaderComponent'
  }
</script>

<style scoped>
  .logo img {
    height: 40px;
  }
</style>