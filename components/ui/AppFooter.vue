<template>
  <footer class="c-footer">
    <div class="top">
      <div class="logo">
        <img src="/logo-hr.svg" alt="app-logo" />
        <span class="egitimgen-lb">
          Created with
          <i class="uil uil-heart" />
        </span>
      </div>
      <div class="socials">
        <a> <i class="uil uil-facebook-f" /></a>
        <a> <i class="uil uil-twitter" /></a>
        <a> <i class="uil uil-youtube" /> </a>
      </div>
    </div>
    <div class="sub">
      <div class="left">
        <div class="links">
          <a href=""><i class="uil uil-book-open" />About</a>
          <a href=""><i class="uil uil-tag-alt" />Contact</a>
          <a href=""><i class="uil uil-info-circle" />Products</a>
          <a href=""><i class="uil uil-phone" />Help</a>
        </div>
      </div>
      <div class="right">
        <p class="adress">
          123 Main Street, New York, NY 10030 is an example of an address.
        </p>
        <a class="phone">+9032423421</a>
        <a class="email">contact@storymental.com</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.c-footer {
  background: rgb(32, 33, 34);
  background: radial-gradient(
    circle,
    rgba(32, 33, 34, 1) 0%,
    rgba(33, 33, 33, 1) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
  width: 100%;
}

.top {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    display: flex;
    flex-direction: column;
    img {
      filter: brightness(3);
      margin-bottom: 10px;
      width: 200px;
    }
  }
  .socials {
    a {
      color: $white;
      i {
        font-size: 2.2em;
      }
    }
  }
  .egitimgen-lb {
    font-size: 0.9em;
    color: white;
    a {
      color: $primary;
    }
  }
}

.sub {
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  .right,
  .left {
    display: flex;
    flex-direction: column;
    .links {
      display: flex;
      justify-content: space-evenly;
      column-gap: 10px;
    }
    a {
      display: flex;
      align-items: center;
      font-weight: 600;
      color: $white;
      column-gap: 3px;
      i {
        color: $white;
        font-size: 1.2em;
      }
      transition: 0.4s;
      &:hover {
        color: white;
        transition: 0.4s;
      }
    }
    .adress {
      color: white;
    }
  }
}

@media (max-width: 800px) {
  .c-footer {
    padding: 80px 30px;
  }
  .top,
  .sub {
    width: 100%;
  }
  .sub {
    flex-direction: column;
    align-items: center;
    .links {
      flex-wrap: wrap;
    }
    .right {
      max-width: 300px;
      text-align: center;
      align-items: center;
      padding: 30px 0;
    }
  }
}
</style>
