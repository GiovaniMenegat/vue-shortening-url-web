<template>
  <div class="home">
    <Header />
    <div class="title">
      <div class="text">
        <h1>More than just <br />shorter links</h1>
        <h6>Build your brand's recognition and get detailed <br />insights on how your links are performing.</h6>
        <button class="button-cyan">Get Started</button>
      </div>
      <div class="image">
        <img src="../../assets/images/illustration-working.svg" alt="">
      </div>
    </div>
    <div class="main">
      <div class="input">
        <input type="text" placeholder="Shorten a link here...">
        <button class="button-cyan">Shorten It!</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header/index.vue"

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
.home {
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .text {
      h1 {
        @include font("Poppins Black");
        @include font-size(55);
      }
      h6 {
        color: $grayish-violet;
        font-size: 16px;
      }
      button {
        margin: 23px 0;
        padding: 12px 24px;
        font-size: 20px;
      }
    }
    .image {
      text-align: right;
      img {
        width: 70%;
      }
    }
  }

  .main {
    .input {
      background: {
        image: url("../../assets/images/bg-shorten-desktop.svg");
        color: $dark-violet;
      }
      height: 95px;
      max-width: 96%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      padding: 50px 30px;
      border-radius: 6px;

      input {
        width: 80%;
        padding: 14px;
        border-radius: 6px;
        border: none;
        @include font("Poppins Bold");

        &::placeholder {
          @include font("Poppins Bold");
          color: $grayish-violet;
        }
      }
      button {
        padding: 12px 26px;
        border-radius: 6px;
      }
    }
  }
}
</style>
