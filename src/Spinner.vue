<template>
  <div class="sk-spinner sk-spinner-three-bounce" v-show="show" :class="{inverse}">
    <div class="sk-bounce1"></div>
    <div class="sk-bounce2"></div>
    <div class="sk-bounce3"></div>
  </div>
</template>

<script>
  export default {
    name: 'lo-spinner',
    props: {
      show: {
        type: Boolean,
        default: true,
      },
      inverse: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "consts";

  $spinner-size: 14px;

  .sk-spinner {
    div {
      background-color: $m1;
    }

    &.inverse div {
      background-color: $ic2;
    }
  }

  .sk-spinner-three-bounce div {
    width: $spinner-size;
    height: $spinner-size;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-threeBounceDelay 1.4s infinite ease-in-out;
    animation: sk-threeBounceDelay 1.4s infinite ease-in-out;
    /* Prevent first frame from flickering when animation starts */
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .sk-spinner-three-bounce .sk-bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .sk-spinner-three-bounce .sk-bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-threeBounceDelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes sk-threeBounceDelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  .inapp {
    .sk-spinner-three-bounce div {
      width: $spinner-size * 2;
      height: $spinner-size * 2;
    }
  }
</style>
