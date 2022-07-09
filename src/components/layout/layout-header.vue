<template>
  <div
    id="layout-header"
    :class="{ fixed: fixed, hidden: hidden }"
    @click.stop="mobileShow = false"
  >
    <div class="site-logo">
      <!-- <router-link to="/"> -->
      <!-- <img src="@/assets/header.jpg" alt=""> -->
      <!-- <p class="site-name">blog</p> -->
      <!-- </router-link> -->
    </div>
    <div class="menus-btn" @click.stop="mobileShow = !mobileShow">菜单</div>
    <div
      class="site-menus"
      :class="{ mobileShow: mobileShow }"
      @click.stop="mobileShow = !mobileShow"
    >
      <div class="menu-item header-search"><header-search /></div>

      <div class="menu-item hasChild" v-for="(item, index) in menus" :key="index">
        <router-link :to="`${item.url}`">{{ item.title }}</router-link>
        <div class="menu-item " v-if="item.child.length">
          <div class="childMenu">
            <div class="sub-menu" v-for="v in item.child" :key="v.id">
              <router-link :to="`/article/${v.id}`">{{ v.title }}</router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="menu-item"><router-link to="/">首页</router-link></div>
      <div class="menu-item hasChild">
        <a href="#">分类</a>
        <div class="childMenu" v-if="category.length">
          <div class="sub-menu" v-for="item in category" :key="item.title">
            <router-link :to="`/category/${item.title}`">{{
              item.title
            }}</router-link>
          </div>
        </div>
      </div>
      <div class="menu-item"><router-link to="/about">关于</router-link></div>
      <div class="menu-item"><router-link to="/a">后台管理</router-link></div> -->
    </div>
  </div>
</template>

<script>
import HeaderSearch from "@/components/header-search";
import { fetchMenus } from "../../api";
export default {
  name: "layout-header",
  components: { HeaderSearch },
  data() {
    return {
      lastScrollTop: 0,
      fixed: false,
      hidden: false,
      category: [],
      mobileShow: false,
      menus: [
        {
          id: "",
          url: "",
          title: "",
          child: [
            {
              id: "",
              url: "",
              title: "",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.watchScroll);
    this.fetchMenus();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.watchScroll);
  },
  methods: {
    watchScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop === 0) {
        this.fixed = false;
      } else if (scrollTop >= this.lastScrollTop) {
        this.fixed = false;
        this.hidden = true;
      } else {
        this.fixed = true;
        this.hidden = false;
      }
      this.lastScrollTop = scrollTop;
    },
    // fetchCategory() {
    //     fetchCategory().then(res => {
    //         this.category = res.data
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // },
    fetchMenus() {
      fetchMenus()
        .then((res) => {
          console.log(res.data.list);
          this.menus = res.data.list;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped lang="less">
#layout-header {
  position: fixed;
  top: 0;
  z-index: 9;
  width: 100%;
  height: 80px;
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s all ease;
  -webkit-transition: 0.3s all ease;
  -moz-transition: 0.3s all linear;
  -o-transition: 0.3s all ease;
  -ms-transition: 0.3s all ease;
  &.hidden {
    top: -100px;
  }
  &.fixed {
    background-color: #ffffff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
}

.site-logo {
  text-align: center;

  img {
    width: 60px;
    height: 60px;
  }

  p.site-name {
    font-size: 15px;
    font-weight: bold;
    position: relative;
    top: -10px;
  }
}
.menus-btn {
  display: none;
  visibility: hidden;
}
.site-menus {
  display: flex;
  align-items: center;

  .menu-item {
    min-width: 60px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    position: relative;
    a {
      padding: 12px 10px;
      color: #545454;
      font-weight: 500;
      font-size: 16px;
      &:hover {
        color: #409eff;
      }
    }
    &:not(:last-child) {
      margin-right: 15px;
    }
    &.hasChild:hover .childMenu {
      opacity: 1;
      visibility: visible;
      transform: translateY(-5px);
    }
  }
  .childMenu {
    width: 130px;
    background-color: #fdfdfd;
    border-radius: 3px;
    border: 1px solid #ddd;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 5px;
    z-index: 2;
    opacity: 0;
    visibility: hidden;
    transition: 0.7s all ease;
    -webkit-transition: 0.6s all ease;
    -moz-transition: 0.6s all linear;
    -o-transition: 0.6s all ease;
    -ms-transition: 0.6s all ease;
    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 8px solid white;
      top: -8px;
      left: 20px;
    }
    &:before {
      top: -9px;
      border-bottom: 8px solid #ddd;
    }
    .sub-menu {
      height: 40px;
      line-height: 40px;
      position: relative;
      &:not(:last-child):after {
        /*position: absolute;*/
        content: "";
        width: 50%;
        height: 1px;
        color: #409eff;
        bottom: 0;
        left: 25%;
        z-index: 99;
      }
    }
  }
}
@media (max-width: 960px) {
  #layout-header {
    padding: 0 20px;
  }
}
@media (max-width: 600px) {
  #layout-header {
    padding: 0 10px;
  }
  .menus-btn {
    display: block;
    visibility: visible;
  }
  .site-menus {
    position: absolute;
    display: none;
    visibility: hidden;
    background-color: #f9f9f9;
    width: 100%;
    left: 0;
    top: 80px;
    z-index: -9;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    .menu-item {
      position: relative;
      height: unset;
      &:not(:last-child) {
        margin-right: 0;
      }
    }
    .childMenu {
      position: relative;
      width: 100%;
      top: 0;
      background-color: #f3f3f3;
      opacity: 1;
      visibility: visible;
      border: none;
      box-shadow: none;
      &:before,
      &:after {
        content: "";
        position: relative;
        width: 0;
        height: 0;
        border-left: 0;
        border-right: 0;
        border-bottom: 0;
      }
    }
  }
  .site-menus.mobileShow {
    display: inline-block;
    visibility: visible;
    z-index: 99;
  }
}
</style>
