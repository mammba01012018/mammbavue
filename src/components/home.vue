<template>
  <div>
    <h1 class="home-main-label text-center">Where do you want to go?</h1>

    <div align="center">
      <table width="50%">
        <tbody>
          <tr>
            <td width="35%">
              <b-form-input v-model="place"
              type="text"
              placeholder=""></b-form-input>
            </td>
            <td width="5%">
              <b-button>FIND DESTINATION</b-button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>

      <div class="home-description">
        <h3>Popular travel sites</h3>
        <table>
          <tbody>
            <tr>
              <td v-for="site in sites">
                <img v-bind:src="site.img">
                <p>{{site.desc}}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="home-description">
        <h3>Lorem  is Lorem Ipsum</h3>
        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      place: '',
      sites:[{
        img:'src/assets/places/1.jpg',
        desc: 'Lorem ipsum'
      },
      {
        img:'src/assets/places/2.jpg',
        desc: 'Lorem ipsum'
      },
      {
        img:'src/assets/places/3.jpg',
        desc: 'Lorem ipsum'
      },
      {
        img:'src/assets/places/4.jpg',
        desc: 'Lorem ipsum'
      }]

    }
  }
}
</script>

<style lang="scss">
  .home-main-label{
    font-family: "MuseoSans",Arial,sans-serif;
    font-weight: 300;
    line-height: 1.6;
    font-size: 4rem;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  p{
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .home-description{
    padding-top: 5%;
    padding-left: 20%;
    padding-right: 20%;
    text-align: justify;
  }
</style>
