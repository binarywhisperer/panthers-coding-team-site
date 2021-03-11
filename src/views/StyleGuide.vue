<template>
  <div class="pct-container">
    <h1>Style Guide</h1>
    <div class="colors">
      <div class="color majorelle-blue">
        <main>
          <div>#6047FF</div>
        </main>
        <footer>Primary</footer>
      </div>
      <div class="color lavender-blue">
        <main>
          <div>#ddd6ff</div>
        </main>
        <footer>Primary Light</footer>
      </div>
      <div class="color maximum-yellow">
        <main>
          <div>#F8F32B</div>
        </main>
        <footer>Accent</footer>
      </div>
      <div class="color xiketic">
        <main>
          <div>#0f0f1a</div>
        </main>
        <footer>Dark</footer>
      </div>
      <div class="color ghost-white">
        <main>
          <div>#F4F4F9</div>
        </main>
        <footer>Light</footer>
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

h3 {
  color: $my-color-primary;
  font-weight: 900;
  font-size: 2rem;
  text-shadow: -1px 1px 2px #000;
}

.colors{
  display: flex;
  justify-content: space-evenly;

  .color{
    main{
      position: relative;
      width: 11vw;
      height: 11vw;
      color: $my-color-dark;

      div{
        position: absolute;
        bottom: 1rem;
        width: 100%;
        text-align: center;
        font-size: 1.25rem;
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
    
  
    

    &.primary{
      background: $my-color-accent;
    }
    
  }
}
</style>
