<template>
  <div class="home">
    <div>
      <el-row :gutter="20">
        <el-col :span="4" v-for="video in videos" :key="video.id">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="video-avator"
            />
            <div>
              <div class="video-title">{{video.title}}</div>
              <div class="video-bottom clearfix">
                <span class="video-info">{{video.info}}</span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";
import * as API from "../api/video/";

export default {
  name: "home",
  data() {
    return {
      videos: []
    };
  },
  methods: {
    load() {
      API.getVidoes().then(res => {
        this.videos = res.data;
      });
    }
  },
  components: {},
  beforeMount() {
    this.load();
  }
};
</script>

<style>
.video-avator {
  width: 100%;
}
.video-title {
  margin: 4px 0px 4px 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.video-info {
  color: gray;
}
.video-bottom {
  margin-top: 4px;
}
</style>