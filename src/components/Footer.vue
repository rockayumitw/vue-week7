<template>
    <div class="footer bg-gray-300 text-center">
        <div class="bg-gray-400 pt-12">
            <Social/>
            <div class="text-white pt-6 text-3 p-2">
                營業時間：00:00 ~ 50:00 (全年無休)<br/>
                地址：xx市xx區xx路111號
            </div>
        </div>
        <div class="text-center bg-gray-500 d-flex justify-content-between text-2 text-white p-1">
            <span>© OOXX 2020 All Rights Reserved.</span>
            <span>ooxx科技股份有限公司版權所有</span>
        </div>
        <div class="text-center bg-secondary text-2 text-white p-1">
            僅供學習使用，無商業用途
        </div>
    </div>
</template>

<script>
import Social from '@/components/Social.vue';

export default {
  components: {
    Social,
  },
  data() {
    return {
    };
  },
};
</script>
