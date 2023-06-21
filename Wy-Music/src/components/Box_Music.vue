<script setup>
</script>
<template>
    <div class="box">
        <img src="https://p1.music.126.net/zrMDwLyZk17F3unB8ZyYYQ==/18872017579261383.jpg?param=140y140" alt="">
        <div class="box1">
        </div>
    </div>

    <div class="beijin">
        <el-icon style="color: #ccc;margin: 2px 5px;">
            <Headset />
        </el-icon>
        <!-- <div class="num">123</div> -->
        <span>4500</span>
        <el-icon class="play"><VideoPlay /></el-icon>
    </div>
</template>

<style scoped>
.box {
    width: 140px;
    height: 140px;
    background-color: #dd7676;
}

.beijin {
margin-top: -20px;
}

.box1 {
    background-color: #797373;
    opacity: 0.7;
    height: 20px;
    width: 140px;
    position: relative;
    margin-top: -20px;
    /* z-index: 999; */
}
.play:hover{
    color: #ffffff;
}
.play{
    color: #ccc;
    margin-left: 60px;
}
span{
    font-size: xx-small;
    color: #ffffff;
    margin-bottom: 5px;
    padding-bottom: 5px;
    /* margin-left: 10px; */
}
/* .num{

    font-size: xx-small;
    color: #ffffff;
    margin-bottom: 5px;
    padding-bottom: 5px;
} */
</style>