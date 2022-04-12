<template>
  <div id="app" class="split">
    <div id="split-0" class="content">
      <vue-file-tree 
        id="file-tree"
        ref="filetree"
        class="column"
        @nodeClick="nodeClick"
        @nodeDoubleClick="nodeDoubleClick"
        @nodeDrop="nodeDrop"
      >
        <template slot="context-menu">
          <div @click="doDashboard">Dashboard</div>
          <div @click="doCustomers">Customers</div>
        </template>
      </vue-file-tree >
    </div>
    <div id="split-1" class="content">
      <ul>
        <li>sizes: {{ sizes }} </li>
        <li>gutterSize: {{ gutterSize }} </li>
        <li>minSize: {{ minSize }} </li>
        <li>maxSize: {{ maxSize }} </li>
        <li>cursor: {{ cursor }} </li>
      </ul>
    </div>
  </div>
</template>

<script>
// const path = require('path');
// const util = require('util');
import Split from 'split.js';
import VueFileTree from 'vue-file-tree';

export default {
  name: 'App',
  components: {
    'vue-file-tree': VueFileTree,
  },
  data() {
    return {
      sizes: [20, 80],
      gutterSize: 10,
      minSize: [150, 300],
      maxSize: [350, Infinity],
      cursor: 'col-resize',
    };
  },
  mounted() {
    let sizes = localStorage.getItem('split-sizes')
    if (sizes) {
      sizes = JSON.parse(sizes);
    } else {
      sizes = [20, 80];
    }
    this.sizes = sizes;

    Split(['#split-0', '#split-1'], {
      sizes,
      gutterSize: this.gutterSize,
      minSize: this.minSize,
      maxSize: this.maxSize,
      cursor: this.cursor,
      onDragEnd: function (sizes) {
        localStorage.setItem('split-sizes', JSON.stringify(sizes))
      },
    });

    this.$refs.filetree.addPathToTree('template\\index.js', {}, false);
    this.$refs.filetree.addPathToTree('template\\log.png', {}, false);
    this.$refs.filetree.addPathToTree('src\\handler.py', {}, false);
    this.$refs.filetree.addPathToTree('package.json', {}, false);
    this.$refs.filetree.addPathToTree('README.md', {}, false);
    this.$refs.filetree.addPathToTree('index.ejs', {}, false);
  },
  methods: {
    nodeClick(event, node) {
      // console.log(`nodeClick ${util.inspect(node)}`);
      console.log('nodeClick: ', node);
    },
    nodeDoubleClick(node) {
      // console.log(`nodeDoubleClick ${util.inspect(node)}`);
      console.log('nodeDoubleClick: ', node);
    },
    nodeDrop(node) {
      // console.log(`nodeDrop ${util.inspect(node)}`);
      console.log('nodeDrop: ', node);
    },
    doCustomers() {
      console.log(`doCustomers`);
      this.$refs.filetree.contextMenuIsVisible = false;
    },
    doDashboard() {
      console.log(`doDashboard`);
      this.$refs.filetree.contextMenuIsVisible = false;
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

/* * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
} */

body {
  font-family: 'Source Sans Pro', sans-serif;
}

/* #wrapper {
  height: 100vh;
  width: 100vw;
} */

#file-tree, #file-info-view {
  height: 100%;
  overflow: scroll;
}

body {
  height: 100vh;
}
.content {
	padding: 8px;
	border: 1px solid #c0c0c0;
	box-shadow: inset 0 1px 2px #e4e4e4;
	background-color: #fff;
	
	height: 500px;
}
.split {
  display: flex;
  flex-direction: row;
}
.gutter {
  background-color: #eee;
  background-repeat: no-repeat;
  background-position: 50%;
}
.gutter.gutter-horizontal {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');
  cursor: col-resize;
}
</style>
