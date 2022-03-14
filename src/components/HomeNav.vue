<template>
  <header class="not-top-img" id="page-header" ref="headerRef">
    <nav id="nav" class="show">
      <span id="blog_name">
        <a id="site-name" href="/" data-pjax-state>炳威の博客</a>
      </span>
      <div id="menus">
        <div v-show="!isShowBlogSlider" id="search-button">
          <a class="site-page social-icon search" data-pjax-state>
            <i class="fas fa-search fa-fw"></i>
            <span>搜索</span>
          </a>
        </div>
        <div v-show="!isShowBlogSlider" class="menus_items">
          <div class="menus_item">
            <a class="site-page" href="/" data-pjax-state>
              <i class="fa-fw fa fa-home"></i>
              <span>首页</span>
            </a>
          </div>
          <div class="menus_item">
            <a class="site-page" href="/archives/" data-pjax-state>
              <i class="fa-fw fa fa-archive"></i>
              <span>时间轴</span>
            </a>
          </div>
          <div class="menus_item">
            <a class="site-page" href="/tags/" data-pjax-state>
              <i class="fa-fw fa fa-tags"></i>
              <span>标签</span>
            </a>
          </div>
          <div class="menus_item">
            <a class="site-page" href="/categories/" data-pjax-state>
              <i class="fa-fw fa fa-folder-open"></i>
              <span>分类</span>
            </a>
          </div>
          <div class="menus_item">
            <a class="site-page" href="javascript:void(0);" data-pjax-state>
              <i class="fa-fw fa fa-heartbeat"></i>
              <span>清单</span>
              <i class="fas fa-chevron-down expand hide"></i>
            </a>
            <ul class="menus_item_child">
              <li>
                <a class="site-page" href="/gallery/" data-pjax-state>
                  <i class="fa-fw far fa-image"></i>
                  <span>相册</span>
                </a>
              </li>
              <li>
                <a class="site-page" href="/home/" data-pjax-state>
                  <i class="fa-fw fab fa-phoenix-framework"></i>
                  <span>主页</span>
                </a>
              </li>
              <li>
                <a class="site-page" href="/sponsorWall/" data-pjax-state>
                  <i class="fa-fw fas fa-money-check-alt"></i>
                  <span>赞助墙</span>
                </a>
              </li>
              <li>
                <a class="site-page" href="/box/" data-pjax-state>
                  <i class="fa-fw fas fa-th-large"></i>
                  <span>聚宝盒</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="menus_item">
            <a class="site-page" target="_blank" rel="noopener" href="https://hearling.github.io/">
              <i class="fa-fw fas fa-book"></i>
              <span>HearLing</span>
            </a>
          </div>
          <div class="menus_item">
            <a class="site-page" href="/contact/" data-pjax-state>
              <i class="fa-fw far fa-comments"></i>
              <span>留言板</span>
            </a>
          </div>
          <div class="menus_item">
            <a class="site-page" href="/link/" data-pjax-state>
              <i class="fa-fw fa fa-link"></i>
              <span>友链</span>
            </a>
          </div>
          <div class="menus_item">
            <a class="site-page" href="/about/" data-pjax-state>
              <i class="fa-fw fa fa-heart"></i>
              <span>关于我</span>
            </a>
          </div>
        </div>
        <div id="toggle-menu" v-show="isShowBlogSlider" @click="changeShowBlogSlider">
          <a class="site-page" data-pjax-state>
            <i class="fas fa-bars fa-fw"></i>
          </a>
        </div>
      </div>
    </nav>
  </header>
  <div class="narrow-wrap" :class="{open:isShowAsideWrap}">
    打开侧边栏
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { Options, Vue, } from 'vue-class-component';
import { GLOBAL_CONFIG } from '../../global';
import elementResizeDetector from 'element-resize-detector';

@Options({
  components: {

  },
  watch:{
    'store.state.isShowMask'(newVal,oldVal){
      if(newVal=== false){
        this.isShowAsideWrap = false
      }
    }
  }
})
export default class HomeNav extends Vue {
  store = useStore()
  isShowBlogSlider = false
  isShowAsideWrap = false


  changeShowBlogSlider() {
    this.isShowAsideWrap = true
    this.store.commit('changeMask',true)
  }

