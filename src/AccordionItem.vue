<template>
  <li>
    <div class="lo-accordion-item-header" @click="toggleCollapse">
      <span>{{ title }}</span>
      <span class="arrow" :class="{'rotate': display && originalHeight }"></span>
    </div>
    <transition
      v-on:enter="enter"
      v-on:leave="leave"
      :css="false">
      <div class="lo-accordion-item-content" v-show="display">
        <slot></slot>
      </div>
    </transition>
  </li>
</template>

<script>
  /* eslint-disable no-param-reassign,no-unused-vars */

  export default {
    name: 'lo-accordion-item',
    props: {
      title: {
        type: String,
        default: '',
      },
      opened: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        display: true,
        originalHeight: 0,
      };
    },
    mounted() {
      const content = this.$el.querySelector('.lo-accordion-item-content');
      const defaultContentHeight = `${content.offsetHeight}px`;
      this.originalHeight = defaultContentHeight;
      // little trick here.
      // get the content height first. and close the content if the opened is false.
      content.style.maxHeight = this.opened ? defaultContentHeight : 0;
      // set display
      this.display = this.opened;
    },
    methods: {
      toggleCollapse() {
        this.display = !this.display;

        if (this.display) {
          this.$parent.onChildOpened(this);
        } else {
          this.$parent.onChildClosed(this);
        }
      },
      // FIXME don't know why the 'done' param has to named and leave to empty
      enter(el, done) {
        el.style.maxHeight = this.originalHeight;
        el.style.opacity = 1;
      },
      leave(el, done) {
        el.style.maxHeight = 0;
        el.style.opacity = 0;
      },
    },
  };
</script>

<style lang="scss">
  @import "consts";

  $arrow-size: 16px;

  .lo-accordion-item-header {
    @include list-item;
    @include h_3;

    height: 48px;
    padding: 0 10px;
    background-color: $white;
    border-top: 1px solid $dl1;
    cursor: pointer;
    color: $t2;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-device-pixel-ratio: 2) {
      border-top: .5px solid $dl1;
    }

    .arrow {
      width: $arrow-size;
      height: $arrow-size;
      background: center center no-repeat url('assets/arrow.svg');
      background-size: contain;

      transition: transform .1s ease-out;

      &.rotate {
        transform: rotate(90deg);
      }
    }
  }

  .lo-accordion-item-content {
    overflow: hidden;
    transition: max-height .5s, opacity .4s;
  }

  .inapp {
    .lo-accordion-item-header {
      @include list-item($ratio);
      @include h_3($ratio);
      height: 48px * $ratio;
      padding: 0 10px * $ratio;
      color: $t2;
    }

    .arrow {
      width: $arrow-size * $ratio;
      height: $arrow-size * $ratio;
    }
  }
</style>
