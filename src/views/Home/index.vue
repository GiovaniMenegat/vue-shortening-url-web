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

      <div class="statistics">
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with <br/>
          our advanced statistics dashboard.
        </p>

        <div class="cards">
          <div class="brand">
            <img src="../../assets/images/icons/icon-brand-recognition.svg" alt="">

            <h5>Brand Recognition</h5>
            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your content.
            </p>
          </div>

          <div class="records">
            <img src="../../assets/images/icons/icon-detailed-records.svg" alt="">

            <h5>Detailed Records</h5>
            <p>
              Gain insights into who is clicking your links. Knowing when and 
              where people engage with your content helps inform better decisions.
            </p>
          </div>

          <div class="customizable">
            <img src="../../assets/images/icons/icon-fully-customizable.svg" alt="">

            <h5>Fully Customizable</h5>
            <p>
              Improve brand awareness and content discoverability through customizable
              links, supercharging audience engagement.
            </p>
          </div>
        </div>
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
    position: relative;
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
      position: relative;
      z-index: 10;

      input {
        width: 80%;
        padding: 14px;
        border-radius: 6px;
        border: none;
        @include font("Poppins Bold");
        //TODO descobrir como usar o mixin placeholder
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

    .statistics {
      text-align: center;
      padding: 115px 0;
      background: #efefef;
      width: 100vw;
      position: absolute;
      left: calc(50% - 50vw);
      top: 50%;
      z-index: 1;
      h1 {
        @include font("Poppins Bold");
      }
      p {
        color: $gray;
      }

      .cards {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 50px;
      }
    }
  }
}
</style>
