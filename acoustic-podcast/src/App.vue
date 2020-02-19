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
				router :to="item.route"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
					</router-link>
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
		<router-view ></router-view>
    <v-container
      fluid
      fill-height
      fill-width
      >Hi 


			There
      <v-tabs-items height=100%
                    v-model="currentTab"
                    >
        <v-tab-item height=100%
                    key="1"
                    value="tab-1"
                    >
Tab 1
        </v-tab-item>
        
        <v-tab-item
          key="2"
          value="tab-2"
          >
          <v-card flat>
            <v-card-text >2</v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text >455</v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text >4</v-card-text>
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
	import HelloWorld from './components/HelloWorld';
	import Woofie from './views/Woofie';
	import Analytics from './views/Analytics';
	import Subscriptions from './views/Subscriptions';

	
	export default {
  props: {
  source: String,
  },
  components: {
    AcousticLogo,
    HelloWorld,
  	Woofie
  },
  
  data: () => ({
    currentTab:1,
    left:false,
    items: [
      { icon: 'trending_up', text: 'Analytics', route:'/analytics' },
      { icon: 'subscriptions', text: 'Subscriptions', route:'/subscriptions' },
      { icon: 'history', text: 'History', route:'/woofie' },
      { icon: 'featured_play_list', text: 'Playlists', route:'/helloworld' },
      { icon: 'watch_later', text: 'Watch Later', route:'/helloworld' },
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
