<template>
 <div class="registration">
    <figure>
     <img src="../assets/logo.png"/>
   </figure>
   <div class="registration-content">
     <header>
       NOW RECRUITING!
       </header>
     <main>
       If you want to join our team, then please <strong>click the button below</strong> and fill out our registration form. 
     </main>
     <footer>
       <a href="https://forms.gle/h8MeSVsc2CxiKbsW8"><button class="highlight-button button is-large is-primary">REGISTER NOW</button></a>
       </footer>
   </div>
   <figure>
     <img class="img-flip" src="../assets/logo.png"/>
   </figure>
    </div>
</template>

<script>
export default {
  name: "Registration"
};
</script>

<style scoped lang="scss">
.registration{
  width: 80vw;
  margin: 0 10vw;

  @media only screen and (max-width: 500px)  {
      width: 86vw;
      margin:  0 7vw;
  }
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background: transparentize($color:$my-color-primary-light, $amount: .25);
  
  &-content{
    text-align: center;
    margin: 1rem;
    header{
      font-weight: 900;
      font-size: 1.75rem;
      position: relative;
      color: $my-color-dark;
      &::after {
        content: "";
        width: 20%;
        height: 3px;
        bottom: 2px;
        left:40%;
        position: absolute;
        background-color: $my-color-accent;
        animation: pulse 4s ease infinite alternate; 
      }
    }
    main{
      margin: .5rem 1rem;
      font-weight: 700;
      font-size: 1.1rem;
    }
    footer{
      display: flex;
      justify-content: center;
    }
  }

  figure{
    width: 15vw;
    @media only screen and (max-width: 500px)  {
      width: 30vw;
    }
    img{
      width: 100%;
      display: block;
    }
  }
}

.img-flip{
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}


@keyframes pulse {
  0% {
    width: 24%;
    left:38%;
  }
  100% {
    width: 30%;
    left:35%;
  }
}
</style>

