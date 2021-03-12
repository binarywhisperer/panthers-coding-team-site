<template>
  <div class="pct-container">
    <div class="register">
      <a href="https://forms.gle/h8MeSVsc2CxiKbsW8"><button class="button is-primary">REGISTRATION FORM</button></a>
    </div>
    <div>
      <h3>What</h3>
      <p>
        Virtual hands on coaching from industry leading professionals in
        preparation for our local and national coding competitions.
      </p>
      <ul>
        <li><strong>17</strong> hands on 2.5 hour digital lessons from industry leading professionals</li>
        <li><strong>1</strong> Team Jersey </li>
        <li><strong>1</strong> Year Membership in BDPA Memphis</li>
        <li><strong>1</strong> National Conference with Coding Competition</li>
        
      </ul>
    </div>
    <div>
      <h3>When</h3>
      <ul>
        <li>Competition Date: <strong>August 12th - 14th</strong></li>
        <li>Sessions: <strong>March 13th - August 7th</strong></li>
        <li>Sessions Schedule: <strong>12PM - 2:30PM</strong> (Every Saturday except last Saturday of the month)</li>
        <li>Last Saturdays of the Month: <strong>3/27, 4/24, 5/29, 6/26 and 7/26</strong></li>
      </ul>
    </div>
    <div>
      <h3>Where</h3>
      <p>Digitally on Zoom provided by <a href="https://bdpamemphis.org">BDPA Memphis</a></p>
    </div>
    <div>
      <h3>Why</h3>
      <p>BDPA Memphis is a volunteer organization of passionate technologists who want to build a better future. We believe that our coding team gives the next generation of technologists an opportunity to get started earlier. We are providing professional instruction, competition coaching and real world development experience. Why we built this program is simple. We wish this existed for everyone and we have the talent to do it for them.</p>
    </div>
    <div>
      <h3>Who</h3>
        <h4>Roles</h4>
        <strong>Instructor:</strong> Bryce Sharp<br>
        <strong>Curriculum Creators:</strong> Bryce Sharp, Autumn Ragland<br>
        <strong>Recruiter:</strong> Kareem DaSiliva<br>
        <br>
        <h4>People</h4>
        <strong>Bryce Sharp</strong> -  Software Engineer at Ookla<br>
        <strong>Autumn Ragland</strong> -  Frontend Engineer at Quadpay, Former Instructor at Code Crew<br>
        <strong>Kareem DaSiliva</strong>- President of BDPA Memphis<br>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style scoped lang="scss">
h3 {
  color: $my-color-dark;
  font-weight: 900;
  font-size: 1.75rem;
}

.pct-container{
  div{
    margin: 0 0 .5rem 0;

    &.register{
      display: flex;
      justify-content: center;
      padding: 1rem 0 .5rem 0;
    }
  }


}
</style>
