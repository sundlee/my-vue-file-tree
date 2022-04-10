<template>
  <div id="app">
    <file-browser-tree 
        id="file-tree"
        ref="filetree"
        class="column"
        @nodeClick="nodeClick"
        @nodeDoubleClick="nodeDoubleClick"
        @nodeDrop="nodeDrop">

        <template slot="context-menu">
          <div @click="doDashboard">Dashboard</div>
          <div @click="doCustomers">Customers</div>
        </template>

    </file-browser-tree>
  </div>
</template>

<script>
// const path = require('path');
// const util = require('util');
import FileBrowserTree from 'vue-file-tree';

export default {
  name: 'App',
  components: {
    'file-browser-tree': FileBrowserTree,
  },
  // data() {
  //   return {
  //     nodes: [
  //       {title: 'Item1', isLeaf: true},
  //       {title: 'Item2', isLeaf: true, data: { visible: false }},
  //       {title: 'Folder1'},
  //       {
  //         title: 'Folder2', isExpanded: true, children: [
  //           {title: 'Item3', isLeaf: true},
  //           {title: 'Item4', isLeaf: true, data: { isModified: true }}
  //         ]
  //       }
  //     ],
  //   };
  // },
  // created() {
  //   messageBus.$on('file', (fn, stat) => { 
  //       this.$refs.filetree.addPathToTree(fn, stat, false);
  //   });
  //   messageBus.$on('directory', (fn, stat) => { 
  //       this.$refs.filetree.addPathToTree(fn, stat, true);
  //   });
  // },
  mounted() {
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
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    height: 100vh;
    width: 100vw;
  }

  #file-tree, #file-info-view {
    height: 100%;
    overflow: scroll;
  }
</style>