  mounted() {
    this.initHeaderLayout()
    window.onresize = () => {
      this.initHeaderLayout()
    }
  }

  initHeaderLayout() {
    const _this = this;
    var erd = elementResizeDetector();
    erd.listenTo(this.$refs.headerRef as HTMLElement , (element) => {
      var width = element.offsetWidth;
      var height = element.offsetHeight;
      _this.$nextTick(() => { // 这里填写监听改变后的操作
        if (width < GLOBAL_CONFIG.maxWidth) {
          _this.isShowBlogSlider = true
        } else {
          _this.isShowBlogSlider = false
        }
      });
    });
  }
}

</script>

<style lang="scss" scoped>
#nav #search-button {
  display: inline;
  padding: 0 0 0 0.7rem;
}
#page-header {
  position: relative;
  width: 100%;
  background-color: #49b1f5;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.5s;
}
#page-header.not-top-img #nav {
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 5px 6px -5px rgba(133, 133, 133, 0.6);
}
#nav {
  position: absolute;
  top: 0;
  z-index: 111;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: box;
  display: flex;
  -webkit-box-lines: multiple;
  -moz-box-lines: multiple;
  -o-box-lines: multiple;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -moz-box-align: center;
  -o-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 0 36px;
  width: 100%;
  height: 60px;
  font-size: 1.3em;
  opacity: 0;
  filter: alpha(opacity=0);
  transition: all 0.5s;
  #blog_name {
    flex: 1;
  }
}
#page-header,
#page-header:before {
  background-color: transparent !important;
  background-image: unset !important;
}

#nav.show {
  animation: headerNoOpacity 1s;
}

#page-header {
  animation: header-effect 1s;
}

#nav.show {
  opacity: 1;
  filter: none;
}

#page-header.not-top-img {
  height: 60px;
  background: 0;
}
#nav .menus_items .menus_item {
  position: relative;
  display: inline-block;
  padding: 0 0 0 0.7rem;
}

#nav.hide-menu .menus_items {
  position: absolute;
  left: 0;
  visibility: hidden;
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
}
#nav.hide-menu #search-button span {
  display: none !important;
}
#nav .menus_items .menus_item > a:after {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 0;
  height: 3px;
  background-color: #80c8f8;
  content: "";
  transition: all 0.3s ease-in-out;
}
#nav .site-page {
  position: relative;
  padding-bottom: 0.3rem;
  text-shadow: 0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 0.3);
  font-size: 0.78em;
  cursor: pointer;
}
#nav .menus_items {
  display: inline;
}
#page-header.not-top-img #nav a {
  color: var(--font-color);
  text-shadow: none;
}
#nav #site-name {
  text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.15);
  font-weight: bold;
  cursor: pointer;
}
#nav .menus_items .menus_item > a:hover:after {
  width: 100%;
}
#nav .menus_items .menus_item:hover .menus_item_child {
  display: block;
}
#nav .menus_items .menus_item .menus_item_child {
  position: absolute;
  right: 0;
  display: none;
  margin-top: 8px;
  padding: 0;
  width: max-content;
  background-color: var(--sidebar-bg);
  box-shadow: 0 5px 20px -4px rgba(0, 0, 0, 0.5);
  animation: sub_menus 0.3s 0.1s ease both;
}
#nav .menus_items .menus_item .menus_item_child:before {
  position: absolute;
  top: -8px;
  left: 0;
  width: 100%;
  height: 20px;
  content: "";
}
#nav .menus_items .menus_item .menus_item_child li:hover {
  background: var(--text-bg-hover);
}
#nav .menus_items .menus_item .menus_item_child li a {
  display: inline-block;
  padding: 0.3rem 0.7rem;
  width: 100%;
  color: var(--font-color) !important;
  text-shadow: none !important;
}
@media screen and (max-width: 768px) {
  #nav {
    padding: 0 16px;
  }
}


.narrow-wrap{
  position: fixed;
  z-index: 333;
  background-color: red;
  right: 0;
  bottom: 0;
  top: 0;
  width: 0;
  transition: all 3s ease-in-out;
}
.narrow-wrap.open{
  width: 300px;
  
}
</style>