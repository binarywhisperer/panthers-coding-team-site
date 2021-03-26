<template>
  <div class="pct-container">
    <h1>Panthers Coding Team</h1>
    <div>
      <h3>What</h3>
      <p>
        Virtual coaching from industry leading professionals in
        preparation for our national web development coding competitions. No previous experience required.<br><br>
      </p>
      <ul>
        <li>A chance to win your share of <strong>$8,750</strong> in scholarships from the <a class="pct-link" href="https://2021.bdpa.org/">2021 BDPA virtual conference</a> High School Coding Competition</li>
        <li><strong>14</strong> hands on <strong>2.5</strong> hours of digital lessons from industry leading professionals</li>
        <li><strong>1</strong> Team jersey </li>
        <li><strong>1</strong> Year membership in <a class="pct-link" href="https://bdpamemphis.org">BDPA Memphis</a></li>
        <li><strong>1</strong> National Conference Ticket with BDPA High School Coding Competition entry</li>
        
      </ul>
    </div>
    <div>
      <h3>When</h3>
      <ul>
        <li><strong>Competition Date:</strong> August 12th - 14th</li>
        <li><strong>Sessions:</strong> April 3rd - August 7th (Every Saturday except last Saturday of the month)</li>
        <li><strong>Sessions Schedule:</strong> 12PM - 2:30PM</li>
        <li><strong>Last Saturdays of the Month:</strong>4/24, 5/29, 6/26 and 7/26</li>
      </ul>
    </div>
    <div>
      <h3>Where</h3>
      <p>Digitally on <strong>Zoom</strong> provided by <a class="pct-link" href="https://bdpamemphis.org">BDPA Memphis.</a></p>
    </div>
    <div>
      <h3>Why</h3>
      <p><strong>BDPA Memphis presents the Panthers Coding Team.</strong> BDPA is a volunteer organization of passionate technologists who want to build a better future. We believe that our coding team gives the next generation of black technologists an opportunity to get started earlier. We are providing professional instruction, competition coaching and real world development experience. <strong>Why we built this program is simple; we wish this existed for everyone and we have the talent to do it for our community.</strong></p>
    </div>
    <div>
      <h3>Who</h3>
        <h4>POSITIONS:</h4>
        <strong>Team Coach:</strong> Bryce Sharp<br>
        <strong>Curriculum Creators:</strong> Bryce Sharp, Autumn Ragland<br>
        <strong>Recruiter:</strong> Kareem DaSiliva<br>
        <br>
        <h4>PEOPLE:</h4>
        <strong>Bryce Sharp</strong> - Software Engineer at <a class="pct-link" href="https://www.ookla.com/">Ookla</a><br>
        <strong>Autumn Ragland</strong> - Frontend Engineer at <a class="pct-link" href="https://www.quadpay.com/">Quadpay</a>, Previously Instructor at <a class="pct-link" href="https://www.code-crew.org/">Code Crew</a><br>
        <strong>Kareem DaSiliva</strong> - President of <a class="pct-link" href="https://bdpamemphis.org/">BDPA Memphis</a><br>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped lang="scss">
@include h1InHero();

h3 {
  color: $my-color-dark;
  font-weight: 900;
  font-size: 1.75rem;
}

.pct-container{
  div{
    margin: 0 0 .5rem 0;
  }
}
</style>
