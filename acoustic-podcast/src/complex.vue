<template>
  <v-app id="inspire">
    <v-app-bar
      app
      clipped-right
      color="#14183c"
      flat
      dark
      >
      <AcousticLogo />
      <span class="appname" width="200"> 
        Podcast</span>
      
      <v-spacer></v-spacer>
        <v-tabs
          v-model="currentTab"
          right
          slider-color="green"
          background-color="transparent"
        >
          <v-tab
            v-for="i in 3"
            :key="i"
            :href="`#tab-${i}`"
          >
            Item {{ i }}
          </v-tab>
        </v-tabs>


    </v-app-bar>
    <v-content>
      <v-container
        fluid
        fill-height
        fill-width
      >
      <v-tabs-items height=100%
        v-model="currentTab"
        >
      <v-tab-item height=100%
        key="1"
        value="tab-1"
      >
        <v-card flat height="100%" width="100%">
          <v-card-text >1</v-card-text>
                  <iframe border="#14183c" width=100%  src="https://search-podcast-esdoma-13piomok4eeyn-rli5hmc3qjmhvasx4iqvk2adq4.us-east-1.es.amazonaws.com/_plugin/kibana/app/kibana#/dashboard/5e4cc730-9e5c-11e8-afe0-9d62d25a7fe1?embed=true&_g=()"  height=100% ></iframe>

        </v-card>


                                                                                                </v-tab-item>

      <v-tab-item
        key="2"
        value="tab-2"
      >
        <v-card flat>
          <v-card-text >2</v-card-text>

        <iframe border="#14183c" width=100%  src="https://search-podcast-esdoma-13piomok4eeyn-rli5hmc3qjmhvasx4iqvk2adq4.us-east-1.es.amazonaws.com/_plugin/kibana/app/kibana#/dashboard/5e4cc730-9e5c-11e8-afe0-9d62d25a7fe1?embed=true&_g=()"  height=100% ></iframe>
        </v-card>                                                                               </v-tab-item>

      <v-tab-item
        key="3"
        value="tab-3"
      >
        <v-card flat>
          <v-card-text >3</v-card-text>
        </v-card>                                                                               </v-tab-item>

    </v-tabs-items>
                                                                                                                                                                                                                                                                                                                                                                            </v-container>
    </v-content>
    <v-footer
      app
      color="#14183c"
      class="white--text"
    >
      <span>Acoustic Podcast</span>
      <v-spacer></v-spacer>
      <span>&copy; 2019 Acoustic, L.P.</span>
    </v-footer>
  </v-app>
</template>

<script>
  import AcousticLogo from './components/AcousticLogo';

  
  export default {
    props: {
      source: String,
    },
    components: {
      AcousticLogo
    },

    data: () => ({
          currentTab:1
    }),
  }
</script>
<style>

    .appname {
               font-size: 40px;
               margin-left: 20px;
               font-family: 'TiemposFineMedium', 'Times New Roman', serif;
   }
</style>
