<template>
<v-app id="podcast">
  <v-navigation-drawer
    v-model="left"
    app
    clipped
    >
    <v-list dense>
      <v-list-item
        v-for="item in items"
        :key="item.text"
        @click="item.href"
        >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            {{ item.text }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-subheader class="mt-4 blue--text text--darken-1">SUBSCRIPTIONS</v-subheader>
      <v-list>
        <v-list-item
          v-for="item in items2"
          :key="item.text"
          @click=""
          >
          <v-list-item-avatar>
            <img
              :src="`https://randomuser.me/api/portraits/${item.gender}/${item.picture}.jpg`"
              alt=""
              >
          </v-list-item-avatar>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list-item
        class="mt-4"
        @click=""
        >
        <v-list-item-action>
          <v-icon color="grey darken-1">add_circle_outline</v-icon>
        </v-list-item-action>
        <v-list-item-title class="grey--text text--darken-1">Browse Channels</v-list-item-title>
      </v-list-item>
      <v-list-item @click="">
        <v-list-item-action>
          <v-icon color="grey darken-1">settings</v-icon>
        </v-list-item-action>
        <v-list-item-title class="grey--text text--darken-1">Manage Subscriptions</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  
  <v-app-bar
    app
    clipped-left
    color="#14183c"
    dark
    dense
    >
    <v-app-bar-nav-icon @click.stop="left = !left"></v-app-bar-nav-icon>
    <AcousticLogo />
    <span align-center class="appname" width="200" margin-top=25 >Podcast</span> 
    
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
    <v-layout
      align-center
      style="max-width: 650px"
      >
      <v-text-field
        :append-icon-cb="() => {}"
        placeholder="Search..."
        single-line
        append-icon="search"
        color="white"
        hide-details
        ></v-text-field>
    </v-layout>
  </v-app-bar>
  
  <v-content>
    <v-container
      fluid
      fill-height
      fill-width
      >
                  <iframe frameborder="0" width=100%  src="https://search-podcast-esdoma-13piomok4eeyn-rli5hmc3qjmhvasx4iqvk2adq4.us-east-1.es.amazonaws.com/_plugin/kibana/app/kibana#/dashboard/5e4cc730-9e5c-11e8-afe0-9d62d25a7fe1?embed=true&_g=()"  height=100% ></iframe>
<!--
      <v-tabs-items height=100%
                    v-model="currentTab"
                    >
        <v-tab-item height=100%
                    key="1"
                    value="tab-1"
                    >
          <v-card  height="100%" width="100%">
            <v-card-text >10</v-card-text>
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
          </v-card>
        </v-tab-item>
        
        <v-tab-item
          key="3"
          value="tab-3"
          >
          <v-card flat>
            <v-card-text >3</v-card-text>
          </v-card>
        </v-tab-item>
        
      </v-tabs-items> -->
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
    currentTab:1,
    left:true,
    items: [
      { icon: 'trending_up', text: 'Analytics' },
      { icon: 'subscriptions', text: 'Subscriptions' },
      { icon: 'history', text: 'History' },
      { icon: 'featured_play_list', text: 'Playlists' },
      { icon: 'watch_later', text: 'Watch Later' },
    ],
    items2: [
      { gender: "men", picture: 28, text: 'Louis' },
      { gender: "men", picture: 38, text: 'Apple' },
      { gender: "women", picture: 48, text: 'Alexandra' },
      { gender: "men", picture: 58, text: 'Nokia' },
      { gender: "men", picture: 78, text: 'MKBHD' },
    ],
    
  }),
}
</script>
<style>
.appname {
    font-size: 30px;
    margin-left: 20px;
    font-family: 'TiemposFineMedium', 'Times New Roman', serif;
}
</style>
