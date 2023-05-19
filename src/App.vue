<template>
    <div>
        <MainView></MainView>
    </div>
</template>

<script setup>
import MainView from "@/views/MainView.vue";

// 这块是这些js没法加载，所以在页面所有元素加载完之后，再加载一次
window.addEventListener('load', function () {
    loadScript("external-assets/github-global-campus/static/1678085104/state.js");
    loadScript("external-assets/github-global-campus/ade34ff.js");
    loadScript("external-assets/github-global-campus/cbd204c.js");
    loadScript("external-assets/github-global-campus/68193df.js");
    loadScript("external-assets/github-global-campus/1ce77db.js");
    loadScript("external-assets/github-global-campus/848bfa7.js");
    loadScript("external-assets/github-global-campus/5c1b329.js");
})

function loadScript(src){
    var script = document.createElement("script");
    script.src = src;
    script.defer = true;
    document.body.appendChild(script);
}
// const locationIsAdmire = location.href.endsWith('admire') || location.href.endsWith('admire/');

//控制台检测
// (function () {
//     var fn = [],
//         timeLimit = 50,
//         open = false;
//     setInterval(loop, 10);
//     return {
//         addListener: function (listenerFn) {
//             fn.push(listenerFn);
//         },
//         cancleListenr: function (listenerFn) {
//             fn = fn.filter(function (v) {
//                 return v !== listenerFn;
//             });
//         },
//     };
//
//     function loop() {
//         var startTime = new Date();
//         debugger;
//         if (new Date() - startTime > timeLimit) {
//             if (!open) {
//                 fn.forEach(function (listenerFn) {
//                     listenerFn.call(null);
//                 });
//             }
//             open = true;
//             window.stop();
//             alert("兄弟,请关闭控制台再访问!");
//             window.location.reload();
//         } else {
//             open = false;
//         }
//     }
// })().addListener(function () {
//     window.location.reload();
// });
//
// // 禁止使用快捷键打开控制台
// const shortcutKeys = {
//     // Windows下的快捷键
//     'F12': 123,
//     'Ctrl+Shift+I': 73,
//     'Ctrl+Shift+J': 74,
//     'Ctrl+Shift+K': 75,
//     'Ctrl+Shift+E': 69,
//     'Ctrl+Shift+C': 67,
//     'Ctrl+Shift+U': 85,
//     // Mac下的快捷键
//     'Option+Command+I': 'I',
//     'Option+Command+J': 'J',
//     'Option+Command+K': 'K',
//     'Command+Option+C': 'C',
//     'Command+Shift+C': 'C',
//     'Command+Shift+F12': 'F12',
// };
//
// function preventShortcutKeys(event) {
//     for (const key in shortcutKeys) {
//         if (event.key === key || (event.key === shortcutKeys[key] && (event.ctrlKey || event.shiftKey || event.altKey || event.metaKey))) {
//             event.preventDefault();
//             return;
//         }
//     }
// }
//
// // 添加快捷键打开f12
// document.addEventListener('keydown', preventShortcutKeys);
// // 禁止右键
// document.addEventListener('contextmenu', function (event) {
//     event.preventDefault();
// });


</script>

<style>

</style>