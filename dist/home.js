Vue.component("title-logo", {
  template:
    '<div id="logo"><transition-group name="logo-magic" appear><img id="title_shading" key="title_shading" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/title_shading.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/title_shading2x.png 2x"><img id="title_sleeping" key="title_sleeping" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/title_sleeping.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/title_sleeping2x.png 2x"><img id="title_duty" key="title_duty" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/title_duty.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/title_duty2x.png 2x"><img id="title_sparkles" key="title_sparkles" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/title_sparkles.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/title_sparkles2x.png 2x"><p key="author" id="title_author">as retold in CSS and Vue.js by <a href="https://twitter.com/rachelnabors">@RachelNabors</a></p><p key="sleeping-beauty" id="title_sb" class="inline">It’s <em>Sleeping Beauty.</em></p><p key="in-space" id="title_in-space" class="inline">In space.</p></div>'
});

new Vue({
  el: "#app",
  data: {
    state: "loading"
  },
  created() {
    window.setTimeout(() => {
      this.state = "loaded";
    }, 1000);
  }
});
