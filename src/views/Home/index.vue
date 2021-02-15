<template>
  <div class="home">
    <Header />
    <Container>
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
        <form class="input">
          <input type="text" placeholder="Shorten a link here..." v-model="inputLink">
          <button class="button-cyan" @click.prevent="shortenLink">Shorten It!</button>
        </form>

        <Links />


        <div class="statistics">
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with <br/>
            our advanced statistics dashboard.
          </p>

          <div class="cards">
            <div class="brand">
              <div class="circle">
                <img src="../../assets/images/icons/icon-brand-recognition.svg" alt="">
              </div>
              

              <h5>Brand Recognition</h5>
              <p>
                Boost your brand recognition with each click. Generic links don't
                mean a thing. Branded links help instil confidence in your content.
              </p>
            </div>
            <svg width="50" height="200"><line x1="0" y1="150" x2="50" y2="150" style="stroke:rgb(41,199,199);stroke-width:6"/></svg>
            <div class="records">
              <div class="circle">
                <img src="../../assets/images/icons/icon-detailed-records.svg" alt="">
              </div>
              

              <h5>Detailed Records</h5>
              <p>
                Gain insights into who is clicking your links. Knowing when and 
                where people engage with your content helps inform better decisions.
              </p>
            </div>
            <svg width="50" height="200"><line x1="0" y1="150" x2="50" y2="150" style="stroke:rgb(41,199,199);stroke-width:6"/></svg>
            <div class="customizable">
              <div class="circle">
                <img src="../../assets/images/icons/icon-fully-customizable.svg" alt="">
              </div>
              

              <h5>Fully Customizable</h5>
              <p>
                Improve brand awareness and content discoverability through customizable
                links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
    <div class="foot">
      <h1>Boost your links today</h1>
      <button class="button-cyan">Get Started</button>
    </div>
    <Footer />
  </div>
</template>

<script src="./index.js">
</script>

<style lang="scss" src="./index.scss">
</style>
