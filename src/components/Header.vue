<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
    aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">
            首頁
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/products">
            前台商品列表頁
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/cart">
            前台購物車列表頁
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/News">
            前台文章列表
            <i class="bi bi-arrow-bar-left"></i>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/products">
            後台購物車列表頁
            <i class="bi bi-arrow-bar-left"></i>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/News">
            後台文章列表
            <i class="bi bi-arrow-bar-left"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
