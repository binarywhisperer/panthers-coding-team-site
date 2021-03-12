<template>
  <div class="pct-container">
    <h1>Style Guide</h1>
    <h2>Chadwick Mascot</h2>
    <div class="pct-section">
      <div class="logo">
        <figure>
          <img alt="Panthers Coding Team Logo" src="../assets/logo.png"/>
        </figure>
      </div>
      <h2>Panthers Coding Team Logo</h2>
      <div class="logo">
        <figure>
          <img alt="Panthers Coding Team Square Logo" src="../../public/logo-square.png"/>
        </figure>
      </div>

      <div class="pct-flex-center">
        <a href="https://pixabay.com/">
          <button class="button is-primary is-bold">Free Images - https://pixabay.com/</button>
        </a>
      </div>
    </div>

    <h2>Colors</h2>
    <div class="pct-section">
      <div class="colors">
      <div class="color majorelle-blue">
        <div>
          <main>
            <div>#6047FF</div>
          </main>
          <footer>Primary</footer>
        </div>
      </div>
      <div class="color lavender-blue">
        <div>
          <main>
            <div>#ddd6ff</div>
          </main>
          <footer>Primary Light</footer>
        </div>
      </div>
      <div class="color xiketic">
        <div>
          <main>
            <div>#0f0f1a</div>
          </main>
          <footer>Dark</footer>
        </div>
      </div>
      <div class="color ghost-white">
        <div>
          <main>
            <div>#F4F4F9</div>
          </main>
          <footer>Light</footer>
        </div>
      </div>
      <div class="color maximum-yellow">
        <div>
          <main>
            <div>#F8F32B</div>
          </main>
          <footer>Accent</footer>
          </div>
      </div>
      </div>
      <div class="pct-flex-center">
        <a href="https://coolors.co/">
          <button class="button is-primary is-bold">Create Your Own Color Palette - https://coolors.co/</button>
        </a>
      </div>
    </div>


    <h2>Fonts</h2>
    <div class="fonts-section pct-section">
      <h3>Nuntino</h3>
      <div class="font-example font-normal">
        <header>Regular 400</header>
        <main>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 1234567890</main>
      </div>
      <div class="font-example font-normal">
        <header>Regular 400 Italic</header>
        <main><i>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 1234567890</i></main>
      </div>
      <div class="font-example font-bold">
        <header>Bold 700</header>
        <main>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 1234567890</main>
      </div>
      <div class="font-example font-super-bold">
        <header>Bold 900</header>
        <main>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 1234567890</main>
      </div>

      <div class="pct-flex-center">
        <a href=" https://fonts.google.com/specimen/Nunito?preview.text_type=custom&preview.text=AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz%201234567890">
          <button class="button is-primary is-bold">Nuntino on Google Fonts -  https://fonts.google.com/</button>
        </a>
      </div>
     
    </div>
  </div>
</template>
 
<script>
export default {
  name: "StyleGuide",
  components: {}
};
</script>

<style scoped lang="scss">
@include h1InHero();


.pct-section{
  border-bottom: 1px solid rgba(0,0,0,.1);
  padding-bottom: 1.5rem;
  margin-bottom: 2rem;
}

.pct-flex-center{
  display: flex;
  justify-content: center;
  margin: 2rem 0 0 0;

  a button {
    font-weight: 700;
  }
}

h2 {
  margin: 1rem auto 0 auto;
  color: $my-color-dark;
  font-weight: 900;
  font-size: 1.75rem;
  text-transform: uppercase;
  text-align: center;
}

h3 {
  color: $my-color-dark;
  font-weight: 700;
  font-size: 1.5rem;
  text-transform: uppercase;
}
.logo{
  display: flex;
  justify-content: center;
  figure{
    width: 900px;
    max-width: 25vw;
    img{
      width: 100%;
    }
  }
}

.colors{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  .color{
    margin-top: 1rem;
    min-width: 185px;
    display: flex;
    justify-content: center;
    main{
      position: relative;
      width: 11vw;
      height: 11vw;
      color: $my-color-dark;
      @media only screen and (max-width: 750px)  {
        width: 16vw;
        height: 16vw;
      }
      div{
        position: absolute;
        bottom: 1rem;
        width: 100%;
        text-align: center;
        font-size: 1rem;
        font-weight: 700;
        text-transform: uppercase;
      }
    }

    &.maximum-yellow{
      main{
        background:#F8F32B;
      }
    } 

    &.majorelle-blue{
      main{
        background: #6047FF;
        color: $my-color-light;
      }
    } 

    &.lavender-blue{
      main{
        background: #ddd6ff;
      }
    } 

    &.ghost-white{
      main{
        background: #F4F4F9;
      }
    } 
    
    &.xiketic{
      main{
        background: #0f0f1a;
        color: $my-color-light;
      }
    } 
    
    footer {
      opacity: .6;
    }

    &.primary{
      background: $my-color-accent;
    }
  }
}

.fonts-section{
  .font-example{
    margin: .5rem 0;
    border-bottom:1px solid rgba(0,0,0, .1)
  }

  .font-regular{
    main{
      font-weight: 400;  
    }
  }
  .font-bold{
    main{
      font-weight: 700;  
    }
    
  }
  .font-super-bold{
    main{
      font-weight: 900;  
    }
  }
  
}
</style>
