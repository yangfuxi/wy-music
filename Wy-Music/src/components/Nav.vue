<script setup>
import { RouterLink, RouterView } from 'vue-router'

// import { ElButton, ElRow, ElCol ,Search,ElInput} from 'element-plus'
import { Search, Delete } from '@element-plus/icons-vue'
import { ElMessageBox, ClickOutside as vClickOutside } from 'element-plus'
import { markRaw, ref, unref } from 'vue'

const open = () => {
    ElMessageBox.confirm(
        'It will permanently delete the file. Continue?',
        'Warning',
        {
            type: 'warning',
            icon: markRaw(Delete),
        }
    )
}
const buttonRef = ref()
const popoverRef = ref()
const onClickOutside = () => {
    unref(popoverRef).popperRef?.delayHide?.()
}
</script>

<template>
    <div class="box">
        <div class="nav-head container text-center">
            <li><img src="../assets/img/wy-top.png" alt="" style="margin-top: 15px;"></li>
            <ul>
                <RouterLink to="/" class="normal" ref="buttonRef" v-click-outside="onClickOutside">发现音乐</RouterLink>
                <el-popover ref="popoverRef" :virtual-ref="buttonRef" trigger="focus" virtual-triggering
                    popper-class="monitor-yt-popover">
                    <ul>
                        <li>推荐</li>
                        <li>排行榜</li>
                        <li>歌单</li>
                    </ul>
                </el-popover>
                <RouterLink to="/about" class="normal" ref="buttonRef">我的音乐</RouterLink>
                <RouterLink to="/c" class="normal">关注</RouterLink>
                <RouterLink to="/c" class="normal">商城</RouterLink>
                <RouterLink to="/a" class="normal">音乐人</RouterLink>
                <RouterLink to="/d" class="normal">云推歌</RouterLink>
                <RouterLink to="/e" class="normal">下载客户端</RouterLink>
                <el-input v-model="input" class="input_border" placeholder="音乐/视频/电台/用户" clearable :prefix-icon="Search" />
                <el-button round plain>创作者中心</el-button>
                <el-link @click="open" :underline="true">登录</el-link>
            </ul>

        </div>
    </div>

    <RouterView />
</template>


<style scoped>
.el-popover__reference {
  background-color: #409EFF;
  color: #fff;
  border-color: #409EFF;
}

.el-popover__content {
  background-color: #409EFF;
  color: #fff;
  border-color: #409EFF;
}

.el-popover__content ul li {
  color: #fff;
}
.normal {
    padding: 0px 15px;
    line-height: 70px;
    white-space: nowrap;
}

.normal:hover {
    background: #000000;
}

.router-link-exact-active {
    color: #ffffff;
    background-color: #000000;
}

.router-link-active:hover {
    background-color: #000000;
}

.input_border {
    margin-top: 20px;
    width: 158px;
    height: 32px;
    border-radius: 95px;
    background: rgba(255, 255, 255, 1);
}

.el-button {
    margin-top: 20px;
    margin-left: 10px;
    background-color: #404040;
    color: #ccc;
}

.el-button:hover {
    color: #ffffff;
    border: 1px solid #ccc;
}

.el-link {
    /* margin-top: 10px; */
    margin-left: 10px;
}

:deep(.el-input__wrapper) {
    background-color: transparent;
    /*覆盖原背景颜色，设置成透明 */
    border-radius: 95px;
    border: 0;
    box-shadow: 0 0 0 0px;
}

a {
    color: #c6c6c6;
}

a:hover {
    color: #ffffff;
}

* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}

.box {
    width: 100vw;
    height: 70px;
    background-color: #404040;
    opacity: 1;
}

.nav-head {
    height: 70px;
    /* width: 1240px; */
    background-color: #404040;
    display: flex;

}

ul {
    display: flex;
}
</style>
